import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Sparkles, Terminal, Activity } from 'lucide-react'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="hero-pattern relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="hero-gradient-pointer-events absolute inset-0" aria-hidden="true" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* LEFT SIDE: Massive Editorial Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-flisol-orange/30 bg-flisol-orange/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-flisol-orange mb-8 shadow-[0_0_20px_rgba(249,115,22,0.1)]"
            >
              <Activity className="h-3 w-3 animate-pulse" />
              Sistema Operativo: Live
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-6xl font-black tracking-tight text-white sm:text-8xl lg:text-9xl leading-[0.85]"
            >
              FLISoL <br />
              <span className="text-flisol-orange">UTP</span> <br />
              <span className="text-white/10 outline-text text-5xl sm:text-7xl lg:text-8xl">EDICIÓN {EVENT.year}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-10 max-w-xl text-lg text-zinc-400 sm:text-xl leading-relaxed font-light"
            >
              Transformando el código en libertad. El mayor festival de Software Libre de Latinoamérica aterriza en la UTP con una experiencia técnica sin precedentes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a href="#registro" className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-flisol-orange px-10 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:scale-105 shadow-glow">
                Inscribirme Ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#agenda" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:bg-white/10">
                Ver Agenda
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE: The Tech Monolith */}
          <motion.div
            variants={itemVariants}
            className="flex-1 relative w-full lg:max-w-xl"
          >
            {/* Background Data Decoration */}
            <div className="absolute -top-10 -right-10 text-[10px] font-mono text-zinc-800 leading-none select-none hidden lg:block">
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i}>01011001 11010101 00101010 11100101</div>
              ))}
            </div>

            <div className="relative rounded-[3rem] border border-white/10 bg-zinc-900/40 p-1 backdrop-blur-3xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-flisol-orange/10 via-transparent to-lead-purple/10 opacity-50" />

              {/* Internal Content */}
              <div className="relative rounded-[2.8rem] border border-white/5 bg-black/60 p-8 sm:p-12 space-y-12">

                {/* Logo & Status Tags */}
                <div className="flex items-start justify-between">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40">
                    <div className="absolute -inset-4 bg-flisol-orange/20 blur-2xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
                    <img src={EVENT.logoFlisol} alt="Logo" className="relative h-full w-full object-contain drop-shadow-2xl" />
                  </div>
                  <div className="text-right space-y-2">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">[ LIMA_PE ]</div>
                    <div className="text-[10px] font-bold text-flisol-orange uppercase tracking-widest animate-pulse">● Recibiendo Datos</div>
                    <div className="pt-4 flex justify-end gap-1">
                      {[1, 2, 3].map(i => <div key={i} className="h-1 w-4 bg-zinc-800 rounded-full" />)}
                    </div>
                  </div>
                </div>

                {/* Massive Tech Countdown */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-3 w-3 text-flisol-orange" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500">Se acerca el evento</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { val: timeLeft.days, label: 'Días' },
                      { val: timeLeft.hours, label: 'Horas' },
                      { val: timeLeft.minutes, label: 'Minutos' },
                      { val: timeLeft.seconds, label: 'Segundos' }
                    ].map((item) => (
                      <div key={item.label} className="group/item relative rounded-3xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05]">
                        <div className="font-display text-4xl sm:text-5xl font-black text-white tabular-nums tracking-tighter">
                          {String(item.val).padStart(2, '0')}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-zinc-600 group-hover/item:text-flisol-orange transition-colors">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Event Metadata Footer */}
                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <Calendar className="h-3 w-3" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Fecha</span>
                    </div>
                    <div className="text-xs font-bold text-white">25 ABRIL, 2026</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <MapPin className="h-3 w-3" />
                      <span className="text-[9px] font-bold uppercase tracking-widest">Lugar</span>
                    </div>
                    <div className="text-xs font-bold text-white uppercase truncate">Torre Arequipa</div>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Scanline */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flisol-orange/20 to-transparent -translate-y-full group-hover:translate-y-[800%] transition-transform duration-[3s] ease-linear" />
            </div>

            {/* Floating Technical Tag */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-black shadow-2xl z-20"
            >
              <div className="h-2 w-2 rounded-full bg-flisol-orange animate-ping" />
              <span className="text-[10px] font-black uppercase tracking-widest">Acceso: Abierto</span>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default Hero
