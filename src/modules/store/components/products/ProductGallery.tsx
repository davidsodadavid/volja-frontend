"use client"

import { FC, useState, useRef, useEffect } from "react"
import Image from "next/image"

interface IProductImageGallery {
  images?: { url: string }[] | null
  thumbnail?: string | null
  title: string
}

export const ProductImageGallery: FC<IProductImageGallery> = ({ images, thumbnail, title }) => {
  const resolvedImages = images?.length ? images : thumbnail ? [{ url: thumbnail }] : []
  const [activeIndex, setActiveIndex] = useState(0)
  const hasMultipleImages = resolvedImages.length > 1

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const activeImage = resolvedImages[activeIndex]?.url ?? null

  function getThumbnailClass(imgUrl: string) {
    const base = "relative h-full w-auto lg:h-auto lg:w-full flex-shrink-0 overflow-hidden"
    return base
  }

  function goToNext() {
    setActiveIndex(prev => (prev + 1) % resolvedImages.length)
  }

  function goToPrev() {
    setActiveIndex(prev => (prev - 1 + resolvedImages.length) % resolvedImages.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (diff > threshold) {
      goToNext()
    } else if (diff < -threshold) {
      goToPrev()
    }
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "ArrowLeft") goToPrev()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[520px] lg:flex-shrink-0">
        <div
          className="relative w-full aspect-[3/4] overflow-hidden lg:cursor-default cursor-pointer select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={() => {
            if (hasMultipleImages) {
              goToNext()
            }
          }}
        >
          {activeImage && (
            <Image
              src={activeImage}
              alt={title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority
            />
          )}
          {!activeImage && <div className="w-full h-full bg-black/10" />}
        </div>
      </div>
      {hasMultipleImages && (
        <div
          className="flex gap-3 flex-row overflow-x-auto h-16 lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:h-[693.33px] lg:w-16 lg:flex-shrink-0 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {resolvedImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={getThumbnailClass(img.url)}
              style={{ aspectRatio: "3/4" }}
            >
              <Image src={img.url} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
