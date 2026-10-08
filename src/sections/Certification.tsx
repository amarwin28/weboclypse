import { Award, Info } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Certification() {
  return (
    <section className="section bg-violet-50/50 !py-16 sm:!py-20">
      <div className="container-x">
        <Reveal>
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 rounded-3xl border border-gold-300/60 bg-white p-8 shadow-card sm:flex-row sm:p-10">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-300/40"><Award className="h-7 w-7 text-ink" /></span>
            <div>
              <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Certification</h2>
              <p className="mt-3 text-ink/70">Students can receive WEBOCLYPSE certificates for relevant programs and projects they complete — a record of the work they've done and the skills they've built.</p>
              <p className="mt-4 flex items-start gap-2 text-sm text-ink/55"><Info className="mt-0.5 h-4 w-4 shrink-0" />WEBOCLYPSE certificates are issued by WEBOCLYPSE itself. They are not government or university certifications.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
