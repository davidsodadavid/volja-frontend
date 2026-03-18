import { FC } from "react"

export const DiagonalSlash: FC = () => (
  <div
    className="absolute pointer-events-none"
    style={{
      inset: "-4px",
      background:
        "linear-gradient(to bottom right, transparent calc(50% - 1px), rgba(0,0,0,0.55) calc(50% - 1px), rgba(0,0,0,0.55) calc(50% + 1px), transparent calc(50% + 1px))",
    }}
  />
)
