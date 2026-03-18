"use client"

import { FC } from "react"
import { useCountdown } from "./useCountdown"

interface PreorderCountdownProps {
  targetDate: string
}

export const PreorderCountdown: FC<PreorderCountdownProps> = ({ targetDate }) => {
  const { h, m, s, expired } = useCountdown(targetDate)

  if (expired) {
    return <p className="font-text text-sm mb-4">Preorder closed</p>
  }

  return (
    <div className="mb-4">
      <p className="font-text text-sm mb-1">Preorder ends in:</p>
      <p className="font-display text-5xl font-bold tabular-nums">
        {h}:{m}:{s}
      </p>
    </div>
  )
}
