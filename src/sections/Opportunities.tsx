import { Check, Compass, Trophy } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const learn = [
  'What is a symposium?',
  'What is a hackathon?',
  'How to discover opportunities',
  'How to register & qualify',
  'How to prepare effectively',
  'How to build a working prototype',
  'How to present to judges',
  'How to collaborate in a team',
  'How to communicate professionally',
  'How to participate with confidence',
]

export default function Opportunities() {
  return (
    <section className="section bg-violet-50/50">
      <div className="container-x">
        {/* Elegant Split Layout without heavy card wrappers */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading + Icon & Text Features */}
          <div className="lg:col-span-6">
            <SectionHeader
              eyebrow="What makes us different"
              title={
                <>
                  Hackathons & <span className="grad-text">Symposiums</span>
                </>
              }
              intro="Many students don't even know these opportunities exist. We teach you what they are, how to find them and how to walk in ready — one of the biggest differences WEBOCLYPSE makes."
            />

            <Reveal>
              <div className="mt-8 space-y-6">
                <div className="border-l-2 border-violet-600 pl-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-100 text-violet-700">
                      <Trophy className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">Hackathons</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    Learn to ideate, build, and pitch a functioning product in high-energy sprint
                    environments alongside peers and industry mentors.
                  </p>
                </div>

                <div className="border-l-2 border-gold-400 pl-5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-300/40 text-ink">
                      <Compass className="h-4 w-4" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">Symposiums</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    Discover inter-college technical events, prepare paper presentations, and
                    compete with poise and communication clarity.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Open Two-Column Checklist (Replaced bulky rounded-3xl card) */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="border-t border-violet-200/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Comprehensive Preparation
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                  Skills you take to every competition:
                </h3>

                <ul className="mt-6 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                  {learn.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-sm font-semibold text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
