import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: '¿Qué es FLISoL?', href: '#que-es-flisol' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Speakers', href: '#speakers' },
  { label: '¡Participa!', href: '#participa' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/90 backdrop-blur-xl'
          : 'border-transparent bg-black/25 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="shrink-0">
          <img
            src="/images/lead-utp-logo.png"
            alt="Logo LEAD UTP"
            className="h-10 w-auto rounded-sm"
          />
        </a>

        <ul className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-flisol-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://sessionize.com/flisol-utp-2026"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-flisol-orange px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500"
          >
            Sé ponente
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
