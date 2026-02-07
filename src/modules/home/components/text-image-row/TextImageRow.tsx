import { FC, ReactNode } from "react"
import Image from 'next/image'

interface ITextImageRow {
  children: ReactNode
  url: string
}

export const TextImageRow: FC<ITextImageRow> = ({ children, url }) => {
  return (
    <div className="flex flex-col small:flex-row gap-6 small:gap-10">
      <div className="w-full small:w-1/3 pt-4">
        <div className="max-w-[270px]">{children}</div>
      </div>
      <div className="relative w-full small:w-2/3 h-[300px] small:h-[500px]">
        <Image fill src={url} alt="atelje-row-image" className="object-cover" />
      </div>
    </div>
  )
}