"use client"

import { FC, useState, useMemo } from "react"
import { HttpTypes } from "@medusajs/types"
import ProductInfo from "@modules/products/templates/product-info/ProductInfo"
import { ProductImageGallery } from "@modules/store/components/products/ProductGallery"
import { ColorSwatch } from "@modules/store/components/products/ColorSwatch"

type ArchiveVariant = HttpTypes.StoreProductVariant & {
  available?: boolean
}

type ArchiveColorGroup = {
  color: string
  available: boolean
  variants: ArchiveVariant[]
}

interface IArchiveProductInteractive {
  product: HttpTypes.StoreProduct
}

export const ArchiveProductInteractive: FC<IArchiveProductInteractive> = ({ product }) => {
  const colorGroups = useMemo(() => {
    const groups: Record<string, ArchiveColorGroup> = {}
    for (const variant of product.variants ?? []) {
      const av = variant as ArchiveVariant
      av.available = av.available ?? true
      const color = (av.metadata?.color as string) || "#4a5e4a"
      if (!groups[color]) groups[color] = { color, available: false, variants: [] }
      groups[color].variants.push(av)
      groups[color].available = groups[color].variants.some(v => v.available)
    }
    return Object.values(groups)
  }, [product.variants])

  const initialGroup = colorGroups.find(g => g.available) ?? colorGroups[0] ?? null
  const [selectedColorGroup, setSelectedColorGroup] = useState<ArchiveColorGroup | null>(initialGroup)

  const galleryColorGroup = useMemo(() => {
    if (!selectedColorGroup) return null
    return {
      color: selectedColorGroup.color,
      available: selectedColorGroup.available,
      variants: selectedColorGroup.variants.map(v => ({
        ...v,
        available: v.available ?? true,
        images: (v.images?.length ? v.images : product.images) as HttpTypes.StoreProductImage[],
        metadata: {
          color: (v.metadata?.color as string) || null,
          size: (v.metadata?.size as string) || null,
          title: (v.metadata?.title as string) || null,
          subtitle: (v.metadata?.subtitle as string) || null,
          material: (v.metadata?.material as string) || null,
          description: (v.metadata?.description as string) || null,
        },
      })),
    }
  }, [selectedColorGroup, product.images])

  return (
    <>
      {/* Large: 3-column — description | gallery | colors + notify */}
      <div className="hidden lg:flex gap-5 justify-between items-stretch">
        <ProductInfo product={product} />
        <div className="flex-1 flex justify-center">
          <ProductImageGallery
            title={product.title}
            selectedColorGroup={galleryColorGroup as any}
          />
        </div>
        <div className="flex flex-col justify-between h-full max-w-[290px] w-full">
          {colorGroups.length > 1 && (
            <div className="ml-1 flex gap-2 mb-4">
              {colorGroups.map(group => (
                <ColorSwatch
                  key={group.color}
                  value={group.color}
                  selected={group.color === selectedColorGroup?.color}
                  available={group.available}
                  onClick={() => setSelectedColorGroup(group)}
                />
              ))}
            </div>
          )}
          <div className="mt-auto">
            <p className="w-1/2 mb-4 text-xs">
              I guess you missed it! I can let you know if it is available in the shop.
              Stay in the loop with new garments. Sign up for my newsletter.
            </p>
            <input
              type="email"
              placeholder="Enter email"
              className="border border-black mb-2 px-4 py-2 text-[30px] w-full outline-none"
            />
            <button className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-full">
              <span className="transition-transform duration-300 group-hover:translate-x-5">
                Get Notified
              </span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Small: vertical — gallery | description | colors + notify */}
      <div className="flex flex-col gap-6 lg:hidden">
        <ProductImageGallery
          title={product.title}
          selectedColorGroup={galleryColorGroup as any}
        />
        <ProductInfo product={product} />
        <div className="mt-auto">
          {colorGroups.length > 1 && (
            <div className="ml-1 flex gap-2 mb-4">
              {colorGroups.map(group => (
                <ColorSwatch
                  key={group.color}
                  value={group.color}
                  selected={group.color === selectedColorGroup?.color}
                  available={group.available}
                  onClick={() => setSelectedColorGroup(group)}
                />
              ))}
            </div>
          )}
          <p className="w-1/2 mb-4 text-xs">
            I guess you missed it! I can let you know if it is available in the shop.
            Stay in the loop with new garments. Sign up for my newsletter.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-black mb-2 px-4 py-2 text-[30px] w-full outline-none"
          />
          <button className="group bg-black text-white font-display px-4 py-2 text-[30px] flex items-center justify-between w-full">
            <span className="transition-transform duration-300 group-hover:translate-x-5">
              Get Notified
            </span>
            <span>&rarr;</span>
          </button>
        </div>
      </div>
    </>
  )
}
