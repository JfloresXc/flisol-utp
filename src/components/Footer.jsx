import { motion } from 'framer-motion'
import { Heart, Globe, Mail, Terminal, ChevronRight, Cpu } from 'lucide-react'
import { EVENT } from '../constants/eventData'

// Iconos manuales sociales
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 bg-flisol-black pt-32 pb-12 overflow-hidden">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-flisol-orange/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-flisol-orange/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Massive Editorial Footer Header */}
        <div className="mb-24 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <h2 className="font-display text-7xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter opacity-20">
              FLISOL UTP <br />
              <span className="text-white outline-text opacity-10">EDICIÓN 2026</span>
            </h2>

            <div className="flex flex-col gap-4 lg:text-right">
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-flisol-orange">Soberanía Tecnológica</span>
              <div className="flex lg:justify-end gap-2">
                <a href="https://instagram.com/lead_utp" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-flisol-orange/50 transition-all"><InstagramIcon /></a>
                <a href="https://linkedin.com/company/lead-utp" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-flisol-orange/50 transition-all"><LinkedinIcon /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-t border-white/5 pt-16">

          {/* Brand Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img
                src={EVENT.logoFlisol}
                alt="FLISoL UTP"
                className="h-12 md:h-16 w-auto transition-all group-hover:scale-105"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed font-light">
              Impulsando la innovación y la libertad digital desde la comunidad estudiantil de la Universidad Tecnológica del Perú.
            </p>
          </div>

          {/* Site Map Technical */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Nodos del Sitio</h4>
            <ul className="space-y-4">
              {['Inicio', 'Speakers', 'Agenda', 'Actividades', 'Patrocinadores'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-zinc-400 hover:text-flisol-orange transition-colors flex items-center gap-2 group">
                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Recursos Externos</h4>
            <ul className="space-y-4">
              <li>
                <a href={EVENT.flisolInfoUrl} target="_blank" className="text-sm text-zinc-400 hover:text-flisol-orange transition-colors flex items-center gap-2 group">
                  <Globe className="h-4 w-4" /> flisol.info
                </a>
              </li>
              <li>
                <a href={EVENT.sessionizeUrl} target="_blank" className="text-sm text-zinc-400 hover:text-flisol-orange transition-colors flex items-center gap-2 group">
                  <Cpu className="h-4 w-4" /> Call for Speakers
                </a>
              </li>
            </ul>
          </div>

          {/* Emergency Contact */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Soporte Técnico</h4>
            <div className="p-6 rounded-3xl border border-white/5 bg-white/[0.02] space-y-4">
              <a href={`mailto:${EVENT.contactEmail}`} className="text-sm font-bold text-white hover:text-flisol-orange transition-colors block truncate">
                {EVENT.contactEmail}
              </a>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Torre Arequipa, Lima - PE</p>
            </div>
          </div>

        </div>

        {/* System Shutdown Footer */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8 opacity-30 grayscale">
            <img src={EVENT.logoFlisol} alt="FLISoL" className="h-6 w-auto" />
            <img src={EVENT.logoLead} alt="LEAD UTP" className="h-6 w-auto" />
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">

            <p className="text-zinc-400 text-xs flex items-center gap-2 font-light">
              Crafted with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> by LEAD_UTP DevTeam
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
