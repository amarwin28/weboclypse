import { Bot, Code, Users, Boxes, Languages } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const items = [
  {
    icon: <Bot />,
    title: 'AI & Prompt Engineering',
    text: 'Learn to work with modern AI tools effectively and use AI productively to accelerate thinking and workflow.',
  },
  {
    icon: <Code />,
    title: 'Vibe Coding',
    text: 'Turn ideas into real websites, applications and digital products with modern AI-assisted development workflows.',
  },
  {
    icon: <GithubIcon />,
    title: 'GitHub & Projects',
    text: 'Build a visible technical portfolio: repositories, commits, README files, project organization and presenting your work.',
  },
  {
    icon: <LinkedinIcon />,
    title: 'LinkedIn & Personal Branding',
    text: 'Create a professional online identity: profile improvement, project presentation, achievements and networking.',
  },
  {
    icon: <Users />,
    title: 'Leadership & Communication',
    text: 'Develop confidence, communication, teamwork, leadership and presentation skills.',
  },
  {
    icon: <Boxes />,
    title: 'Real-World Project Building',
    text: 'Apply what you learn through actual projects instead of only theory.',
  },
]

export default function Teach() {
  return (
    <section id="programs" className="section bg-violet-50/50">
      <div className="container-x">
        <SectionHeader
          eyebrow="Skills for the world beyond school"
          title="What We Teach"
          intro="Practical skills. Real projects. Future-ready students."
        />

        {/* Retain cards for individual programs for clear grouping as requested */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <article className="group h-full rounded-2xl border border-violet-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-700 transition duration-300 group-hover:bg-violet-600 group-hover:text-white [&>svg]:h-6 [&>svg]:w-6">
                  {it.icon}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Multilingual feature: Open layout with subtle dividers instead of a bulky box card */}
        <Reveal className="mt-12">
          <div className="border-t border-violet-200/60 pt-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400 text-ink shadow-sm">
                <Languages className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                  Learn in English, Tamil or Hindi
                </h3>
                <p className="mt-0.5 text-xs text-ink/65 sm:text-sm">
                  Language should never become a barrier to learning technology. WEBOCLYPSE provides
                  cohorts in <strong>English</strong>, <strong>Tamil</strong>, and <strong>Hindi</strong>.
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-0">
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-bold text-violet-800">
                English
              </span>
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-bold text-violet-800">
                Tamil (தமிழ்)
              </span>
              <span className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-bold text-violet-800">
                Hindi (हिंदी)
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
