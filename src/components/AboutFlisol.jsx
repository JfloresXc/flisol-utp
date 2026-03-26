function AboutFlisol() {
  const stats = [
    '+20 años de historia',
    '+300 ciudades participantes',
    'Entrada 100% gratuita',
  ]

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flisol-orange">
          ¿Qué es FLISoL?
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Comunidad, libertad y conocimiento</h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
          El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es
          el evento de difusión de Software Libre más grande de Latinoamérica,
          realizado simultáneamente en decenas de ciudades desde 2005. La entrada
          es completamente gratuita.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {stats.map((stat) => (
          <article
            key={stat}
            className="rounded-2xl border border-white/15 bg-black/30 p-6 transition duration-300 hover:-translate-y-1 hover:border-flisol-orange/40"
          >
            <p className="bg-lead-gradient bg-clip-text text-lg font-bold text-transparent sm:text-xl">
              {stat}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AboutFlisol
