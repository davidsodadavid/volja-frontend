"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NavLinks from "@modules/layout/components/nav-links"
import { useParams, usePathname } from "next/navigation"

export default function MobileMenu({ shopBgColor = "#ffffff" }: { shopBgColor?: string }) {
  const [open, setOpen] = useState(false)
  const { countryCode } = useParams()
  const pathname = usePathname()
  const isShop = pathname?.startsWith(`/${countryCode}/store`)

  const bgColor = isShop ? shopBgColor : "#ffffff"

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="small:hidden flex flex-col gap-[6px]"
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-[2px] bg-black transition-transform ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
        <span className={`block w-7 h-[2px] bg-black transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-7 h-[2px] bg-black transition-transform ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
      </button>

      {open && (
        <div className="small:hidden absolute top-full left-0 w-full z-50 border-b-2 border-black" style={{ backgroundColor: bgColor }}>
          <div className="content-container flex flex-col gap-6 py-8 font-display text-[30px]" onClick={() => setOpen(false)}>
            <NavLinks />
            <LocalizedClientLink href="/cart">
              Cart (0)
            </LocalizedClientLink>
          </div>
        </div>
      )}
    </>
  )
}
