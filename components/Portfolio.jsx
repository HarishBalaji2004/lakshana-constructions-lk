'use client'
import { useEffect, useRef, useState } from 'react'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    title: 'Modern Villa',
    category: 'Residential',
    location: 'Paramakudi',
    area: '2,800 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80&auto=format&fit=crop',
    color: '#f59e0b',
  },
  {
    title: 'Apartment Project',
    category: 'Residential',
    location: 'Ramanathapuram',
    area: '18,500 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80&auto=format&fit=crop',
    color: '#3b82f6',
  },
  {
    title: 'Office Building',
    category: 'Commercial',
    location: 'Madurai',
    area: '12,000 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
    color: '#10b981',
  },
  {
    title: 'Interior Works',
    category: 'Interior',
    location: 'Paramakudi',
    area: '3,200 sq.ft',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format&fit=crop',
    color: '#a855f7',
  },
  {
    title: '3D Architectural Design',
    category: 'Architecture',
    location: 'Ramanathapuram',
    area: '—',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80&auto=format&fit=crop',
    color: '#ef4444',
  },
  {
    title: 'Luxury Residence',
    category: 'Residential',
    location: 'Paramakudi',
    area: '4,500 sq.ft',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format&fit=crop',
    color: '#f97316',
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Architecture']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [hovered, setHovered] = useState(null)
  const sectionRef = useRef(null)

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter)

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
    <section id="portfolio" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[#040d1a]" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 reveal">
          <div>
            <span className="section-tag">Our Work</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-white mt-3">
              Featured <span className="text-gold-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-xs text-sm leading-relaxed" style={{ fontWeight: 300 }}>
            A selection of our most impactful constructions across Tamil Nadu.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-sm text-xs transition-all duration-200 ${
                filter === cat
                  ? 'bg-amber-500 text-[#040d1a] font-bold'
                  : 'border border-white/10 text-slate-400 hover:border-amber-500/30 hover:text-amber-400'
              }`}
              style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em', fontWeight: 600 }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className="reveal relative rounded-sm overflow-hidden cursor-pointer group aspect-[4/3]"
              style={{ transitionDelay: `${i * 60}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 portfolio-overlay" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="px-2 py-0.5 text-xs font-bold rounded-sm"
                  style={{
                    background: `${project.color}25`,
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3
                  className="text-white font-semibold text-lg mb-1 group-hover:text-amber-400 transition-colors"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
                >
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-slate-400 text-xs" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                  <span>📍 {project.location}</span>
                  <span>· {project.area}</span>
                  <span>· {project.year}</span>
                </div>

                {/* Hover action */}
                <div
                  className={`flex items-center gap-2 mt-3 transition-all duration-300 ${
                    hovered === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                  }`}
                >
                  <div className="h-px flex-1 bg-amber-500/50" />
                  <ExternalLink size={12} className="text-amber-400" />
                  <span
                    className="text-amber-400 text-xs"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
                  >
                    VIEW
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-slate-500 text-sm mb-4">Want to see more or discuss your project?</p>
          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline px-8 py-3 rounded-sm text-sm"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}
