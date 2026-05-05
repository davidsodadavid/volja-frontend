import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description: "Shipping and returns policy for Atelje Volja.",
}

export default function ShippingReturnsPage() {
  return (
    <div className="content-container py-20 font-text">
      <h1 className="text-[60px] font-text mb-8 text-center">Shipping & Returns</h1>
      <div className="text-sm space-y-12">
        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Production & Shipping</h2>
          <p className="mb-4">Volja garments are produced through a preorder system.</p>
          <p className="mb-4">We collect orders over a limited period (typically 7–14 days), after which all garments are produced in batches at our atelier.</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Preorder window: 7–14 days</li>
            <li>Production time: approx. 2 weeks after preorder closes</li>
            <li>Shipping: 1–3 working days after production is complete</li>
          </ul>
          <p className="mb-4">Each production cycle is limited, which means availability may vary.</p>
          <p className="mb-4">This approach allows us to reduce overproduction and focus on making each piece with care and precision.</p>
          <p>You will receive tracking information once your order has been shipped.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Shipping</h2>
          <p className="mb-4">We ship worldwide with Pošta Slovenije.</p>
          <p className="mb-2">Shipping costs are calculated at checkout and vary depending on location:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Slovenia</li>
            <li>European Union</li>
            <li>Rest of the world</li>
          </ul>
          <p>Delivery times may vary depending on your local postal service and customs procedures.</p>
          <p className="mt-4">Any customs duties or import taxes are the responsibility of the customer.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Returns</h2>
          <p className="mb-4">You have the right to return standard items within 14 days of receiving your order, in accordance with EU regulations.</p>
          <p className="mb-4">Before sending a return, please contact us to arrange the process.</p>
          <p className="mb-2">To be eligible for a return, items must be:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>unworn</li>
            <li>undamaged</li>
            <li>in original condition</li>
          </ul>
          <p>Customers are responsible for return shipping costs.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Non-returnable items</h2>
          <p className="mb-2">The following items cannot be returned:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>made-to-order garments</li>
            <li>custom or personalized pieces</li>
          </ul>
          <p>If you are unsure whether an item is eligible, please contact us before placing your order.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Exchanges</h2>
          <p className="mb-4">We offer exchanges depending on availability.</p>
          <p>Due to our small-batch and made-to-order production, we recommend contacting us directly to find the best solution.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Repairs</h2>
          <p className="mb-4">We offer free repairs on all Volja garments for up to 10 years from their embroidered "date of birth".</p>
          <p className="mb-4">Customers are responsible only for shipping costs to and from the atelier.</p>
          <p>This service is part of our commitment to extending the life of each garment.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Contact</h2>
          <p>For all inquiries regarding shipping, returns, exchanges, or repairs, please contact us directly at <a href="mailto:info@ateljevolja.si" className="underline">info@ateljevolja.si</a>.</p>
        </section>
      </div>
    </div>
  )
}
