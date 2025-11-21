import Navigation from '@/components/Navigation'
import BetterPayHero from '@/components/products/BetterPayHero'
import BetterPayFeatures from '@/components/products/BetterPayFeatures'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function BetterPay() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <BetterPayHero />
      <BetterPayFeatures />
      <Contact />
      <Footer />
    </main>
  )
}