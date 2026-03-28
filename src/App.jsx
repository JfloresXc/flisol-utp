import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutFlisol from './components/AboutFlisol'
import Activities from './components/Activities'
import Schedule from './components/Schedule'
import CallForSpeakers from './components/CallForSpeakers'
import Sponsors from './components/Sponsors'
import PracticalInfo from './components/PracticalInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-flisol-black text-white">
      <Navbar />

      <main>
        <Hero />

        <section id="que-es-flisol" className="bg-flisol-slate py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <AboutFlisol />
          </div>
        </section>

        <section id="actividades" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Activities />
          </div>
        </section>

        <section id="agenda" className="bg-flisol-slate py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Schedule />
          </div>
        </section>

        <section id="speakers" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <CallForSpeakers />
          </div>
        </section>

        <section id="patrocinadores" className="bg-flisol-slate py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <Sponsors />
          </div>
        </section>

        <section id="participa" className="py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <PracticalInfo />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
