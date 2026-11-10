import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { expertiseItems } from '../data/expertise'
import { Check, Code, Cpu, Eye, Sparkles, Terminal } from 'lucide-react'

export default function Expertise() {
  const [activeTab, setActiveTab] = useState(expertiseItems[0].id)
  const [interactiveMode, setInteractiveMode] = useState(false)
  const [apiLatency, setApiLatency] = useState<number | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const activeExpertise = expertiseItems.find((item) => item.id === activeTab) || expertiseItems[0]

  // Interactive Canvas simulation for Creative Dev tab
  useEffect(() => {
    if (activeTab !== 'creative-dev') return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400)
    let height = (canvas.height = 240)

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1,
      })
    }

    const render = () => {
      ctx.fillStyle = '#0A0A0A'
      ctx.fillRect(0, 0, width, height)

      // Draw subtle grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)'
      ctx.lineWidth = 1
      for (let x = 0; x < width; x += 30) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.fillStyle = '#E50914'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        // Connect lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 70) {
            ctx.strokeStyle = `rgba(229, 9, 20, ${1 - dist / 70})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [activeTab])

  // Mock API trigger for Backend tab
  const handleTestApi = () => {
    setApiLatency(null)
    const startTime = performance.now()
    setTimeout(() => {
      const duration = Math.round(performance.now() - startTime + 12)
      setApiLatency(duration)
    }, 180)
  }

  return (
    <section id="expertise" className="relative py-28 md:py-36 border-b border-white/10 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#E50914] tracking-[0.25em] uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E50914]" />
              02 // TECHNICAL DISCIPLINE
            </div>
            <h2 className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F5F5F5]">
              CORE <span className="text-[#E50914]">EXPERTISE</span>
            </h2>
          </div>
          <div className="font-mono text-xs text-[#A1A1A1] max-w-sm md:text-right">
            FOUR PILLARS OF COMPREHENSIVE ENGINEERING &amp; DESIGN
          </div>
        </div>

        {/* Tab Navigation Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {expertiseItems.map((item) => {
            const isActive = item.id === activeTab
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`p-5 rounded-sm text-left transition-all relative overflow-hidden group border ${
                  isActive
                    ? 'bg-[#151515] border-[#E50914] shadow-lg shadow-[#E50914]/10'
                    : 'bg-[#151515]/50 border-white/5 hover:border-white/20 hover:bg-[#151515]'
                }`}
              >
                {/* Active Top Red Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeExpertiseBar"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#E50914]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold transition-colors ${
                      isActive ? 'text-[#E50914]' : 'text-[#A1A1A1] group-hover:text-white'
                    }`}
                  >
                    // {item.number}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#E50914] animate-pulse' : 'bg-white/10'
                    }`}
                  />
                </div>

                <div className="font-['Syne'] text-lg font-bold text-white tracking-tight">
                  {item.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Discipline Detailed Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExpertise.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="p-8 md:p-12 rounded-sm bg-[#151515] border border-white/10 relative overflow-hidden"
          >
            {/* Ambient Red Blur in Background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#E50914]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Description, Specialties, Tech Stack */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="font-mono text-xs text-[#E50914] uppercase tracking-widest font-semibold mb-2 flex items-center gap-2">
                    <Cpu className="w-4 h-4" />
                    <span>PILLAR {activeExpertise.number} // ARCHITECTURAL OVERVIEW</span>
                  </div>
                  <h3 className="font-['Syne'] text-3xl sm:text-4xl font-extrabold text-white mb-2">
                    {activeExpertise.title}
                  </h3>
                  <p className="font-mono text-sm text-[#E50914] font-medium mb-4">
                    {activeExpertise.tagline}
                  </p>
                  <p className="text-[#A1A1A1] text-base leading-relaxed">
                    {activeExpertise.description}
                  </p>
                </div>

                {/* Specialties Bullet List */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold mb-3">
                    SPECIALIZED CAPABILITIES:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeExpertise.specialties.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A1A1A1] font-light"
                      >
                        <span className="w-4 h-4 rounded-sm bg-[#E50914]/15 border border-[#E50914]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#E50914]" />
                        </span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Stack Badges */}
                <div className="pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5] font-semibold mb-3">
                    CORE TECH STACK:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExpertise.coreStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-sm bg-[#0A0A0A] border border-white/10 text-xs font-mono text-[#F5F5F5] hover:border-[#E50914] hover:text-[#E50914] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Code Snippet / Interactive Playground */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#A1A1A1]">
                    <Code className="w-3.5 h-3.5 text-[#E50914]" />
                    <span>SYSTEM INSPECTOR</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setInteractiveMode(!interactiveMode)}
                    className="font-mono text-[11px] text-[#E50914] hover:text-[#FF2A36] uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    {interactiveMode ? 'VIEW ARCHITECTURE' : 'INTERACTIVE DEMO'}
                  </button>
                </div>

                {/* Interactive Demo Mode vs Code Preview */}
                {interactiveMode ? (
                  <div className="p-6 rounded-sm bg-[#0A0A0A] border border-[#E50914]/40 min-h-[280px] flex flex-col justify-between">
                    {activeExpertise.id === 'creative-dev' && (
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1]">
                          <span>CANVAS PARTICLE SYSTEM</span>
                          <span className="text-[#E50914]">60 FPS</span>
                        </div>
                        <div className="relative w-full rounded overflow-hidden border border-white/10">
                          <canvas ref={canvasRef} className="w-full h-[180px] block" />
                        </div>
                        <div className="font-mono text-[10px] text-[#A1A1A1] text-center">
                          Simulating kinetic physics &amp; GPU vertex clustering
                        </div>
                      </div>
                    )}

                    {activeExpertise.id === 'backend' && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1]">
                          <span>TRANSACTION STREAM TESTER</span>
                          <span className="text-[#E50914]">STATUS 200</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleTestApi}
                          className="w-full py-3 bg-[#151515] hover:bg-[#E50914]/20 border border-[#E50914] text-[#F5F5F5] font-mono text-xs uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2"
                        >
                          <Terminal className="w-3.5 h-3.5 text-[#E50914]" />
                          TRIGGER HIGH-THROUGHPUT PIPELINE
                        </button>
                        <div className="p-3 bg-[#151515] rounded border border-white/5 font-mono text-[11px] text-[#A1A1A1]">
                          {apiLatency ? (
                            <div className="text-emerald-400">
                              ✓ ACKNOWLEDGED — Execution in {apiLatency}ms (Cache Hit)
                            </div>
                          ) : (
                            <div>Ready to benchmark pipeline execution...</div>
                          )}
                        </div>
                      </div>
                    )}

                    {(activeExpertise.id === 'frontend' || activeExpertise.id === 'uiux') && (
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1]">
                          <span>DESIGN TOKEN COMPONENT</span>
                          <span className="text-[#E50914]">TOKENS LOADED</span>
                        </div>
                        <div className="p-4 rounded bg-[#151515] border border-white/10 flex flex-col gap-3">
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-[#A1A1A1]">PRIMARY_ACCENT</span>
                            <span className="text-[#E50914] font-bold">#E50914</span>
                          </div>
                          <div className="w-full h-3 rounded-full bg-gradient-to-r from-[#E50914] to-[#FF2A36]" />
                          <div className="flex justify-between text-xs font-mono">
                            <span className="text-[#A1A1A1]">SURFACE_CONTRAST</span>
                            <span className="text-white">18.4:1 (AAA Pass)</span>
                          </div>
                        </div>
                        <div className="font-mono text-[11px] text-[#A1A1A1]">
                          Zero layout shift with strict variable containment.
                        </div>
                      </div>
                    )}

                    <div className="pt-3 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-[#A1A1A1]">
                      <span>SANDBOX: ACTIVE</span>
                      <span className="text-[#E50914]">DZAKIRUL DEV ENGINE</span>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-sm bg-[#0A0A0A] border border-white/10 p-5 font-mono text-xs overflow-x-auto text-[#F5F5F5]">
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[10px] text-[#A1A1A1]">
                      <span>{activeExpertise.id}.config.ts</span>
                      <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
                    </div>
                    <pre className="text-[11px] sm:text-xs text-[#A1A1A1] leading-relaxed">
                      <code>{activeExpertise.codePreview}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
