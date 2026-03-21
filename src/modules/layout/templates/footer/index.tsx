export default async function Footer() {
  return (
    <footer className="w-full" id="footer">
      <div className="content-container py-8 font-display">
        <div className="flex flex-col small:flex-row justify-between gap-12">
          {/* Left side */}
          <div>
            <ul className="list-none leading-10 w-fit [&>li]:flex [&>li]:gap-[10px] [&>li]:items-baseline [&>li::before]:content-['–'] [&>li::before]:w-6 [&>li::before]:text-center [&>li::before]:flex-shrink-0">
              <li className="text-[30px] font-bold">ATELJE</li>
              <li className="text-[30px] font-bold">SHOP</li>
              <li className="text-[30px]">Trubarjeva 55</li>
              <li className="font-text text-sm">Monday to Friday</li>
              <li className="font-text text-sm">13:00 – 18:00</li>
              <li className="font-text text-sm">Saturday</li>
              <li className="font-text text-sm">10:00 – 16:00</li>
              <li className="font-text text-sm">Sunday Closed</li>
              <li className="font-text text-sm">Welcome</li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex flex-col gap-12 small:max-w-[500px] w-full">
            {/* Links - shown first on mobile, last on desktop */}
            <div className="flex flex-col small:flex-row text-[30px] gap-6 order-first small:order-last">
              <div className="max-w-[180px] w-full">
                <a
                  href="https://www.instagram.com/volja__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <span className="hover:underline">Instagram</span>
                  <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-4">
                    &rarr;
                  </span>
                </a>
              </div>
              <a href="mailto:info@ateljevolja.si" className="group">
                <span className="hover:underline">info@ateljevolja.si</span>
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-4">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col small:flex-row gap-6 small:items-start">
              <p className="font-text text-sm max-w-[180px]">
                Stay in the loop with new garments. Sign up for my newsletter.
              </p>
              <div className="flex flex-col gap-2 flex-1">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="border border-black px-4 py-2 text-[30px] w-full outline-none"
                />
                <button className="group bg-black text-white px-4 py-2 text-[30px] flex items-center justify-between w-full">
                  <span className="transition-transform duration-300 group-hover:translate-x-5">
                    Subscribe
                  </span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col small:flex-row gap-4 items-start small:items-center mt-20 font-text text-sm">
          <span>
            &copy; Volja {new Date().getFullYear()} All Rights Reserved
          </span>
          <a href="/terms" className="underline">
            Terms and Conditions
          </a>
          <a href="/cookies" className="underline">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  )
}
