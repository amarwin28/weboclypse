import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import { NAV } from '../data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1))
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-violet-100 bg-white/90 py-2.5 shadow-sm backdrop-blur' : 'bg-transparent py-4'}`}>
      <div className="container-x flex items-center justify-between">
        <a href="#home" aria-label="WEBOCLYPSE home"><Logo /></a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={`relative text-sm font-semibold transition hover:text-violet-700 ${active === n.href ? 'text-violet-700' : 'text-ink/75'}`}>
              {n.label}
              {active === n.href && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-violet-600" />}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn-gold hidden !px-5 !py-2.5 lg:inline-flex">Get Started <ArrowRight className="h-4 w-4" /></a>
        <button className="rounded-lg p-2 text-violet-800 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden lg:hidden">
            <div className="container-x flex flex-col gap-1 pb-5 pt-3">
              {NAV.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-base font-semibold ${active === n.href ? 'bg-violet-50 text-violet-700' : 'text-ink/80'}`}>{n.label}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-gold mt-2">Get Started <ArrowRight className="h-4 w-4" /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
