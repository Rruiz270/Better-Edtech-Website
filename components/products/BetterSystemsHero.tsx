'use client'

import { useState, useEffect } from 'react'
import { Server, Cloud, Shield, Zap } from 'lucide-react'

export default function BetterSystemsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-green/10 via-baby-powder to-yellow-green/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-green/20 rounded-2xl flex items-center justify-center">
                <Server size={32} className="text-yellow-green" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-rich-black">Better Systems</h1>
                <p className="text-xl text-gray-custom">Infraestrutura & DevOps</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-6 leading-tight">
              Infraestrutura que <span className="text-yellow-green">escala</span>
            </h2>

            <p className="text-xl text-gray-custom mb-16 leading-relaxed max-w-4xl mx-auto">
              Soluções robustas de infraestrutura em nuvem e DevOps especializadas 
              para instituições educacionais que precisam de performance e confiabilidade.
            </p>
          </div>

          {/* Infrastructure Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">99.9%</div>
              <div className="text-sm text-gray-custom">Uptime Garantido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">1M+</div>
              <div className="text-sm text-gray-custom">Usuários Suportados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">50TB+</div>
              <div className="text-sm text-gray-custom">Dados Processados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">24/7</div>
              <div className="text-sm text-gray-custom">Monitoramento</div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-yellow-green/30 transition-all duration-300">
              <Cloud size={48} className="text-yellow-green mx-auto mb-6" />
              <h3 className="text-xl font-bold text-rich-black mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-custom text-sm leading-relaxed">
                AWS, Google Cloud e Azure com configuração otimizada para educação
              </p>
            </div>

            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-yellow-green/30 transition-all duration-300">
              <Shield size={48} className="text-yellow-green mx-auto mb-6" />
              <h3 className="text-xl font-bold text-rich-black mb-4">Segurança Avançada</h3>
              <p className="text-gray-custom text-sm leading-relaxed">
                Proteção LGPD, backup automático e disaster recovery
              </p>
            </div>

            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-yellow-green/30 transition-all duration-300">
              <Zap size={48} className="text-yellow-green mx-auto mb-6" />
              <h3 className="text-xl font-bold text-rich-black mb-4">Performance</h3>
              <p className="text-gray-custom text-sm leading-relaxed">
                CDN global, cache inteligente e otimização automática
              </p>
            </div>

            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-yellow-green/30 transition-all duration-300">
              <Server size={48} className="text-yellow-green mx-auto mb-6" />
              <h3 className="text-xl font-bold text-rich-black mb-4">DevOps Education</h3>
              <p className="text-gray-custom text-sm leading-relaxed">
                Capacitação em DevOps para equipes educacionais
              </p>
            </div>
          </div>

          {/* Featured Video */}
          <div className={`mb-16 transition-all duration-1700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-baby-powder rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-rich-black mb-6">
                  Arquitetura Better Systems
                </h3>
                <iframe
                  className="w-full h-64 md:h-96 rounded-xl"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Better Systems Infrastructure"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-green/90 transition-all duration-300">
              Solicitar Consultoria
            </a>
            <a href="/" className="border-2 border-yellow-green text-yellow-green hover:bg-yellow-green hover:text-rich-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Explorar Ecossistema
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}