import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Atelje Volja.",
}

export default function PrivacyPage() {
  return (
    <div className="content-container py-20 font-text">
      <h1 className="text-[60px] font-text mb-8 text-center">Privacy Policy</h1>
      <div className="text-sm space-y-12">
        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">General Information</h2>
          <p className="mb-4">This website is operated by Atelje Volja d.o.o..</p>
          <p className="mb-2">Registered address:</p>
          <p>Njegoševa cesta 6e<br />1000 Ljubljana<br />Slovenia</p>
          <p className="mt-2">Email: <a href="mailto:info@ateljevolja.si" className="underline">info@ateljevolja.si</a></p>
          <p className="mt-4">We are committed to protecting your personal data and handling it responsibly, in accordance with the General Data Protection Regulation (GDPR).</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">What Data We Collect</h2>
          <p className="mb-4">When you use our website or place an order, we may collect the following information:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>Name and surname</li>
            <li>Shipping and billing address</li>
            <li>Email address</li>
            <li>Phone number (if provided)</li>
            <li>Payment information (processed securely via Stripe)</li>
          </ul>
          <p>We only collect data that is necessary to process your order or provide our services.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">How We Use Your Data</h2>
          <p className="mb-2">Your data is used to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>process and deliver your orders</li>
            <li>communicate with you regarding your purchase</li>
            <li>respond to inquiries</li>
            <li>improve our services</li>
          </ul>
          <p>If you subscribe to our newsletter, your email address will be used to send updates, products, and news related to Volja.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Newsletter</h2>
          <p className="mb-4">We use Mailchimp to manage our newsletter.</p>
          <p className="mb-4">By subscribing, you agree that your email address will be stored and processed through Mailchimp for the purpose of sending newsletters.</p>
          <p>You can unsubscribe at any time by clicking the link in the email or contacting us directly.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Sharing of Data</h2>
          <p className="mb-4">We do not sell or share your personal data with third parties for marketing purposes.</p>
          <p className="mb-2">Your data may be shared only with trusted service providers when necessary to operate our business, such as:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>payment processing (Stripe)</li>
            <li>shipping providers (Pošta Slovenije)</li>
            <li>email services (Mailchimp)</li>
          </ul>
          <p>These providers only process data required to perform their services.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Data Retention</h2>
          <p className="mb-2">We retain your personal data only as long as necessary to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>fulfill orders</li>
            <li>comply with legal obligations</li>
            <li>resolve disputes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Your Rights</h2>
          <p className="mb-4">Under GDPR, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>access your personal data</li>
            <li>request correction or deletion</li>
            <li>withdraw consent at any time</li>
            <li>request restriction of processing</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:info@ateljevolja.si" className="underline">info@ateljevolja.si</a>.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Cookies</h2>
          <p>This website may use basic cookies to ensure proper functionality and improve user experience.</p>
          <p className="mt-4">You can control or disable cookies through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-[30px] font-display mb-4 text-center">Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy when necessary.</p>
          <p>Any changes will be published on this page.</p>
        </section>
      </div>
    </div>
  )
}
