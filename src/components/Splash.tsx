import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// If the video never starts (load error, stalled network) close the splash after this long.
const START_TIMEOUT_MS = 8000
// If the browser blocks audible autoplay, wait this long for a first user
// interaction (which lets sound play) before moving on so nobody is stuck.
const BLOCKED_GRACE_MS = 4000

interface SplashProps {
  /** Called once the splash has fully faded out and been removed. */
  onDone?: () => void
}

export default function Splash({ onDone }: SplashProps) {
  // Always true on a fresh page load: nothing is persisted between visits.
  const [show, setShow] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const startedRef = useRef(false) // guards against duplicate play attempts (Strict Mode, canplay)

  const finish = useCallback(() => setShow(false), [])

  // Lock page scroll while the splash is visible.
  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = '' }
  }, [show])

  useEffect(() => {
    if (!show) return
    const video = videoRef.current
    if (!video) return

    // The soundtrack is never muted by this code.
    video.defaultMuted = false
    video.muted = false

    let timer = window.setTimeout(finish, START_TIMEOUT_MS)
    const gestureEvents = ['pointerdown', 'touchstart', 'keydown'] as const

    const clearTimer = () => window.clearTimeout(timer)
    const removeGestureRetry = () => gestureEvents.forEach((e) => window.removeEventListener(e, retryOnGesture))

    // Browser blocked audible autoplay: the video stays unmuted and waits.
    // The first user interaction anywhere on the page unlocks sound, so retry then.
    function retryOnGesture() {
      removeGestureRetry()
      video!.muted = false
      void video!.play().catch(() => undefined)
    }

    const onPlaying = () => {
      clearTimer()
      removeGestureRetry()
    }

    const start = async () => {
      if (startedRef.current) return
      startedRef.current = true
      video.currentTime = 0
      video.muted = false
      try {
        await video.play()
      } catch {
        clearTimer()
        timer = window.setTimeout(finish, BLOCKED_GRACE_MS)
        gestureEvents.forEach((e) => window.addEventListener(e, retryOnGesture, { once: true }))
      }
    }

    // A reload can hit a transient media error (e.g. a cached partial response).
    // Retry loading once from the start before giving up, and log the reason.
    let retried = false
    const onVideoError = () => {
      console.warn('[Splash] video error', video.error?.code, video.error?.message)
      if (retried) return finish()
      retried = true
      startedRef.current = false
      video.load()
      video.addEventListener('canplay', start, { once: true })
    }

    video.addEventListener('error', onVideoError)
    video.addEventListener('playing', onPlaying)
    if (video.readyState >= 2) {
      void start()
    } else {
      video.addEventListener('canplay', start, { once: true })
    }

    return () => {
      clearTimer()
      removeGestureRetry()
      video.removeEventListener('canplay', start)
      video.removeEventListener('playing', onPlaying)
      video.removeEventListener('error', onVideoError)
    }
  }, [show, finish])

  // Back/forward restores from the browser's page cache keep old React state
  // (splash already closed). A restored page is not a fresh load, so reload it.
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => { if (e.persisted) window.location.reload() }
    window.addEventListener('pageshow', onPageShow)
    return () => window.removeEventListener('pageshow', onPageShow)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          key="splash-video"
          role="dialog"
          aria-label="WEBOCLYPSE introduction"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            src="/splash/weboclypse-splash.mp4"
            playsInline
            preload="auto"
            onEnded={finish}
            aria-label="WEBOCLYPSE logo introduction"
          />
          <button
            type="button"
            onClick={finish}
            className="absolute right-4 top-4 rounded-full bg-black/35 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition hover:bg-black/55 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Skip introduction"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
