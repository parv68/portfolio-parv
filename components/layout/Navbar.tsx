'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X, Terminal } from 'lucide-react'
import { motion, useScroll } from 'framer-motion'


const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        mobileOpen
          ? 'border-b border-border bg-background'
          : scrolled
            ? 'border-b border-border bg-background/85 backdrop-blur-[12px]'
            : 'bg-transparent'
      }`}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary/45 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="mx-auto flex h-16 max-w-[1000px] items-center justify-between px-6">
        <Link href="#" className="text-lg font-semibold">
          Parv
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-cli'))}
            className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm transition-colors hover:bg-secondary cursor-pointer select-none text-muted-foreground hover:text-foreground"
            title="Open Interactive CLI Console (Ctrl+K or /)"
          >
            <Terminal size={14} />
            <kbd className="hidden sm:inline font-mono text-[9px] bg-muted px-1 py-0.5 rounded border border-border">Ctrl+K</kbd>
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-resume'))}
            className="rounded-lg border border-border px-4 py-1.5 text-sm transition-colors hover:bg-secondary cursor-pointer select-none font-medium text-foreground"
          >
            View Resume ↗
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center md:hidden animate-fade-in"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div 
          className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 bottom-0 w-[240px] bg-background border-l border-border p-6 shadow-2xl flex flex-col h-[calc(100vh-64px)] select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-5 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground font-mono uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border my-2" />
              <button
                onClick={() => {
                  setMobileOpen(false)
                  window.dispatchEvent(new CustomEvent('open-cli'))
                }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-xs transition-colors hover:bg-secondary cursor-pointer text-muted-foreground hover:text-foreground font-mono uppercase"
              >
                <Terminal size={14} />
                Terminal CLI
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false)
                  window.dispatchEvent(new CustomEvent('open-resume'))
                }}
                className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2.5 text-xs transition-colors hover:bg-secondary cursor-pointer font-medium text-foreground font-mono uppercase"
              >
                View Resume ↗
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}


