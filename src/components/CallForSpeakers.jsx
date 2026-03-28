import { EVENT } from '../constants/eventData'

function CallForSpeakers() {
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-12 animate-fade-in-up text-center">
      <span className="inline-flex rounded-full bg-lead-gradient px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white">
        Call for Speakers · Cierra {EVENT.cfpDeadlineShort}
      </span>

      <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
        ¿Tienes algo que compartir?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
        El Call for Speakers está abierto hasta el {EVENT.cfpDeadline}. Si
        conoces sobre software libre, Linux, seguridad, desarrollo u open source,
        ¡queremos escucharte!
      </p>

      <div className="mt-8 flex justify-center">
        <a
          href={EVENT.sessionizeUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-flisol-orange px-8 py-3 text-base font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500"
          aria-label="Postula como ponente en Sessionize"
        >
          Postula como ponente →
        </a>
      </div>
    </div>
  )
}

export default CallForSpeakers
