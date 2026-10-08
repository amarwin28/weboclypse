import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { WhatsappIcon } from './BrandIcons'
import { CONTACT } from '../data/site'

const SHOW_AFTER = 450

const base =
  'fixed z-40 flex items-center justify-center rounded-full shadow-lift transition duration-200 hover:-translate-y-0.5 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:transform-none'

export default function FloatingActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <>
      {/* WhatsApp: right 16px / bottom 80px on mobile, right 24px / bottom 90px from sm up */}
      <a
        href={CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WEBOCLYPSE on WhatsApp"
        title="Chat with WEBOCLYPSE"
        className={`${base} group bottom-20 right-4 h-11 w-11 bg-[#25D366] text-white hover:bg-[#1ebe5b] sm:bottom-[90px] sm:right-6 sm:h-12 sm:w-12`}
      >
        <WhatsappIcon className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-card transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:block" aria-hidden="true">
          Chat with WEBOCLYPSE
        </span>
      </a>

      {/* Back to top: right 16px / bottom 16px on mobile, right 24px / bottom 24px from sm up */}
      <AnimatePresence>
        {visible && (
          <motion.button
            key="back-to-top"
            type="button"
            onClick={toTop}
            aria-label="Back to top"
            title="Back to top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            className={`${base} bottom-4 right-4 h-11 w-11 border border-violet-200 bg-white text-violet-700 hover:bg-violet-50 sm:bottom-6 sm:right-6 sm:h-12 sm:w-12`}
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
