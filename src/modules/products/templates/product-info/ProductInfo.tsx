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
    <div id="product-info">
      <div className="flex flex-col gap-y-4 max-w-[280px]">
        <ul className="list-none font-display leading-8 w-full lg:mx-auto [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
          <li data-testid="product-title" className="text-[30px] uppercase font-bold">{title}</li>
          {subtitle && <li className="text-[30px]">{subtitle}</li>}
          {material && <li className="text-[30px]">{material}</li>}
          {description
            ?.split("\n")
            .filter(line => line.trim())
            .map((line, index) => (
              <li key={index} className="font-text text-sm break-words">
                {line}
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default ProductInfo
