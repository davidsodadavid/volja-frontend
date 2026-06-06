import { FC } from "react"

interface IFullWidthVideo {
  url: string
}

export const FullWidthVideo: FC<IFullWidthVideo> = ({ url }) => {
  return (
    <div className="relative w-full" style={{ height: "80vh" }}>
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}