"use client"

import { FC, useState } from "react"
import Image from "next/image"

interface IProductImageGallery {
  images?: { url: string }[] | null
  thumbnail?: string | null
  title: string
}

export const ProductImageGallery: FC<IProductImageGallery> = ({ images, thumbnail, title }) => {
  const resolvedImages = images?.length ? images : thumbnail ? [{ url: thumbnail }] : []
  const [activeImage, setActiveImage] = useState(resolvedImages[0]?.url ?? null)
  const hasMultipleImages = resolvedImages.length > 1


  function getThumbnailClass(imgUrl: string) {
    const base = "relative h-full w-auto lg:h-auto lg:w-full flex-shrink-0 overflow-hidden transition-opacity"
    if (activeImage === imgUrl) return `${base} opacity-100`
    return `${base} opacity-40 hover:opacity-70`
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:h-full">
      <div className="w-full lg:w-[432px] lg:flex-shrink-0 lg:h-full">
        <div className="relative w-full aspect-[2/3] max-h-[480px] lg:max-h-none lg:aspect-auto lg:h-full overflow-hidden">
          {activeImage && (
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 432px"
              priority
            />
          )}
          {!activeImage && <div className="w-full h-full bg-black/10" />}
        </div>
      </div>
      {hasMultipleImages && (
        <div
          className="flex gap-3 flex-row overflow-x-auto h-16 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:h-auto lg:max-h-[640px] lg:w-16 lg:flex-shrink-0 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {resolvedImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(img.url)}
              className={getThumbnailClass(img.url)}
              style={{ aspectRatio: "2/3" }}
            >
              <Image src={img.url} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
