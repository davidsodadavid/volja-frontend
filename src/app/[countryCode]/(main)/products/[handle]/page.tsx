import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getPreOrderProduct } from "@lib/data/pre-order"
import { FeaturedProduct } from "@modules/store/components/products/FeaturedProduct"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { handle } = await props.params
  const product = await getPreOrderProduct(handle)

  if (!product) {
    notFound()
  }

  return {
    title: `${product.title} | Atelje Volja`,
    description: `${product.title}`,
    openGraph: {
      title: `${product.title} | Atelje Volja`,
      description: `${product.title}`,
      images: product.thumbnail ? [product.thumbnail] : [],
    },
  }
}

export default async function ProductPage(props: Props) {
  const { handle, countryCode } = await props.params

  const product = await getPreOrderProduct(handle)

  if (!product) {
    notFound()
  }

  return (
    <div className="content-container">
      <FeaturedProduct product={product} countryCode={countryCode} />
    </div>
  )
}
