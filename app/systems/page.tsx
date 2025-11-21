import Navigation from '@/components/Navigation'
import BetterSystemsHero from '@/components/products/BetterSystemsHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BetterSystems() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BetterSystemsHero />
      <Contact />
      <Footer />
    </main>
  )
}