import { motion } from 'framer-motion'
import { Terminal, Cpu, Users, Award, Code, Globe } from 'lucide-react'

const activities = [
  {
    title: 'Charlas Magistrales',
    description: 'Expertos compartiendo conocimiento sobre el futuro del Open Source y la soberanía tecnológica.',
    icon: <Terminal className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-1',
    color: 'from-orange-500/20 to-orange-600/5',
  },
  {
    title: 'Talleres Hands-on',
    description: 'Aprende haciendo. Configura servidores, optimiza kernels y domina herramientas libres.',
    icon: <Code className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-2',
    color: 'from-blue-500/20 to-indigo-600/5',
  },
  {
    title: 'Comunidad',
    description: 'Conéctate con entusiastas y profesionales de toda la región.',
    icon: <Users className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-purple-500/20 to-pink-600/5',
  },
  {
    title: 'Hardware Libre',
    description: 'Explora Arduino, Raspberry Pi y el fascinante mundo del hardware abierto.',
    icon: <Cpu className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-1',
    color: 'from-emerald-500/20 to-teal-600/5',
  },
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
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function Activities() {
  return (
    <section id="actividades" className="py-4">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-20"
      >
        {/* Massive Editorial Header */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange text-right justify-end">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Experiencia Inmersiva</span>
            <div className="h-px w-12 bg-flisol-orange/50" />
          </motion.div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-right">
            <motion.p variants={itemVariants} className="max-w-sm text-zinc-500 text-sm leading-relaxed border-r border-white/10 pr-6 order-2 lg:order-1">
              Un ecosistema de aprendizaje diseñado para potenciar tu creatividad y habilidades técnicas.
            </motion.p>
            
            <motion.h2 variants={itemVariants} className="font-display text-6xl md:text-8xl font-black text-white leading-[0.8] tracking-tighter order-1 lg:order-2">
              QUÉ VAS <br />
              <span className="text-white/20 outline-text uppercase">A VIVIR</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
          {activities.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl ${item.className}`}
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex rounded-2xl bg-white/5 p-3 text-flisol-orange ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-flisol-orange group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-flisol-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-2 -right-2 h-24 w-24 bg-white/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Activities
