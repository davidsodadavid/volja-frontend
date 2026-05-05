import { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Atelje Volja.",
}

export default function FAQPage() {
  return (
    <div className="content-container py-20 font-text">
      <h1 className="text-[60px] font-text mb-8 text-center">FAQ</h1>
      <div className="text-sm space-y-12">
        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">How does ordering work?</h2>
          <p className="mb-4">Most of our garments are made through a preorder system.</p>
          <p className="mb-2">You place an order → we produce the garment → we ship it to you.</p>
          <p>Production usually takes 5–7 working days, followed by shipping (another 5–7 days depending on location). This allows us to avoid overproduction and focus on making each piece with care.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Why do you work with preorders?</h2>
          <p className="mb-2">We produce in small batches and often only after an order is placed.</p>
          <p className="mb-2">This approach allows us to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>reduce waste</li>
            <li>stay flexible</li>
            <li>keep production local and controlled</li>
          </ul>
          <p>It also means you receive something that was made specifically for you, not taken from stock.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Where are the garments made?</h2>
          <p className="mb-4">All garments are designed, cut, and sewn in our atelier in Ljubljana.</p>
          <p>As we grow, parts of production may expand to trusted European partners, but the atelier remains the centre of design, development, and quality control.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">How long does delivery take?</h2>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Production: 5–7 working days</li>
            <li>Shipping: approx. 5–7 working days</li>
          </ul>
          <p>You will receive tracking information once your order is shipped.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Do you ship internationally?</h2>
          <p className="mb-4">Yes, we ship worldwide with Pošta Slovenije.</p>
          <p className="mb-2">Shipping costs vary depending on destination:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Slovenia</li>
            <li>EU</li>
            <li>Rest of the world</li>
          </ul>
          <p>These are calculated at checkout.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Can I return my order?</h2>
          <p className="mb-4">Yes, in accordance with EU regulations, you can return standard items within 14 days of receiving your order.</p>
          <p className="mb-2">Items must be:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>unworn</li>
            <li>undamaged</li>
            <li>in original condition</li>
          </ul>
          <p>Custom or made-to-order pieces are not eligible for return.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Do you offer exchanges?</h2>
          <p className="mb-4">Yes — exchanges are possible depending on availability.</p>
          <p>Since many items are made to order, we recommend contacting us directly to arrange the best solution.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Do you repair garments?</h2>
          <p className="mb-4">Yes.</p>
          <p className="mb-4">We offer free repairs on all Volja garments for 10 years from their "date of birth" (embroidered inside each piece).</p>
          <p className="mb-2">You only cover shipping costs to and from the atelier.</p>
          <p>Repairs are part of how we think about clothing — as something that should last, adapt, and stay in use.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">What is the "date of birth"?</h2>
          <p className="mb-4">Each garment has its own embroidered date of birth.</p>
          <p>It marks the moment the piece was made and serves as a reference point for its lifecycle — including repairs and long-term use.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">What payment methods do you accept?</h2>
          <p className="mb-4">All online payments are processed securely via Stripe.</p>
          <p className="mb-2">For orders within Slovenia, we also offer:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>payment on delivery</li>
            <li>in-store pickup at our atelier</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Can I visit the atelier?</h2>
          <p className="mb-4">Yes — our space is both a workshop and a shop.</p>
          <p>You can visit us during opening hours, see how garments are made, and try pieces in person.</p>
        </section>
      </div>
    </div>
  )
}
