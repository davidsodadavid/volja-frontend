import { FC, ReactNode } from "react"

interface IVideoTextRow {
  children: ReactNode
  url: string
}

export const VideoTextRow: FC<IVideoTextRow> = ({ children, url }) => {
  return (
    <div className="flex flex-col small:flex-row gap-6 small:gap-10">
      <div className="w-full small:w-1/3 pt-4">
        <div className="max-w-[270px]">{children}</div>
      </div>
      <div className="relative w-full small:w-2/3 aspect-[3/4]">
        <video
          src={url}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}