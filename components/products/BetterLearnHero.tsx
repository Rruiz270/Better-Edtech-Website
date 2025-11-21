'use client'

import { useState, useEffect } from 'react'
import { BookOpen, Award, Users, Video, CheckCircle } from 'lucide-react'

export default function BetterLearnHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const programs = [
    {
      title: 'Programa TEACH',
      description: 'Capacitação completa em IA para educadores',
      duration: '40 horas',
      students: '2.000+'
    },
    {
      title: 'Especialização EdTech',
      description: 'Mestrado em tecnologia educacional',
      duration: '180 horas', 
      students: '500+'
    },
    {
      title: 'Certificação Better Tech',
      description: 'Certificação oficial em nosso ecossistema',
      duration: '60 horas',
      students: '1.200+'
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-yellow-green/10 via-baby-powder to-yellow-green/5 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Header */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-green/20 rounded-2xl flex items-center justify-center">
                <BookOpen size={32} className="text-yellow-green" />
              </div>
              <div>
                <h1 className="text-5xl font-bold text-rich-black">Better Learn</h1>
                <p className="text-xl text-gray-custom">Cursos e Capacitação</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-6 leading-tight">
              Aprenda com os <span className="text-yellow-green">melhores</span>
            </h2>

            <p className="text-xl text-gray-custom mb-12 leading-relaxed max-w-4xl mx-auto">
              Plataforma de cursos especializados em tecnologia educacional, IA e inovação. 
              Capacite-se com quem está transformando a educação no Brasil.
            </p>
          </div>

          {/* Featured Video */}
          <div className={`mb-16 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-baby-powder rounded-2xl shadow-2xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-rich-black mb-6">
                  Conheça o Programa TEACH
                </h3>
                <iframe
                  className="w-full h-64 md:h-96 rounded-xl"
                  src="https://www.youtube.com/embed/f_u7Q1DMhMk"
                  title="Programa TEACH - Better Learn"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Programs Grid */}
          <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1500 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {programs.map((program, index) => (
              <div key={index} className="bg-baby-powder rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl hover:border-yellow-green/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-rich-black mb-4">{program.title}</h3>
                <p className="text-gray-custom mb-6 leading-relaxed">{program.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-custom mb-6">
                  <div className="flex items-center gap-2">
                    <Video size={16} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    <span>{program.students}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-yellow-green" />
                    <span className="text-sm text-gray-custom">Certificado Reconhecido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-yellow-green" />
                    <span className="text-sm text-gray-custom">Mentoria Especializada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-yellow-green" />
                    <span className="text-sm text-gray-custom">Projeto Prático</span>
                  </div>
                </div>
                <button className="w-full bg-yellow-green text-rich-black px-6 py-3 rounded-full font-bold hover:bg-yellow-green/90 transition-all duration-300">
                  Inscrever-se
                </button>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-1700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">15+</div>
              <div className="text-sm text-gray-custom">Cursos Disponíveis</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">4.000+</div>
              <div className="text-sm text-gray-custom">Alunos Formados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">95%</div>
              <div className="text-sm text-gray-custom">Taxa de Conclusão</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-green mb-2">4.8</div>
              <div className="text-sm text-gray-custom">Avaliação Média</div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#contact" className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-green/90 transition-all duration-300">
              Explorar Cursos
            </a>
            <a href="/edtech" className="border-2 border-yellow-green text-yellow-green hover:bg-yellow-green hover:text-rich-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300">
              Ver Outras Soluções
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}