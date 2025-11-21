import Navigation from '@/components/Navigation'
import BetterLabsHero from '@/components/products/BetterLabsHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BetterLabs() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BetterLabsHero />
      <Contact />
      <Footer />
    </main>
  )
}