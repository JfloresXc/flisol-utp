function AboutFlisol() {
  const stats = [
    { text: '+20 años de historia', icon: '🏛️' },
    { text: '+300 ciudades participantes', icon: '🌎' },
    { text: 'Entrada 100% gratuita', icon: '🎟️' },
  ]

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      {/* Texto – centrado en mobile/tablet, alineado a la izquierda en desktop */}
      <div className="animate-fade-in-up text-center lg:text-left">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flisol-orange">
          ¿Qué es FLISoL?
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Comunidad, libertad y conocimiento
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:mx-0">
          El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es
          el evento de difusión de Software Libre más grande de Latinoamérica,
          realizado simultáneamente en decenas de ciudades desde 2005. La entrada
          es completamente gratuita.
        </p>
      </div>

      {/* Tarjetas de estadísticas */}
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map((stat, index) => (
          <article
            key={stat.text}
            className={`rounded-2xl border border-white/15 bg-black/30 p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-flisol-orange/40 sm:text-left animate-fade-in-up delay-${(index + 1) * 100}`}
          >
            <span className="text-2xl" aria-hidden="true">{stat.icon}</span>
            <p className="mt-2 bg-lead-gradient bg-clip-text text-lg font-bold text-transparent sm:text-xl">
              {stat.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutFlisol
