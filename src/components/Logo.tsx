import markSrc from '../assets/brand/weboclypse-mark.png'
import logoSrc from '../assets/brand/weboclypse-logo.jpg'

/** Official WEBOCLYPSE W-and-arrow mark (cropped from the official logo artwork). */
export function WMark({ className = 'h-9 w-9' }: { className?: string }) {
  return <img src={markSrc} alt="" aria-hidden="true" width={256} height={256} className={`rounded-xl object-cover ${className}`} />
}

/** The complete official logo (mark, wordmark, tagline, "Since 2026"). */
export function OfficialLogo({ className = '' }: { className?: string }) {
  return <img src={logoSrc} alt="WEBOCLYPSE official logo — Learn, Build, Demonstrate, Lead, Grow. Since 2026" width={900} height={900} className={className} />
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <WMark />
      <span className={`font-display text-lg font-extrabold tracking-tight sm:text-xl ${light ? 'text-white' : 'text-violet-800'}`}>WEBOCLYPSE</span>
    </span>
  )
}
