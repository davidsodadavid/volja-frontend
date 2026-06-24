import { FC } from "react"

interface IFullWidthVideo {
  url: string
  urlVertical?: string
}

export const FullWidthVideo: FC<IFullWidthVideo> = ({ url, urlVertical }) => {
  return (
    <div className="relative w-full" style={{ height: "80vh" }}>
      <video
        src={url}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover max-[700px]:hidden"
      />
      {urlVertical && (
        <video
          src={urlVertical}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden max-[700px]:block"
        />
      )}
    </div>
  )
}