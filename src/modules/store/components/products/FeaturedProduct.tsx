import { FC } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProductInteractive } from "./FeaturedProductInteractive"

interface IPreorderProduct {
  product: PreOrderProduct
}

export const FeaturedProduct: FC<IPreorderProduct> = ({ product }) => {
  return (
    <div className="w-full py-12">
      <FeaturedProductInteractive product={product} />
    </div>
  )
}