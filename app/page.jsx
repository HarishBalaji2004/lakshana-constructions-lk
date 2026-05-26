'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import ArchitectDesign from '@/components/ArchitectDesign'
import WhyUsAndTestimonials from '@/components/WhyUsAndTestimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <ArchitectDesign />
      <WhyUsAndTestimonials />
      <Contact />
      <Footer />
    </main>
  )
}
