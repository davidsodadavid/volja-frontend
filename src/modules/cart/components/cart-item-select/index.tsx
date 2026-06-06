"use client"

import {
  SelectHTMLAttributes,
  forwardRef,
} from "react"

type NativeSelectProps = {
  placeholder?: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">

const CartItemSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ placeholder = "Select...", className, children, ...props }, ref) => {
    return (
      <div className="relative inline-block">
        <select
          ref={ref}
          {...props}
          className={`border border-black bg-white px-2 py-1 text-[16px] outline-none cursor-pointer pr-8 appearance-none ${className || ""}`}
        >
          <option disabled value="">
            {placeholder}
          </option>
          {children}
        </select>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-[16px]">↓</span>
      </div>
    )
  }
)

CartItemSelect.displayName = "CartItemSelect"

export default CartItemSelect
