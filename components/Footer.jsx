'use client'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const quickLinks = ['About Us', 'Services', 'Portfolio', 'Design Showcase', 'Why Choose Us', 'Contact']
const services = ['House Construction', 'Commercial Buildings', 'Architectural Design', 'Interior Design', 'Renovation', 'Site Planning']

export default function Footer() {
  const scrollTo = (id) => {
    const sectionMap = {
      'About Us': 'about',
      'Services': 'services',
      'Portfolio': 'portfolio',
      'Design Showcase': 'design',
      'Why Choose Us': 'why-us',
      'Contact': 'contact',
    }
    const el = document.getElementById(sectionMap[id] || id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.4), transparent)' }}
      />

      <div className="relative bg-[#040d1a] pt-16 pb-6">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251,191,36,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251,191,36,1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-amber-500 rounded-sm rotate-3" />
                  <span className="relative font-bold text-[#040d1a] text-sm z-10" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800 }}>
                    LK
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    Lakshana
                  </p>
                  <p className="text-amber-500" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.2em' }}>
                    Construction
                  </p>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                Building Trust with Quality Construction. Serving Tamil Nadu since 2022 — from Paramakudi to the world.
              </p>

              {/* Social icons */}
              <div className="flex gap-3">
                {[
                  { icon: 'fab fa-facebook-f', href: '#' },
                  { icon: 'fab fa-instagram', href: '#' },
                  { icon: 'fab fa-whatsapp', href: '#' },
                  { icon: 'fab fa-youtube', href: '#' },
                ].map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    className="w-7 h-7 border border-white/10 rounded-sm flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/30 transition-all"
                  >
                    <i className={`${s.icon} text-xs`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.15em' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollTo(link)}
                      className="text-slate-400 text-xs hover:text-amber-400 transition-colors flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.15em' }}
              >
                Services
              </h4>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s}>
                    <span className="text-slate-400 text-xs flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-amber-500/50 rounded-full flex-shrink-0" />
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.15em' }}
              >
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <MapPin size={13} className="text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-400 text-xs leading-relaxed">
                    No.14, Bharathi Nagar, Paramakudi,<br />
                    Ramanathapuram, Tamil Nadu – 623707
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={13} className="text-amber-500 flex-shrink-0" />
                  <a href="tel:+919360333025" className="text-slate-400 text-xs hover:text-amber-400 transition-colors">
                    +91 93603 33025
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail size={13} className="text-amber-500 flex-shrink-0" />
                  <a href="mailto:lakshanaconstruction@gmail.com" className="text-slate-400 text-xs hover:text-amber-400 transition-colors break-all">
                    lakshanaconstruction@gmail.com
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div className="mt-5 border border-white/[0.06] rounded-sm p-3">
                <p className="text-amber-500/80 text-xs mb-1" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                  WORKING HOURS
                </p>
                <p className="text-slate-300 text-xs">Mon – Sat: 9:00 AM – 7:00 PM</p>
                <p className="text-slate-500 text-xs">Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          >
            <p className="text-slate-600 text-xs" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
              © {new Date().getFullYear()} Lakshana Construction. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-slate-600 text-xs" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                Paramakudi · Tamil Nadu · India
              </span>
              <div className="w-1 h-1 bg-amber-500/40 rounded-full" />
              <span className="text-slate-600 text-xs" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                Designed with ❤️ for Excellence
              </span>
            </div>
          </div>

          {/* Infovex credit */}
          <div className="border-t border-white/[0.03] mt-4 pt-4 text-center">
            <p className="text-slate-700 text-xs" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.58rem' }}>
              Developed &amp; Designed by{' '}
              <a
                href="https://infovextech.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600/60 hover:text-amber-500 transition-colors"
              >
                Infovex Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
