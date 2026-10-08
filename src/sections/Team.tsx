import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { TEAM } from '../data/team'

export default function Team() {
  return (
    <section className="section bg-violet-50/50">
      <div className="container-x">
        <SectionHeader eyebrow="Meet the team" title={<>Built By Students Who Want To <span className="grad-text">Build What's Next.</span></>} intro="Passionate. Curious. Committed to empowering the next generation." />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.08}>
                <article className="card overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden bg-violet-100">
                    <img src={m.photo} alt={`${m.name}, ${m.role} of WEBOCLYPSE`} loading="lazy" width={720} height={900} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" style={{ objectPosition: m.position }} />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-display text-base font-bold">{m.name}</h3>
                      <span className="mt-1 inline-block rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-bold text-violet-700">{m.role}</span>
                    </div>
                    <div className="flex gap-1.5">
                      <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on GitHub`} className="rounded-xl border border-violet-100 p-2 text-ink transition hover:bg-ink hover:text-white"><GithubIcon className="h-4 w-4" /></a>
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="rounded-xl border border-violet-100 p-2 text-[#0a66c2] transition hover:bg-[#0a66c2] hover:text-white"><LinkedinIcon className="h-4 w-4" /></a>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
