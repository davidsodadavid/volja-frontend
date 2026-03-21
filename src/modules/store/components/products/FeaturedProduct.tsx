import { FC } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import { ProductDescription } from "./ProductDescription"
import { ProductImageGallery } from "./ProductGallery"
import { ProductActions } from "./ProductActions"
import ProductInfo from "@modules/products/templates/product-info/ProductInfo"

interface IPreorderProduct {
  product: PreOrderProduct
}

export const FeaturedProduct: FC<IPreorderProduct> = ({ product }) => {
  console.log(product)

  return (
    <div className="w-full py-12">
      {/* Large: 3-column — description | gallery | actions */}
      <div className="hidden lg:flex gap-5 justify-between h-[640px]">
        <ProductInfo product={product} />
        {/*<ProductDescription*/}
        {/*  title={product.title}*/}
        {/*  description={product.description}*/}
        {/*/>*/}
        <ProductImageGallery
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />
        <ProductActions product={product} />
      </div>

      {/* Small: vertical — gallery | description | actions */}
      <div className="flex flex-col gap-6 lg:hidden">
        <ProductImageGallery
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />
        <ProductInfo product={product} />
        {/*<ProductDescription*/}
        {/*  title={product.title}*/}
        {/*  description={product.description}*/}
        {/*/>*/}
        <ProductActions product={product} />
      </div>
    </div>
  )
}