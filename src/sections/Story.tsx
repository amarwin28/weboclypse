import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const gaps = [
  'Awareness',
  'Practical exposure',
  'Courage & confidence',
  'Knowledge of opportunities',
  'Real project experience',
  'Hackathons & symposiums',
  'Professional branding',
]

const struggles = [
  'Coding from scratch',
  'Using AI productively',
  'Project building & architecture',
  'Finding genuine opportunities',
  'Hackathons & symposiums',
  'Public speaking confidence',
  'Building a professional identity',
]

export default function Story() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our story"
          title={
            <>
              How WEBOCLYPSE <span className="grad-text">Started</span>
            </>
          }
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Narrative Storytelling */}
          <div className="space-y-6 text-base leading-relaxed text-ink/75 lg:col-span-7 sm:text-lg">
            <Reveal>
              <p>
                A group of friends once paid around <strong className="text-ink">₹14,000 each</strong>{' '}
                for conventional coding training. It wasn't completely useless — but it mostly helped
                with memorizing for semester-related exams. We realized we were missing something much
                bigger.
              </p>
            </Reveal>

            <Reveal>
              <p>
                In our second semester, we stepped outside the classroom and asked:{' '}
                <em>What is a symposium? What is a hackathon? What opportunities are actually available to students?</em>{' '}
                That single decision completely changed our trajectory. We gained perspective, ideas,
                courage, industry exposure and — most importantly — real teamwork and product-building
                experience.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Soon we were building real web platforms and tools, for ourselves and for client
                requests. Then we noticed our peers and junior classmates were grappling with the exact
                same roadblocks we had faced.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="border-l-4 border-gold-400 bg-violet-50/70 py-4 pl-5 pr-4 font-display text-lg font-bold text-violet-900 sm:text-xl">
                "If we struggled because nobody showed us the way, why can't we show the next student?"
              </blockquote>
            </Reveal>

            <Reveal>
              <p>
                That conviction became <strong>WEBOCLYPSE</strong> — created to empower students to
                discover opportunities sooner, build practical skills faster, and graduate as confident,
                capable builders.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Open Editorial Breakdown (Cards removed) */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border-t border-violet-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 space-y-10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    The Blindspots
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    What we were missing initially:
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {gaps.map((g) => (
                      <span
                        key={g}
                        className="rounded-full bg-violet-100/70 px-3 py-1 text-xs font-bold text-violet-800"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-violet-100/80 pt-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-500">
                    Common Friction
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold text-ink">
                    What our classmates struggled with:
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {struggles.map((g) => (
                      <span
                        key={g}
                        className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-bold text-ink/75"
                      >
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
