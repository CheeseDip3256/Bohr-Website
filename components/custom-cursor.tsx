'use client'

import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Clamp cursor position to viewport bounds
      const x = Math.max(0, Math.min(e.clientX, window.innerWidth))
      const y = Math.max(0, Math.min(e.clientY, window.innerHeight))
      setPosition({ x, y })
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50 mix-blend-difference">
      {/* Vertical line from top to bottom through cursor */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${position.x}px` }}
      />

      {/* Horizontal line from left to right through cursor */}
      <div
        className="absolute left-0 right-0 h-[2px] bg-white"
        style={{ top: `${position.y}px` }}
      />

      {/* Center circle at cursor position */}
      <div
        className="absolute w-16 h-16 rounded-full border-[2px] border-white"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  )
}
