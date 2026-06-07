import { FC } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProductInteractive } from "./FeaturedProductInteractive"
import ProductInfo from "@modules/products/templates/product-info/ProductInfo"

interface IPreorderProduct {
  product: PreOrderProduct
}

export const FeaturedProduct: FC<IPreorderProduct> = ({ product }) => {
  return (
    <div className="w-full py-12">
      <FeaturedProductInteractive
        product={product}
        productInfo={<ProductInfo product={product} />}
      />
    </div>
  )
}