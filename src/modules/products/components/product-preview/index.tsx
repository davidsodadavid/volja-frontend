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

  const bgColor = (product.metadata?.bg_color as string) || "#91CAFF"

  const inner = (
    <div data-testid="product-wrapper" className="relative overflow-hidden">
      <Thumbnail
        thumbnail={product.thumbnail}
        images={product.images}
        size={thumbnailSize}
        isFeatured={isFeatured}
        className={thumbnailClassName}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between max-[500px]:p-2 p-4"
        style={{ backgroundColor: bgColor }}
      >
        {/*description*/}
        <div className="flex flex-col max-[500px]:gap-y-0 gap-y-4 lg:max-w-[280px]">
          <ul className="list-none font-display max-[500px]:leading-3 leading-5 lg:leading-7 xl:leading-8 w-full break-words [&>li]:flex [&>li]:max-[500px]:gap-0 [&>li]:gap-[10px] [&>li]:items-baseline [&>li]:max-[500px]:my-0 [&>li::before]:content-['–'] [&>li::before]:max-[500px]:w-3 [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
            <li data-testid="product-title" className="max-[500px]:text-[11px] text-[16px] lg:text-[24px] xl:text-[30px] uppercase font-bold">{product.title}</li>
            <li className="max-[500px]:text-[11px] text-[16px] lg:text-[24px] xl:text-[30px]">{product.subtitle}</li>
            {product.material && <li className="max-[500px]:text-[11px] text-[16px] lg:text-[24px] xl:text-[30px]">{product.material}</li>}
            {product.description
              ?.split("\n")
              .map((line, index) => (
                <li key={index} className="font-text max-[500px]:text-[8px] text-[10px] lg:text-xs xl:text-sm">
                  {line}
                </li>
              ))}
          </ul>
        </div>
        {!isArchive && <p className="max-[500px]:text-sm text-base lg:text-2xl font-text">{cheapestPrice?.calculated_price}</p>}
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
