"use client"

import React from "react"
import { useFormStatus } from "react-dom"

export function SubmitButton({
  children,
  className,
  "data-testid": dataTestId,
}: {
  children: React.ReactNode
  className?: string
  "data-testid"?: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className={`group bg-black text-white font-display px-4 py-3 text-[30px] flex items-center justify-between w-full h-[61px] disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`}
      data-testid={dataTestId}
      disabled={pending}
    >
      <span className="transition-transform duration-300 group-hover:translate-x-5">
        {pending ? "Loading..." : children}
      </span>
      {!pending && <span>→</span>}
    </button>
  )
}
