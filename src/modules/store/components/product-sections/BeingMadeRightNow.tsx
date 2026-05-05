import { FC } from 'react'
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProduct } from "@modules/store/components/products/FeaturedProduct"

interface IPreorderSection {
    products: PreOrderProduct[]
}

export const BeingMadeRightNow: FC<IPreorderSection> = ({ products }) => {
  if(products.length === 0) return null

  return (
    <div className="bg-white w-full">
      <div className="content-container">
        <h1 className="text-[60px] font-text mt-20">In progress</h1>
        <p className="font-text text-sm">
          A batch of our {products[0].title.charAt(0).toUpperCase() + products[0].title.slice(1).toLowerCase()} is being made right now. Keep
          calm and follow our mailing list and instagram for updates. Planned
          shipping on /date/.
        </p>

        {products.map((p) => (
          <FeaturedProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
