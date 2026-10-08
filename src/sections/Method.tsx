import { BookOpen, Hammer, Presentation, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const steps = [
  { icon: <BookOpen />, t: 'LEARN', d: 'Understand modern technology and concepts.' },
  { icon: <Hammer />, t: 'BUILD', d: 'Turn knowledge and ideas into practical projects.' },
  { icon: <Presentation />, t: 'DEMONSTRATE', d: 'Show what you can actually do through real work.' },
  { icon: <Users />, t: 'LEAD', d: 'Develop communication, teamwork and leadership.' },
  { icon: <TrendingUp />, t: 'GROW', d: 'Build confidence, portfolio and career readiness.' },
]
const path = ['Student', 'Learner', 'Builder', 'Demonstrator', 'Participant', 'Professional']

export default function Method() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-x">
        <SectionHeader eyebrow="The WEBOCLYPSE method" title={<>Learn → Build → Demonstrate → <span className="grad-text">Lead → Grow</span></>} intro="A clear journey from learning to real-world opportunities. A trainer guides, you interact, experiment, build, present and participate." />
        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-7 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-violet-300 via-violet-400 to-gold-400 max-lg:block" aria-hidden="true" />
          <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-gradient-to-r from-violet-300 via-violet-500 to-gold-400 lg:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <motion.li key={s.t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5, delay: i * 0.12 }} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-violet-200 bg-white text-violet-700 shadow-card [&>svg]:h-6 [&>svg]:w-6">{s.icon}</span>
              <div>
                <p className="text-xs font-bold text-gold-500">0{i + 1}</p>
                <h3 className="font-display text-base font-extrabold tracking-wide">{s.t}</h3>
                <p className="mt-1 text-sm text-ink/65">{s.d}</p>
              </div>
            </motion.li>
          ))}
        </ol>
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-violet-800 to-violet-600 p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold-300">The transformation</p>
          <ol className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-3">
            {path.map((p, i) => (
              <li key={p} className="flex items-center gap-2 font-display text-sm font-bold sm:text-base">
                <span className={i === path.length - 1 ? 'rounded-lg bg-gold-400 px-3 py-1 text-ink' : 'rounded-lg bg-white/10 px-3 py-1'}>{p}</span>
                {i < path.length - 1 && <span aria-hidden="true" className="text-gold-300">→</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
