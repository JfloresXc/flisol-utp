import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { SCHEDULE } from '../constants/eventData'
import { speakersData } from '../constants/speakersData'
import { typography } from '../constants/designTokens'

// Color por tipo — el badge es el único portador de color en la lista
const typeStyles = {
  opening: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
  talk: { color: 'text-white', border: 'border-white/15', bg: 'bg-white/5' },
  workshop: { color: 'text-flisol-leadPurple', border: 'border-flisol-leadPurple/30', bg: 'bg-flisol-leadPurple/10' },
  break: { color: 'text-zinc-500', border: 'border-zinc-700/40', bg: 'bg-zinc-800/30' },
  activity: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
  closing: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

function Schedule() {
  return (
    <section id="agenda-internal" className="relative">
      {/* Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-flisol-orange/5 blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative"
      >
        {/* Editorial Header */}
        <div className="mb-10 space-y-6 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange">
            <div className="h-px w-12 bg-flisol-orange/50" />
            <span className={typography.sectionLabel}>Protocolo de Eventos</span>
          </motion.div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <motion.h2 variants={itemVariants} className={typography.sectionTitle}>
              AGENDA <br />
              <span className="outline-text text-white/10 uppercase">OFICIAL</span>
            </motion.h2>
            <p className="text-base font-light italic leading-relaxed text-zinc-500 lg:text-right lg:max-w-xs">
              Sincroniza tu reloj con la jornada más intensa de conocimiento libre.
            </p>
          </div>
        </div>

        {/* Compact List */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header de columnas — solo desktop */}
          <div className="mb-3 hidden grid-cols-[140px_90px_1fr_200px] gap-6 border-b border-white/5 pb-3 sm:grid">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Hora</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Tipo</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Sesión</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Speaker</span>
          </div>

          {SCHEDULE.map((item, index) => {
            const style = typeStyles[item.type] || typeStyles.break
            const speaker = speakersData.find(
              (s) => s.sessionTitle === item.title || item.title.includes(s.name.split(' ')[0])
            )
            const isBreak = item.type === 'break'

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group border-b border-white/5 transition-colors duration-200 hover:bg-white/[0.02] ${isBreak ? 'opacity-50' : ''}`}
              >
                {/* Desktop row */}
                <div className="hidden grid-cols-[140px_90px_1fr_200px] items-center gap-6 py-5 sm:grid">
                  {/* Hora */}
                  <span className="font-mono text-sm tabular-nums text-zinc-500">
                    {item.time.split(' - ')[0]}
                  </span>

                  {/* Tipo badge */}
                  <div className={`inline-flex w-fit items-center rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${style.color} ${style.border} ${style.bg}`}>
                    {item.type}
                  </div>

                  {/* Título */}
                  <h3 className="font-display text-xl font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-flisol-orange">
                    {item.title}
                  </h3>

                  {/* Speaker */}
                  {speaker ? (
                    <div className="flex items-center gap-2.5">
                      <img src={speaker.image} alt={speaker.name} className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" />
                      <span className="truncate text-sm text-zinc-400">{speaker.name}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-700">{item.description ? item.description.slice(0, 40) + '…' : '—'}</span>
                  )}
                </div>

                {/* Mobile row */}
                <div className="flex flex-col gap-2 py-4 sm:hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs tabular-nums text-zinc-500">{item.time.split(' - ')[0]}</span>
                    <div className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.color} ${style.border} ${style.bg}`}>
                      {item.type}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-flisol-orange">
                    {item.title}
                  </h3>
                  {speaker && (
                    <div className="flex items-center gap-2">
                      <img src={speaker.image} alt={speaker.name} className="h-6 w-6 rounded-full object-cover ring-1 ring-white/10" />
                      <span className="text-xs text-zinc-500">{speaker.name}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>


      </motion.div>
    </section>
  )
}

export default Schedule
