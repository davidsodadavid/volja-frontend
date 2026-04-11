"use client"

import { FC } from "react"
import { useCountdown } from "./useCountdown"

interface PreorderCountdownProps {
  targetDate: string
}

export const PreorderCountdown: FC<PreorderCountdownProps> = ({ targetDate }) => {
  const { days, h, m, s, expired } = useCountdown(targetDate)

  if (expired) {
    return null
  }

  return (
    <div className="mb-4">
      <p className="font-text text-sm mb-1">Preorder ends in:</p>
      {days > 0 ? (
        <p className="font-display text-5xl font-bold tabular-nums">
          {days} {days === 1 ? "day" : "days"}
        </p>
      ) : (
        <p className="font-display text-5xl font-bold tabular-nums">
          {h}:{m}:{s}
        </p>
      )}
    </div>
  )
}
