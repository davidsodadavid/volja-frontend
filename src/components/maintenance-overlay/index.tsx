"use client"

import { useState, useEffect } from "react"
import { intervalToDuration, isPast } from "date-fns"

function getNextFriday1700(): string {
  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()

  if (day === 5 && hour < 17) {
    const today = new Date(now)
    today.setHours(17, 0, 0, 0)
    return today.toISOString()
  }

  const daysUntilFriday = (5 - day + 7) % 7
  const nextFriday = new Date(now)
  nextFriday.setDate(now.getDate() + (daysUntilFriday || 7))
  nextFriday.setHours(17, 0, 0, 0)
  return nextFriday.toISOString()
}

function useCountdown(target: string) {
  const [countdown, setCountdown] = useState({ days: 0, expired: true })

  useEffect(() => {
    function tick() {
      const d = new Date(target)
      if (isPast(d)) {
        setCountdown({ days: 0, expired: true })
        return
      }
      const { days = 0 } = intervalToDuration({ start: new Date(), end: d })
      setCountdown({ days, expired: false })
    }

    tick()
    const id = setInterval(tick, 1000 * 60)
    return () => clearInterval(id)
  }, [target])

  return countdown
}

export function MaintenanceOverlay() {
  const [mounted, setMounted] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const target = getNextFriday1700()
  const { days, expired } = useCountdown(target)

  useEffect(() => {
    setMounted(true) // eslint-disable-line react-hooks/set-state-in-effect
  }, [])

  if (!mounted) return null
  if (expired || unlocked) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "volja2026") {
      setUnlocked(true)
    } else {
      setError(true)
      setPassword("")
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="text-center px-8">
        <img src="/images/2.png" alt="Atelje Volja" className="w-[600px] max-w-full mb-4 mx-auto" />
        <p className="font-text text-sm mb-8">
          The website is launching this Friday.
        </p>
        <p className="font-display text-5xl font-bold tabular-nums mb-8">
          {days} {days === 1 ? "day" : "days"}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(false) }}
            placeholder="Enter password"
            className="border border-black px-4 py-2 text-[20px] w-[250px] outline-none text-center"
          />
          {error && <p className="text-red-500 text-xs">Incorrect password</p>}
          <button
            type="submit"
            className="bg-black text-white font-display px-6 py-2 text-[20px]"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
