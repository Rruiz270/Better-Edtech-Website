import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Demo from '@/components/Demo'
import Partnerships from '@/components/Partnerships'
import CaseStudies from '@/components/CaseStudies'
import TeachProgram from '@/components/TeachProgram'
import Blog from '@/components/Blog'
import Manifesto from '@/components/Manifesto'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BetterEdTech() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Demo />
      <Partnerships />
      <CaseStudies />
      <TeachProgram />
      <Blog />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  )
}