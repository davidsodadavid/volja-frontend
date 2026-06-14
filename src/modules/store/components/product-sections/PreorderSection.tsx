import { FC } from 'react'
import Image from "next/image"
import { PreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProduct } from "@modules/store/components/products/FeaturedProduct"

interface IPreorderSection {
    products: PreOrderProduct[]
}

export const PreorderSection: FC<IPreorderSection> = ({ products }) => {
  if(products.length === 0) return null

  const backgroundColor = 'white'
  const heroImages = products[0].images?.slice(-3) ?? []

  return (
    <div className="w-full" style={{ backgroundColor }} data-preorder-section id="preorder">
      {heroImages.length > 0 && (
        <div className="w-full grid grid-cols-3">
          {heroImages.map((img, i) => (
            <div key={i} className="relative w-full h-[50vh] lg:h-[70vh]">
              <Image src={img.url} alt="" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
      <div className="content-container">
        <h1 className="text-[50px] font-text mt-12">Preorder</h1>
        <p className="font-text text-sm">
          A batch production of our {products[0].title.charAt(0).toUpperCase() + products[0].title.slice(1).toLowerCase()} will start on {new Date(products[0].custom.pre_order_date).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}.
          <br />
          Preorder please and thank you!
        </p>

        {products.map((p) => (
          <FeaturedProduct key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
