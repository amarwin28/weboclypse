import { BookOpen, Hammer, Presentation, Users, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const steps = [
  { icon: <BookOpen />, t: 'LEARN', d: 'Understand modern technology, concepts and frameworks.' },
  { icon: <Hammer />, t: 'BUILD', d: 'Turn knowledge and ideas into practical, working projects.' },
  { icon: <Presentation />, t: 'DEMONSTRATE', d: 'Show what you can actually do through real-world work.' },
  { icon: <Users />, t: 'LEAD', d: 'Develop communication, teamwork and leadership confidence.' },
  { icon: <TrendingUp />, t: 'GROW', d: 'Build visible proof of skill, portfolio and career readiness.' },
]

const path = ['Student', 'Learner', 'Builder', 'Demonstrator', 'Participant', 'Professional']

export default function Method() {
  return (
    <section id="how-it-works" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="The WEBOCLYPSE method"
          title={
            <>
              Learn → Build → Demonstrate → <span className="grad-text">Lead → Grow</span>
            </>
          }
          intro="A clear journey from learning to real-world opportunities. A trainer guides, you interact, experiment, build, present and participate."
        />

        {/* Clean Horizontal Timeline Layout (No cards) */}
        <div className="relative mt-16">
          {/* Desktop Connecting Line */}
          <div
            className="absolute left-6 right-6 top-8 hidden h-0.5 bg-gradient-to-r from-violet-300 via-violet-500 to-gold-400 lg:block"
            aria-hidden="true"
          />

          {/* Mobile Vertical Connecting Line */}
          <div
            className="absolute bottom-8 left-6 top-8 w-0.5 bg-gradient-to-b from-violet-400 via-violet-500 to-gold-400 lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                {/* Node Indicator with Icon */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-violet-300 bg-white text-violet-700 shadow-sm transition duration-300 hover:border-violet-600 hover:text-violet-600 [&>svg]:h-6 [&>svg]:w-6">
                  {s.icon}
                </div>

                <div className="pt-1 lg:pt-3">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-gold-500">
                    Phase 0{i + 1}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-extrabold tracking-wide text-ink">
                    {s.t}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink/65 sm:text-sm">
                    {s.d}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Transformation Section: Simplified without unnecessary boxed elements */}
        <div className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 p-8 text-white sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-300">
                The Student Transformation
              </span>
              <h3 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">
                From passive learning to industry proof.
              </h3>
            </div>

            {/* Streamlined progressive journey without bulky button boxes */}
            <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base">
              {path.map((p, i) => (
                <li key={p} className="flex items-center gap-3 font-display font-semibold">
                  <span
                    className={
                      i === path.length - 1
                        ? 'rounded-lg bg-gold-400 px-3 py-1 font-bold text-ink shadow-sm'
                        : 'text-white/85'
                    }
                  >
                    {p}
                  </span>
                  {i < path.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-gold-300/80" aria-hidden="true" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
