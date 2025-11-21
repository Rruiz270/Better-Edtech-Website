'use client'

import { useState, useEffect } from 'react'
import { CreditCard, Shield, BarChart, Users, Smartphone, Receipt, TrendingUp, Lock } from 'lucide-react'

export default function BetterPayFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  const features = [
    {
      id: 1,
      icon: CreditCard,
      title: 'Múltiplos Meios de Pagamento',
      description: 'Cartões, PIX, boleto, débito em conta e parcelamentos flexíveis para facilitar o acesso à educação.',
      color: 'pale-azure'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Segurança Máxima',
      description: 'Certificação PCI DSS e criptografia de ponta para proteger dados financeiros de alunos e instituições.',
      color: 'pale-azure'
    },
    {
      id: 3,
      icon: BarChart,
      title: 'Analytics Inteligente',
      description: 'Dashboards completos com insights sobre inadimplência, receitas e comportamento de pagamento.',
      color: 'pale-azure'
    },
    {
      id: 4,
      icon: Users,
      title: 'Portal do Aluno',
      description: 'Interface intuitiva para alunos acompanharem mensalidades, histórico e realizarem pagamentos.',
      color: 'pale-azure'
    },
    {
      id: 5,
      icon: Smartphone,
      title: 'App Mobile',
      description: 'Aplicativo nativo para iOS e Android com notificações e pagamentos via aproximação.',
      color: 'pale-azure'
    },
    {
      id: 6,
      icon: Receipt,
      title: 'Gestão de Boletos',
      description: 'Emissão automática, reenvios inteligentes e conciliação bancária automatizada.',
      color: 'pale-azure'
    },
    {
      id: 7,
      icon: TrendingUp,
      title: 'Previsão de Receita',
      description: 'IA para prever inadimplência e otimizar estratégias de cobrança e retenção.',
      color: 'pale-azure'
    },
    {
      id: 8,
      icon: Lock,
      title: 'Compliance Total',
      description: 'Adequação completa à LGPD, normas do Banco Central e regulamentações educacionais.',
      color: 'pale-azure'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = parseInt(entry.target.getAttribute('data-feature-id') || '0')
            setVisibleFeatures(prev => [...prev, featureId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-feature-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-baby-powder to-pale-azure/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-6">
            Funcionalidades <span className="text-pale-azure">Completas</span>
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto leading-relaxed">
            Tudo que sua instituição precisa para modernizar a gestão financeira 
            e melhorar a experiência de pagamento dos alunos
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={feature.id}
                data-feature-id={feature.id}
                className={`
                  bg-baby-powder rounded-2xl p-8 shadow-lg border border-gray-200 
                  hover:shadow-xl hover:border-pale-azure/30 transition-all duration-500 transform
                  ${visibleFeatures.includes(feature.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-${feature.color}/20 rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent size={32} className={`text-${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-rich-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-custom leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Integration Section */}
        <div className="mt-20 bg-gradient-to-r from-rich-black to-gray-custom text-baby-powder p-12 rounded-3xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6 text-pale-azure">
              Integração Perfeita com Better EdTech
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              O Better Pay foi desenvolvido para se integrar nativamente com nossa plataforma educacional, 
              oferecendo uma experiência unificada e dados sincronizados em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#contact" 
                className="bg-pale-azure text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-baby-powder transition-all duration-300"
              >
                Solicitar Demonstração
              </a>
              <a 
                href="/edtech" 
                className="border-2 border-pale-azure text-pale-azure hover:bg-pale-azure hover:text-rich-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Ver Better EdTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}