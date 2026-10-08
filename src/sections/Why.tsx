import { ArrowRight, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const old = ['Learn', 'Write exams', 'Finish semester', 'Forget']
const next = ['Learn', 'Build', 'Demonstrate', 'Participate', 'Grow']

function Flow({ steps, good }: { steps: string[]; good?: boolean }) {
  return (
    <ol className="mt-6 flex flex-wrap items-center gap-2">
      {steps.map((s, i) => (
        <li key={s} className="flex items-center gap-2">
          <span className={`rounded-xl px-3.5 py-2 text-sm font-bold ${good ? 'bg-violet-600 text-white shadow-card' : 'bg-ink/5 text-ink/60'}`}>{s}</span>
          {i < steps.length - 1 && <ArrowRight className={`h-4 w-4 ${good ? 'text-gold-500' : 'text-ink/30'}`} />}
        </li>
      ))}
    </ol>
  )
}

export default function Why() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Why WEBOCLYPSE" title={<>Learning Isn't Enough. <span className="grad-text">Building Is.</span></>} intro="Don't just be a student. Become a builder. Most students learn to pass the semester — few learn to show what they can actually do." />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-ink/10 bg-white p-8">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/50"><X className="h-4 w-4" />Traditional learning</p>
              <Flow steps={old} />
              <p className="mt-6 text-sm text-ink/60">Knowledge stays on paper. Little proof of skill, little exposure to real opportunities.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-8 shadow-card">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-700">The WEBOCLYPSE way</p>
              <Flow steps={next} good />
              <p className="mt-6 text-sm text-ink/70">Sessions are interactive. A trainer guides, you experiment, build and present — so you can say <strong>"I built this"</strong>, not "I copied this."</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
