import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useJoinModal } from '../context/JoinModalContext'

const students = [
  'Learn Vibe Coding',
  'Build practical projects',
  'Create GitHub portfolios',
  'Improve LinkedIn identity',
  'Participate in hackathons',
  'Participate in symposiums',
  'Develop clear communication',
  'Develop leadership skills',
  'Build genuine confidence',
]

const parents = [
  {
    title: 'Technology Exposure',
    desc: 'Early, structured exposure to modern AI and software development tools.',
  },
  {
    title: 'Tangible Project Experience',
    desc: 'Students create real working websites and applications they can demonstrate.',
  },
  {
    title: 'Career & Professional Awareness',
    desc: 'Understanding internships, industry roles, and portfolios before college.',
  },
  {
    title: 'Communication & Poise',
    desc: 'Regular presentation and pitching practice to build lifelong speaking confidence.',
  },
  {
    title: 'Opportunity Mentorship',
    desc: 'Direct guidance on college symposiums, hackathons, and student competitions.',
  },
  {
    title: 'Guided Learning',
    desc: 'No exaggerated claims — just consistent, hands-on practice led by trainers.',
  },
]

const schools = [
  'Interactive AI & Prompting Workshops',
  'Hands-on Vibe Coding Programs',
  'Project-Based Experiential Learning',
  'GitHub Portfolio Bootcamps',
  'LinkedIn Personal Branding Sessions',
  'Hackathon & Contest Awareness',
  'Inter-College Symposium Guidance',
  'Student Leadership & Public Speaking',
]

export function ForStudents() {
  const { openJoinModal } = useJoinModal()

  return (
    <section id="for-students" className="section">
      <div className="container-x">
        <Reveal>
          {/* Main banner retained, but nested box cards removed from the checklist */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet-900 via-violet-800 to-violet-700 p-8 text-white sm:p-12 lg:p-16">
            <div className="grid-lines absolute inset-0 opacity-15" aria-hidden="true" />
            <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <span className="inline-flex rounded-full bg-white/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300">
                  For students · 10th, 12th & college
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                  Start Building Before College.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                  Build the skills, confidence and projects that give you a commanding head start
                  before your first day on a college campus.
                </p>
                <button
                  type="button"
                  onClick={() => openJoinModal({ audience: 'student' })}
                  className="btn-gold mt-8"
                >
                  Join WEBOCLYPSE <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              {/* Clean open typographic checklist (Removed 9 nested rounded-xl boxes) */}
              <div className="border-t border-white/15 pt-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                  What you will master:
                </span>
                <ul className="mt-4 grid gap-3.5 sm:grid-cols-2">
                  {students.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm font-semibold text-white/90">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/20 text-gold-300">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ForParents() {
  const { openJoinModal } = useJoinModal()

  return (
    <section className="section bg-violet-50/50 !py-20 sm:!py-24">
      <div className="container-x">
        {/* Open editorial split layout instead of floating shadow pills */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">For parents</span>
              <h2 className="h2 mt-4">More Than Coding.</h2>
              <p className="lead mt-4">
                WEBOCLYPSE focuses on practical development. Students learn by building and
                presenting real work, with trainers guiding each step.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                We make no exaggerated promises — just a clear, hands-on path to skills students can
                show, evaluate and build a visible future with.
              </p>
              <button
                type="button"
                onClick={() => openJoinModal({ audience: 'parent' })}
                className="btn-outline mt-8"
              >
                Inquire For Your Child <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>

          {/* Open clean features grid with subtle dividers */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="grid gap-6 sm:grid-cols-2">
                {parents.map((p) => (
                  <div key={p.title} className="border-l-2 border-violet-300 pl-4 py-1">
                    <h3 className="font-display text-base font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-ink/65 sm:text-sm">{p.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export function ForSchools() {
  const { openJoinModal } = useJoinModal()

  return (
    <section id="for-schools" className="section">
      <div className="container-x">
        {/* Open layout: Removed bulky outer container card and 8 nested inner card boxes */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">For schools & colleges</span>
              <h2 className="h2 mt-4">Bring Future-Ready Skills To Your Institution.</h2>
              <p className="lead mt-4">
                WEBOCLYPSE collaborates with schools and colleges to bring hands-on technology,
                AI workshops, and leadership learning directly to students.
              </p>
              <p className="mt-3 text-sm text-ink/70">
                Partner with us to organize college-level symposium prep, faculty workshops, and
                student builder cohorts tailored to your campus curriculum.
              </p>
              <button
                type="button"
                onClick={() => openJoinModal({ audience: 'school' })}
                className="btn-primary mt-8"
              >
                Partner With Us <ArrowRight className="h-4 w-4" />
              </button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border-t border-violet-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Institutional Collaborations
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                  Programs we deliver on your campus:
                </h3>

                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {schools.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-sm font-semibold text-ink/80">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      {s}
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
