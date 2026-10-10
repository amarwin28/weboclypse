import { Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const gh = [
  'Repositories & structure',
  'Meaningful commits & history',
  'Professional README documentation',
  'Project organization & clean architecture',
  'Interactive live demos & deployment',
  'Comprehensive portfolio development',
  'Showcasing technical work with confidence',
]

const li = [
  'Headline & summary optimization',
  'Project case-study presentation',
  'Certificates & milestone validation',
  'Strategic networking with founders & developers',
  'Crafting high-engagement technical posts',
  'Building an authentic personal brand',
  'Turning profile views into real opportunities',
]

export default function Identity() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader
          eyebrow="Professional identity"
          title={
            <>
              Don't just be a student.{' '}
              <span className="grad-text">Build a professional identity.</span>
            </>
          }
          intro="Your GitHub and LinkedIn are often the first thing people see. We help you make them count — with real work behind them."
        />

        {/* Clean two-column layout with minimal separator (Cards removed) */}
        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-0">
          {/* GitHub Column */}
          <Reveal>
            <div className="md:pr-10 lg:pr-14">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white shadow-sm">
                  <GithubIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">GitHub</h3>
                  <p className="text-xs font-semibold text-ink/60">Your living engineering proof</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Move past empty commits and tutorials. Build public repositories that demonstrate
                problem-solving ability, clean documentation, and real implementation skills.
              </p>

              <ul className="mt-6 space-y-3">
                {gh.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* LinkedIn Column with Minimal Separator */}
          <Reveal delay={0.1}>
            <div className="border-t border-violet-100 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 lg:pl-14">
              <div className="flex items-center gap-3.5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a66c2] text-white shadow-sm">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">LinkedIn</h3>
                  <p className="text-xs font-semibold text-ink/60">Your professional voice & reach</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-ink/70">
                Transform your profile from a student resume into a dynamic creator hub. Learn to
                share learnings, connect with mentors, and attract internship discussions.
              </p>

              <ul className="mt-6 space-y-3">
                {li.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[#0a66c2]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
