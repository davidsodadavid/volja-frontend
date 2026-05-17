"use client"

import { useEffect, useState } from "react"
import { useParams, usePathname } from "next/navigation"

interface NavWrapperProps {
  children: React.ReactNode
  shopBgColor: string
}

export default function NavWrapper({ children, shopBgColor }: NavWrapperProps) {
  const { countryCode } = useParams()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const isShop = pathname.startsWith(`/${countryCode}/store`)

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setScrolled(window.scrollY > 900)
      } else {
        setScrolled(false)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="relative mx-auto duration-200 pt-6 pb-0 h-[66px]"
      style={{
        backgroundColor: isShop ? (scrolled ? "#ffffff" : shopBgColor) : "#ffffff",
      }}
    >
      {children}
    </header>
  )
}