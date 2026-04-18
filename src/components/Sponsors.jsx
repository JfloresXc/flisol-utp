import { EVENT } from '../constants/eventData'

function Sponsors() {
  return (
    <section className="sponsors relative flex flex-col items-center py-20 text-center">
      <img
        src="/images/sponsors-frame.svg"
        alt=""
        className="sponsors__frame absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
        aria-hidden="true"
      />
      <h2 className="sponsors__title mb-12 text-4xl font-bold uppercase tracking-wider text-white">Sponsors</h2>

      <div className="mb-12 w-full max-w-4xl">
        <h3 className="sponsors__tier mb-6 text-2xl font-semibold text-flisol-orange">Gold</h3>
        <div className="sponsors__logos sponsors__logos--gold flex flex-wrap justify-center gap-8">
          <div className="sponsors__card relative flex h-40 w-40 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:scale-105 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <span className="relative z-10 select-none text-sm font-medium text-white/50">Tu logo aquí</span>
          </div>
          <div className="sponsors__card relative flex h-40 w-40 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:scale-105 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <span className="relative z-10 select-none text-sm font-medium text-white/50">Tu logo aquí</span>
          </div>
        </div>
      </div>

      <div className="mb-12 w-full max-w-4xl">
        <h3 className="sponsors__tier mb-6 text-2xl font-semibold text-flisol-orange">Venue</h3>
        <div className="sponsors__logos flex flex-wrap justify-center gap-8">
          <div className="sponsors__card relative flex h-40 w-40 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:scale-105 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <img
              src="/images/utp.svg"
              alt="UTP"
              className="sponsors__logo sponsors__logo--venue relative z-10 w-24 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mb-16 w-full max-w-4xl">
        <h3 className="sponsors__tier mb-6 text-2xl font-semibold text-flisol-orange">Support</h3>
        <div className="sponsors__logos flex flex-wrap justify-center gap-8">
          <div className="sponsors__card relative flex h-40 w-40 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all hover:scale-105 hover:bg-orange-500/20 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
            <img
              src="/images/sessionize-logo.svg"
              alt="Sessionize"
              className="sponsors__logo sponsors__logo--support relative z-10 w-24 object-contain"
            />
          </div>
        </div>
      </div>

      <a 
        href="https://felices25ruth.my.canva.site/brochure-flisol-utp-2026-sponsor"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-white inline-flex items-center justify-center rounded-sm bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-black transition-colors hover:bg-gray-200"
      >
        Quiero ser patrocinador
      </a>
      <p className="mt-4 text-sm text-gray-400">leadutp@gmail.com</p>
    </section>
  )
}

export default Sponsors
