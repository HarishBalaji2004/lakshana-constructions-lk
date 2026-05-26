'use client'
import { useEffect, useRef } from 'react'
import { CheckCircle, Users, Award, Clock, Building2 } from 'lucide-react'

const features = [
  { icon: Award, label: 'Quality Materials', desc: 'We source only premium-grade materials for lasting structures.' },
  { icon: Users, label: 'Expert Engineers & Architects', desc: 'A dedicated team of certified professionals on every project.' },
  { icon: Clock, label: 'Timely Delivery', desc: 'We respect your timeline and honor every committed deadline.' },
  { icon: Building2, label: 'Residential & Commercial', desc: 'Expertise spanning homes, villas, offices, and commercial complexes.' },
]

const highlights = [
  'Over 2 years of proven construction excellence',
  'Registered and insured construction firm',
  'In-house design & engineering team',
  'End-to-end project management',
  'Transparent pricing and contracts',
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#040d1a]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #f59e0b 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1a3d72 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image stack */}
          <div className="relative reveal">
            {/* Main image */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop"
                alt="Construction team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/80 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 glass-card-light rounded-sm p-4 max-w-[180px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-[#040d1a] font-bold text-lg" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>2+</span>
                </div>
                <div>
                  <p className="text-white text-xs font-semibold leading-tight">Years of</p>
                  <p className="text-amber-400 text-xs font-semibold leading-tight">Excellence</p>
                </div>
              </div>
            </div>

            {/* Accent corner */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-amber-500/50" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="reveal">
              <span className="section-tag">About Us</span>
              <h2
                className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-6 leading-tight"
              >
                Building Tamil Nadu's{' '}
                <span className="text-gold-gradient">Future, One Project at a Time</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4" style={{ fontWeight: 300 }}>
                Lakshana Construction is a Paramakudi-based firm committed to delivering exceptional construction solutions. With over 2 years of hands-on experience, we bring engineering precision and artistic vision to every project.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8" style={{ fontWeight: 300 }}>
                From humble residences to large commercial complexes, our integrated team handles every phase — design, planning, execution, and interior finishing — under one roof.
              </p>
            </div>

            {/* Highlights list */}
            <ul className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <li key={item} className="reveal flex items-start gap-3" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Feature cards grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className="reveal glass-card rounded-sm p-4 service-card"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <f.icon size={20} className="text-amber-500 mb-2" />
                  <p className="text-white text-xs font-semibold mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}>
                    {f.label}
                  </p>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
