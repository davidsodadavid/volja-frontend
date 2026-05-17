import { HttpTypes } from "@medusajs/types"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}


const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 max-w-[280px]">
        <ul className="list-none font-display leading-10 w-full lg:mx-auto [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
          <li data-testid="product-title" className="text-[30px] uppercase font-bold">{product.title}</li>
          <li className="text-[30px]">{product.subtitle}</li>
          <li className="text-[30px]">{product.material}</li>
          {product.description
            ?.split("\n")
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
