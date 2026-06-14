import { FC } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProductInteractive } from "./FeaturedProductInteractive"
import RelatedProducts from "@modules/products/components/related-products"

interface IPreorderProduct {
  product: PreOrderProduct
  countryCode?: string
}

export const FeaturedProduct: FC<IPreorderProduct> = ({ product, countryCode }) => {
  return (
    <div className="w-full py-12">
      <FeaturedProductInteractive product={product} />
      {countryCode && <RelatedProducts product={product as any} countryCode={countryCode} />}
    </div>
  )
}