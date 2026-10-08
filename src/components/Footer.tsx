import { Mail, Phone } from 'lucide-react'
import Logo from './Logo'
import { WhatsappIcon, GithubIcon, LinkedinIcon } from './BrandIcons'
import { CONTACT, FOOTER_NAV, TAGLINE } from '../data/site'
import { TEAM } from '../data/team'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-violet-100 bg-violet-50/50 pt-16">
      <div className="container-x grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-xs font-bold tracking-[0.18em] text-violet-700">{TAGLINE.join(' | ')}</p>
          <p className="mt-3 text-sm text-ink/65">A student-built technology and skill-development startup. Founded 2026.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-violet-800">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {FOOTER_NAV.map((n) => <li key={n.href}><a className="text-ink/70 hover:text-violet-700" href={n.href}>{n.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-violet-800">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a className="flex items-center gap-2 text-ink/75 hover:text-violet-700" href={`mailto:${CONTACT.email}`}><Mail className="h-4 w-4 text-violet-600" />{CONTACT.email}</a></li>
            <li><a className="flex items-center gap-2 text-ink/75 hover:text-violet-700" href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer"><WhatsappIcon className="h-4 w-4 text-violet-600" />WhatsApp {CONTACT.whatsappDisplay}</a></li>
            <li><a className="flex items-center gap-2 text-ink/75 hover:text-violet-700" href={CONTACT.founderTel}><Phone className="h-4 w-4 text-violet-600" />Founder: {CONTACT.founderDisplay}</a></li>
            <li><a className="flex items-center gap-2 text-ink/75 hover:text-violet-700" href={CONTACT.ceoTel}><Phone className="h-4 w-4 text-violet-600" />CEO: {CONTACT.ceoDisplay}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-violet-800">Founding team</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {TEAM.map((m) => (
              <li key={m.name} className="flex items-center justify-between gap-3">
                <span className="text-ink/75">{m.name}</span>
                <span className="flex gap-1.5">
                  <a href={m.github} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on GitHub`} className="rounded-lg p-1.5 text-violet-700 hover:bg-violet-100"><GithubIcon className="h-4 w-4" /></a>
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="rounded-lg p-1.5 text-violet-700 hover:bg-violet-100"><LinkedinIcon className="h-4 w-4" /></a>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-violet-100 py-5 text-center text-xs text-ink/55">© 2026 WEBOCLYPSE. All rights reserved.</div>
    </footer>
  )
}
