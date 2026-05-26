'use client'
import { useEffect, useRef } from 'react'
import { Compass, Layers, SquareDashedBottom, Maximize2 } from 'lucide-react'

const designs = [
  {
    title: '3D House Concept',
    type: 'Exterior Design',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80&auto=format&fit=crop',
    specs: ['4 Bedrooms', '2 Floors', '3,200 sq.ft'],
  },
  {
    title: 'Structural Blueprint',
    type: 'Engineering Plan',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
    specs: ['Foundation Plan', 'Column Layout', 'Load Distribution'],
  },
  {
    title: 'Interior 3D Render',
    type: 'Interior Design',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80&auto=format&fit=crop',
    specs: ['Living + Dining', 'Open Kitchen', 'Premium Finish'],
  },
]

const stages = [
  { num: '01', label: 'Site Survey', desc: 'Comprehensive analysis of land, soil, and surroundings.' },
  { num: '02', label: 'Concept Design', desc: '2D floor plans and initial design concepts presented.' },
  { num: '03', label: '3D Visualization', desc: 'Photo-realistic 3D renders for client approval.' },
  { num: '04', label: 'Construction', desc: 'Precision execution matching the approved blueprints.' },
]

export default function ArchitectDesign() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
            })
          }
        })
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="design" className="relative py-24 lg:py-32 overflow-hidden blueprint-bg" ref={sectionRef}>
      {/* Blueprint corner marks */}
      <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-amber-500/40" />
      <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-amber-500/40" />
      <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-amber-500/40" />
      <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-amber-500/40" />

      {/* Rotating blueprint circle */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.06] rotate-slow hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="#f59e0b" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="50" />
          <circle cx="100" cy="100" r="30" />
          <line x1="10" y1="100" x2="190" y2="100" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="27" y1="27" x2="173" y2="173" />
          <line x1="173" y1="27" x2="27" y2="173" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Design Studio</span>
          <h2 className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            Architectural <span className="text-gold-gradient">Design Showcase</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed" style={{ fontWeight: 300 }}>
            From first sketch to final render — our design process blends engineering rigor with creative vision.
          </p>
        </div>

        {/* Design cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {designs.map((design, i) => (
            <div
              key={design.title}
              className="reveal glass-card rounded-sm overflow-hidden group hover-lift"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Blueprint overlay effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(251,191,36,0.4) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(251,191,36,0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Maximize icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-7 h-7 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-sm flex items-center justify-center">
                    <Maximize2 size={12} className="text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="section-tag text-[0.6rem]">{design.type}</span>
                    <h3
                      className="text-white font-semibold mt-1"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
                    >
                      {design.title}
                    </h3>
                  </div>
                  <Compass size={16} className="text-amber-500 mt-1" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {design.specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-slate-400 text-xs border border-white/10 px-2 py-0.5 rounded-sm"
                      style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process timeline */}
        <div className="reveal">
          <div className="text-center mb-10">
            <h3
              className="text-2xl text-white font-semibold"
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
            >
              OUR DESIGN PROCESS
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stages.map((stage, i) => (
              <div key={stage.label} className="relative">
                {/* Connector line */}
                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(100%-0px)] w-full h-px z-0"
                    style={{ background: 'linear-gradient(90deg, rgba(251,191,36,0.4), transparent)' }}
                  />
                )}
                <div className="glass-card-light rounded-sm p-5 relative z-10">
                  <div
                    className="text-3xl font-black text-amber-500/20 leading-none mb-3"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {stage.num}
                  </div>
                  <h4
                    className="text-white font-semibold mb-2"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
                  >
                    {stage.label}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
