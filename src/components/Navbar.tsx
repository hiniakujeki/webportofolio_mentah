import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react'

const navLinks = [
  { name: 'ABOUT', href: '#about' },
  { name: 'EXPERTISE', href: '#expertise' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'JOURNEY', href: '#journey' },
  { name: 'BEYOND', href: '#beyond' },
  { name: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      // Section scrollspy
      const sections = ['about', 'expertise', 'projects', 'journey', 'beyond', 'contact']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on esc key or resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Dzakirul Favian - Home"
          >
            <div className="w-8 h-8 rounded-sm bg-[#151515] border border-white/10 flex items-center justify-center font-mono text-xs text-[#F5F5F5] group-hover:border-[#E50914] group-hover:bg-[#E50914]/10 transition-colors">
              <span className="text-[#E50914] font-bold">&gt;</span>DF
            </div>
            <div className="flex flex-col">
              <span className="font-['Syne'] font-extrabold tracking-wider text-base md:text-lg text-[#F5F5F5] group-hover:text-white transition-colors flex items-center gap-1">
                DZAKIRUL
                <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] inline-block animate-pulse" />
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1A1] -mt-1 hidden sm:inline-block">
                Creative Web Dev
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest text-[#A1A1A1]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 transition-colors hover:text-[#F5F5F5] ${
                    isActive ? 'text-[#F5F5F5] font-semibold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E50914]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Right Action: Status Pill & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#151515] border border-white/10 text-[11px] font-mono text-[#A1A1A1]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E50914]" />
              </span>
              <span>AVAILABLE FOR 2026</span>
            </div>

            <a
              href="#contact"
              className="group flex items-center gap-1.5 text-xs font-mono font-medium px-4 py-2 rounded-sm bg-[#E50914] hover:bg-[#FF2A36] text-white transition-all transform hover:-translate-y-0.5 glow-red"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-[#151515] border border-white/10 text-[#F5F5F5] hover:text-[#E50914] hover:border-[#E50914] transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Immersive Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Ambient Red Glow in background */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#E50914]/15 blur-[90px] pointer-events-none" />

            {/* Links */}
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#E50914] mb-2 tracking-widest uppercase">
                <Terminal className="w-4 h-4" />
                <span>Navigation Index</span>
              </div>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  className="font-['Syne'] text-3xl font-extrabold text-[#F5F5F5] hover:text-[#E50914] transition-colors flex items-center justify-between border-b border-white/5 pb-3"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-xs text-[#A1A1A1]">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer Area */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#A1A1A1]">STATUS</span>
                <span className="font-mono text-xs text-[#E50914] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
                  AVAILABLE FOR WORK
                </span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 bg-[#E50914] hover:bg-[#FF2A36] text-white font-mono text-xs tracking-widest font-semibold uppercase flex items-center justify-center gap-2 rounded-sm glow-red"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
