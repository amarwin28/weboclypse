import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { useJoinModal } from '../context/JoinModalContext'

export default function FinalCTA() {
  const { openJoinModal } = useJoinModal()

  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-900 via-violet-700 to-magenta-600 px-6 py-16 text-center text-white sm:py-20">
            <div className="grid-lines absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl font-display text-3xl font-extrabold leading-tight sm:text-5xl">
                Your Future Doesn't Start After College.
              </h2>
              <p className="mt-4 text-lg font-semibold text-gold-300">Start building it now.</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => openJoinModal({ audience: 'student' })}
                  className="btn-gold"
                >
                  Join WEBOCLYPSE <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => openJoinModal({ audience: 'school' })}
                  className="btn border border-white/40 text-white hover:bg-white/10"
                >
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
