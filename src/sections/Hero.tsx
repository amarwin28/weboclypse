import { motion } from 'framer-motion'
import { ArrowRight, Bot, Boxes, Crown } from 'lucide-react'
import { HIGHLIGHTS } from '../data/site'
import { OfficialLogo } from '../components/Logo'

const chip = 'absolute flex items-center gap-2 rounded-2xl border border-violet-100 bg-white px-3.5 py-2.5 text-xs font-bold text-violet-800 shadow-card'

export default function Hero() {
  return (
    <section id="home" className="bg-wash relative overflow-hidden pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <span className="eyebrow">Future-ready skills for students</span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-5xl xl:text-[3.2rem]">
            Don't Wait For College <br className="hidden sm:block" />
            To Start <span className="grad-text">Building</span> <br className="hidden sm:block" />
            <span className="text-violet-600">Your Future.</span>
          </h1>
          <p className="lead mt-6 max-w-xl">
            WEBOCLYPSE helps 10th, 12th and college students build practical AI, technology, project-building and professional skills before they enter the real world.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#programs" className="btn-primary">Explore Programs <ArrowRight className="h-4 w-4" /></a>
            <a href="#contact" className="btn-outline">Join WEBOCLYPSE</a>
          </div>
          <ul className="mt-10 grid max-w-xl grid-cols-2 gap-5 sm:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <li key={h.top} className="border-l-2 border-gold-400 pl-3 text-xs leading-snug">
                <span className="block font-bold text-ink">{h.top}</span>
                <span className="text-ink/60">{h.bottom}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none">
          <div className="relative aspect-square w-full max-w-[460px] rounded-[2.5rem] border border-violet-100 shadow-lift">
            <OfficialLogo className="h-full w-full rounded-[2.5rem] object-cover" />
            <div aria-hidden="true" className={`${chip} drift -left-2 top-12 sm:-left-6`}><Bot className="h-4 w-4 text-violet-600" />AI Skills</div>
            <div aria-hidden="true" className={`${chip} drift -right-2 top-6 sm:-right-5`} style={{ animationDelay: '1s' }}><Crown className="h-4 w-4 text-gold-500" />Leadership</div>
            <div aria-hidden="true" className={`${chip} drift bottom-3 left-3 sm:-left-8 sm:bottom-14`} style={{ animationDelay: '2s' }}><Boxes className="h-4 w-4 text-violet-600" />Real Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
