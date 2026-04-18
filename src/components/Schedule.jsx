import { motion } from 'framer-motion'
import { Clock, MapPin, User, ChevronRight, Laptop, Calendar, Award, Zap, Timer, Terminal } from 'lucide-react'
import { SCHEDULE } from '../constants/eventData'
import { speakersData } from '../constants/speakersData'

const typeStyles = {
  opening: { color: 'text-emerald-400', border: 'border-emerald-500/30', glow: 'shadow-emerald-500/20' },
  talk: { color: 'text-sky-400', border: 'border-sky-500/30', glow: 'shadow-sky-500/20' },
  workshop: { color: 'text-violet-400', border: 'border-violet-500/30', glow: 'shadow-violet-500/20' },
  break: { color: 'text-zinc-500', border: 'border-zinc-500/30', glow: 'shadow-zinc-500/20' },
  activity: { color: 'text-yellow-400', border: 'border-yellow-500/30', glow: 'shadow-yellow-500/20' },
  closing: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', glow: 'shadow-flisol-orange/20' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

function Schedule() {
  return (
    <section id="agenda-internal" className="relative pb-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative mx-auto max-w-6xl"
      >
        {/* Massive Editorial Header - Manteniendo la potencia */}
        <div className="mb-24 space-y-8 px-4 sm:px-0">
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange">
            <div className="h-px w-12 bg-flisol-orange/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Protocolo de Eventos</span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <motion.h2 variants={itemVariants} className="font-display text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter">
              AGENDA <br />
              <span className="text-white/10 outline-text uppercase">OFICIAL</span>
            </motion.h2>
            
            <div className="flex flex-wrap gap-2 md:gap-4 max-w-md lg:text-right lg:justify-end">
               <p className="text-zinc-500 text-sm font-light leading-relaxed italic">
                 Sincroniza tu reloj con la jornada más intensa de conocimiento libre.
               </p>
            </div>
          </div>
        </div>

        {/* The Harmonious Technical Timeline */}
        <div className="space-y-4 relative px-4 sm:px-0">
          {/* Vertical Backbone (Hidden in small mobile, visible from sm) */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden sm:block" />

          {SCHEDULE.map((item, index) => {
            const style = typeStyles[item.type] || typeStyles.break
            const speaker = speakersData.find((s) => 
              s.sessionTitle === item.title || item.title.includes(s.name.split(' ')[0])
            )

            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-4 sm:gap-12"
              >
                {/* Time Anchor - Editorial Style */}
                <div className="relative pt-2 sm:text-right">
                  <div className={`font-display text-4xl sm:text-5xl font-black tabular-nums transition-colors duration-500 ${style.color} sm:opacity-40 group-hover:opacity-100`}>
                    {item.time.split(':')[0]}<span className="text-white/20">:</span>{item.time.split(':')[1]}
                  </div>
                  <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-zinc-600 mt-1 sm:justify-end flex items-center gap-2">
                    <span className={`h-1 w-1 rounded-full ${style.color.replace('text', 'bg')}`} />
                    T-MINUS SYNC
                  </div>
                </div>

                {/* Content Module - Harmonic & Borderless */}
                <div className="relative pb-12 sm:pb-16">
                  {/* Visual Connection Line (The Spine) */}
                  <div className={`absolute -left-[49px] top-8 bottom-0 w-[2px] hidden sm:block transition-colors duration-500 ${style.color.replace('text', 'bg')} opacity-0 group-hover:opacity-50`} />
                  
                  <div className="relative space-y-4">
                    {/* Header: Type & Metadata */}
                    <div className="flex items-center gap-4">
                      <div className={`px-2 py-0.5 rounded border ${style.border} bg-zinc-950 text-[9px] font-bold uppercase tracking-widest ${style.color}`}>
                        {item.type}
                      </div>
                      <div className="h-px flex-1 bg-white/5 group-hover:bg-white/10 transition-colors" />
                      <div className="text-[8px] font-mono text-zinc-800">0xFL_2026_{index}</div>
                    </div>

                    {/* Title: Pure Impact */}
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight group-hover:text-flisol-orange transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Speaker or Description: Balanced Layout */}
                    {speaker ? (
                      <div className="flex items-center gap-4 pt-4">
                        <div className="relative h-14 w-14 shrink-0">
                          <div className={`absolute -inset-1 rounded-2xl blur-sm opacity-20 ${style.bg}`} />
                          <img 
                            src={speaker.image} 
                            alt={speaker.name} 
                            className="relative h-full w-full object-cover rounded-2xl transition-all duration-700" 
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white uppercase tracking-tight">{speaker.name}</p>
                          <div className="flex items-center gap-2">
                            <Terminal className="h-3 w-3 text-flisol-orange/60" />
                            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-widest">{speaker.track}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      item.description && (
                        <p className="text-sm md:text-lg text-zinc-400 leading-relaxed font-light max-w-2xl">
                          {item.description}
                        </p>
                      )
                    )}
                  </div>

                  {/* Mobile Bottom Border - Decorative only */}
                  <div className="absolute bottom-6 left-0 right-0 h-px bg-gradient-to-r from-white/5 via-transparent to-transparent sm:hidden" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Footer Technical Note */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-col items-center gap-6">
          <div className="h-px w-24 bg-zinc-800" />
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600">
            <MapPin className="h-3 w-3 text-flisol-orange" />
            Auditorio UTP Torre Arequipa
            <span className="text-zinc-800">//</span>
            Lima - Perú
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Schedule
