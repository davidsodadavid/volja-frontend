"use client"

import { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import NavLinks from "@modules/layout/components/nav-links"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

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
        <div className="small:hidden absolute top-full left-0 w-full bg-white z-50 border-b border-ui-border-base">
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
