import { EVENT } from '../constants/eventData'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <img
            src={EVENT.logoFlisol}
            alt="Logo FLISoL – Festival Latinoamericano de Instalación de Software Libre"
            className="h-10 w-auto rounded-sm"
          />
          <img
            src={EVENT.logoLead}
            alt="Logo LEAD UTP – comunidad organizadora"
            className="h-10 w-auto rounded-sm"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300">
          <a
            href={EVENT.flisolInfoUrl}
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-flisol-orange"
            aria-label="Visitar sitio oficial de FLISoL"
          >
            flisol.info
          </a>
          <a
            href={EVENT.sessionizeUrl}
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-flisol-orange"
            aria-label="Postular como ponente en Sessionize"
          >
            sessionize.com/flisol-utp-2026
          </a>
        </div>

        <p className="text-sm text-zinc-300">
          Organizado con amor por {EVENT.organizer} · {EVENT.city}, {EVENT.country} · {EVENT.year}
        </p>
        <a
          href={`mailto:${EVENT.contactEmail}`}
          className="text-sm text-zinc-400 transition duration-300 hover:text-flisol-orange"
          aria-label={`Enviar correo a ${EVENT.contactEmail}`}
        >
          {EVENT.contactEmail}
        </a>
      </div>
    </footer>
  )
}

export default Footer
