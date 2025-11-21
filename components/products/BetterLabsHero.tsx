'use client'

import { useState, useEffect } from 'react'
import { Microscope, Users, Calendar, Award } from 'lucide-react'

export default function BetterLabsHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen bg-gradient-to-br from-pale-azure/10 via-baby-powder to-pale-azure/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pale-azure/20 rounded-2xl flex items-center justify-center">
                <Microscope size={32} className="text-pale-azure" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-rich-black">Better Labs</h1>
                <p className="text-xl text-gray-custom">Pesquisa & Comunidade</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-6 leading-tight">
              Onde o <span className="text-pale-azure">futuro</span> da educação nasce
            </h2>

            <p className="text-xl text-gray-custom mb-16 leading-relaxed max-w-4xl mx-auto">
              Centro de pesquisa, desenvolvimento e comunidade focado em inovações educacionais. 
              Conectamos educadores, pesquisadores e inovadores para construir o amanhã.
            </p>
          </div>

          {/* Community Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-pale-azure mb-2">15K+</div>
              <div className="text-sm text-gray-custom">Membros Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pale-azure mb-2">200+</div>
              <div className="text-sm text-gray-custom">Projetos Colaborativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pale-azure mb-2">50+</div>
              <div className="text-sm text-gray-custom">Eventos Anuais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pale-azure mb-2">26</div>
              <div className="text-sm text-gray-custom">Estados Brasileiros</div>
            </div>
          </div>

          {/* Featured Video */}
          <div className={`mb-16 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-baby-powder rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-rich-black mb-6">
                  Nossa Comunidade em Ação
                </h3>
                <iframe
                  className="w-full h-64 md:h-96 rounded-xl"
                  src="https://www.youtube.com/embed/QhNk4jT9MhA"
                  title="Better Labs Community"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Action Cards */}
          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-pale-azure/30 transition-all duration-300">
              <Users size={48} className="text-pale-azure mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-rich-black mb-4">Comunidade</h3>
              <p className="text-gray-custom mb-6 leading-relaxed">
                Conecte-se com educadores, pesquisadores e inovadores de todo o Brasil
              </p>
              <button className="w-full bg-pale-azure text-rich-black px-6 py-3 rounded-full font-bold hover:bg-pale-azure/90 transition-all duration-300">
                Participar
              </button>
            </div>

            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-pale-azure/30 transition-all duration-300">
              <Calendar size={48} className="text-pale-azure mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-rich-black mb-4">Eventos</h3>
              <p className="text-gray-custom mb-6 leading-relaxed">
                Palestras, workshops e meetups sobre as últimas tendências em EdTech
              </p>
              <button className="w-full bg-pale-azure text-rich-black px-6 py-3 rounded-full font-bold hover:bg-pale-azure/90 transition-all duration-300">
                Ver Agenda
              </button>
            </div>

            <div className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-pale-azure/30 transition-all duration-300">
              <Award size={48} className="text-pale-azure mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-rich-black mb-4">Pesquisa</h3>
              <p className="text-gray-custom mb-6 leading-relaxed">
                Contribua com pesquisas aplicadas em tecnologia educacional e IA
              </p>
              <button className="w-full bg-pale-azure text-rich-black px-6 py-3 rounded-full font-bold hover:bg-pale-azure/90 transition-all duration-300">
                Colaborar
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-pale-azure text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-pale-azure/90 transition-all duration-300">
              Juntar-se à Comunidade
            </a>
            <a href="/" className="border-2 border-pale-azure text-pale-azure hover:bg-pale-azure hover:text-rich-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Voltar ao Ecossistema
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}