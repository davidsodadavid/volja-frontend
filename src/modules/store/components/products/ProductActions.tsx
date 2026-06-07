"use client"

import { FC, useState } from "react"
import { ColorGroup } from "@lib/data/pre-order"
import { addToCart } from "@lib/data/cart"
import { useParams } from "next/navigation"
import { PreorderCountdown } from "./PreorderCountdown"
import { DiagonalSlash } from "@modules/store/components/products/DiagonalSlash"
import { ColorSwatch } from "@modules/store/components/products/ColorSwatch"
import { SizeChart } from "@modules/store/components/products/SizeChart"
import { useCookieConsent } from "@components/cookie-consent/context"

const SizeButton: FC<{ label: string; available: boolean; selected?: boolean; onClick?: () => void }> = ({ label, available, selected, onClick }) => {
  if (!available) {
    return (
      <div className="relative w-9 h-9 rounded-full border border-black/20 flex items-center justify-center overflow-visible">
        <span className="font-text text-xs text-black/25">{label}</span>
        <DiagonalSlash />
      </div>
    )
  }

  return (
    <div
      onClick={onClick}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer ${selected ? "border-2 border-black" : "border border-black"}`}
    >
      <span className="font-text text-xs">{label}</span>
    </div>
  )
}

interface IProductActions {
  colorGroups: ColorGroup[]
  size_chart: string
  pre_order_date?: string
  selectedColorGroup: ColorGroup | null
  onColorGroupChange: (group: ColorGroup) => void
}

export const ProductActions: FC<IProductActions> = ({ colorGroups, size_chart, pre_order_date, selectedColorGroup, onColorGroupChange }) => {
  const sizeOrder = ["XS", "S", "M", "L", "XL"]
  const initialVariant = selectedColorGroup
    ? sizeOrder.map(s => selectedColorGroup.variants.find(v => v.metadata?.size?.toUpperCase() === s && v.available)).find(Boolean)
    : null
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(initialVariant?.id ?? null)
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string
  const { hasConsent } = useCookieConsent()

  const selectedVariant = selectedColorGroup?.variants.find(v => v.id === selectedVariantId) || selectedColorGroup?.variants[0]

  const preorderPrice = selectedVariant?.calculated_price?.calculated_amount

  enum ProductStatus {
    Preorder = "preorder",
    BeingMade = "being_made",
    Active = "active",
  }

  let status: ProductStatus = ProductStatus.Active
  if (pre_order_date && new Date(pre_order_date) > new Date()) {
    status = ProductStatus.Preorder
  } else if (pre_order_date && new Date(pre_order_date) <= new Date()) {
    status = ProductStatus.BeingMade
  }

  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return
    if (!hasConsent) return
    setIsAdding(true)
    await addToCart({ variantId: selectedVariant.id, quantity: 1, countryCode })
    setIsAdding(false)
  }

  return (
    <div className="flex flex-col justify-between h-full max-w-[290px] w-full">
      <div className="space-y-5">
        {preorderPrice && (
          <div>
            {status === ProductStatus.Preorder && (
              <p className="font-text text-sm mb-1">Preorder price:</p>
            )}
            <div className="flex items-baseline gap-3">
              {status !== ProductStatus.BeingMade && (
                <span className="font-display text-4xl line-through opacity-50">
                  {Math.round(preorderPrice + preorderPrice / 10)} €
                </span>
              )}
              <span className="font-display text-4xl font-bold">
                {status === ProductStatus.BeingMade && selectedVariant?.calculated_price?.original_amount ? Math.round(selectedVariant.calculated_price.original_amount) : preorderPrice} <span className="text-3xl">€</span>
              </span>
            </div>
          </div>
        )}

        {colorGroups && colorGroups.length > 0 && (
          <div>
            <div className="ml-1 flex gap-2">
              {colorGroups.map(group => (
                <ColorSwatch
                  onClick={() => {
                    onColorGroupChange(group)
                    const firstAvailable = sizeOrder
                      .map(s => group.variants.find(v => v.metadata?.size?.toUpperCase() === s && v.available))
                      .find(Boolean)
                    setSelectedVariantId(firstAvailable?.id ?? null)
                  }}
                  key={group.color}
                  value={group.color}
                  selected={group.color === selectedColorGroup?.color}
                  available={status !== ProductStatus.BeingMade}
                />
              ))}
            </div>
          </div>
        )}

        {selectedColorGroup && (
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-3">
              {["XS", "S", "M", "L", "XL"].map((size) => {
                const variant = selectedColorGroup.variants.find(v => v.metadata?.size?.toUpperCase() === size)
                const available = status !== ProductStatus.BeingMade && (variant?.available ?? false)
                const selected = variant?.id === selectedVariantId
                return (
                  <SizeButton
                    key={size}
                    label={size}
                    available={available}
                    selected={selected}
                    onClick={() => variant && setSelectedVariantId(variant.id)}
                  />
                )
              })}
            </div>
            {size_chart && <SizeChart size_chart_string={size_chart} />}
          </div>
        )}
      </div>

      <div className="mt-auto">
        {pre_order_date && status === ProductStatus.Preorder && <PreorderCountdown targetDate={pre_order_date} />}

        {status === ProductStatus.Preorder && (
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !selectedVariant || !hasConsent}
            className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-[290px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-5">{!hasConsent ? "Accept cookies" : isAdding ? "Adding..." : "Preorder"}</span>
            <span>→</span>
          </button>
        )}

        {status === ProductStatus.BeingMade && (
          <p className="w-1/2 mb-4 text-xs">
            I guess you missed it! I can let you know if it is available in the
            shop.
          </p>
        )}

        {status === ProductStatus.BeingMade && (
          <input
            type="email"
            placeholder="Enter email"
            className="border border-black mb-2 px-4 py-2 text-[30px] w-[290px] outline-none"
          />
        )}

        {status === ProductStatus.BeingMade && (
          <button className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-[290px]">
            <span className="transition-transform duration-300 group-hover:translate-x-5">Get Notified</span>
            <span>→</span>
          </button>
        )}

        {status === ProductStatus.Active && (
          <button
            onClick={handleAddToCart}
            disabled={isAdding || !selectedVariant || !hasConsent}
            className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-[290px] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-5">{!hasConsent ? "Accept cookies" : isAdding ? "Adding..." : "Add to cart"}</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  )
}
