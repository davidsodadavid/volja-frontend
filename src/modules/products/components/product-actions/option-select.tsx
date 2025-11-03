import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import React from "react"

type OptionSelectProps = {
  option: HttpTypes.StoreProductOption
  current: string | undefined
  updateOption: (title: string, value: string) => void
  title: string
  disabled: boolean
  "data-testid"?: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  "data-testid": dataTestId,
  disabled,
}) => {
  const filteredOptions = (option.values ?? []).map((v) => v.value)

  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex flex-wrap gap-4" data-testid={dataTestId}>
        {filteredOptions.map((v) => (
          <button
            onClick={() => updateOption(option.id, v)}
            key={v}
            className={clx(
              "text-black text-base flex items-center justify-center focus:outline-none",
              {
                "w-10 h-10 rounded-full border-2 border-black": v === current, // fixed circle
                "w-10 h-10": v !== current, // same size for unselected
              }
            )}
            disabled={disabled}
            data-testid="option-button"
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  )
}

export default OptionSelect
