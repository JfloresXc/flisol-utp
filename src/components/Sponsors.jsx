import { motion } from 'framer-motion'
import { ExternalLink, Award, Sparkles } from 'lucide-react'

const tiers = [
  {
    name: 'Venue Partner',
    logos: [
      { name: 'UTP', src: '/images/utp.svg', className: 'h-16 sm:h-24' },
    ],
    accent: 'text-rose-400',
    bg: 'bg-rose-500/5'
  },
  {
    name: 'Sponsor Gold',
    logos: [
      { name: 'Placeholder 1', isPlaceholder: true },
      { name: 'Placeholder 2', isPlaceholder: true },
    ],
    accent: 'text-amber-400',
    bg: 'bg-amber-500/5'
  },
  {
    name: 'Digital Support',
    logos: [
      { name: 'Sessionize', src: '/images/sessionize-logo.svg', className: 'h-10 sm:h-14' },
    ],
    accent: 'text-sky-400',
    bg: 'bg-sky-500/5'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

function Sponsors() {
  return (
    <section id="patrocinadores-internal" className="relative pb-20">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flisol-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative space-y-24"
      >
        {/* Massive Editorial Header */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange">
            <div className="h-px w-12 bg-flisol-orange/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Nuestros Aliados</span>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2 variants={itemVariants} className="font-display text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter">
              IMPULSANDO LA <br />
              <span className="text-white/20 outline-text uppercase">LIBERTAD</span>
            </motion.h2>
            
            <motion.p variants={itemVariants} className="max-w-sm text-zinc-500 text-sm leading-relaxed border-l border-white/10 pl-6">
              Instituciones y empresas que comparten nuestra visión de un futuro tecnológico abierto y colaborativo.
            </motion.p>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid gap-12">
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={itemVariants} className="space-y-8">
              <div className="flex items-center gap-4">
                <h3 className={`font-display text-xs font-bold uppercase tracking-[0.4em] ${tier.accent}`}>
                  {tier.name}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
              
              <div className="flex flex-wrap gap-6 sm:gap-8">
                {tier.logos.map((logo, idx) => (
                  <motion.div
                    key={logo.name + idx}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`group relative flex h-40 w-full sm:w-[340px] items-center justify-center rounded-[2.5rem] border border-white/5 ${tier.bg} p-10 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04] shadow-2xl`}
                  >
                    {logo.isPlaceholder ? (
                      <div className="flex flex-col items-center gap-3 opacity-20 group-hover:opacity-50 transition-opacity">
                        <Sparkles className="h-6 w-6 text-white" />
                        <span className="text-[9px] font-bold uppercase tracking-widest text-white">Espacio Disponible</span>
                      </div>
                    ) : (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className={`${logo.className} w-auto object-contain transition-all duration-700 group-hover:brightness-125`}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center pt-10 space-y-8">
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <a 
            href="https://felices25ruth.my.canva.site/brochure-flisol-utp-2026-sponsor"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-xs font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
          >
            Conviértete en Patrocinador
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
            Contacto: leadutp@gmail.com
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Sponsors
