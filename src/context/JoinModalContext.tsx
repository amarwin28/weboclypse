import React, { createContext, useContext, useState, useEffect } from 'react'

export type AudienceType = 'student' | 'parent' | 'school'

interface JoinModalOptions {
  audience?: AudienceType
  track?: string
}

interface JoinModalContextValue {
  isOpen: boolean
  audience: AudienceType
  track: string
  openJoinModal: (options?: JoinModalOptions) => void
  closeJoinModal: () => void
}

const JoinModalContext = createContext<JoinModalContextValue | undefined>(undefined)

export function JoinModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [audience, setAudience] = useState<AudienceType>('student')
  const [track, setTrack] = useState<string>('')

  const openJoinModal = (options?: JoinModalOptions) => {
    if (options?.audience) setAudience(options.audience)
    if (options?.track) setTrack(options.track)
    setIsOpen(true)
  }

  const closeJoinModal = () => {
    setIsOpen(false)
  }

  // Handle URL hash '#join'
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#join') {
        openJoinModal({ audience: 'student' })
      }
    }
    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  return (
    <JoinModalContext.Provider
      value={{
        isOpen,
        audience,
        track,
        openJoinModal,
        closeJoinModal,
      }}
    >
      {children}
    </JoinModalContext.Provider>
  )
}

export function useJoinModal() {
  const ctx = useContext(JoinModalContext)
  if (!ctx) {
    throw new Error('useJoinModal must be used within a JoinModalProvider')
  }
  return ctx
}
