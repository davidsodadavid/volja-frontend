import { listArchiveProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"
import { Pagination } from "@modules/store/components/pagination"

const PRODUCT_LIMIT = 12

export default async function ArchiveProducts({
  page,
  countryCode,
}: {
  page: number
  countryCode: string
}) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const { products, count } = await listArchiveProducts({ page, limit: PRODUCT_LIMIT, countryCode })

  if (!products.length) {
    return null
  }

  const totalPages = Math.ceil(count / PRODUCT_LIMIT)

  return (
    <div className="bg-white w-full">
      <div className="content-container pt-20 pb-10">
        <h1 className="text-[60px] font-text">Archive</h1>
        <p className="font-text text-sm mb-6">
          Previous batches living a full life.
        </p>

        <ul
          className="grid grid-cols-1 2xsmall:grid-cols-2 xsmall:grid-cols-3 small:grid-cols-4 w-full gap-4"
          data-testid="archive-products-list"
        >
          {products.map((p) => (
            <li key={p.id}>
              <ProductPreview
                isArchive
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
              data-testid="archive-pagination"
              page={page}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  )
}
