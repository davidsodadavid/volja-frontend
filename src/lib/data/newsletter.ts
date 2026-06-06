"use server"

import { sdk } from "@lib/config"

export async function subscribeNewsletter(
  _: unknown,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  const email = formData.get("email") as string
  const token = formData.get("token") as string

  if (!email || !token) {
    return { success: false, message: "Email and captcha token are required." }
  }

  try {
    await sdk.client.fetch("/store/subscribe", {
      method: "POST",
      body: { email, token },
    })
    return { success: true, message: "You're subscribed!" }
  } catch (err: any) {
    const status = err?.status ?? 0
    if (status === 409) {
      return { success: false, message: "This email is already subscribed." }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
