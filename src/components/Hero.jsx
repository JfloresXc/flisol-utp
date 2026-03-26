import { useEffect, useMemo, useState } from 'react'

const targetDate = new Date('2026-04-25T09:00:00-05:00').getTime()

function getTimeLeft() {
  const now = Date.now()
  const difference = Math.max(targetDate - now, 0)

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const timerBlocks = useMemo(
    () => [
      { label: 'Días', value: timeLeft.days },
      { label: 'Horas', value: timeLeft.hours },
      { label: 'Minutos', value: timeLeft.minutes },
      { label: 'Segundos', value: timeLeft.seconds },
    ],
    [timeLeft],
  )

  return (
    <section
      id="inicio"
      className="hero-pattern relative overflow-hidden pt-32 sm:pt-36"
    >
      <div className="hero-gradient-pointer-events absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="order-2 flex justify-center lg:order-1 lg:justify-start">
            <img
              src="/images/flisol-logo.png"
              alt="Logo FLISoL"
              className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          <div className="order-1 lg:order-2 lg:justify-self-end lg:text-left">
            <div className="inline-flex animate-pulse rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-100 sm:text-sm">
              🌎 25 de abril · Lima, Perú · Gratis
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              FLISoL 2026
              <span className="block text-flisol-orange">Lima UTP</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-100 sm:text-xl">
              Festival Latinoamericano de Instalación de Software Libre
            </p>

            <p className="mt-4 max-w-3xl text-base text-flisol-muted sm:text-lg">
              Un día entero de charlas, talleres e instalaciones de software libre.
              Organizado por LEAD UTP.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://sessionize.com/flisol-utp-2026"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-flisol-orange px-7 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500"
              >
                Sé ponente →
              </a>
              <a
                href="#que-es-flisol"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:border-white"
              >
                ¿Qué es FLISoL?
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {timerBlocks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-glow"
                >
                  <div className="text-3xl font-bold text-white sm:text-4xl">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-flisol-muted sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
