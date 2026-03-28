const activities = [
  {
    title: 'Charlas técnicas',
    description: 'Ponencias sobre software libre, Linux, seguridad y más',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path d="M3 5h18v10H3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8 19 4-4 4 4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Talleres prácticos',
    description: 'Aprende haciendo con guía de expertos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
        <path
          d="M7 3h10v4H7zM5 9h14v12H5z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
]

function Activities() {
  return (
    <div className="animate-fade-in-up text-center">
      <h2 className="text-3xl font-bold sm:text-4xl">¿Qué haremos?</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2 max-w-2xl mx-auto">
        {activities.map((item, index) => (
          <article
            key={item.title}
            className={`group rounded-2xl border border-white/10 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-flisol-orange/50 animate-fade-in-up delay-${(index + 1) * 200}`}
          >
            <div className="inline-flex rounded-xl bg-lead-gradient p-2.5 text-white transition duration-300 group-hover:scale-110">
              {item.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-flisol-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Activities
