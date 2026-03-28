import { EVENT } from '../constants/eventData'

const sponsorTiers = [
  { name: 'Oro', slots: 2, size: 'h-20 w-40' },
  { name: 'Plata', slots: 3, size: 'h-16 w-32' },
  { name: 'Bronce', slots: 4, size: 'h-14 w-28' },
  { name: 'Comunidades aliadas', slots: 6, size: 'h-12 w-24' },
]

function Sponsors() {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flisol-orange">
          Aliados
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Patrocinadores y comunidades
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-flisol-muted sm:text-lg">
          FLISoL UTP {EVENT.year} es posible gracias al apoyo de empresas y
          comunidades que creen en el software libre.
        </p>
      </div>

      {/* Sponsor tiers */}
      <div className="mt-12 space-y-10">
        {sponsorTiers.map((tier) => (
          <div key={tier.name} className="animate-fade-in-up">
            <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-zinc-400">
              {tier.name}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {Array.from({ length: tier.slots }).map((_, i) => (
                <div
                  key={i}
                  className={`${tier.size} flex items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-xs text-zinc-500 transition duration-300 hover:border-flisol-orange/30 hover:bg-white/[0.04]`}
                >
                  <span className="select-none">Tu logo aquí</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900/80 to-black p-8 text-center sm:p-10 animate-fade-in-up delay-300">
        <h3 className="text-2xl font-bold sm:text-3xl">
          ¿Quieres ser patrocinador?
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-300 sm:text-lg">
          Si tu empresa o comunidad quiere apoyar la difusión del software libre
          en el Perú, ¡nos encantaría contar contigo!
        </p>
        <a
          href={`mailto:${EVENT.contactEmail}?subject=Patrocinio%20FLISoL%20UTP%20${EVENT.year}`}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-flisol-orange px-8 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500"
          aria-label={`Enviar correo de patrocinio a ${EVENT.contactEmail}`}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          Escríbenos
        </a>
        <p className="mt-3 text-sm text-zinc-400">
          {EVENT.contactEmail}
        </p>
      </div>
    </div>
  )
}

export default Sponsors
