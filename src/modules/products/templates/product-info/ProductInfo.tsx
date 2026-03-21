import { HttpTypes } from "@medusajs/types"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}


const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        <ul className="list-['–\00a0\00a0'] list-inside font-display leading-10">
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
    </div>
  )
}

export default ProductInfo
