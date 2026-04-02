import { listPreOrderProducts } from "@lib/data/pre-order"
import NavWrapper from "."

export default async function NavWrapperServer({ children }: { children: React.ReactNode }) {
  const preOrderProducts = await listPreOrderProducts()

  const now = new Date()
  const activePreorder = preOrderProducts.find(
    (p) => new Date(p.custom.pre_order_date) > now
  )
  const beingMadeRightNowProducts = preOrderProducts.find(
    (p) => new Date(p.custom.pre_order_date) <= now
  )

  // we are basically saying: on a /store page (shop), if there is any featured product
  // at the top, pick it, and then read background color, and assign that color to a navbar
  const featuredProduct = activePreorder || beingMadeRightNowProducts

  const shopBgColor = featuredProduct?.metadata?.bg_color ?? "#ffffff"

  return <NavWrapper shopBgColor={shopBgColor}>{children}</NavWrapper>
}
