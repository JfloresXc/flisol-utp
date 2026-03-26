const details = [
  {
    title: 'Fecha',
    value: 'Sábado 25 de abril de 2026',
  },
  {
    title: 'Hora',
    value: '9:00 a.m.',
  },
  {
    title: 'Lugar',
    value: 'Universidad Tecnológica del Perú – Lima',
  },
  {
    title: 'Costo',
    value: '¡Totalmente gratuito!',
  },
]

function PracticalInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">Información práctica</h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {details.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-zinc-900/80 p-6 transition duration-300 hover:border-flisol-orange/45"
          >
            <p className="text-sm uppercase tracking-wider text-flisol-muted">
              {item.title}
            </p>
            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PracticalInfo
