import { SCHEDULE } from '../constants/eventData'
import { speakersData } from '../constants/speakersData'

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
  activity: {
    dot: 'bg-yellow-400',
    badge: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    label: 'Dinámica',
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
        <h2 className="text-3xl font-bold sm:text-4xl">Agenda oficial</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-flisol-muted sm:text-lg">
          ¡Acompáñanos a disfrutar de estas grandes ponencias!
        </p>
        
        <div className="mt-6 flex justify-center animate-fade-in-up delay-200">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300 shadow-sm backdrop-blur-sm">
            <svg className="h-4 w-4 text-flisol-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Auditorio UTP Torre Arequipa, Lima
          </div>
        </div>
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

            // Intentamos buscar el ponente comparando el título de la sesión o si su nombre aparece en la descripción
            const speaker = speakersData.find((s) => {
              if (s.sessionTitle === item.title) return true
              if (item.title.includes('opencode') && s.sessionTitle.includes('opencode')) return true
              if (item.title.includes('Gemma 4') && s.sessionTitle.includes('Gemma 4')) return true
              if (item.description && item.description.includes(s.name.split(' ')[0])) return true
              return false
            })

            return (
              <li
                key={index}
                className={`group relative flex flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.01] p-5 transition duration-300 hover:border-white/10 hover:bg-white/[0.02] sm:ml-8 animate-fade-in-up delay-${Math.min((index + 1) * 100, 700)}`}
              >
                {/* Dot */}
                <span
                  className={`absolute -left-[32px] top-6 hidden h-[15px] w-[15px] rounded-full border-2 border-flisol-black sm:block ${style.dot}`}
                  style={{ marginLeft: '1px' }}
                  aria-hidden="true"
                />

                {/* header de la card: Time & Badge (status) */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold tabular-nums text-zinc-400">
                      {item.time}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.badge}`}
                    >
                      {style.label}
                    </span>
                  </div>
                  {/* Track en la derecha (solo visible en pantallas medianas o si es necesario, o en su lugar aquí) */}
                  {speaker && speaker.track && (
                    <span className="hidden sm:inline-flex items-center rounded-full bg-sky-400/10 border border-sky-400/20 px-3 py-1 text-[11px] font-semibold text-sky-400 whitespace-nowrap">
                      {speaker.track}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {speaker ? (
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      
                      {/* Avatar e info del autor */}
                      <div className="flex items-center gap-3">
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          loading="lazy"
                          className="h-10 w-10 shrink-0 rounded-full border border-white/10 object-cover"
                        />
                        <span className="text-sm font-medium text-zinc-300">
                          {speaker.name}
                        </span>
                      </div>

                      {/* Track en móvil, debajo del autor */}
                      {speaker.track && (
                        <span className="sm:hidden inline-flex items-center rounded-full bg-sky-400/10 border border-sky-400/20 px-3 py-1 text-[11px] font-semibold text-sky-400 whitespace-nowrap">
                          {speaker.track}
                        </span>
                      )}

                    </div>
                  ) : (
                    item.description && (
                      <p className="text-sm text-flisol-muted">
                        {item.description}
                      </p>
                    )
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
