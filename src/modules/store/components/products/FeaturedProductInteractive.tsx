"use client"

import { FC, useState } from "react"
import { ColorGroup, PreOrderProduct } from "@lib/data/pre-order"
import { ProductImageGallery } from "./ProductGallery"
import { ProductActions } from "./ProductActions"
import ProductInfo from "@modules/products/templates/product-info/ProductInfo"

interface IFeaturedProductInteractive {
  product: PreOrderProduct
}

export const FeaturedProductInteractive: FC<IFeaturedProductInteractive> = ({ product }) => {
  const colorGroups: ColorGroup[] = Object.values(
    product.variants.reduce<Record<string, ColorGroup>>((acc, variant) => {
      const color = (variant.metadata?.color as string) || "#4a5e4a"
      if (!acc[color]) acc[color] = { color, available: false, variants: [] }
      acc[color].variants.push(variant)
      acc[color].available = acc[color].variants.some(v => v.available)
      return acc
    }, {})
  )

  const initialGroup = colorGroups.find(g => g.available) ?? colorGroups[0] ?? null
  const [selectedColorGroup, setSelectedColorGroup] = useState<ColorGroup | null>(initialGroup)

  // picka variant from color group that has something
  const selectedVariant =
    selectedColorGroup?.variants.find(
      v => v.metadata?.title || v.metadata?.subtitle || v.metadata?.material || v.metadata?.description
    ) ??
    selectedColorGroup?.variants[0] ??
    null
  const productInfo = <ProductInfo product={product} variant={selectedVariant} />

  return (
    <>
      {/* Large: 3-column — description | gallery | actions */}
      <div className="hidden lg:flex gap-5 justify-between items-stretch">
        <div className="w-[280px] flex-shrink-0 flex flex-col">{productInfo}</div>
        <div className="flex-1 flex justify-center">
          <ProductImageGallery
            key={selectedColorGroup?.color}
            title={product.title}
            selectedColorGroup={selectedColorGroup}
          />
        </div>
        <div className="w-[290px] flex-shrink-0">
          <ProductActions
            colorGroups={colorGroups}
            size_chart={product.metadata?.size_chart as string}
            state={product.custom.state}
            pre_order_date={product.custom.pre_order_date}
            selectedColorGroup={selectedColorGroup}
            onColorGroupChange={setSelectedColorGroup}
          />
        </div>
      </div>

      {/* Small: vertical — gallery | description | actions */}
      <div className="flex flex-col gap-6 lg:hidden">
        <ProductImageGallery
          key={selectedColorGroup?.color}
          title={product.title}
          selectedColorGroup={selectedColorGroup}
        />
        {productInfo}
        <ProductActions
          colorGroups={colorGroups}
          size_chart={product.metadata?.size_chart as string}
          state={product.custom.state}
          pre_order_date={product.custom.pre_order_date}
          selectedColorGroup={selectedColorGroup}
          onColorGroupChange={setSelectedColorGroup}
        />
      </div>
    </>
  )
}
