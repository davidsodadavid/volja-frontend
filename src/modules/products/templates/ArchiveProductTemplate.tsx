import React from "react"

import ProductInfo from "@modules/products/templates/product-info/ProductInfo"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { ProductImageGallery } from "@modules/store/components/products/ProductGallery"

type ArchiveProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ArchiveProductTemplate: React.FC<ArchiveProductTemplateProps> = ({
  product,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="w-full">
      <div className="content-container">
        <div className="w-full py-12">
          <div className="hidden lg:flex gap-5 justify-between items-stretch">
            <ProductInfo product={product} />
            <ProductImageGallery
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
            <div className="flex flex-col justify-between h-full max-w-[290px] w-full">
              <div />
              <div className="mt-auto">
                <p className="w-1/2 mb-4 text-xs">
                  I guess you missed it! I can let you know if it is available in the shop.
Stay in the loop with new garments. Sign up for my newsletter.
                </p>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-black mb-2 px-4 py-2 text-[30px] w-full outline-none"
                />
                <button className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-full">
                  <span className="transition-transform duration-300 group-hover:translate-x-5">
                    Get Notified
                  </span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:hidden">
            <ProductImageGallery
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
            <ProductInfo product={product} />
            <div className="mt-auto">
              <p className="w-1/2 mb-4 text-xs">
                I guess you missed it! I can let you know if it is available in the shop.
Stay in the loop with new garments. Sign up for my newsletter.
              </p>
              <input
                type="email"
                placeholder="Enter email"
                className="border border-black mb-2 px-4 py-2 text-[30px] w-full outline-none"
              />
              <button className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-full">
                <span className="transition-transform duration-300 group-hover:translate-x-5">
                  Get Notified
                </span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArchiveProductTemplate