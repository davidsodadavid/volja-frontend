import { FC } from 'react'
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProduct } from "@modules/store/components/products/FeaturedProduct"

interface IPreorderSection {
    products: PreOrderProduct[]
}

export const PreorderSection: FC<IPreorderSection> = ({ products }) => {
  if(products.length === 0) return null

  return (
    <div className="bg-atelje-blue w-full">
      <div className="content-container">
        <h1 className="text-[60px] font-text mt-20">Available for Preorders</h1>
        <p className="font-text text-sm">This garment will go to production soon:</p>

        {products.map(p => <FeaturedProduct key={p.id} product={p} />)}
      </div>
    </div>
  )
}
