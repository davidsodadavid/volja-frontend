"use client"

import { useGoogleReCaptcha } from "@google-recaptcha/react"
import { useActionState, useRef, useTransition } from "react"
import { subscribeNewsletter } from "@lib/data/newsletter"

const initialState = { success: false, message: "" }

export default function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const { executeV3 } = useGoogleReCaptcha()
  const [state, action] = useActionState(subscribeNewsletter, initialState)
  const [pending, startTransition] = useTransition()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const token = await executeV3("subscribe")
    if (!token) return

    const formData = new FormData(formRef.current!)
    formData.set("token", token)
    startTransition(() => action(formData))
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-2 flex-1">
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        required
        disabled={pending || state.success}
        className="border border-black px-4 py-2 text-[30px] w-full outline-none disabled:opacity-50"
      />
      <input type="hidden" name="token" />
      <button
        type="submit"
        disabled={pending || state.success}
        className="group bg-black text-white px-4 py-2 text-[30px] flex items-center justify-between w-full disabled:opacity-50"
      >
        <span className="transition-transform duration-300 group-hover:translate-x-5">
          {pending ? "Subscribing..." : state.success ? "Subscribed!" : "Subscribe"}
        </span>
        <span>&rarr;</span>
      </button>
      {state.message && (
        <p className={`font-text text-sm ${state.success ? "text-green-700" : "text-red-600"}`}>
          {state.message}
        </p>
      )}
    </form>
  )
}
