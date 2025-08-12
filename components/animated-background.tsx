"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(x: number, y: number, size: number, speedX: number, speedY: number, color: string) {
        this.x = x
        this.y = y
        this.size = size
        this.speedX = speedX
        this.speedY = speedY
        this.color = color
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width
        if (this.x > canvas.width) this.x = 0
        if (this.y < 0) this.y = canvas.height
        if (this.y > canvas.height) this.y = 0
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create particles
    const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    const particleCount = 50
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 2 + 0.5
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = (Math.random() - 0.5) * 0.5
      const speedY = (Math.random() - 0.5) * 0.5

      // Different colors for dark and light themes
      const color = isDark
        ? `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`
        : `rgba(0, 0, 0, ${Math.random() * 0.1 + 0.05})`

      particles.push(new Particle(x, y, size, speedX, speedY, color))
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw connections
      particles.forEach((a) => {
        particles.forEach((b) => {
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
              : `rgba(0, 0, 0, ${0.05 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [mounted, theme])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />
}
