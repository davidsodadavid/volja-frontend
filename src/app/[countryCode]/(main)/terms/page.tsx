import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Atelje Volja.",
}

export default function TermsPage() {
  return (
    <div className="content-container py-20">
      <div className="flex flex-col small:flex-row gap-8 small:gap-12">
        <div className="small:w-1/4 small:sticky small:top-20 small:self-start small:items-start">
          <h1 className="text-[32px] small:text-[48px] font-display font-bold">Terms & Conditions</h1>
        </div>
        <div className="small:w-3/4 font-text text-sm space-y-12 pt-[18px]">
          <section>
            <h2 className="text-[30px] font-display mb-8">General Information</h2>
            <p className="mb-8">This website is operated by Atelje Volja d.o.o..</p>
            <p className="mb-2">Registered address:</p>
            <p>Njegoševa cesta 6e<br />1000 Ljubljana<br />Slovenia</p>
            <p className="mt-2">Tax ID: 83537392</p>
            <p>Email: <a href="mailto:info@ateljevolja.si" className="underline">info@ateljevolja.si</a></p>
            <p className="mt-4">By accessing this website and placing an order, you agree to the terms outlined below.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Products</h2>
            <p className="mb-8">All garments are designed and produced by Volja.</p>
            <p>Due to the nature of small-batch and made-to-order production, slight variations may occur between pieces. These variations are part of the production process and do not constitute defects.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Orders & Production</h2>
            <p className="mb-2">Most products are offered through a preorder system.</p>
            <p className="mb-2">Orders are collected over a defined period (typically 7–14 days), after which production begins.</p>
            <p className="mb-2">By placing an order, you acknowledge and accept:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>the production timeline?</li>
              <li>that your item is not shipped immediately</li>
              <li>that production begins after the preorder period closes</li>
            </ul>
            <p className="mt-4">Each production cycle is limited and availability may vary.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Pricing</h2>
            <p className="mb-2">All prices are listed in EUR and include VAT where applicable.</p>
            <p className="mb-2">Shipping costs are calculated separately at checkout.</p>
            <p>For international orders, additional customs duties or import taxes may apply and are the responsibility of the customer.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Payment</h2>
            <p className="mb-8">All online payments are processed securely via Stripe.</p>
            <p className="mb-2">For customers in Slovenia, additional options may include:</p>
            <ul className="list-disc pl-6 space-y-1 mb-8">
              <li>payment on delivery</li>
              <li>in-store pickup</li>
            </ul>
            <p>Orders will only be processed once payment has been successfully completed or confirmed.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Shipping</h2>
            <p className="mb-8">Orders are shipped worldwide via Pošta Slovenije.</p>
            <p className="mb-2">Estimated timelines:</p>
            <ul className="list-disc pl-6 space-y-1 mb-8">
              <li>Production: approx. 2 weeks after preorder closes</li>
              <li>Shipping: 1–3 working days after production</li>
            </ul>
            <p>Delivery times may vary depending on destination and postal services.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Right of Withdrawal (Returns)</h2>
            <p className="mb-8">In accordance with EU consumer protection laws, customers have the right to withdraw from a purchase within 14 days of receiving the product.</p>
            <p className="mb-2">To initiate a return, customers must contact us before sending the item back.</p>
            <p className="mb-2">Returned items must be:</p>
            <ul className="list-disc pl-6 space-y-1 mb-8">
              <li>unworn</li>
              <li>undamaged</li>
              <li>in original condition</li>
            </ul>
            <p>Return shipping costs are the responsibility of the customer.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Exceptions to Returns</h2>
            <p className="mb-2">The right of withdrawal does not apply to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-8">
              <li>made-to-order garments</li>
              <li>custom or personalized items</li>
            </ul>
            <p>These items cannot be returned.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Repairs</h2>
            <p className="mb-2">Volja offers free repairs on all garments for up to 10 years from their embroidered "date of birth".</p>
            <p className="mb-2">Customers are responsible only for shipping costs to and from the atelier.</p>
            <p>This service applies exclusively to Volja garments.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Intellectual Property</h2>
            <p>All content on this website, including designs, images, text, and branding, is the property of Atelje Volja d.o.o. and may not be used, reproduced, or distributed without permission.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Liability</h2>
            <p className="mb-2">We strive to ensure all information on this website is accurate and up to date. However, we do not guarantee that all content is free from errors.</p>
            <p>We are not liable for delays or issues caused by shipping providers or circumstances beyond our control.</p>
          </section>

          <section>
            <h2 className="text-[30px] font-display mb-8">Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of Slovenia.</p>
            <p>Any disputes shall be resolved in the competent courts of Slovenia.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
