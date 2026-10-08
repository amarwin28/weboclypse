import { Check } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const gh = ['Repositories', 'Commits', 'README files', 'Project documentation', 'Project organization', 'Portfolio development', 'Showcasing technical work']
const li = ['Profile creation', 'Profile optimization', 'Project descriptions', 'Achievements', 'Professional posts', 'Networking', 'Personal branding']

function Panel({ icon, title, items, delay }: { icon: React.ReactNode; title: string; items: string[]; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="card h-full p-7 sm:p-8">
        <div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-white">{icon}</span><h3 className="font-display text-xl font-bold">{title}</h3></div>
        <ul className="mt-6 space-y-3">
          {items.map((i) => <li key={i} className="flex items-center gap-3 text-sm font-semibold text-ink/80"><Check className="h-4 w-4 text-violet-600" strokeWidth={3} />{i}</li>)}
        </ul>
      </div>
    </Reveal>
  )
}

export default function Identity() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Professional identity" title={<>Don't just be a student. <span className="grad-text">Build a professional identity.</span></>} intro="Your GitHub and LinkedIn are often the first thing people see. We help you make them count — with real work behind them." />
        <div className="grid gap-6 md:grid-cols-2">
          <Panel icon={<GithubIcon className="h-6 w-6" />} title="GitHub" items={gh} delay={0} />
          <Panel icon={<LinkedinIcon className="h-6 w-6" />} title="LinkedIn" items={li} delay={0.1} />
        </div>
      </div>
    </section>
  )
}
