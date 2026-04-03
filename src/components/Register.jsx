function Register() {
  return (
    <div className="w-full max-w-6xl text-center">
      {/* Section header */}
      <p className="text-sm font-semibold uppercase tracking-widest text-flisol-orange">
        Únete al evento
      </p>
      <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Inscríbete
      </h2>

      {/* Luma event embed */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 shadow-glow" style={{ aspectRatio: '2 / 1' }}>
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
