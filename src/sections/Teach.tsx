import { Bot, Code, Users, Boxes, Languages } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const items = [
  { icon: <Bot />, title: 'AI & Prompt Engineering', text: 'Learn to work with modern AI tools effectively and use AI productively.' },
  { icon: <Code />, title: 'Vibe Coding', text: 'Turn ideas into real websites, applications and digital products with modern AI-assisted development workflows.' },
  { icon: <GithubIcon />, title: 'GitHub & Projects', text: 'Build a visible technical portfolio: repositories, commits, README files, project organization and presenting your work.' },
  { icon: <LinkedinIcon />, title: 'LinkedIn & Personal Branding', text: 'Create a professional online identity: profile improvement, project presentation, achievements and networking.' },
  { icon: <Users />, title: 'Leadership & Communication', text: 'Develop confidence, communication, teamwork, leadership and presentation skills.' },
  { icon: <Boxes />, title: 'Real-World Project Building', text: 'Apply what you learn through actual projects instead of only theory.' },
]

export default function Teach() {
  return (
    <section id="programs" className="section bg-violet-50/50">
      <div className="container-x">
        <SectionHeader eyebrow="Skills for the world beyond school" title="What We Teach" intro="Practical skills. Real projects. Future-ready students." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.08}>
              <article className="card group h-full p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white [&>svg]:h-6 [&>svg]:w-6">{it.icon}</span>
                <h3 className="mt-5 font-display text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{it.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-gold-300/60 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-7">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-300/40 text-ink"><Languages className="h-6 w-6" /></span>
            <div>
              <h3 className="font-display text-lg font-bold">Learn in English, Tamil or Hindi</h3>
              <p className="text-sm text-ink/65">Language should never become a barrier to learning technology. WEBOCLYPSE provides learning options in <strong>English</strong>, <strong>Tamil</strong> and <strong>Hindi</strong>.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
