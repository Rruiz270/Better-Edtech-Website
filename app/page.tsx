import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Partnerships from '@/components/Partnerships'
import SuccessCases from '@/components/SuccessCases'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Partnerships />
      <SuccessCases />
      <Footer />
    </main>
  )
}