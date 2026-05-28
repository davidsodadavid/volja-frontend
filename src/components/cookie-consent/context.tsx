"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

const CookieConsentContext = createContext<{
  hasConsent: boolean
  visible: boolean
  accept: () => void
} | null>(null)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasConsent, setHasConsent] = useState(false)
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const consent = document.cookie.includes("cookie_consent=true")
    setHasConsent(consent)
    if (mounted && !consent) {
      setVisible(true)
    }
  }, [mounted])

  const accept = () => {
    document.cookie = "cookie_consent=true; path=/; max-age=31536000"
    setHasConsent(true)
    setVisible(false)
  }

  return (
    <CookieConsentContext.Provider value={{ hasConsent, visible, accept }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider")
  }
  return context
}
