import { useState } from 'react'
import {
  Phone,
  Mail,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Languages,
} from 'lucide-react'
import { WhatsappIcon } from '../components/BrandIcons'
import Reveal from '../components/Reveal'
import SectionHeader from '../components/SectionHeader'
import { CONTACT } from '../data/site'
import { useJoinModal } from '../context/JoinModalContext'

export default function ContactSection() {
  const { openJoinModal } = useJoinModal()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [category, setCategory] = useState<'student' | 'parent' | 'school'>('student')
  const [interest, setInterest] = useState('Vibe Coding & AI Tools')
  const [lang, setLang] = useState('English')
  const [note, setNote] = useState('')
  const [sent, setSent] = useState(false)
  const [formErr, setFormErr] = useState('')

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setFormErr('Please provide your name')
      return
    }
    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setFormErr('Please enter a valid 10-digit phone or WhatsApp number')
      return
    }
    setFormErr('')

    const categoryText =
      category === 'student'
        ? 'Student (10th/12th/College)'
        : category === 'parent'
        ? 'Parent'
        : 'School / College Partner'

    let msg = `*WEBOCLYPSE Enrollment & Contact Request*\n\n`
    msg += `👤 *Name:* ${name.trim()}\n`
    msg += `🎯 *Role:* ${categoryText}\n`
    msg += `📞 *WhatsApp:* ${phone.trim()}\n`
    msg += `🚀 *Interest:* ${interest}\n`
    msg += `🗣️ *Preferred Language:* ${lang}\n`
    if (note.trim()) msg += `💬 *Note:* ${note.trim()}\n`
    msg += `\n_Sent via weboclypse.com_`

    const url = `https://wa.me/919994596987?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="contact" className="section bg-wash">
      <div className="container-x">
        <SectionHeader
          eyebrow="Connect & Enroll"
          title="Take Your First Step Today"
          intro="Have questions or ready to join? Reach out directly or fill the quick form below."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Open layout for direct contact channels (Nested cards removed) */}
          <div className="lg:col-span-5">
            <Reveal>
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-violet-800">
                  <Sparkles className="h-3.5 w-3.5" /> Direct Channels
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Speak Directly With Our Mentors
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  We believe in personal guidance. Connect directly with our founding team to
                  discuss syllabus details, cohort dates, and tailored roadmap recommendations.
                </p>

                {/* Open contact list with subtle divider lines instead of nested card boxes */}
                <div className="mt-8 divide-y divide-violet-100/80 border-y border-violet-100/80">
                  {/* WhatsApp */}
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 transition hover:pl-1.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
                        <WhatsappIcon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                          Chat on WhatsApp
                        </div>
                        <div className="text-sm font-bold text-ink">{CONTACT.whatsappDisplay}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 opacity-0 transition group-hover:opacity-100">
                      Message →
                    </span>
                  </a>

                  {/* Founder */}
                  <a
                    href={CONTACT.founderTel}
                    className="group flex items-center justify-between py-4 transition hover:pl-1.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-violet-700">
                          Founder Direct Line
                        </div>
                        <div className="text-sm font-bold text-ink">{CONTACT.founderDisplay}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-violet-700 opacity-0 transition group-hover:opacity-100">
                      Call →
                    </span>
                  </a>

                  {/* CEO */}
                  <a
                    href={CONTACT.ceoTel}
                    className="group flex items-center justify-between py-4 transition hover:pl-1.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-700 text-white shadow-sm">
                        <Phone className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-violet-700">
                          CEO / Institutional Desk
                        </div>
                        <div className="text-sm font-bold text-ink">{CONTACT.ceoDisplay}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-violet-700 opacity-0 transition group-hover:opacity-100">
                      Call →
                    </span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="group flex items-center justify-between py-4 transition hover:pl-1.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-900 text-white shadow-sm">
                        <Mail className="h-4 w-4" />
                      </span>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-violet-700">
                          Official Email
                        </div>
                        <div className="text-sm font-bold text-ink">{CONTACT.email}</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-violet-700 opacity-0 transition group-hover:opacity-100">
                      Write →
                    </span>
                  </a>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/65">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Clock className="h-3.5 w-3.5 text-violet-600" /> Mon - Sun: 9:00 AM - 9:00 PM
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Languages className="h-3.5 w-3.5 text-gold-500" /> English, Tamil, Hindi
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Registration Component (Retained as an interactive component) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-violet-100 bg-white p-7 shadow-sm transition hover:shadow-card sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                      Quick Enrollment & Query
                    </h3>
                    <p className="mt-1 text-xs text-ink/65 sm:text-sm">
                      Submit your details to get program brochures and free mentor counseling.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => openJoinModal()}
                    className="btn-outline !py-2 !px-4 text-xs font-bold"
                  >
                    Open Full Form
                  </button>
                </div>

                {sent ? (
                  <div className="my-8 rounded-xl border border-emerald-200 bg-emerald-50/60 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                    <h4 className="mt-3 font-display text-lg font-bold text-ink">
                      Thank You for Reaching Out!
                    </h4>
                    <p className="mt-1 text-sm text-ink/70">
                      We have captured your request. If WhatsApp opened, please tap send to connect
                      instantly with our team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-5 btn-primary !py-2 text-xs"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleWhatsAppSend} className="mt-6 space-y-4">
                    {formErr && (
                      <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold text-rose-700">
                        {formErr}
                      </div>
                    )}

                    {/* Role tabs */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        I am a:
                      </label>
                      <div className="mt-1.5 grid grid-cols-3 gap-2">
                        {(['student', 'parent', 'school'] as const).map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => setCategory(cat)}
                            className={`rounded-xl border py-2 text-center text-xs font-bold capitalize transition ${
                              category === cat
                                ? 'border-violet-600 bg-violet-600 text-white shadow-sm'
                                : 'border-violet-200 bg-violet-50/40 text-ink/70 hover:bg-violet-100'
                            }`}
                          >
                            {cat === 'school' ? 'School / College' : cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Gurudhakshna"
                          className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. 99945 96987"
                          className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                          Primary Area of Interest
                        </label>
                        <select
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-violet-200 bg-white px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                        >
                          <option value="AI & Prompt Engineering">AI & Prompt Engineering</option>
                          <option value="Vibe Coding & Web Development">Vibe Coding & Web Dev</option>
                          <option value="GitHub & Portfolio Building">GitHub & Portfolio</option>
                          <option value="LinkedIn & Personal Branding">LinkedIn & Branding</option>
                          <option value="Leadership & Communication">Leadership & Communication</option>
                          <option value="Institution Workshop / Hackathon">School / College Workshop</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                          Preferred Language
                        </label>
                        <select
                          value={lang}
                          onChange={(e) => setLang(e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-violet-200 bg-white px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                        >
                          <option value="English">English</option>
                          <option value="Tamil">Tamil (தமிழ்)</option>
                          <option value="Hindi">Hindi (हिंदी)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Additional Note or Question (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Tell us about your current school/college or what you hope to achieve..."
                        className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2 text-sm text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-gold w-full flex items-center justify-center gap-2 !py-3.5 text-base font-bold shadow-sm hover:bg-gold-300"
                      >
                        <Send className="h-4 w-4" /> Send Application via WhatsApp
                      </button>

                      <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-ink/50">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                        Quick response · Direct guidance from founding mentors
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
