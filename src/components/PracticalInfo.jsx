import { EVENT } from '../constants/eventData'

const details = [
  {
    title: 'Fecha',
    value: EVENT.date,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Hora',
    value: EVENT.startTime,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Lugar',
    value: EVENT.locationFull,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Costo',
    value: EVENT.cost,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

function PracticalInfo() {
  return (
    <div className="animate-fade-in-up text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">Información práctica</h2>
      <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 text-left">
        {details.map((item, index) => (
          <article
            key={item.title}
            className={`rounded-2xl border border-white/10 bg-zinc-900/80 p-6 transition duration-300 hover:border-flisol-orange/45 hover:-translate-y-1 animate-fade-in-up delay-${(index + 1) * 100}`}
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex rounded-lg bg-flisol-orange/10 p-2 text-flisol-orange">
                {item.icon}
              </span>
              <p className="text-sm uppercase tracking-wider text-flisol-muted">
                {item.title}
              </p>
            </div>
            <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PracticalInfo
