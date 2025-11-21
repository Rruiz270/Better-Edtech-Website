'use client'

import { useState, useEffect } from 'react'

export default function EcosystemHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-baby-powder via-gray-50 to-baby-powder pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Hero Content */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/logo-better-tech.png" 
              alt="Better Tech Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-rich-black mb-6 tracking-tight">
            Better
            <span className="block gradient-text">Ecosystem</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-custom max-w-4xl mx-auto mb-12 leading-relaxed">
            Uma família de produtos integrados que revoluciona a educação, 
            conecta comunidades e impulsiona a transformação digital no Brasil
          </p>

          {/* Key Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-green mb-2">5</div>
              <div className="text-sm text-gray-custom">Produtos Integrados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pale-azure mb-2">50K+</div>
              <div className="text-sm text-gray-custom">Usuários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-green mb-2">15+</div>
              <div className="text-sm text-gray-custom">Estados Brasileiros</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pale-azure mb-2">2.000+</div>
              <div className="text-sm text-gray-custom">Educadores Capacitados</div>
            </div>
          </div>
        </div>

        {/* Floating Animation */}
        <div className={`relative transition-all duration-1500 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-green/5 rounded-full animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pale-azure/5 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-green/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          </div>

          {/* Interactive Success Formula */}
          <div className="relative z-10 bg-baby-powder/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-xl max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-rich-black mb-8">
              A Fórmula do Sucesso Better Tech
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-center">
              <div className="bg-gradient-to-br from-yellow-green/20 to-yellow-green/10 px-6 py-3 rounded-2xl border border-yellow-green/30">
                <span className="font-semibold text-rich-black">Pesquisa</span>
              </div>
              <span className="text-2xl text-gray-custom">+</span>
              <div className="bg-gradient-to-br from-pale-azure/20 to-pale-azure/10 px-6 py-3 rounded-2xl border border-pale-azure/30">
                <span className="font-semibold text-rich-black">Tecnologia</span>
              </div>
              <span className="text-2xl text-gray-custom">+</span>
              <div className="bg-gradient-to-br from-yellow-green/20 to-yellow-green/10 px-6 py-3 rounded-2xl border border-yellow-green/30">
                <span className="font-semibold text-rich-black">IA</span>
              </div>
              <span className="text-2xl text-gray-custom">+</span>
              <div className="bg-gradient-to-br from-pale-azure/20 to-pale-azure/10 px-6 py-3 rounded-2xl border border-pale-azure/30">
                <span className="font-semibold text-rich-black">Educação</span>
              </div>
              <span className="text-2xl text-gray-custom">=</span>
              <div className="bg-gradient-to-br from-rich-black to-gray-custom text-baby-powder px-8 py-4 rounded-2xl">
                <span className="font-bold text-yellow-green">Transformação</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center">
            <span className="text-sm text-gray-custom mb-3">Explore nossos produtos</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-green rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}