import { ArrowRight, Check } from 'lucide-react'
import Reveal from '../components/Reveal'

const students = ['Learn Vibe Coding', 'Build projects', 'Create GitHub portfolios', 'Improve LinkedIn', 'Participate in hackathons', 'Participate in symposiums', 'Develop communication', 'Develop leadership', 'Build confidence']
const parents = ['Technology exposure', 'Project experience', 'Confidence', 'Communication', 'Professional awareness', 'Portfolio development', 'Opportunity awareness']
const schools = ['AI workshops', 'Vibe Coding programs', 'Project-based learning', 'GitHub workshops', 'LinkedIn workshops', 'Hackathon awareness', 'Symposium awareness', 'Leadership programs']

export function ForStudents() {
  return (
    <section id="for-students" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-800 via-violet-700 to-violet-600 p-8 text-white sm:p-12">
            <div className="grid-lines absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-300">For students · 10th, 12th & college</span>
                <h2 className="h2 mt-4 !text-white">Start Building Before College.</h2>
                <p className="mt-4 max-w-md text-white/80">Build the skills, confidence and projects that give you a head start before your first day of college.</p>
                <a href="#contact" className="btn-gold mt-8">Join WEBOCLYPSE <ArrowRight className="h-4 w-4" /></a>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {students.map((s) => <li key={s} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold"><Check className="h-4 w-4 shrink-0 text-gold-300" strokeWidth={3} />{s}</li>)}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ForParents() {
  return (
    <section className="section bg-violet-50/50 !py-16 sm:!py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">For parents</span>
          <h2 className="h2 mt-4">More Than Coding.</h2>
          <p className="lead mt-4">WEBOCLYPSE focuses on practical development. Students learn by building and presenting real work, with trainers guiding each step. We make no exaggerated promises — just a clear, hands-on path to skills students can show.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap gap-3">
            {parents.map((p) => <li key={p} className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-semibold text-violet-800 shadow-card">{p}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function ForSchools() {
  return (
    <section id="for-schools" className="section">
      <div className="container-x">
        <Reveal>
          <div className="grid gap-10 rounded-[2rem] border border-violet-100 bg-gradient-to-br from-white to-violet-50 p-8 shadow-card sm:p-12 lg:grid-cols-2">
            <div>
              <span className="eyebrow">For schools & colleges</span>
              <h2 className="h2 mt-4">Bring Future-Ready Skills To Your Institution.</h2>
              <p className="lead mt-4">WEBOCLYPSE can collaborate with schools and colleges to bring hands-on technology and leadership learning to students.</p>
              <a href="#contact" className="btn-primary mt-8">Partner With Us <ArrowRight className="h-4 w-4" /></a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {schools.map((s) => <li key={s} className="flex items-center gap-3 rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm font-semibold"><Check className="h-4 w-4 shrink-0 text-violet-600" strokeWidth={3} />{s}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
