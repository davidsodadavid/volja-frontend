import React, { FC } from "react"
import { DiagonalSlash } from "@modules/store/components/products/DiagonalSlash"

interface IColorSwatch extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  available: boolean
  selected: boolean
}

export const ColorSwatch: FC<IColorSwatch> = ({ value, available, selected, ...rest }) => {
  if (!available) {
    return (
      <div className="relative w-7 h-7 rounded-full border border-black/20 overflow-visible">
        <div className="absolute inset-0 rounded-full opacity-60" style={{ backgroundColor: value }} />
        <DiagonalSlash />
      </div>
    )
  }

  return (
    <button
      type="button"
      {...rest}
      className="relative w-7 h-7 rounded-full cursor-pointer"
      style={selected ? { outline: "2px solid black", outlineOffset: "2px" } : undefined}
    >
      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: value }} />
    </button>
  )
}
