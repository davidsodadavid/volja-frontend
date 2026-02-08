"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useParams, usePathname } from "next/navigation"
import { Fragment } from "react"

export default function NavLinks() {
  const { countryCode } = useParams()
  const pathname = usePathname()

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
      <LocalizedClientLink
        href={`/store`}
        className={
          pathname === `/${countryCode}/store`
            ? "font-bold underline underline-offset-8"
            : ""
        }
      >
        Shop
      </LocalizedClientLink>
      <a
        href="#footer"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        Contact
      </a>
    </Fragment>
  )
}
