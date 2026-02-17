import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  )

  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })
  const animationFrame = useRef<number | null>(null)

  useEffect(() => {
    // Disable custom cursor on mobile
    if (window.innerWidth < 768) return

    // Disable if user prefers reduced motion (accessibility)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      // Smooth trailing effect
      position.current.x += (mouse.current.x - position.current.x) * 0.22
      position.current.y += (mouse.current.y - position.current.y) * 0.22

      if (dotRef.current && outlineRef.current) {
        // Dot follows instantly
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 4}px, ${mouse.current.y - 4}px, 0)`

        // Ring trails smoothly
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      animationFrame.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  return (
    <div className="dark:bg-black relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      {/* Custom Cursor Ring */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] hidden md:block"
      />

      {/* Custom Cursor Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
      />
    </div>
  )
}

export default App
