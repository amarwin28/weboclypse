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
        <SectionHeader
          eyebrow="WEBOCLYPSE team projects"
          title={
            <>
              Our Team Projects: <span className="grad-text">Build Something Real.</span>
            </>
          }
          intro={`${PROJECTS.length} real projects built by the WEBOCLYPSE team — from AI applications to web platforms and mobile tools.`}
        />

        {/* Category filter pills */}
        <div
          role="group"
          aria-label="Filter projects by category"
          className="mb-8 flex flex-wrap gap-2"
        >
          {(['All', ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition ${
                filter === c
                  ? 'bg-violet-700 text-white shadow-sm'
                  : 'border border-violet-200 bg-white text-ink/75 hover:bg-violet-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Refined Project Showcase Cards */}
        <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.li
                key={p.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violet-100 bg-white transition duration-300 hover:border-violet-300 hover:shadow-card">
                  {/* Clean project visual strip */}
                  <div className="flex h-24 items-center justify-between border-b border-violet-100/60 bg-violet-50/50 px-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700 shadow-sm transition duration-300 group-hover:bg-violet-600 group-hover:text-white [&>svg]:h-5 [&>svg]:w-5">
                      {iconFor(p)}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {p.categories.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-violet-100/80 px-2.5 py-0.5 text-[10px] font-bold text-violet-800"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                      {p.name}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-ink/65 sm:text-sm">
                      {p.description}
                    </p>

                    {p.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-violet-50 pt-3">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md bg-violet-50/60 px-2 py-0.5 text-[11px] font-semibold text-ink/60"
                          >
                            #{t}
                          </span>
                        ))}
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
