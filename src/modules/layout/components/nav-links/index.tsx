"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/atelje", label: "Atelje" },
  { href: "/store", label: "Shop" },
  { href: "/contact", label: "Contact" },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(({ href, label }) => {
        const isActive = pathname.includes(href)
        return (
          <LocalizedClientLink
            key={href}
            href={href}
            className={isActive ? "font-bold underline underline-offset-4" : ""}
          >
            {label}
          </LocalizedClientLink>
        )
      })}
    </>
  )
}
