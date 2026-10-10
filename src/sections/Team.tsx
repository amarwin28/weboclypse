import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { TEAM } from '../data/team'

export default function Team() {
  return (
    <section className="section bg-violet-50/50">
      <div className="container-x">
        <SectionHeader
          eyebrow="Meet the team"
          title={
            <>
              Built By Students Who Want To <span className="grad-text">Build What's Next.</span>
            </>
          }
          intro="Passionate. Curious. Committed to empowering the next generation."
        />

        {/* Clean Editorial Portrait Grid (Heavy card styling removed) */}
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <li key={m.name}>
              <Reveal delay={i * 0.08}>
                <div className="group">
                  {/* Clean Framed Portrait */}
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-violet-100/80 shadow-sm transition duration-300 group-hover:shadow-md">
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role} of WEBOCLYPSE`}
                      loading="lazy"
                      width={720}
                      height={900}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      style={{ objectPosition: m.position }}
                    />
                  </div>

                  {/* Clean Typography & Social Links */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <div>
                      <h3 className="font-display text-base font-bold text-ink">{m.name}</h3>
                      <span className="mt-0.5 inline-block text-xs font-semibold text-violet-700">
                        {m.role}
                      </span>
                    </div>

                    <div className="flex gap-1.5">
                      <a
                        href={m.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on GitHub`}
                        className="rounded-lg p-1.5 text-ink/70 transition hover:bg-violet-100 hover:text-ink"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                      <a
                        href={m.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${m.name} on LinkedIn`}
                        className="rounded-lg p-1.5 text-[#0a66c2]/80 transition hover:bg-violet-100 hover:text-[#0a66c2]"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
