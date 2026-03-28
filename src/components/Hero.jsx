import { useEffect, useMemo, useState } from 'react'
import { EVENT } from '../constants/eventData'

const targetDate = new Date(EVENT.targetDateISO).getTime()

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
          <div className="order-1 flex justify-center lg:order-1 lg:justify-start animate-slide-in-left delay-200">
            <img
              src={EVENT.logoFlisol}
              alt="Logo oficial del Festival Latinoamericano de Instalación de Software Libre (FLISoL)"
              className="h-auto w-full max-w-xs sm:max-w-sm lg:max-w-md"
            />
          </div>

          <div className="order-2 lg:order-2 lg:justify-self-end text-center">
            <div className="inline-flex animate-pulse rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-zinc-100 sm:text-sm animate-fade-in">
              🌎 {EVENT.dateShort} · {EVENT.city}, {EVENT.country} · {EVENT.costShort}
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl animate-fade-in-up delay-100">
              FLISoL {EVENT.year}
              <span className="block text-flisol-orange">
                {EVENT.city} UTP
              </span>
            </h1>

            <p className="mt-6 text-lg text-zinc-100 sm:text-xl animate-fade-in-up delay-200">
              {EVENT.fullName}
            </p>

            <p className="mt-4 max-w-3xl text-base text-flisol-muted sm:text-lg animate-fade-in-up delay-300">
              Un día entero de charlas, talleres e instalaciones de software libre.
              Organizado por {EVENT.organizer}.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up delay-400">
              <a
                href={EVENT.sessionizeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-flisol-orange px-7 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500 focus-visible:ring-2 focus-visible:ring-flisol-orange focus-visible:ring-offset-2 focus-visible:ring-offset-flisol-black"
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

            <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-3 mx-auto w-full animate-fade-in-up delay-500">
              {timerBlocks.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-2 sm:p-4 text-center shadow-glow transition-all duration-500 hover:border-flisol-orange/40 hover:bg-white/[0.08]"
                >
                  <div className="text-xl sm:text-3xl lg:text-4xl font-bold tabular-nums text-white" aria-label={`${item.value} ${item.label}`}>
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-[9px] sm:text-xs uppercase tracking-wide text-flisol-muted">
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
