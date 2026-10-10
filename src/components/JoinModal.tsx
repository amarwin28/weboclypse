import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  X,
  Check,
  CheckCircle2,
  Sparkles,
  Phone,
  Mail,
  GraduationCap,
  Users,
  School,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { WhatsappIcon } from './BrandIcons'
import { CONTACT } from '../data/site'
import { useJoinModal, type AudienceType } from '../context/JoinModalContext'

const TRACK_OPTIONS = [
  'AI & Prompt Engineering',
  'Vibe Coding & Web Development',
  'GitHub & Project Portfolio',
  'LinkedIn & Personal Branding',
  'Leadership & Communication',
  'Real-World Project Building',
]

const LANGUAGE_OPTIONS = ['English', 'Tamil (தமிழ்)', 'Hindi (हिंदी)']

const GRADE_OPTIONS: Record<AudienceType, string[]> = {
  student: [
    '10th Standard',
    '11th Standard',
    '12th Standard',
    'College - 1st Year',
    'College - 2nd Year',
    'College - 3rd / 4th Year',
    'Recent Graduate / Other',
  ],
  parent: [
    'Child in 10th Standard',
    'Child in 11th Standard',
    'Child in 12th Standard',
    'Child in College',
  ],
  school: [
    'School Principal / Administrator',
    'School Teacher / Coordinator',
    'College Professor / Dean',
    'Placement / Training Officer',
  ],
}

export default function JoinModal() {
  const { isOpen, closeJoinModal, audience: initialAudience } = useJoinModal()

  const [audience, setAudience] = useState<AudienceType>('student')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [level, setLevel] = useState('')
  const [selectedTracks, setSelectedTracks] = useState<string[]>([
    'AI & Prompt Engineering',
    'Vibe Coding & Web Development',
  ])
  const [preferredLanguage, setPreferredLanguage] = useState('English')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Sync initial audience when opened
  useEffect(() => {
    if (isOpen) {
      setAudience(initialAudience)
      setLevel(GRADE_OPTIONS[initialAudience][0] || '')
      setSubmitted(false)
      setError('')
    }
  }, [isOpen, initialAudience])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key handler
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeJoinModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, closeJoinModal])

  const toggleTrack = (track: string) => {
    setSelectedTracks((prev) =>
      prev.includes(track) ? prev.filter((t) => t !== track) : [...prev, track],
    )
  }

  const validateForm = () => {
    if (!fullName.trim()) {
      setError('Please enter your full name')
      return false
    }
    const cleanPhone = phone.replace(/\D/g, '')
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit phone or WhatsApp number')
      return false
    }
    setError('')
    return true
  }

  const generateWhatsAppMessage = () => {
    const audienceLabel =
      audience === 'student'
        ? 'Student'
        : audience === 'parent'
        ? 'Parent'
        : 'School / College Institution'

    const trackList =
      selectedTracks.length > 0 ? selectedTracks.join(', ') : 'All Programs'

    let text = `*New WEBOCLYPSE Registration Inquiry*\n\n`
    text += `👤 *Name:* ${fullName.trim()}\n`
    text += `🎯 *Role:* ${audienceLabel}\n`
    text += `📞 *WhatsApp/Phone:* ${phone.trim()}\n`
    if (email.trim()) text += `✉️ *Email:* ${email.trim()}\n`
    if (level) text += `🎓 *Grade/Status:* ${level}\n`
    text += `🚀 *Interested Tracks:* ${trackList}\n`
    text += `🗣️ *Preferred Language:* ${preferredLanguage}\n`
    if (message.trim()) text += `💬 *Note:* ${message.trim()}\n`
    text += `\n_Submitted via weboclypse.com_`

    return encodeURIComponent(text)
  }

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    const waText = generateWhatsAppMessage()
    const url = `https://wa.me/919994596987?text=${waText}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setSubmitted(true)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFullName('')
    setPhone('')
    setEmail('')
    setMessage('')
    setError('')
    closeJoinModal()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
        >
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeJoinModal}
            className="fixed inset-0 bg-ink/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-lift"
          >
            {/* Modal Header */}
            <div className="relative border-b border-violet-100 bg-gradient-to-r from-violet-900 via-violet-800 to-violet-700 px-6 py-5 text-white sm:px-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/20 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-gold-300">
                    <Sparkles className="h-3.5 w-3.5" /> Start Building Your Future
                  </span>
                  <h2
                    id="join-modal-title"
                    className="mt-2 font-display text-2xl font-extrabold sm:text-3xl"
                  >
                    Join WEBOCLYPSE
                  </h2>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">
                    10th, 12th & college students building AI, projects & leadership skills.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeJoinModal}
                  aria-label="Close modal"
                  className="rounded-full bg-white/10 p-2 text-white/90 transition hover:bg-white/20 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Audience selector tabs */}
              {!submitted && (
                <div className="mt-5 grid grid-cols-3 gap-1.5 rounded-2xl bg-white/10 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setAudience('student')
                      setLevel(GRADE_OPTIONS.student[0])
                    }}
                    className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition sm:text-sm ${
                      audience === 'student'
                        ? 'bg-white text-violet-900 shadow-sm'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <GraduationCap className="h-4 w-4" /> Student
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAudience('parent')
                      setLevel(GRADE_OPTIONS.parent[0])
                    }}
                    className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition sm:text-sm ${
                      audience === 'parent'
                        ? 'bg-white text-violet-900 shadow-sm'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <Users className="h-4 w-4" /> Parent
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAudience('school')
                      setLevel(GRADE_OPTIONS.school[0])
                    }}
                    className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-bold transition sm:text-sm ${
                      audience === 'school'
                        ? 'bg-white text-violet-900 shadow-sm'
                        : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <School className="h-4 w-4" /> School / College
                  </button>
                </div>
              )}
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              {submitted ? (
                /* Success View */
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                    Application Received!
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
                    Thank you, <strong className="text-violet-700">{fullName}</strong>. Our team
                    will get in touch with you via WhatsApp and phone shortly.
                  </p>

                  <div className="mx-auto mt-6 max-w-md rounded-2xl border border-violet-100 bg-violet-50/60 p-4 text-left text-xs leading-relaxed text-ink/80 sm:text-sm">
                    <div className="font-bold text-violet-900">What happens next:</div>
                    <ul className="mt-2 space-y-1.5 pl-4 list-disc text-ink/70">
                      <li>Free counseling call to understand your goals and current level.</li>
                      <li>Roadmap breakdown for practical AI, Vibe Coding, and portfolio building.</li>
                      <li>Batch schedules in your preferred language ({preferredLanguage}).</li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-[#25D366] text-white hover:bg-[#1ebe5b]"
                    >
                      <WhatsappIcon className="h-5 w-5" /> Chat on WhatsApp
                    </a>
                    <a href={CONTACT.founderTel} className="btn-outline">
                      <Phone className="h-4 w-4" /> Call Founder
                    </a>
                    <button type="button" onClick={resetForm} className="btn bg-violet-100 text-violet-800 hover:bg-violet-200">
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                /* Form View */
                <form className="space-y-5" onSubmit={handleWhatsAppSubmit}>
                  {error && (
                    <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-2.5 text-xs font-semibold text-rose-700">
                      {error}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        {audience === 'school' ? 'Contact Person Name *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={audience === 'school' ? 'e.g. Dr. K. Ramesh' : 'e.g. Gurudhakshna'}
                        className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                      />
                    </div>

                    {/* WhatsApp / Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        WhatsApp / Mobile No. *
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
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                      />
                    </div>

                    {/* Current Grade or Role */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        {audience === 'student'
                          ? 'Current Standard / Year'
                          : audience === 'parent'
                          ? "Student's Grade"
                          : 'Designation / Institution Type'}
                      </label>
                      <select
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-violet-200 bg-white px-3.5 py-2.5 text-sm font-medium text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                      >
                        {GRADE_OPTIONS[audience].map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Program / Tracks Interested in */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                      What are you most excited to learn?
                    </label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {TRACK_OPTIONS.map((tr) => {
                        const active = selectedTracks.includes(tr)
                        return (
                          <button
                            key={tr}
                            type="button"
                            onClick={() => toggleTrack(tr)}
                            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                              active
                                ? 'bg-violet-700 text-white shadow-sm'
                                : 'border border-violet-200 bg-violet-50/50 text-ink/75 hover:bg-violet-100'
                            }`}
                          >
                            {active && <Check className="h-3 w-3 stroke-[3]" />}
                            {tr}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Preferred Language */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                      Preferred Learning Language
                    </label>
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {LANGUAGE_OPTIONS.map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={() => setPreferredLanguage(lang)}
                          className={`rounded-xl border px-3 py-2 text-center text-xs font-bold transition ${
                            preferredLanguage === lang
                              ? 'border-violet-600 bg-violet-50 text-violet-700 shadow-sm ring-1 ring-violet-600'
                              : 'border-violet-200 bg-white text-ink/70 hover:bg-violet-50'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes / Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                      Any questions or goals? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Want to learn how to build web apps and create a strong GitHub profile..."
                      className="mt-1.5 w-full rounded-xl border border-violet-200 px-3.5 py-2 text-sm text-ink transition focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {/* WhatsApp Instant Connect (Primary for quick conversion) */}
                      <button
                        type="submit"
                        className="btn bg-[#25D366] text-white shadow-card hover:bg-[#1ebe5b] sm:col-span-1"
                      >
                        <WhatsappIcon className="h-5 w-5" />
                        Join via WhatsApp
                      </button>

                      {/* Direct In-App Submit */}
                      <button
                        type="button"
                        onClick={handleDirectSubmit}
                        className="btn-gold sm:col-span-1"
                      >
                        Submit Application <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>

                    <p className="mt-2.5 flex items-center justify-center gap-1.5 text-center text-[11px] text-ink/50">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      100% confidential. No spam. You will be directly assisted by our team.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Quick Contact Footer Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-violet-100 bg-violet-50/70 px-6 py-3 text-xs text-ink/75 sm:px-8">
              <span className="font-semibold text-violet-900">Need instant help?</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={CONTACT.founderTel}
                  className="flex items-center gap-1 font-semibold text-violet-700 hover:underline"
                >
                  <Phone className="h-3 w-3" /> Founder: {CONTACT.founderDisplay}
                </a>
                <span className="text-violet-200">|</span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-1 font-semibold text-violet-700 hover:underline"
                >
                  <Mail className="h-3 w-3" /> {CONTACT.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
