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

  return (
    <div className="flex gap-2 lg:h-full">
      <div className="w-full lg:w-[432px] lg:flex-shrink-0 lg:h-full">
        <div className="relative w-full aspect-[2/3] max-h-[480px] lg:max-h-none lg:aspect-auto lg:h-full overflow-hidden">
          {activeImage ? (
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 432px"
              priority
            />
          ) : (
            <div className="w-full h-full bg-black/10" />
          )}
        </div>
      </div>
      {resolvedImages.length > 1 && (
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[640px] w-16 flex-shrink-0">
          {resolvedImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveImage(img.url)}
              className={`relative w-full flex-shrink-0 overflow-hidden transition-opacity ${
                activeImage === img.url
                  ? "opacity-100 outline outline-1 outline-black"
                  : "opacity-40 hover:opacity-70"
              }`}
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
