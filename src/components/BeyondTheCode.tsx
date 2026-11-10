import { motion } from 'framer-motion'
import { beyondItems } from '../data/beyond'
import { Camera, Compass, Radio, Sparkles } from 'lucide-react'

export default function BeyondTheCode() {
  return (
    <section id="beyond" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
      {/* Background Red Ambient Glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#E50914]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              05 // CURATED PASSIONS &amp; EYE
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              BEYOND THE <span className="text-stroke-red">CODE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] max-w-sm md:text-right">
            LIFESTYLE PHOTOGRAPHY, ACOUSTICS, ARCHITECTURE &amp; INSPIRATION
          </div>
        </div>

        {/* Introductory Philosophy Quote Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-sm bg-[#151515] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-[#0A0A0A] border border-[#E50914]/40 flex items-center justify-center shrink-0">
              <Radio className="w-6 h-6 text-[#E50914]" />
            </div>
            <div>
              <div className="font-mono text-xs text-[#E50914] uppercase tracking-wider font-semibold">
                CREATIVE CATALYST
              </div>
              <div className="font-['Syne'] text-lg sm:text-xl font-bold text-white mt-0.5">
                Every great interface draws nourishment from outside software.
              </div>
            </div>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] sm:text-right shrink-0">
            AUDIO // ARCHITECTURE // CINEMATOGRAPHY
          </div>
        </div>

        {/* Asymmetrical Gallery Masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {beyondItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative rounded-sm overflow-hidden bg-[#151515] border border-white/10 hover:border-[#E50914]/60 transition-all duration-500 flex flex-col justify-between ${
                item.aspect === 'tall' ? 'md:row-span-2' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />

                {/* Duotone Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 bg-[#E50914]/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/10 text-[#E50914] font-semibold">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Narrative */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Syne'] text-xl font-bold text-white mb-2 group-hover:text-[#E50914] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Quote block */}
                {item.quote && (
                  <div className="pt-3 border-t border-white/5 font-mono text-[11px] text-[#F5F5F5] italic flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#E50914] shrink-0 mt-0.5" />
                    <span>{item.quote}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Footer Bar */}
        <div className="mt-12 p-4 rounded-sm bg-[#151515] border border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-[#A1A1A1] gap-4">
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-[#E50914]" />
            <span>VISUAL CURATION &amp; FIELD RESEARCH</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <Compass className="w-3.5 h-3.5 text-[#E50914]" />
            <span>ALWAYS OBSERVING // ALWAYS EXPERIMENTING</span>
          </div>
        </div>
      </div>
    </section>
  )
}
