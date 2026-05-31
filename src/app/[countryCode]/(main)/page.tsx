import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { TextImageRow } from "@modules/home/components/text-image-row/TextImageRow"
import { FullWidthVideo } from "@modules/home/components/full-width-video/FullWidthVideo"

export const metadata: Metadata = {
  title: "Atelje Volja",
  description: "",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <main className="content-container flex flex-col gap-12 py-20">
        <FullWidthVideo url="/video/volja.mov" />
        <TextImageRow url="/images/2.png">
          <div className="text-sm">
           Atelje Volja is a menswear studio and shop at Trubarjeva 55 in Ljubljana. This website runs on a
monthly preorder system: one or two pieces released at a time, made in a single batch at a lower
price than the finished stock. Once the preorder closes, remaining pieces are available in the shop
until they're gone.
          </div>
          <div className="text-sm mt-6">
           We design and produce everything in-house in Ljubljana — simple, well-made menswear with no
unnecessary complexity. Clean cuts, honest materials, made in small quantities. One considered
piece at a time, made locally, built to last.
          </div>
        </TextImageRow>
      </main>
    </>
  )
}
