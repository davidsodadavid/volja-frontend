import { convertToLocale } from "@lib/util/money"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"

type LineItemPriceProps = {
  item: HttpTypes.StoreCartLineItem | HttpTypes.StoreOrderLineItem
  style?: "default" | "tight"
  currencyCode: string
}

const LineItemPrice = ({
  item,
  style = "default",
  currencyCode,
}: LineItemPriceProps) => {
  const hasReducedPrice =
    item.compare_at_unit_price != null &&
    item.compare_at_unit_price > item.unit_price

  return (
    <div className="flex flex-col gap-x-2 text-ui-fg-subtle items-end">
      <div className="text-left">
        {hasReducedPrice && (
          <div className="flex flex-col items-end">
            <span className="font-display text-sm line-through opacity-50">
              {convertToLocale({
                amount: item.compare_at_unit_price! * item.quantity,
                currency_code: currencyCode,
              })}
            </span>
            <span className="font-display text-sm font-bold">
              {convertToLocale({
                amount: item.unit_price * item.quantity,
                currency_code: currencyCode,
              })}
            </span>
          </div>
        )}
        {!hasReducedPrice && (
          <span
            className={clx("text-base-regular")}
            data-testid="product-price"
          >
            {convertToLocale({
              amount: item.unit_price * item.quantity,
              currency_code: currencyCode,
            })}
          </span>
        )}
      </div>
    </div>
  )
}

export default LineItemPrice
