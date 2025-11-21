'use client'

import { useState, useEffect } from 'react'

export default function EcosystemHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-baby-powder via-gray-50 to-baby-powder pt-20 relative overflow-hidden">
      {/* Background Video - Human Intelligence Theme */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.4) contrast(1.3) saturate(0.8)' }}
        >
          <source src="https://videos.pexels.com/video-files/3196217/3196217-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* White overlay for watermark effect */}
        <div className="absolute inset-0 bg-baby-powder/75"></div>
        
        {/* Subtle Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-green/8 via-transparent to-pale-azure/8"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Main Hero Content */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Epic Main Headline */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-rich-black mb-4 tracking-tight leading-none">
              Better
            </h1>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight leading-none">
                <span className="bg-gradient-to-r from-yellow-green via-pale-azure to-yellow-green bg-clip-text text-transparent animate-shimmer bg-300% leading-none">
                  Ecosystem
                </span>
              </h1>
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 md:w-48 lg:w-64 h-2 bg-gradient-to-r from-yellow-green to-pale-azure rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Human Intelligence First Banner */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-green/20 to-pale-azure/20 backdrop-blur-sm border border-yellow-green/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-gradient-to-r from-yellow-green to-pale-azure rounded-full animate-pulse"></div>
              <span className="text-lg font-bold text-rich-black tracking-wider">INTELIGÊNCIA HUMANA SEMPRE EM PRIMEIRO</span>
            </div>
          </div>

          {/* Powerful Subheadline */}
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-custom mb-6 leading-tight">
              <span className="font-medium text-rich-black">Uma família de produtos integrados</span><br />
              que <span className="text-yellow-green font-semibold">potencializa educadores</span>, conecta comunidades<br />
              e <span className="text-pale-azure font-semibold">amplifica o potencial humano</span> através da tecnologia
            </p>
            <p className="text-lg md:text-xl text-gray-custom/80 font-light mt-4">
              Onde a IA serve como ferramenta, mas a <span className="text-rich-black font-semibold">sabedoria humana</span> sempre lidera a transformação
            </p>
          </div>

          {/* Stunning Stats Grid */}
          <div className={`max-w-6xl mx-auto mb-16 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-green/10 to-yellow-green/5 backdrop-blur-sm border border-yellow-green/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-5xl md:text-6xl font-black text-yellow-green mb-3 group-hover:scale-110 transition-transform duration-300">5</div>
                  <div className="text-lg font-medium text-rich-black">Produtos Integrados</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-pale-azure/10 to-pale-azure/5 backdrop-blur-sm border border-pale-azure/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-5xl md:text-6xl font-black text-pale-azure mb-3 group-hover:scale-110 transition-transform duration-300">50K+</div>
                  <div className="text-lg font-medium text-rich-black">Usuários Ativos</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-yellow-green/10 to-yellow-green/5 backdrop-blur-sm border border-yellow-green/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-5xl md:text-6xl font-black text-yellow-green mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                  <div className="text-lg font-medium text-rich-black">Estados Brasileiros</div>
                </div>
              </div>
              
              <div className="group cursor-pointer">
                <div className="bg-gradient-to-br from-pale-azure/10 to-pale-azure/5 backdrop-blur-sm border border-pale-azure/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl">
                  <div className="text-5xl md:text-6xl font-black text-pale-azure mb-3 group-hover:scale-110 transition-transform duration-300">2.000+</div>
                  <div className="text-lg font-medium text-rich-black">Educadores Capacitados</div>
                </div>
              </div>
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