// 'use client'

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import { listPreOrderProducts } from "@lib/data/pre-order"
import { PreorderSection } from "@modules/store/components/product-sections/PreorderSection"

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

  console.log(preOrderProducts)

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
      {/*<Suspense fallback={<SkeletonProductGrid />}>*/}
      {/*  <PreOrderProducts countryCode={countryCode} products={upcoming} />*/}
      {/*</Suspense>*/}
    </div>
  )

  // return (
  //   <div
  //     className="flex flex-col small:flex-row small:items-start py-6 content-container"
  //     data-testid="category-container"
  //   >
  //     {/*<RefinementList sortBy={sort} />*/}
  //     <div className="w-full">
  //       <Suspense fallback={<SkeletonProductGrid />}>
  //         <PreOrderProducts countryCode={countryCode} />
  //       </Suspense>
  //       <div className="mb-8 text-2xl-semi">
  //         <h1 data-testid="store-page-title">Archive</h1>
  //       </div>
  //       <Suspense fallback={<SkeletonProductGrid />}>
  //         <PaginatedProducts
  //           sortBy={sort}
  //           page={pageNumber}
  //           countryCode={countryCode}
  //         />
  //       </Suspense>
  //     </div>
  //   </div>
  // )
}

export default StoreTemplate
