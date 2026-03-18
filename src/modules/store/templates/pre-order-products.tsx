import { PreOrderProduct } from "@lib/data/pre-order"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"

export default async function PreOrderProducts({
  countryCode,
  products,
}: {
  countryCode: string
  products: PreOrderProduct[]
}) {
  const region = await getRegion(countryCode)

  if (!region || products.length === 0) {
    return null
  }

  return (
    <div className="mb-12">
      <div className="mb-8 text-2xl-semi">
        <h2>Pre-order</h2>
      </div>
      <ul
        className="grid grid-cols-2 w-full small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8"
        data-testid="pre-order-products-list"
      >
        {products.map((p) => (
          <li key={p.id}>

            <div className="bg-atelje-blue w-full">
              <div className="content-container">
            <ProductPreview product={p} region={region} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
