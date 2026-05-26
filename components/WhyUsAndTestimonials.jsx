'use client'
import { useEffect, useRef } from 'react'
import { Star, Shield, Zap, DollarSign, Clock, ThumbsUp, Users } from 'lucide-react'

const reasons = [
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Certified engineers, architects, and skilled craftsmen with proven track records.',
    stat: '10+',
    statLabel: 'Professionals',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'ISI-certified materials and international construction standards on every build.',
    stat: 'ISO',
    statLabel: 'Standards',
  },
  {
    icon: Zap,
    title: 'Modern Design',
    desc: 'Contemporary aesthetics blended with functional, space-efficient architecture.',
    stat: '3D',
    statLabel: 'Visualizations',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    desc: 'Competitive transparent quotes with zero hidden costs and flexible payment plans.',
    stat: '0',
    statLabel: 'Hidden Costs',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'Rigorous project scheduling ensures we always hit agreed completion dates.',
    stat: '98%',
    statLabel: 'On Schedule',
  },
  {
    icon: ThumbsUp,
    title: 'Customer Satisfaction',
    desc: 'Our clients stay for life — word-of-mouth referrals drive most of our growth.',
    stat: '100%',
    statLabel: 'Satisfaction',
  },
]

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Home Owner, Paramakudi',
    review:
      'Lakshana Construction built our dream home on budget and ahead of schedule. The quality of materials and finish exceeded everything we expected. Highly recommended!',
    rating: 5,
    avatar: 'RK',
    project: 'Villa Construction',
  },
  {
    name: 'Meenakshi Sundaram',
    role: 'Business Owner, Madurai',
    review:
      'We hired them for our commercial office complex. The architectural team was brilliant — they understood our brief immediately and delivered a stunning modern building.',
    rating: 5,
    avatar: 'MS',
    project: 'Commercial Office',
  },
  {
    name: 'Priya Annamalai',
    role: 'Interior Client, Ramanathapuram',
    review:
      'The interior design team completely transformed our home. Their attention to detail is remarkable. The modular kitchen and living area are exactly what we envisioned.',
    rating: 5,
    avatar: 'PA',
    project: 'Interior Renovation',
  },
]

export default function WhyUsAndTestimonials() {
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
    <>
      {/* WHY CHOOSE US */}
      <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
        <div className="absolute inset-0 bg-[#040d1a]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse at center, #f59e0b 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Why We're Different</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
              Why Choose <span className="text-gold-gradient">Lakshana?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm" style={{ fontWeight: 300 }}>
              Six pillars that define our commitment to every client and every project we undertake.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="reveal glass-card service-card rounded-sm p-6 flex gap-4 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Stat */}
                <div className="flex-shrink-0 text-center">
                  <div
                    className="text-xl font-black text-amber-500 leading-none"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {reason.stat}
                  </div>
                  <div
                    className="text-slate-600 leading-none mt-0.5"
                    style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem' }}
                  >
                    {reason.statLabel}
                  </div>
                </div>
                <div className="w-px bg-white/[0.06] self-stretch" />
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <reason.icon size={14} className="text-amber-500" />
                    <h3
                      className="text-white font-semibold text-sm group-hover:text-amber-400 transition-colors"
                      style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.05em' }}
                    >
                      {reason.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{reason.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#071428]" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-tag">Client Stories</span>
            <h2 className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="reveal testimonial-card rounded-sm p-6 hover-lift"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote mark */}
                <div
                  className="text-5xl text-amber-500/20 leading-none mb-2 font-bold"
                  style={{ fontFamily: 'Playfair Display, serif', lineHeight: 0.8 }}
                >
                  "
                </div>

                {/* Review */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                  {t.review}
                </p>

                {/* Project badge */}
                <div className="mb-5">
                  <span
                    className="text-xs px-2 py-0.5 rounded-sm text-amber-500 border border-amber-500/20 bg-amber-500/5"
                    style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}
                  >
                    {t.project}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                  <div
                    className="w-9 h-9 rounded-sm bg-amber-500 flex items-center justify-center text-[#040d1a] font-bold text-xs flex-shrink-0"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {t.name}
                    </p>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
