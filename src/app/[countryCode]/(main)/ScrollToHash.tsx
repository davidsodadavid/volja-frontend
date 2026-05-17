"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash.substring(1)
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 500)
    }
  }, [pathname])

  return null
}