import Navigation from '@/components/Navigation'
import BetterLearnHero from '@/components/products/BetterLearnHero'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BetterLearn() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BetterLearnHero />
      <Contact />
      <Footer />
    </main>
  )
}