import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Briefcase, Code, Droplets, GraduationCap, Smartphone, Zap } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { CATEGORIES, PROJECTS, type Category, type Project } from '../data/projects'

const iconFor = (p: Project) => {
  const c = p.categories[0]
  if (c === 'AI') return <Bot />
  if (c === 'Mobile') return <Smartphone />
  if (c === 'Education') return <GraduationCap />
  if (c === 'Business') return <Briefcase />
  if (c === 'Environment') return <Droplets />
  if (c === 'Mobility') return <Zap />
  return <Code />
}

export default function Projects() {
  const [filter, setFilter] = useState<Category | 'All'>('All')
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.categories.includes(filter))
  return (
    <section id="projects" className="section bg-violet-50/50">
      <div className="container-x">
        <SectionHeader eyebrow="WEBOCLYPSE team projects" title={<>Our Team Projects: <span className="grad-text">Build Something Real.</span></>} intro={`${PROJECTS.length} real projects built by the WEBOCLYPSE team — from AI applications to web platforms and mobile tools.`} />
        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {(['All', ...CATEGORIES] as const).map((c) => (
            <button key={c} onClick={() => setFilter(c)} aria-pressed={filter === c} className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${filter === c ? 'border-violet-600 bg-violet-600 text-white' : 'border-violet-200 bg-white text-violet-700 hover:bg-violet-50'}`}>{c}</button>
          ))}
        </div>
        <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li key={p.name} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-violet-100 via-violet-50 to-white">
                    <div className="grid-lines absolute inset-0 opacity-70" aria-hidden="true" />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-card transition group-hover:scale-105 [&>svg]:h-7 [&>svg]:w-7">{iconFor(p)}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-1.5">
                      {p.categories.map((c) => <span key={c} className="rounded-full bg-violet-100 px-2.5 py-0.5 text-[11px] font-bold text-violet-700">{c}</span>)}
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">{p.description}</p>
                    {p.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => <span key={t} className="rounded-md border border-violet-100 bg-white px-2 py-0.5 text-[11px] font-semibold text-ink/60">{t}</span>)}
                      </div>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  )
}
