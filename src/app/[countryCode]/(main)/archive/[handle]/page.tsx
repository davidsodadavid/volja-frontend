import { Metadata } from "next"
import { notFound } from "next/navigation"
import { listArchiveProducts } from "@lib/data/products"
import { getRegion, listRegions } from "@lib/data/regions"
import ArchiveProductTemplate from "@modules/products/templates/ArchiveProductTemplate"

type Props = {
  params: Promise<{ countryCode: string; handle: string }>
}

export async function generateStaticParams() {
  try {
    const countryCodes = await listRegions().then((regions) =>
      regions?.map((r) => r.countries?.map((c) => c.iso_2)).flat()
    )

    if (!countryCodes) {
      return []
    }

    const promises = countryCodes.map(async (country) => {
      const { products } = await listArchiveProducts({
        page: 1,
        limit: 100,
        countryCode: country,
      })

      return {
        country,
        products,
      }
    })

    const countryProducts = await Promise.all(promises)

    return countryProducts
      .flatMap((countryData) =>
        countryData.products.map((product) => ({
          countryCode: countryData.country,
          handle: product.handle,
        }))
      )
      .filter((param) => param.handle)
  } catch (error) {
    console.error(
      `Failed to generate static paths for archive product pages: ${
        error instanceof Error ? error.message : "Unknown error"
      }.`
    )
    return []
  }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const { handle } = params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const { products } = await listArchiveProducts({
    page: 1,
    limit: 1,
    countryCode: params.countryCode,
    handle,
  })

  const product = products[0]

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

export default async function ArchiveProductPage(props: Props) {
  const params = await props.params
  const region = await getRegion(params.countryCode)

  if (!region) {
    notFound()
  }

  const allProducts = await listArchiveProducts({
    page: 1,
    limit: 100,
    countryCode: params.countryCode,
  })

  const product = allProducts.products.find(p => p.handle === params.handle)

  if (!product) {
    notFound()
  }

  return (
    <ArchiveProductTemplate
      product={product}
      region={region}
      countryCode={params.countryCode}
    />
  )
}