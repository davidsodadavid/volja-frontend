import { FC } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import { ProductImageGallery } from "./ProductGallery"
import { ProductActions } from "./ProductActions"
import ProductInfo from "@modules/products/templates/product-info/ProductInfo"

interface IPreorderProduct {
  product: PreOrderProduct
}

export const FeaturedProduct: FC<IPreorderProduct> = ({ product }) => {

  return (
    <div className="w-full py-12">
      {/* Large: 3-column — description | gallery | actions */}
      <div className="hidden lg:flex gap-5 justify-between items-start">
        <ProductInfo product={product} />
        <ProductImageGallery
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />
        <ProductActions variants={product.variants} size_chart={product.metadata?.size_chart as string} pre_order_date={product.custom.pre_order_date} />
      </div>

      {/* Small: vertical — gallery | description | actions */}
      <div className="flex flex-col gap-6 lg:hidden">
        <ProductImageGallery
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />
        <ProductInfo product={product} />
        <ProductActions variants={product.variants} size_chart={product.metadata?.size_chart as string} pre_order_date={product.custom.pre_order_date} />
      </div>
    </div>
  )
}