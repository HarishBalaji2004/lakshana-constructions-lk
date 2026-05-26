'use client'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef(null)

  const services = ['House Construction', 'Commercial Building', 'Architectural Design', 'Interior Design', 'Renovation', 'Site Planning']

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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Address',
      value: 'No.14, Bharathi Nagar, Paramakudi,\nRamanathapuram, Tamil Nadu – 623707',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93603 33025',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'lakshanaconstruction@gmail.com',
    },
  ]

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 bg-[#040d1a]" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.3), transparent)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.04] rounded-full"
        style={{ background: 'radial-gradient(circle, #f59e0b 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading text-4xl sm:text-5xl text-white mt-3 mb-4">
            Start Your <span className="text-gold-gradient">Project Today</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm" style={{ fontWeight: 300 }}>
            Ready to build something great? Reach out to our team for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Map + Contact Info */}
          <div className="space-y-6">
            {/* Map placeholder */}
            <div className="reveal rounded-sm overflow-hidden aspect-[4/3] relative map-placeholder border border-white/[0.06]">
              {/* Blueprint grid */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(251,191,36,0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(251,191,36,0.08) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                }}
              />
              {/* Pin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mb-3 animate-pulse">
                  <MapPin size={28} className="text-amber-500" />
                </div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
                >
                  LAKSHANA CONSTRUCTION
                </p>
                <p className="text-slate-400 text-xs mt-1">No.14, Bharathi Nagar, Paramakudi</p>
                <p className="text-slate-500 text-xs">Ramanathapuram, Tamil Nadu – 623707</p>
                <a
                  href="https://maps.google.com/?q=Paramakudi,Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-xs text-amber-400 hover:text-amber-300 transition-colors border border-amber-500/30 px-4 py-1.5 rounded-sm"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.1em' }}
                >
                  OPEN IN MAPS →
                </a>
              </div>
            </div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-3 gap-3 reveal">
              {contactInfo.map((info) => (
                <div key={info.label} className="glass-card rounded-sm p-4 text-center service-card">
                  <info.icon size={18} className="text-amber-500 mx-auto mb-2" />
                  <p
                    className="text-slate-500 text-xs mb-1 uppercase tracking-wider"
                    style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.55rem' }}
                  >
                    {info.label}
                  </p>
                  <p className="text-white text-xs font-medium whitespace-pre-line leading-relaxed break-all text-center" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Social media */}
            <div className="reveal flex items-center gap-4">
              <span className="text-slate-500 text-xs uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                Follow Us
              </span>
              <div className="h-px flex-1 bg-white/[0.06]" />
              {[
                { icon: 'fab fa-facebook-f', href: '#', color: '#1877f2' },
                { icon: 'fab fa-instagram', href: '#', color: '#e4405f' },
                { icon: 'fab fa-whatsapp', href: '#', color: '#25d366' },
                { icon: 'fab fa-youtube', href: '#', color: '#ff0000' },
              ].map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="w-8 h-8 glass-card rounded-sm flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110"
                  style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <i className={`${social.icon} text-xs`} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="reveal">
            <div className="glass-card-light rounded-sm p-6 sm:p-8">
              <h3
                className="text-white font-semibold text-xl mb-6"
                style={{ fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '0.08em' }}
              >
                SEND US A MESSAGE
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={48} className="text-amber-500 mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                    Message Received!
                  </h4>
                  <p className="text-slate-400 text-sm">Our team will reach out to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="form-input w-full rounded-sm px-4 py-2.5 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="form-input w-full rounded-sm px-4 py-2.5 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="form-input w-full rounded-sm px-4 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                      Service Required
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="form-input w-full rounded-sm px-4 py-2.5 text-sm"
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <option value="" style={{ background: '#071428' }}>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#071428' }}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5 uppercase tracking-wider" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project — location, size, timeline, budget..."
                      className="form-input w-full rounded-sm px-4 py-2.5 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full px-6 py-3.5 rounded-sm flex items-center justify-center gap-2 text-sm mt-2"
                  >
                    <span>Send Message</span>
                    <Send size={14} className="relative z-10" />
                  </button>

                  <p className="text-slate-600 text-xs text-center" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.6rem' }}>
                    We'll respond within 24 hours · Free consultation
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
