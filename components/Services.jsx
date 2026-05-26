'use client'
import { useEffect, useRef } from 'react'
import { Home, Building2, Compass, Palette, Wrench, Map, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'House Construction',
    desc: 'Custom-designed residential homes built with structural integrity and aesthetic elegance. From single-floor to multi-storey.',
    tags: ['Foundations', 'Framing', 'Finishing'],
    color: '#f59e0b',
  },
  {
    icon: Building2,
    title: 'Commercial Buildings',
    desc: 'Office complexes, retail centers, warehouses — built to industrial standards with modern architectural aesthetics.',
    tags: ['Office Spaces', 'Retail', 'Industrial'],
    color: '#3b82f6',
  },
  {
    icon: Compass,
    title: 'Architectural Design',
    desc: 'Innovative architectural blueprints and 3D concept designs that balance function, beauty, and structural soundness.',
    tags: ['Blueprints', '3D Models', 'Planning'],
    color: '#10b981',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    desc: 'Complete interior transformation — from flooring and ceiling to lighting, furnishings, and finishing touches.',
    tags: ['Modular Kitchen', 'Wardrobes', 'Lighting'],
    color: '#a855f7',
  },
  {
    icon: Wrench,
    title: 'Renovation',
    desc: 'Breathe new life into existing structures with targeted renovations, upgrades, and modernization works.',
    tags: ['Remodeling', 'Upgrades', 'Repairs'],
    color: '#ef4444',
  },
  {
    icon: Map,
    title: 'Site Planning',
    desc: 'Expert land assessment and site planning services to maximize space utility and meet regulatory requirements.',
    tags: ['Survey', 'Layout', 'Permits'],
    color: '#f97316',
  },
]

export default function Services() {
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
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#071428]" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">What We Do</span>
          <h2
            className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-4"
          >
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed" style={{ fontWeight: 300 }}>
            From concept to completion, Lakshana Construction delivers the full spectrum of building and design services tailored to your needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="reveal glass-card service-card rounded-sm p-6 group cursor-default"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
              >
                <service.icon size={22} style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3
                className="text-white font-semibold text-lg mb-2 group-hover:text-amber-400 transition-colors"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
              >
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4" style={{ fontWeight: 300 }}>
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      background: `${service.color}10`,
                      color: service.color,
                      border: `1px solid ${service.color}20`,
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.6rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover link */}
              <div className="flex items-center gap-2 text-slate-500 group-hover:text-amber-400 transition-colors text-xs">
                <span style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}>LEARN MORE</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
