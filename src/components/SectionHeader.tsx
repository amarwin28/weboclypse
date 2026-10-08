import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeader({ eyebrow, title, intro, center = false }: { eyebrow: string; title: ReactNode; intro?: ReactNode; center?: boolean }) {
  return (
    <Reveal className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2 mt-4">{title}</h2>
      {intro && <p className="lead mt-4">{intro}</p>}
    </Reveal>
  )
}
