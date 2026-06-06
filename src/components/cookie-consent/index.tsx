"use client"

import { useCookieConsent } from "./context"

export default function CookieConsent() {
  const { visible, accept } = useCookieConsent()

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black text-white">
      <div className="content-container py-4 flex flex-col small:flex-row items-start small:items-center gap-4 small:gap-8">
        <p className="text-sm font-text flex-1">
          We use cookies to ensure you get the best experience on our website. These help us remember your preferences, process orders, and analyze site traffic.
        </p>
        <button
          onClick={accept}
          className="px-6 py-2 bg-white text-black font-display text-[16px] hover:bg-gray-200 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
