import { Check, Compass, Trophy } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const learn = [
  'What is a symposium?', 'What is a hackathon?', 'How to discover opportunities', 'How to register',
  'How to prepare', 'How to build a project', 'How to present a project', 'How to work in a team',
  'How to communicate professionally', 'How to participate confidently',
]

export default function Opportunities() {
  return (
    <section className="section bg-violet-50/50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="What makes us different" title={<>Hackathons & <span className="grad-text">Symposiums</span></>} intro="Many students don't even know these opportunities exist. We teach you what they are, how to find them and how to walk in ready — one of the biggest differences WEBOCLYPSE makes." />
          <Reveal>
            <div className="flex gap-4">
              <div className="card flex-1 p-5"><Trophy className="h-6 w-6 text-violet-600" /><p className="mt-3 font-display font-bold">Hackathons</p><p className="mt-1 text-sm text-ink/60">Build and present a project in a team.</p></div>
              <div className="card flex-1 p-5"><Compass className="h-6 w-6 text-violet-600" /><p className="mt-3 font-display font-bold">Symposiums</p><p className="mt-1 text-sm text-ink/60">Discover, register and take part with confidence.</p></div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ul className="grid gap-3 rounded-3xl border border-violet-100 bg-white p-6 shadow-card sm:grid-cols-2 sm:p-8">
            {learn.map((l) => (
              <li key={l} className="flex items-start gap-3 text-sm font-semibold">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700"><Check className="h-3 w-3" strokeWidth={3} /></span>{l}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
