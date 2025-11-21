'use client'

import { useState, useEffect } from 'react'
import { CreditCard, Shield, BarChart, Users } from 'lucide-react'

export default function BetterPayHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-pale-azure/10 via-baby-powder to-pale-azure/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pale-azure/20 rounded-2xl flex items-center justify-center">
                <CreditCard size={32} className="text-pale-azure" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-rich-black">Better Pay</h1>
                <p className="text-xl text-gray-custom">Soluções de Pagamento Educacional</p>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-rich-black mb-6 leading-tight">
              Simplifique pagamentos e <span className="text-pale-azure">maximize receitas</span> educacionais
            </h2>

            <p className="text-xl text-gray-custom mb-8 leading-relaxed">
              Sistema completo de pagamentos, gestão financeira e analytics desenvolvido especialmente 
              para instituições educacionais de todos os tamanhos.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Shield className="text-pale-azure flex-shrink-0" size={24} />
                <span className="text-gray-custom">Pagamentos Seguros</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart className="text-pale-azure flex-shrink-0" size={24} />
                <span className="text-gray-custom">Analytics Avançado</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-pale-azure flex-shrink-0" size={24} />
                <span className="text-gray-custom">Portal do Aluno</span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="text-pale-azure flex-shrink-0" size={24} />
                <span className="text-gray-custom">Múltiplos Meios</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center justify-center">
                Solicitar Demo
              </a>
              <a href="#features" className="btn-secondary inline-flex items-center justify-center">
                Ver Funcionalidades
              </a>
            </div>
          </div>

          {/* Right Content - Demo Video */}
          <div className={`transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              <div className="bg-baby-powder rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-rich-black mb-6 text-center">
                  Sistema Better Pay em Ação
                </h3>
                <div className="relative">
                  <iframe
                    className="w-full h-64 md:h-80 rounded-xl"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Better Pay Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-center text-sm text-gray-custom mt-4">
                  Demonstração do sistema completo de pagamentos educacionais
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pale-azure mb-2">99.9%</div>
              <div className="text-sm text-gray-custom">Uptime Garantido</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pale-azure mb-2">500+</div>
              <div className="text-sm text-gray-custom">Instituições Atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pale-azure mb-2">R$50M+</div>
              <div className="text-sm text-gray-custom">Processados Mensalmente</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pale-azure mb-2">30%</div>
              <div className="text-sm text-gray-custom">Redução em Inadimplência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}