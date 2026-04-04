// 'use client'

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import { listPreOrderProducts } from "@lib/data/pre-order"
import { PreorderSection } from "@modules/store/components/product-sections/PreorderSection"
import { BeingMadeRightNow } from "@modules/store/components/product-sections/BeingMadeRightNow"
import { Suspense } from "react"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import ArchiveProducts from "@modules/store/templates/archive-products"

const StoreTemplate = async ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  const preOrderProducts = await listPreOrderProducts()

  const now = new Date()
  const preorderProducts = preOrderProducts.filter(
    (p) => new Date(p.custom.pre_order_date) > now
  )
  const beingMadeRightNowProducts = preOrderProducts.filter(
    (p) => new Date(p.custom.pre_order_date) <= now
  )

  return (
    <div className="flex flex-col">
      <PreorderSection products={preorderProducts} />
      <BeingMadeRightNow products={beingMadeRightNowProducts} />

       <Suspense fallback={<SkeletonProductGrid />}>
         <PaginatedProducts
           sortBy={sort}
           page={pageNumber}
           countryCode={countryCode}
         />
       </Suspense>
      <Suspense fallback={<SkeletonProductGrid />}>
        <ArchiveProducts
          page={pageNumber}
          countryCode={countryCode}
        />
      </Suspense>
    </div>
  )
}

export default StoreTemplate
