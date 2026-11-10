import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react'

export default function Hero() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX - innerWidth / 2) / 35
      const y = (e.clientY - innerHeight / 2) / 35
      setMouseOffset({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden border-b border-white/10">
      {/* Editorial Watermark Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.035]">
        <span className="font-['Syne'] text-[24vw] font-black uppercase text-white tracking-tighter leading-none whitespace-nowrap">
          BEYOND
        </span>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Top Status & Technical Coordinates Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-10 text-xs font-mono text-[#A1A1A1] border-b border-white/10 pb-4"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#E50914]/10 border border-[#E50914]/40 text-[#E50914] font-semibold tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              PORTFOLIO 2026
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline tracking-wider">CONCEPT: BEYOND THE INTERFACE</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#A1A1A1]">
            <span className="hidden md:inline font-mono">LAT: 6.2088° S // LON: 106.8456° E</span>
            <span className="text-[#E50914] font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-ping" />
              SYSTEM ACTIVE
            </span>
          </div>
        </motion.div>

        {/* Hero Grid: Typography + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Professional Label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-3"
            >
              <div className="w-8 h-[2px] bg-[#E50914]" />
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#E50914] font-bold">
                CREATIVE WEB DEVELOPER
              </span>
            </motion.div>

            {/* Oversized Full Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-['Syne'] font-black uppercase text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight leading-[0.92] text-[#F5F5F5] mb-6"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
              }}
            >
              <span className="block hover:text-[#E50914] transition-colors duration-300">DZAKIRUL</span>
              <span className="block text-stroke-white hover:text-white transition-colors duration-300">FAVIAN</span>
              <span className="block text-[#E50914] hover:text-[#FF2A36] transition-colors duration-300">
                JIWANI ZUHRI
              </span>
            </motion.h1>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-4"
            >
              <h2 className="font-['Syne'] text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
                &ldquo;DESIGNING THE DIGITAL EXPERIENCE.&rdquo;
              </h2>
            </motion.div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-[#A1A1A1] text-base md:text-lg max-w-xl font-light leading-relaxed mb-8"
            >
              Building digital experiences beyond expectations. Exploring creativity through code, design, and
              technology.
            </motion.p>

            {/* Dual Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-sm bg-[#E50914] hover:bg-[#FF2A36] text-white font-mono text-xs md:text-sm uppercase tracking-widest font-semibold transition-all transform hover:-translate-y-1 glow-red"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-sm bg-[#151515] hover:bg-[#1E1E1E] border border-white/15 hover:border-[#E50914] text-[#F5F5F5] font-mono text-xs md:text-sm uppercase tracking-widest font-medium transition-all transform hover:-translate-y-1"
              >
                <span>LET&apos;S CONNECT</span>
                <span className="w-2 h-2 rounded-full bg-[#E50914] group-hover:scale-125 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait / Cinematic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:col-span-5 relative"
            style={{
              transform: `translate3d(${-mouseOffset.x * 0.6}px, ${-mouseOffset.y * 0.6}px, 0)`,
            }}
          >
            {/* Visual Frame Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Red Corner Brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#E50914] z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#E50914] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#E50914] z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#E50914] z-20 pointer-events-none" />

              {/* Red Glow Backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E50914]/25 via-transparent to-[#FF2A36]/20 blur-xl opacity-70" />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-sm bg-[#151515] border border-white/10 group aspect-[4/5]">
                {/* Dramatic Cinematic Image */}
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                  alt="Dzakirul Favian - Creative Developer Visual Portrait"
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="eager"
                />

                {/* Red Duotone Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-85 pointer-events-none" />
                <div className="absolute inset-0 bg-[#E50914]/10 mix-blend-color pointer-events-none" />

                {/* Overlay Technical Metadata */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-white/80 pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10">
                    ID // DF-2026-X
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#E50914]/80 text-white font-semibold">
                    CREATIVE DEV
                  </span>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs font-semibold text-[#F5F5F5] flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-[#E50914]" />
                      ENGINEERING AESTHETICS
                    </span>
                    <span className="font-mono text-[10px] text-[#E50914]">60 FPS</span>
                  </div>
                  <p className="font-mono text-[11px] text-[#A1A1A1] leading-tight">
                    Merging algorithmic performance with avant-garde editorial visual storytelling.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 px-3 py-2 rounded bg-[#151515] border border-[#E50914]/60 shadow-xl z-20">
                <Sparkles className="w-4 h-4 text-[#E50914] animate-spin" style={{ animationDuration: '6s' }} />
                <span className="font-mono text-[11px] text-[#F5F5F5] tracking-wide">
                  EXPERIMENTAL EXCELLENCE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar: Infinite Horizontal Marquee & Scroll Indicator */}
      <div className="relative z-10 mt-12 w-full">
        {/* Ticker marquee */}
        <div className="w-full overflow-hidden border-y border-white/10 bg-[#151515]/60 py-2.5 backdrop-blur-sm select-none">
          <div className="flex whitespace-nowrap animate-marquee font-mono text-[11px] uppercase tracking-[0.25em] text-[#A1A1A1]">
            <span className="mx-4 text-[#E50914] font-bold">/// BEYOND THE INTERFACE</span>
            <span className="mx-4">EXPERIMENTAL DIGITAL EXPERIENCES</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">CREATIVE CODE &amp; SHADERS</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">FULL-STACK REACT &amp; TYPESCRIPT</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">AVANT-GARDE EDITORIAL TYPOGRAPHY</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4 text-[#E50914] font-bold">/// BEYOND THE INTERFACE</span>
            <span className="mx-4">EXPERIMENTAL DIGITAL EXPERIENCES</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">CREATIVE CODE &amp; SHADERS</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">FULL-STACK REACT &amp; TYPESCRIPT</span>
            <span className="mx-4 text-[#E50914]">●</span>
            <span className="mx-4">AVANT-GARDE EDITORIAL TYPOGRAPHY</span>
            <span className="mx-4 text-[#E50914]">●</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 flex justify-between items-center text-xs font-mono text-[#A1A1A1]">
          <span className="hidden sm:inline-block tracking-wider">SCROLL TO DISCOVER</span>
          <a
            href="#about"
            className="group flex items-center gap-2 hover:text-[#E50914] transition-colors mx-auto sm:mx-0"
            aria-label="Scroll down to About section"
          >
            <span className="tracking-widest">SCROLL DOWN</span>
            <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#E50914] flex items-center justify-center transition-colors">
              <ArrowDown className="w-3 h-3 text-[#E50914] animate-bounce" />
            </span>
          </a>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#A1A1A1]">
            EST. 2026 // ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </section>
  )
}
