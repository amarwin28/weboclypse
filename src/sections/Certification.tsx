import { Award, Info } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Certification() {
  return (
    <section className="section bg-violet-50/50 !py-16 sm:!py-20">
      <div className="container-x">
        <Reveal>
          {/* Open elegant layout replacing the bulky box card */}
          <div className="mx-auto max-w-4xl border-l-4 border-gold-400 pl-6 sm:pl-8">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400 text-ink shadow-sm">
                <Award className="h-6 w-6" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-violet-700">
                  Validation & Credibility
                </span>
                <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  Official Certification
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
              Students receive WEBOCLYPSE completion certificates for relevant programs and
              projects they build — serving as verified proof of the real-world skills they have
              developed and demonstrated.
            </p>

            <div className="mt-4 flex items-start gap-2 text-xs text-ink/60 sm:text-sm">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
              <span>
                WEBOCLYPSE certificates are issued by WEBOCLYPSE itself as a builder portfolio record.
                They are not government or university degree credentials.
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
