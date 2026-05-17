import { Heading, Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

const EmptyCartMessage = () => {
  return (
    <div className="py-48 px-2 flex flex-col justify-center items-start" data-testid="empty-cart-message">
      <Heading
        level="h1"
        className="flex flex-row text-3xl-regular gap-x-2 items-baseline"
      >
        Cart
      </Heading>
      <Text className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        You don&apos;t have anything in your cart. Let&apos;s change that, use
        the link below to start browsing our products.
      </Text>
      <div>
        <LocalizedClientLink href="/store" className="group bg-black text-white font-display px-4 py-3 text-[30px] flex items-center justify-between w-full sm:w-[400px]">
          <span className="transition-transform duration-300 group-hover:translate-x-5">Explore products</span>
          <span>→</span>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
