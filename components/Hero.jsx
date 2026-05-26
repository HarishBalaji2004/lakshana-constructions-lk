'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown, ChevronRight } from 'lucide-react'

export default function Hero() {
  const particlesRef = useRef(null)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #040d1a 0%, #071428 40%, #0d2142 70%, #122d57 100%)" }}>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80&auto=format&fit=crop" onError={(e) => { e.target.style.display="none" }}
          alt="Construction"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040d1a]/95 via-[#040d1a]/80 to-[#040d1a]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-transparent to-[#040d1a]/30" />
      </div>

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated corner bracket */}
      <div className="absolute top-28 left-8 md:left-16 z-10">
        <div className="w-12 h-12 border-l-2 border-t-2 border-amber-500/60" />
      </div>
      <div className="absolute top-28 right-8 md:right-16 z-10">
        <div className="w-12 h-12 border-r-2 border-t-2 border-amber-500/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Tag line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-amber-500" />
          <span className="section-tag">Est. in Paramakudi · Tamil Nadu</span>
        </div>

        {/* Main heading */}
        <div className="max-w-3xl">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-2"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            <span className="text-white block">LAKSHANA</span>
            <span className="shimmer-text block">CONSTRUCTION</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-px flex-1 max-w-[80px] bg-amber-500" />
            <div className="w-2 h-2 bg-amber-500 rotate-45" />
          </div>

          <p
            className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl mb-4"
            style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300 }}
          >
            Building Trust with Quality Construction. From foundations to finishes — we craft spaces that stand the test of time.
          </p>

          {/* Stat bar */}
          <div className="flex gap-8 my-8">
            {[
              { num: '2+', label: 'Years Experience' },
              { num: '50+', label: 'Projects Done' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl text-amber-400 font-bold leading-none"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800 }}
                >
                  {s.num}
                </span>
                <span className="text-xs text-slate-400 tracking-wider uppercase mt-1" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={() => scrollTo('portfolio')}
              className="btn-gold px-8 py-3.5 rounded-sm flex items-center gap-2 text-sm"
            >
              <span>View Projects</span>
              <ChevronRight size={16} className="relative z-10" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline px-8 py-3.5 rounded-sm flex items-center gap-2 text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom info strip */}
      <div className="relative z-10 border-t border-white/[0.06] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-slate-500 uppercase tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>
            <span>🏗 Residential</span>
            <span className="text-amber-500/40">·</span>
            <span>🏢 Commercial</span>
            <span className="text-amber-500/40">·</span>
            <span>🎨 Interiors</span>
            <span className="text-amber-500/40">·</span>
            <span>📐 Architecture</span>
          </div>
          <button
            onClick={() => scrollTo('about')}
            className="text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-2 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'Space Mono, monospace' }}
          >
            Explore <ArrowDown size={14} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
