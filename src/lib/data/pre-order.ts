"use server"

import { sdk } from "@lib/config"
import { HttpTypes } from "@medusajs/types"
import { getAuthHeaders } from "./cookies"

export type PreOrderVariant = Omit<HttpTypes.StoreProductVariant, "metadata"> & {
  available: boolean
  metadata: {
    color?: string
    size?: string
  } | null
  images: HttpTypes.StoreProductImage[]
}

export type ColorGroup = {
  color: string
  available: boolean
  variants: PreOrderVariant[]
}

export type PreOrderProduct = Omit<HttpTypes.StoreProduct, "variants"> & {
  pre_order_date: string
  variants: PreOrderVariant[]
  metadata: {
    size_chart: string
    bg_color: string
  }
  custom: {
    pre_order_date: string
    state: "PREORDER" | "IN_PROGRESS"
  }
}

export const getPreOrderProduct = async (
  handle: string,
  currency_code = "eur"
): Promise<PreOrderProduct | null> => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ product: PreOrderProduct }>(`/store/product/${handle}`, {
      method: "GET",
      query: { currency_code },
      headers,
      cache: "no-store",
    })
    .then(({ product }) => product ?? null)
    .catch(() => null)
}

export const listPreOrderProducts = async (): Promise<PreOrderProduct[]> => {
  const headers = {
    ...(await getAuthHeaders()),
  }

  return sdk.client
    .fetch<{ products: PreOrderProduct[] }>("/store/custom", {
      method: "GET",
      headers,
      cache: "no-store",
    })
    .then(({ products }) => products ?? [])
    .catch(() => [])
}
