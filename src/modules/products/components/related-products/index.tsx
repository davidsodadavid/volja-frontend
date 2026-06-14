import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const queryParams: HttpTypes.StoreProductParams = {
    limit: 100,
    is_giftcard: false,
  }
  if (region?.id) {
    queryParams.region_id = region.id
  }

  const products = await listProducts({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    const filtered = response.products.filter(
      (responseProduct) => responseProduct.id !== product.id
    )
    return shuffleArray(filtered).slice(0, 4)
  })

  if (!products.length) {
    return null
  }

  return (
    <div className="w-full mt-16">
      <h2 className="text-[50px] font-text">Related products</h2>
      <p className="font-text text-sm mb-8">
        You might also like these products from our collection.
      </p>
      <ul className="grid grid-cols-1 2xsmall:grid-cols-2 xsmall:grid-cols-3 small:grid-cols-4 w-full gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} thumbnailSize="full" thumbnailClassName="!aspect-[3/4]" />
          </li>
        ))}
      </ul>
    </div>
  )
}
