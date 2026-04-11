"use client"

import { useState, useEffect } from "react"
import { intervalToDuration, isPast } from "date-fns"

type Countdown = { days: number; h: string; m: string; s: string; expired: boolean }

const pad = (n: number | undefined) => String(n ?? 0).padStart(2, "0")

function calc(targetDate: string): Countdown {
  const target = new Date(targetDate)
  if (isPast(target)) return { days: 0, h: "00", m: "00", s: "00", expired: true }
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = intervalToDuration({
    start: new Date(),
    end: target,
  })
  return { days, h: pad(hours), m: pad(minutes), s: pad(seconds), expired: false }
}

export function useCountdown(targetDate: string): Countdown {
  const [time, setTime] = useState<Countdown>({ days: 0, h: "00", m: "00", s: "00", expired: false })

  useEffect(() => {
    setTime(calc(targetDate))
    const id = setInterval(() => setTime(calc(targetDate)), 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return time
}
