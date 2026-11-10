import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPointerDevice, setIsPointerDevice] = useState(true)

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse), not touchscreens
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsPointerDevice(mediaQuery.matches)

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsPointerDevice(e.matches)
    }

    mediaQuery.addEventListener('change', handlePointerChange)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target?.closest('a, button, input, textarea, select, [data-cursor="pointer"]')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousemove', handleElementHover)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      mediaQuery.removeEventListener('change', handlePointerChange)
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousemove', handleElementHover)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [isVisible])

  if (!isPointerDevice || !isVisible) return null

  return (
    <>
      {/* Central crisp red dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#E50914] mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
        style={{ width: 6, height: 6 }}
      />

      {/* Trailing smooth red halo ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#E50914]/60 backdrop-blur-[0.5px]"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering ? 'rgba(229, 9, 20, 0.12)' : 'rgba(229, 9, 20, 0.02)',
          borderColor: isHovering ? '#FF2A36' : 'rgba(229, 9, 20, 0.4)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 220, mass: 0.2 }}
      />
    </>
  )
}
