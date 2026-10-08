import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function shouldShow(): boolean {
  return true
}

export default function Splash() {
  const [show, setShow] = useState<boolean>(shouldShow)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const finish = () => {
    setShow(false)
  }

  useEffect(() => {
    if (!show) return
    document.documentElement.style.overflow = 'hidden'
    return () => { document.documentElement.style.overflow = '' }
  }, [show])

  useEffect(() => {
    if (!show) return

    const video = videoRef.current
    if (!video) return

    const tryPlay = async () => {
      try {
        video.muted = false
        await video.play()
      } catch {
        // Browsers can block autoplay with sound. Let the visitor start it with one tap.
      }
    }

    if (video.readyState >= 2) {
      void tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
      return () => video.removeEventListener('canplay', tryPlay)
    }
  }, [show])

 
  if (!show) return null

  return (
    <AnimatePresence>
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
          autoPlay
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
    </AnimatePresence>
  )
}
