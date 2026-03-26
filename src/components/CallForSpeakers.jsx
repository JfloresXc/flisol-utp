function CallForSpeakers() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12">
      <span className="inline-flex rounded-full bg-lead-gradient px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
        Call for Speakers · Cierra 17 Abr 2026
      </span>

      <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
        ¿Tienes algo que compartir?
      </h2>

      <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        El Call for Speakers está abierto hasta el 17 de abril de 2026. Si
        conoces sobre software libre, Linux, seguridad, desarrollo u open source,
        ¡queremos escucharte!
      </p>

      <a
        href="https://sessionize.com/flisol-utp-2026"
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex rounded-full bg-flisol-orange px-8 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500"
      >
        Postula como ponente →
      </a>
    </div>
  )
}

export default CallForSpeakers
