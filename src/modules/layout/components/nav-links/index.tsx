"use client"

import { useEffect, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams, usePathname } from "next/navigation"
import { Fragment } from "react"

export default function NavLinks() {
  const { countryCode } = useParams()
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer")
      if (!footer) return

      const rect = footer.getBoundingClientRect()
      const isFooterVisible = rect.top <= window.innerHeight && rect.bottom >= 0
      setContactActive(isFooterVisible)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const isOnStorePage = pathname.startsWith(`/${countryCode}/store`)
    if (!isOnStorePage) {
      window.location.href = `/${countryCode}/store#${id}`
    } else {
      window.location.href = `#${id}`
    }
    setDropdownOpen(false)
  }

  const isShopActive =
    pathname.startsWith(`/${countryCode}/store`) ||
    pathname.startsWith(`/${countryCode}/archive`) ||
    pathname.startsWith(`/${countryCode}/products`) ||
    pathname.startsWith(`/${countryCode}/cart`)

  return (
    <Fragment>
      <LocalizedClientLink
        href="/"
        className={
          pathname === `/${countryCode}`
            ? "font-bold underline underline-offset-8"
            : ""
        }
      >
        Atelje
      </LocalizedClientLink>
      <div className="relative" onMouseLeave={() => setDropdownOpen(false)}>
        <LocalizedClientLink
          href="/store"
          onMouseEnter={() => setDropdownOpen(true)}
          className={
            isShopActive
              ? "font-bold underline underline-offset-8"
              : ""
          }
        >
          Shop
        </LocalizedClientLink>
        {dropdownOpen && (
          <div
            className="absolute top-full left-0 bg-white border border-black py-0 min-w-[200px] z-50"
          >
            <button
              onClick={() => scrollToSection("preorder")}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-display text-[30px] whitespace-nowrap"
            >
              Preorder
            </button>
            <button
              onClick={() => scrollToSection("in-progress")}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-display text-[30px] whitespace-nowrap"
            >
              In progress
            </button>
            <button
              onClick={() => scrollToSection("shop")}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-display text-[30px] whitespace-nowrap"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection("archive")}
              className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-display text-[30px] whitespace-nowrap"
            >
              Archive
            </button>
          </div>
        )}
      </div>
      <a
        href="#footer"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
        }}
        className={contactActive ? "font-bold underline underline-offset-8" : ""}
      >
        Contact
      </a>
    </Fragment>
  )
}
