import { HttpTypes } from "@medusajs/types"
import type { PreOrderVariant } from "@lib/data/pre-order"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
  variant?: PreOrderVariant | null
}


const ProductInfo = ({ product, variant }: ProductInfoProps) => {
  const title = variant?.metadata?.title || product.title
  const subtitle = variant?.metadata?.subtitle || product.subtitle
  const material = variant?.metadata?.material || product.material
  const description = variant?.metadata?.description || product.description

  return (
   <div
  id="product-info"
  className="self-stretch flex flex-col h-full"
>
  <div className="flex flex-col max-w-[280px] flex-1">
    <ul className="flex-1 list-none font-display leading-8 w-full lg:mx-auto [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
      <li
        data-testid="product-title"
        className="text-[30px] uppercase font-bold"
      >
        {title}
      </li>

      {subtitle && (
        <li className="text-[30px]">
          {subtitle}
        </li>
      )}

      {material && (
        <li className="text-[30px]">
          {material}
        </li>
      )}

      {description
        ?.split("\n")
        .filter((line) => line.trim())
        .map((line, index) => (
          <li
            key={index}
            className="font-text text-sm break-words"
          >
            {line}
          </li>
        ))}
    </ul>
  </div>

  <p className="text-xs mt-auto pt-4 ml-4">
    Every piece has its unique date of birth embroidered.
    Make yours last the longest,
    <br />
    give it a full life, then
    return it to us for repairs, reselling or disposal.
  </p>
</div>
  )
}

export default ProductInfo
