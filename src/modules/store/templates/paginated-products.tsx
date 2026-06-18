import { listInStockProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

const PRODUCT_LIMIT = 12

export default async function PaginatedProducts({
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page: number
  collectionId?: string
  categoryId?: string
  productsIds?: string[]
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const { products, count } = await listInStockProducts({ page, limit: PRODUCT_LIMIT, countryCode })

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <div className="bg-white w-full" id="shop">
      <div className="content-container pt-20 pb-10">
        <h1 className="text-[50px] font-text">Shop</h1>
        <p className="font-text text-sm mb-6">
          Freshly made and available until supplies last!
        </p>

        <ul
          className="grid grid-cols-1 2xsmall:grid-cols-2 min-[768px]:grid-cols-3 small:grid-cols-4 w-full gap-4"
          data-testid="products-list"
        >
          {products.map((p) => (
            <li key={p.id}>
              <ProductPreview
                product={p}
                region={region}
                thumbnailSize="full"
                thumbnailClassName="!aspect-[3/4]"
              />
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <div className="py-8">
            <Pagination
              data-testid="product-pagination"
              page={page}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  )
}
