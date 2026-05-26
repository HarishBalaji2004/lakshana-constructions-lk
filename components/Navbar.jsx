'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Design', href: '#design' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#040d1a]/95 backdrop-blur-md border-b border-white/[0.06] shadow-2xl py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-amber-500 rounded-sm rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <span className="relative font-bold text-[#040d1a] text-sm tracking-tight z-10" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800 }}>
                LK
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white text-sm font-semibold tracking-widest uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.2em' }}>
                Lakshana
              </span>
              <span className="text-amber-500 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                Construction
              </span>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link ${active === link.href.replace('#', '') ? 'text-amber-400' : ''}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="btn-gold px-5 py-2 rounded-sm text-xs"
            >
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#040d1a]/98 backdrop-blur-xl transition-all duration-400 flex flex-col justify-center items-center gap-8 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            className="text-white text-2xl font-semibold tracking-widest uppercase hover:text-amber-400 transition-colors"
            style={{ fontFamily: 'Barlow Condensed, sans-serif', animationDelay: `${i * 0.05}s` }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNav('#contact')}
          className="btn-gold px-8 py-3 rounded-sm mt-4"
        >
          <span className="text-sm">Get a Free Quote</span>
        </button>
      </div>
    </>
  )
}
