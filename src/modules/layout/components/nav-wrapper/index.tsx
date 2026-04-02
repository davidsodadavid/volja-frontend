"use client"

import { useParams, usePathname } from "next/navigation"

interface NavWrapperProps {
  children: React.ReactNode
  shopBgColor: string
}

export default function NavWrapper({ children, shopBgColor }: NavWrapperProps) {
  const { countryCode } = useParams()
  const pathname = usePathname()
  const isShop = pathname.startsWith(`/${countryCode}/store`)

  return (
    <header
      className="relative mx-auto duration-200 pt-6 pb-0 h-[66px]"
      style={{ backgroundColor: isShop ? shopBgColor : "#ffffff" }}
    >
      {children}
    </header>
  )
}
