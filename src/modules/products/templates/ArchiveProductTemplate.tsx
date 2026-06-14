import React from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { ArchiveProductInteractive } from "@modules/products/components/archive-product-interactive"
import RelatedProducts from "@modules/products/components/related-products"

type ArchiveProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ArchiveProductTemplate: React.FC<ArchiveProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="w-full">
      <div className="content-container">
        <div className="w-full py-12">
          <ArchiveProductInteractive product={product} />
        </div>
        <RelatedProducts product={product} countryCode={countryCode} />
      </div>
    </div>
  )
}

export default ArchiveProductTemplate
