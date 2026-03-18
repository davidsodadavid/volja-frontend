"use client"

import { FC, useState } from "react"
import { PreOrderProduct } from "@lib/data/pre-order"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { PreorderCountdown } from "./PreorderCountdown"
import { DiagonalSlash } from "@modules/store/components/products/DiagonalSlash"
import { ColorSwatch } from "@modules/store/components/products/ColorSwatch"
import { SizeChart } from "@modules/store/components/products/SizeChart"

interface IProductActions {
  product: PreOrderProduct
}


const SizeButton: FC<{ label: string; available: boolean }> = ({ label, available }) => {
  if (!available) {
    return (
      <div className="relative w-9 h-9 rounded-full border border-black/20 flex items-center justify-center overflow-hidden">
        <span className="font-text text-xs text-black/25">{label}</span>
        <DiagonalSlash />
      </div>
    )
  }

  return (
    <div className="w-9 h-9 rounded-full border border-black/50 flex items-center justify-center">
      <span className="font-text text-xs">{label}</span>
    </div>
  )
}

const MOCK_SIZES = [
  { label: "S", available: true },
  { label: "M", available: true },
  { label: "L", available: false },
  { label: "XXL", available: true },
]

export const ProductActions: FC<IProductActions> = ({ product }) => {
  const firstAvailableVariant = product.variants.find(v => v.available)
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(firstAvailableVariant?.id || null)

  const selectedVariant = product.variants.find(v => v.id === selectedVariantId)


  const sizes = MOCK_SIZES
  // not sure
  const preorderPrice = selectedVariant?.calculated_price?.calculated_amount

  return (
    <div className="flex flex-col justify-between h-full max-w-[290px] w-full">
      <div className="space-y-5">
        {preorderPrice && (
          <div>
            <p className="font-text text-sm mb-1">Preorder price:</p>
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold">{preorderPrice} <span className="text-3xl">€</span></span>
              <span className="font-display text-xl line-through opacity-50">{Math.round(preorderPrice + (preorderPrice / 10))} €</span>
            </div>
          </div>
        )}

        {product?.variants && product.variants.length > 0 && (
          <div>
            <p className="font-text text-sm mb-3">Available in:</p>
            <div className="flex gap-2">
              {product.variants.map((variant, i) => (
                <ColorSwatch
                  onClick={() => setSelectedVariantId(variant.id)}
                  key={variant.id}
                  value={variant.metadata?.color || "#4a5e4a"}
                  selected={variant.id === selectedVariantId}
                  available={variant.available} />
              ))}
            </div>
          </div>
        )}

          <div>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {sizes.map((s, i) => (
                <SizeButton key={i} label={s.label} available={s.available} />
              ))}
            </div>
            <SizeChart size_chart_string={product.metadata.size_chart} />
          </div>
      </div>

      <div className="mt-auto">
        <PreorderCountdown targetDate={product.custom.pre_order_date} />

        <LocalizedClientLink
          href={`/products/${product.handle}`}
          className="flex items-center justify-between w-full bg-black text-white font-text text-sm px-5 py-4 hover:bg-black/80 transition-colors"
        >
          <span>Preorder</span>
          <span>→</span>
        </LocalizedClientLink>
      </div>
    </div>
  )
}
