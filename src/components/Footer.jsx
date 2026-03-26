function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <img
            src="/images/flisol-logo.png"
            alt="Logo FLISoL"
            className="h-10 w-auto rounded-sm"
          />
          <img
            src="/images/lead-utp-logo.png"
            alt="Logo LEAD UTP"
            className="h-10 w-auto rounded-sm"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-300">
          <a
            href="https://flisol.info"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-flisol-orange"
          >
            flisol.info
          </a>
          <a
            href="https://sessionize.com/flisol-utp-2026"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:text-flisol-orange"
          >
            sessionize.com/flisol-utp-2026
          </a>
        </div>

        <p className="text-sm text-zinc-300">
          Organizado con amor por LEAD UTP · Lima, Perú · 2026
        </p>
        <a
          href="mailto:leadutp@gmail.com"
          className="text-sm text-zinc-400 transition duration-300 hover:text-flisol-orange"
        >
          leadutp@gmail.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
