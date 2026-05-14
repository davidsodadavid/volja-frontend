import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes, StoreProduct } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
  thumbnailSize = "full",
  thumbnailClassName,
  isArchive,
}: {
  product: StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
  thumbnailSize?: "small" | "medium" | "large" | "full" | "square"
  thumbnailClassName?: string
  isArchive?: boolean
}) {

  const { cheapestPrice } = getProductPrice({
    product,
  })

  const inner = (
    <div data-testid="product-wrapper" className="relative overflow-hidden">
      <Thumbnail
        thumbnail={product.thumbnail}
        images={product.images}
        size={thumbnailSize}
        isFeatured={isFeatured}
        className={thumbnailClassName}
      />
      <div className="absolute inset-0 bg-atelje-blue opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-4">
        {/*description*/}
        <div className="flex flex-col gap-y-4 lg:max-w-[280px]">
          <ul className="list-none font-display leading-10 w-fit [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
            <li data-testid="product-title" className="text-[30px] uppercase font-bold">{product.title}</li>
            <li className="text-[30px]">{product.subtitle}</li>
            <li className="text-[30px]">{product.material}</li>
            {product.description
              ?.split("\n")
              .map((line, index) => (
                <li key={index} className="font-text text-sm">
                  {line}
                </li>
              ))}
          </ul>
        </div>
        {!isArchive && <p className="text-2xl font-text">{cheapestPrice?.calculated_price}</p>}
      </div>
    </div>
  )

  if (isArchive) {
    return (
      <LocalizedClientLink href={`/archive/${product.handle}`} className="group">
        {inner}
      </LocalizedClientLink>
    )
  }

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      {inner}
    </LocalizedClientLink>
  )
}
