import { Suspense } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import NavLinks from "@modules/layout/components/nav-links"
import MobileMenu from "@modules/layout/components/mobile-menu"
import NavWrapper from "@modules/layout/components/nav-wrapper"

export default async function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <NavWrapper>
        <nav className="content-container font-display text-[30px] flex items-center justify-between w-full h-full">
          <div className="flex-1 basis-0 h-full flex items-center">
            <LocalizedClientLink
              href="/"
              className="font-bold"
              data-testid="nav-store-link"
            >
              Volja
            </LocalizedClientLink>
          </div>

          <div className="hidden small:flex items-center gap-x-8 h-full">
            <NavLinks />
          </div>

          <div className="hidden small:flex items-center h-full flex-1 basis-0 justify-end">
            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

          <MobileMenu />
        </nav>
      </NavWrapper>
    </div>
  )
}
