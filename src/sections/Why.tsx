import { ArrowRight, Check, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const oldSteps = ['Learn', 'Write exams', 'Finish semester', 'Forget']
const nextSteps = ['Learn', 'Build', 'Demonstrate', 'Participate', 'Grow']

export default function Why() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Why WEBOCLYPSE"
          title={
            <>
              Learning Isn't Enough. <span className="grad-text">Building Is.</span>
            </>
          }
          intro="Don't just be a student. Become a builder. Most students learn to pass the semester — few learn to show what they can actually do."
        />

        {/* Clean open comparison layout without bulky cards */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Traditional Learning - Clean muted typography layout */}
          <Reveal>
            <div className="relative border-l-2 border-ink/15 pl-6 sm:pl-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/50">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink/10 text-ink/60">
                  <X className="h-3.5 w-3.5" />
                </span>
                Traditional learning
              </div>

              <h3 className="mt-3 font-display text-xl font-bold text-ink/80 sm:text-2xl">
                The Passive Cycle
              </h3>

              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {oldSteps.map((s, i) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="rounded-lg bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/60">
                      {s}
                    </span>
                    {i < oldSteps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-ink/30" />
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-relaxed text-ink/60 sm:text-base">
                Knowledge stays on paper. Memorize theories for an exam, clear the semester, and
                leave with little proof of skill and zero exposure to real industry opportunities.
              </p>
            </div>
          </Reveal>

          {/* The WEBOCLYPSE Way - Open layout with vibrant accent */}
          <Reveal delay={0.1}>
            <div className="relative border-l-2 border-violet-600 pl-6 sm:pl-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </span>
                The WEBOCLYPSE way
              </div>

              <h3 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">
                The Builder's Journey
              </h3>

              <ol className="mt-6 flex flex-wrap items-center gap-2">
                {nextSteps.map((s, i) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="rounded-lg bg-violet-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                      {s}
                    </span>
                    {i < nextSteps.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 text-gold-500" />
                    )}
                  </li>
                ))}
              </ol>

              <p className="mt-6 text-sm leading-relaxed text-ink/75 sm:text-base">
                Sessions are interactive. A dedicated trainer guides you while you experiment, build
                and present — so you can confidently tell recruiters and mentors,{' '}
                <strong className="text-violet-900">"I built this"</strong>, not "I copied this."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
