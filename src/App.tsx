import CustomCursor from './components/CustomCursor'
import BackgroundFX from './components/BackgroundFX'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import SelectedWork from './components/SelectedWork'
import Journey from './components/Journey'
import BeyondTheCode from './components/BeyondTheCode'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#E50914] selection:text-white font-['Space_Grotesk',sans-serif]">
      {/* Dynamic Cursor with Trailing Ring */}
      <CustomCursor />

      {/* Atmospheric Background Noise & Glows */}
      <BackgroundFX />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        {/* Full-Screen Hero */}
        <Hero />

        {/* Section B: About Me & Brand Identity */}
        <About />

        {/* Section C: Expertise & Capabilities */}
        <Expertise />

        {/* Section D: Selected Work & Case Studies */}
        <SelectedWork />

        {/* Section E: My Journey Timeline */}
        <Journey />

        {/* Section F: Beyond The Code Gallery */}
        <BeyondTheCode />

        {/* Section G: Contact & Closing */}
        <Contact />
      </main>

      {/* Section H: Footer */}
      <Footer />
    </div>
  )
}
