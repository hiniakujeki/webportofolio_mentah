import { useEffect, useState } from 'react'

export default function BackgroundFX() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to percentage of screen
      const x = Math.round((e.clientX / window.innerWidth) * 100)
      const y = Math.round((e.clientY / window.innerHeight) * 100)
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Noise texture */}
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />

      {/* Cybernetic subtle vertical grid lines */}
      <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 flex justify-between opacity-15">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E50914]/20 to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E50914]/20 to-transparent" />
      </div>

      {/* Dynamic ambient red glow that tracks mouse gently */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 transition-all duration-1000 ease-out"
        style={{
          background: 'radial-gradient(circle, #E50914 0%, rgba(229, 9, 20, 0) 70%)',
          left: `calc(${mousePos.x}% - 300px)`,
          top: `calc(${mousePos.y}% - 300px)`,
        }}
      />

      {/* Static top-right and bottom-left atmospheric glows */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#E50914]/10 blur-[130px]" />
      <div className="absolute top-1/2 -left-40 w-[450px] h-[450px] rounded-full bg-[#FF2A36]/8 blur-[120px]" />
      <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] rounded-full bg-[#E50914]/10 blur-[150px]" />
    </div>
  )
}
