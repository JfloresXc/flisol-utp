const activities = [
  {
    title: 'Charlas técnicas',
    description: 'Ponencias sobre software libre, Linux, seguridad y más',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path d="M3 5h18v10H3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8 19 4-4 4 4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Talleres prácticos',
    description: 'Aprende haciendo con guía de expertos',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M7 3h10v4H7zM5 9h14v12H5z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    title: 'Instalaciones GNU/Linux',
    description:
      'Te ayudamos a instalar tu distro favorita, gratis y legalmente',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M12 4c3.5 0 6 2.6 6 6.2 0 4.2-2.5 8.8-6 8.8s-6-4.6-6-8.8C6 6.6 8.5 4 12 4Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="9.2" cy="9.2" r="0.8" fill="currentColor" />
        <circle cx="14.8" cy="9.2" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
]

function Activities() {
  return (
    <div>
      <h2 className="text-3xl font-bold sm:text-4xl">¿Qué haremos?</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {activities.map((item) => (
          <article
            key={item.title}
            className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-flisol-orange/50"
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
