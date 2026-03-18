"use client"

import { FC, useEffect, useRef, useState } from "react"

export type SizeChartData = {
  sizes: string[]
  measurements: {
    label: string
    values: string[]
  }[]
}

interface ISizeChart {
  size_chart_string: string
}

export const SizeChart: FC<ISizeChart> = ({ size_chart_string }) => {
  const sizeChart: SizeChartData = JSON.parse(size_chart_string)
  const [open, setOpen] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="font-text text-sm underline underline-offset-2 opacity-60 hover:opacity-100 transition-opacity"
      >
        Size Chart
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
          <div
            ref={panelRef}
            className="relative bg-white max-w-2xl w-full mx-4 max-h-[80vh] flex flex-col"
            style={{ animation: "enter 180ms ease-out" }}
          >
            {/* Header */}
            <div className="flex items-baseline justify-between px-8 pt-8 pb-5 border-b border-black/10">
              <div>
                <h2 className="font-display text-2xl font-bold">Size Chart</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="font-text text-xs opacity-40 hover:opacity-100 transition-opacity tracking-wide uppercase"
              >
                Close
              </button>
            </div>

            {/* Table */}
            <div className="overflow-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10">
                    <th className="font-text text-[10px] uppercase tracking-[0.15em] opacity-40 px-8 py-3 font-normal w-36">
                      Measurement
                    </th>
                    {sizeChart.sizes.map((size) => (
                      <th
                        key={size}
                        className="font-display text-sm font-bold px-4 py-3 text-center min-w-[56px]"
                      >
                        {size}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sizeChart.measurements.map((row, i) => (
                    <tr
                      key={row.label}
                      className={i % 2 === 0 ? "bg-grey-5" : "bg-white"}
                    >
                      <td className="font-text text-xs px-8 py-3 opacity-70">{row.label}</td>
                      {row.values.map((val, j) => (
                        <td
                          key={j}
                          className="font-display text-sm text-center px-4 py-3"
                        >
                          {val || "—"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer note */}
            <div className="px-8 py-4 border-t border-black/10">
              <p className="font-text text-[10px] opacity-40 uppercase tracking-[0.1em]">All measurements in centimetres</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
