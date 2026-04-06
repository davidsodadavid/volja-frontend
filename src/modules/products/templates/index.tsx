import React from "react"

import ProductInfo from "@modules/products/templates/product-info/ProductInfo"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { ProductImageGallery } from "@modules/store/components/products/ProductGallery"
import { ProductActions } from "@modules/store/components/products/ProductActions"
import { PreOrderVariant } from "@lib/data/pre-order"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }


  const newVariants = (product.variants || []).map(v => {
    // @ts-ignore
    const variantClone: PreOrderVariant = {
      ...v,
      available: true
    }
    return variantClone
  })

  return (
    <div className="w-full">
      <div className="content-container">
          <div className="w-full py-12">
            {/* Large: 3-column — description | gallery | actions */}
            <div className="hidden lg:flex gap-5 justify-between h-[640px]">
              <ProductInfo product={product} />
              <ProductImageGallery
                images={product.images}
                thumbnail={product.thumbnail}
                title={product.title}
              />
              <ProductActions variants={newVariants} size_chart={product.metadata?.size_chart as string}  />
            </div>

            {/* Small: vertical — gallery | description | actions */}
            <div className="flex flex-col gap-6 lg:hidden">
              <ProductImageGallery
                images={product.images}
                thumbnail={product.thumbnail}
                title={product.title}
              />
              <ProductInfo product={product} />
              <ProductActions variants={newVariants} size_chart={product.metadata?.size_chart as string} />
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductTemplate
