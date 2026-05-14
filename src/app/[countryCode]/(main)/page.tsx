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
        <FullWidthVideo url="https://www.w3schools.com/html/mov_bbb.mp4" />
        <TextImageRow url="/images/2.png">
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt odio et enim semper iaculis. Fusce vestibulum venenatis
            purus. Fusce et arcu arcu. Suspendisse lacus lorem, pharetra ut
            blandit quis, lacinia quis enim. Quisque quis elementum justo, ut
            dictum dui. Sed eget pellentesque nibh. Integer iaculis ante sed
            magna ornare fringilla. Aenean sit amet purus quam. Aliquam id
            pulvinar leo, vel maximus enim.
          </div>
        </TextImageRow>
        <TextImageRow url="/images/3.png">
          <div className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt odio et enim semper iaculis. Fusce vestibulum venenatis
            purus. Fusce et arcu arcu. Suspendisse lacus lorem, pharetra ut
            blandit quis, lacinia quis enim. Quisque quis elementum justo, ut
            dictum dui. Sed eget pellentesque nibh. Integer iaculis ante sed
            magna ornare fringilla. Aenean sit amet purus quam. Aliquam id
            pulvinar leo, vel maximus enim.
          </div>
        </TextImageRow>
      </main>
    </>
  )
}
