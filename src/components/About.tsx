import { motion } from 'framer-motion'
import { Compass, Cpu, Layers, Sparkles, Terminal, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden">
      {/* Subtle background red glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E50914]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              01 // IDENTITY &amp; MANIFESTO
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              ABOUT <span className="text-stroke-red">DZAKIRUL</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] max-w-xs md:text-right">
            CREATIVE DISCIPLINE: CODE × ART × SPATIAL INTERACTION
          </div>
        </div>

        {/* Brand Concept Feature Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mb-20 p-8 md:p-12 rounded-sm bg-[#151515] border border-white/10 relative overflow-hidden group hover:border-[#E50914]/50 transition-colors"
        >
          {/* Subtle red corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#E50914]/15 to-transparent pointer-events-none" />
          
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#E50914] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>CORE BRAND CONCEPT</span>
          </div>

          <h3 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6">
            &ldquo;BEYOND THE INTERFACE.&rdquo;
          </h3>

          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#F5F5F5] leading-snug max-w-4xl mb-8">
            &ldquo;I build digital experiences where creativity meets technology. Exploring ideas,
            experimenting with interfaces, and transforming concepts into meaningful digital
            experiences.&rdquo;
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 pt-6 border-t border-white/10">
            {['EXPERIMENTAL', 'CREATIVE', 'FUTURISTIC', 'BOLD', 'INNOVATIVE', 'PROFESSIONAL'].map((trait) => (
              <div
                key={trait}
                className="py-2 px-3 rounded bg-[#0A0A0A] border border-white/5 font-mono text-[10px] md:text-xs text-center text-[#A1A1A1] tracking-wider hover:text-white hover:border-[#E50914] transition-colors"
              >
                {trait}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Photography Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-sm overflow-hidden bg-[#151515] border border-white/10 group aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                  alt="Dzakirul Favian Jiwani Zuhri - Editorial Portrait"
                  className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="font-mono text-xs text-[#E50914] font-bold tracking-widest uppercase mb-1">
                    DZAKIRUL FAVIAN JIWANI ZUHRI
                  </div>
                  <div className="font-['Syne'] text-lg font-bold text-white">
                    Creative Web Developer
                  </div>
                  <div className="font-mono text-[11px] text-[#A1A1A1] mt-1">
                    Based in Indonesia // Working Worldwide
                  </div>
                </div>
              </div>

              {/* Offset Decorative Visual Card */}
              <div className="absolute -bottom-8 -right-6 md:-right-8 w-48 sm:w-56 p-4 rounded-sm bg-[#151515]/95 backdrop-blur-md border border-[#E50914]/40 shadow-2xl hidden sm:block">
                <div className="font-mono text-[10px] text-[#E50914] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
                  ENGINEERING CREED
                </div>
                <div className="font-['Syne'] text-xs font-bold text-white mb-2 leading-tight">
                  NO GENERIC TEMPLATES. EVER.
                </div>
                <p className="font-mono text-[10px] text-[#A1A1A1] leading-relaxed">
                  Bespoke code architectures engineered for visceral impact.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative, Background & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            {/* Personal Introduction */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#E50914] font-bold mb-3 flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                INTRODUCTION &amp; BACKGROUND
              </h3>
              <p className="text-lg md:text-xl text-[#F5F5F5] font-light leading-relaxed mb-4">
                I am Dzakirul Favian Jiwani Zuhri, a dedicated Web Developer and Creative Engineer obsessed
                with elevating web interactions into memorable digital artifacts.
              </p>
              <p className="text-[#A1A1A1] text-base leading-relaxed">
                My journey began with a curiosity for how code can evoke raw emotion. Over years of hands-on
                building, that passion evolved into mastering modern full-stack architectures (React,
                TypeScript, Node.js) blended with experimental graphics (WebGL, GLSL, Framer Motion) and
                avant-garde editorial design.
              </p>
            </div>

            {/* Creative Philosophy */}
            <div className="p-6 md:p-8 rounded-sm bg-[#151515] border-l-4 border-l-[#E50914] border-t border-r border-b border-white/5">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#E50914] font-bold mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4" />
                CREATIVE PHILOSOPHY
              </h4>
              <h5 className="font-['Syne'] text-2xl font-bold text-white mb-3">
                &ldquo;Code is not mere utility. It is an expressive canvas.&rdquo;
              </h5>
              <p className="text-[#A1A1A1] text-sm md:text-base leading-relaxed">
                In an era crowded with identical templates, true distinction comes from deliberate craft.
                I reject sterile conformity. Every typography pairing, motion velocity curve, and state
                transition must have purpose, rhythm, and structural integrity.
              </p>
            </div>

            {/* Key Pillars / Statistics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-sm bg-[#151515] border border-white/5 hover:border-[#E50914]/40 transition-colors">
                <Zap className="w-5 h-5 text-[#E50914] mb-2" />
                <div className="font-['Syne'] text-2xl md:text-3xl font-extrabold text-white">60 FPS</div>
                <div className="font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mt-1">
                  Kinetic Smoothness
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#151515] border border-white/5 hover:border-[#E50914]/40 transition-colors">
                <Layers className="w-5 h-5 text-[#E50914] mb-2" />
                <div className="font-['Syne'] text-2xl md:text-3xl font-extrabold text-white">4 Pillars</div>
                <div className="font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mt-1">
                  Full Stack &amp; Creative
                </div>
              </div>

              <div className="p-4 rounded-sm bg-[#151515] border border-white/5 hover:border-[#E50914]/40 transition-colors col-span-2 sm:col-span-1">
                <Cpu className="w-5 h-5 text-[#E50914] mb-2" />
                <div className="font-['Syne'] text-2xl md:text-3xl font-extrabold text-white">100%</div>
                <div className="font-mono text-xs text-[#A1A1A1] uppercase tracking-wider mt-1">
                  Bespoke Code Craft
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
