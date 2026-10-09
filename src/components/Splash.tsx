import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// If the video never starts (error, stalled network, blocked playback) we
// close the splash after this long so the visitor is never stuck.
const START_TIMEOUT_MS = 8000

interface SplashProps {
  /** Called once the splash has fully faded out and been removed. */
  onDone?: () => void
}

export default function Splash({ onDone }: SplashProps) {
  // Always true on a fresh page load: nothing is persisted between visits.
  const [show, setShow] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const startedRef = useRef(false) // guards against duplicate play attempts (Strict Mode, canplay + autoplay)

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

    const start = async () => {
      if (startedRef.current) return
      startedRef.current = true
      video.currentTime = 0
      try {
        // 1) Try with the video's original audio.
        video.muted = false
        await video.play()
      } catch {
        try {
          // 2) Browser blocked sound autoplay: retry muted, automatically.
          video.muted = true
          await video.play()
        } catch {
          // 3) Even muted playback failed: don't leave the visitor stuck.
          finish()
        }
      }
    }

    const onPlaying = () => window.clearTimeout(timer)
    const timer = window.setTimeout(finish, START_TIMEOUT_MS)
    video.addEventListener('playing', onPlaying, { once: true })

    if (video.readyState >= 2) {
      void start()
    } else {
      video.addEventListener('canplay', start, { once: true })
    }

    return () => {
      window.clearTimeout(timer)
      video.removeEventListener('canplay', start)
      video.removeEventListener('playing', onPlaying)
    }
  }, [show, finish])

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
            onError={finish}
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
