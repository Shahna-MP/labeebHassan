import ProfileCard from '@/components/profile/ProfileCard'
import { useEffect, useRef } from 'react'
import ScrollReveal from 'scrollreveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Illustration({ className }: { className?: string }) {
  const scrollRevealOneRef = useRef<HTMLDivElement[]>([])
  const scrollRevealTwoRef = useRef<HTMLDivElement[]>([])

  const addToScrollRevealOneRef = (el) => {
    if (el && !scrollRevealOneRef.current.includes(el)) {
      scrollRevealOneRef.current.push(el)
    }
  }

  const addToScrollRevealTwoRef = (el) => {
    if (el && !scrollRevealTwoRef.current.includes(el)) {
      scrollRevealTwoRef.current.push(el)
    }
  }

  useEffect(() => {
    scrollRevealOneRef.current.forEach((ref) =>
      ScrollReveal().reveal(ref, {
        delay: 1000,
        duration: 1400,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'bottom',
        interval: 200,
      }),
    )

    scrollRevealTwoRef.current.forEach((ref) =>
      ScrollReveal().reveal(ref, {
        delay: 400,
        duration: 600,
        distance: '40px',
        easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
        origin: 'right',
        interval: 150,
      }),
    )

    return () => ScrollReveal().destroy()
  }, [])

  return (
    <div className="from-orange-100 to-green-100 flex min-h-screen flex-col justify-between bg-gradient-to-r via-white">
      <main className="flex flex-col items-center justify-start px-4 sm:px-4 md:px-0">
        <div
          ref={addToScrollRevealTwoRef}
          className="mt-10 md:mt-12 xl:mt-24 w-full max-w-3xl shadow-md ring-1 ring-white/10 backdrop-blur-md"

        >
          {/* Profile & Contact Info */}
          <div className="flex flex-col items-center space-y-6 rounded-md bg-white/30 p-6 shadow-lg backdrop-blur-md md:flex-row md:space-x-6 md:space-y-0">
            <img
              src="/labeeb.png"
              alt="Labeeb Hassan"
              className="h-32 w-32 rounded-full object-cover object-top shadow-lg ring-4 ring-white"
            />

            <div className="space-y-2 text-left">
              <h2 className="whitespace-nowrap font-roboto text-2xl font-bold leading-tight tracking-wide text-gray-900 sm:text-3xl md:text-4xl">
                LABEEB HASSAN
              </h2>

              <p className="font-poppins text-lg font-semibold text-gray-800">General Secretary</p>

              <div className="font-poppins space-y-0.5 text-sm text-gray-700">
                <p>Indian Youth Congress</p>
                <p>Parliament Committee, Alathur</p>
              </div>

              <div className="font-poppins mt-3 space-y-1 text-sm text-gray-700">
                <p>
                  <FontAwesomeIcon icon={faPhone} className="mr-2 text-gray-700" />
                  <span className="font-semibold">9846091234 / 9447191234</span>
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-700" />
                  <a
                    href="mailto:mail@labeebhassan.com"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    mail@labeebhassan.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Slideshow Section + Footer Top */}
          <div className="flex flex-col">
            <ProfileCard />

            <div className="flex flex-col items-center justify-between gap-6 bg-white/60 p-6 shadow-inner sm:flex-row sm:items-center">
              <div className="flex flex-col gap-4 text-left sm:flex-row sm:items-center">
                <img
                  src="/icemagic.png"
                  alt="Ice Magic Logo"
                  className="ml-[-10px] h-10 object-contain sm:ml-0 md:h-12"
                />
                <div className="text-center text-sm text-gray-700 sm:ml-4 sm:text-left">
                  <div className="block sm:hidden">
                    <p>Mass Tower, Near Ittimani Hospital, Guruvayur Road,</p>
                    <p>Kunnamkulam – 680503</p>
                  </div>

                  <p className="hidden sm:block">Mass Tower, Near Ittimani Hospital</p>
                  <p className="hidden sm:block">Guruvayur Road, Kunnamkulam – 680503</p>

                  <p className="flex items-center justify-center gap-2 sm:justify-start">
                    <FontAwesomeIcon icon={faPhone} className="text-gray-700" />
                    <span>04885 212300 / 400 / 500</span>
                  </p>
                </div>
              </div>

              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-3 text-center text-sm text-gray-600">
        © 2025 All rights reserved. Powered by <span className="font-semibold">signrOots</span>
      </footer>
    </div>
  )
}

export default Illustration
