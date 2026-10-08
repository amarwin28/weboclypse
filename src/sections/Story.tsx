import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'

const gaps = ['Awareness', 'Practical exposure', 'Courage and confidence', 'Knowledge of opportunities', 'Real project experience', 'Hackathons & symposiums', 'Professional awareness']
const struggles = ['Coding', 'Using AI effectively', 'Project building', 'Finding opportunities', 'Hackathons', 'Symposiums', 'Confidence', 'Building a professional identity']

export default function Story() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeader eyebrow="Our story" title={<>How WEBOCLYPSE <span className="grad-text">Started</span></>} />
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 text-base leading-relaxed text-ink/75 lg:col-span-3 sm:text-lg">
            <Reveal><p>A group of friends once paid around <strong className="text-ink">₹14,000 each</strong> for coding training. It wasn't completely useless — but it mostly helped with semester-related learning. We realised we were missing something much bigger.</p></Reveal>
            <Reveal><p>In our second semester, we finally stepped forward and asked: <em>What is a symposium? What is a hackathon? What opportunities are actually available to students?</em> That decision changed our perspective. We gained knowledge, ideas, confidence, exposure and — most importantly — real project and teamwork experience.</p></Reveal>
            <Reveal><p>Soon we were building individual and team projects, for ourselves and for others. Then we noticed our classmates were struggling with the same problems we once had.</p></Reveal>
            <Reveal>
              <blockquote className="border-l-4 border-gold-400 bg-violet-50 py-4 pl-5 pr-4 font-display text-lg font-bold text-violet-800 sm:text-xl">
                "If we struggled because nobody showed us the way, why can't we show the next student?"
              </blockquote>
            </Reveal>
            <Reveal><p>That became WEBOCLYPSE — built to help the next generation discover opportunities earlier, build practical skills earlier and become confident builders before graduation.</p></Reveal>
          </div>
          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.1}>
              <div className="card p-6">
                <h3 className="font-display font-bold">What we were missing</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{gaps.map((g) => <li key={g} className="rounded-full bg-violet-100 px-3 py-1 text-xs font-bold text-violet-700">{g}</li>)}</ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card p-6">
                <h3 className="font-display font-bold">What our classmates struggled with</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{struggles.map((g) => <li key={g} className="rounded-full border border-violet-200 bg-white px-3 py-1 text-xs font-bold text-ink/70">{g}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
