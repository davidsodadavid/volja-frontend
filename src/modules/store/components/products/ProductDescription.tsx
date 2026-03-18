import { FC } from "react"

interface IProductDescription {
  title: string
  description?: string | null
}

export const ProductDescription: FC<IProductDescription> = ({ title, description }) => {
  console.log(title, description)

  return (
    <div className="flex flex-col justify-between py-8 h-full">
      <div>
        <div className="mb-2 space-y-1">
          <p className="font-display text-xl font-bold leading-tight">
            <span className="mr-2 opacity-40">—</span>
            {title}
          </p>
        </div>
        {description && (
          <p className="font-text text-xs leading-relaxed max-w-[260px]">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
