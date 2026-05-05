import { Metadata } from "next"

import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { TextImageRow } from "@modules/home/components/text-image-row/TextImageRow"

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
        <TextImageRow url="/images/1.png">
          <ul className="list-none font-display leading-10 w-fit mx-auto [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
            <li className="text-[30px] font-bold">ATELJE</li>
            <li className="text-[30px] font-bold">SHOP</li>
            <li className="text-[30px]">Trubarjeva 55</li>
            <li className="font-text text-sm">Paragraph text</li>
            <li className="font-text text-sm">
              35 is max number of characters here
            </li>
            <li className="font-text text-sm">Lorem ipsum dolor sit</li>
            <li className="font-text text-sm">Circular approach</li>
            <li className="font-text text-sm">Facts only</li>
            <li className="font-text text-sm">Menswear something</li>
            <li className="font-text text-sm">Line 7</li>
            <li className="font-text text-sm">Line 8</li>
            <li className="font-text text-sm">Line 9</li>
            <li className="font-text text-sm">Max 10 lines of text</li>
          </ul>
        </TextImageRow>
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
