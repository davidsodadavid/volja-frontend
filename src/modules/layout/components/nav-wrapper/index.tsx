"use client"

import { useParams, usePathname } from "next/navigation"

export default function NavWrapper({ children }: { children: React.ReactNode }) {
  const { countryCode } = useParams()
  const pathname = usePathname()
  const isShop = pathname.startsWith(`/${countryCode}/store`)

  return (
    <header className={`relative mx-auto duration-200 pt-6 pb-4 ${isShop ? "bg-atelje-blue" : "bg-white"}`}>
      {children}
    </header>
  )
}
