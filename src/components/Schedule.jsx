import { SCHEDULE } from '../constants/eventData'

const typeStyles = {
  opening: {
    dot: 'bg-emerald-400',
    badge: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    label: 'Apertura',
  },
  talk: {
    dot: 'bg-sky-400',
    badge: 'bg-sky-400/10 text-sky-400 border-sky-400/20',
    label: 'Charla',
  },
  workshop: {
    dot: 'bg-violet-400',
    badge: 'bg-violet-400/10 text-violet-400 border-violet-400/20',
    label: 'Taller',
  },
  break: {
    dot: 'bg-zinc-500',
    badge: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20',
    label: 'Receso',
  },
  closing: {
    dot: 'bg-flisol-orange',
    badge: 'bg-flisol-orange/10 text-flisol-orange border-flisol-orange/20',
    label: 'Cierre',
  },
}

function Schedule() {
  return (
    <div className="animate-fade-in-up">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flisol-orange">
          Programa del día
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Agenda tentativa</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-flisol-muted sm:text-lg">
          La agenda puede sufrir cambios. ¡Mantente atento a nuestras redes para
          la versión final!
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mt-10">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-flisol-orange/60 via-white/10 to-transparent sm:block"
          aria-hidden="true"
        />

        <ol className="space-y-3">
          {SCHEDULE.map((item, index) => {
            const style = typeStyles[item.type] || typeStyles.break

            return (
              <li
                key={index}
                className={`group relative grid gap-2 rounded-2xl border border-white/[0.06] p-4 transition duration-300 hover:border-white/15 hover:bg-white/[0.02] sm:grid-cols-[140px_1fr] sm:gap-6 sm:pl-8 animate-fade-in-up delay-${Math.min((index + 1) * 100, 700)}`}
              >
                {/* Dot */}
                <span
                  className={`absolute left-0 top-6 hidden h-[15px] w-[15px] rounded-full border-2 border-flisol-black sm:block ${style.dot}`}
                  aria-hidden="true"
                />

                {/* Time */}
                <span className="whitespace-nowrap text-sm font-semibold tabular-nums text-zinc-300 sm:pt-0.5">
                  {item.time}
                </span>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-base font-semibold text-white">
                      {item.title}
                    </span>
                    <span
                      className={`inline-flex rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm text-flisol-muted">{item.description}</p>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default Schedule
