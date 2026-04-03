function Register() {
  return (
    <div className="w-full max-w-6xl text-center">
      {/* Section header */}
      <p className="text-sm font-semibold uppercase tracking-widest text-flisol-orange">
        Inscríbete
      </p>

      {/* Luma event embed */}
      <div className="mt-6 flex justify-center sm:mt-8">
        <div className="aspect-[4/5] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-glow lg:aspect-[2/1] lg:max-w-5xl">
          <iframe
            src="https://lu.ma/embed/event/evt-ehslJhhNCGinGkE/simple"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 'none', background: 'white', borderRadius: '1rem' }}
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Registro FLISoL UTP 2026 — Luma"
          />
        </div>
      </div>
    </div>
  )
}

export default Register
