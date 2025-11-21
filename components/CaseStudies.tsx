'use client'

import { useState } from 'react'
import { TrendingUp, Users, Clock, Award, ExternalLink } from 'lucide-react'

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      title: 'Alumni × FAAP',
      client: 'Fundação Armando Alvares Penteado',
      category: 'Educação Privada',
      description: 'Implementação de plataforma LMS personalizada para escola de idiomas com identidade visual customizada, suporte ao modelo híbrido de ensino e integração completa dos fluxos pedagógicos e operacionais.',
      image: '/api/placeholder/600/400',
      results: [
        '40% de aumento no engajamento dos alunos',
        'Redução de 60% no tempo de gestão administrativa', 
        'Implementação de trilhas adaptativas personalizadas',
        'Suporte multilíngue para português e inglês'
      ],
      metrics: [
        { label: 'Estudantes Impactados', value: '2.5K+', icon: Users },
        { label: 'Melhoria no Engajamento', value: '40%', icon: TrendingUp },
        { label: 'Tempo de Implementação', value: '3 meses', icon: Clock },
        { label: 'Satisfação', value: '96%', icon: Award }
      ]
    },
    {
      title: 'Projeto Sprix',
      client: 'Cidades de Resende e Maringá',
      category: 'Educação Pública',
      description: 'Desenvolvimento de programas educacionais municipais com torneio inovador de coding, integração de tecnologia japonesa e metodologias inovadoras para transformar a educação pública local.',
      image: '/api/placeholder/600/400',
      results: [
        'Mais de 2.000 estudantes participantes',
        '15 escolas municipais integradas ao programa',
        'Aumento de 80% no interesse por programação',
        'Parceria internacional com empresa japonesa'
      ],
      metrics: [
        { label: 'Estudantes', value: '2K+', icon: Users },
        { label: 'Interesse em Programação', value: '80%', icon: TrendingUp },
        { label: 'Escolas Integradas', value: '15', icon: Clock },
        { label: 'Aprovação Municipal', value: '95%', icon: Award }
      ]
    },
    {
      title: 'Better EdTech Palmares',
      client: 'Município de Palmares Paulista',
      category: 'Transformação Municipal',
      description: 'Modernização educacional municipal com implementação de ferramentas tecnológicas avançadas, metodologias adaptativas e sistema de acompanhamento para melhorar resultados de aprendizagem.',
      image: '/api/placeholder/600/400',
      results: [
        '35% de melhoria nas avaliações municipais',
        '100% dos professores capacitados em tecnologia educacional',
        'Implementação de 5 ferramentas de IA na educação',
        'Modelo replicável para outros municípios'
      ],
      metrics: [
        { label: 'Melhoria nas Avaliações', value: '35%', icon: TrendingUp },
        { label: 'Professores Capacitados', value: '100%', icon: Users },
        { label: 'Ferramentas de IA', value: '5', icon: Clock },
        { label: 'ROI Educacional', value: '180%', icon: Award }
      ]
    }
  ]

  return (
    <section id="cases" className="py-20 bg-gradient-to-br from-rich-black/5 to-gray-custom/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Casos de Sucesso</span>
          </h2>
          <p className="section-subtitle">
            Resultados comprovados em transformação educacional
          </p>
        </div>

        {/* Case Selection */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {cases.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                activeCase === index
                  ? 'bg-yellow-green/20 border-yellow-green shadow-lg'
                  : 'bg-baby-powder border-gray-200 hover:border-yellow-green/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-custom font-medium">
                  {caseStudy.category}
                </span>
                <ExternalLink 
                  size={16} 
                  className={`transition-all duration-200 ${
                    activeCase === index ? 'text-yellow-green rotate-45' : 'text-gray-custom'
                  }`}
                />
              </div>
              <h3 className="text-lg font-bold text-rich-black mb-2">{caseStudy.title}</h3>
              <p className="text-gray-custom text-sm">{caseStudy.client}</p>
            </button>
          ))}
        </div>

        {/* Active Case Details */}
        <div className="bg-baby-powder rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs px-3 py-1 bg-yellow-green rounded-full text-rich-black font-medium">
                  {cases[activeCase].category}
                </span>
                <h3 className="text-3xl font-bold text-rich-black">{cases[activeCase].title}</h3>
              </div>
              
              <p className="text-gray-custom mb-8 text-lg leading-relaxed">
                {cases[activeCase].description}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {cases[activeCase].metrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-yellow-green/20 p-3 rounded-xl">
                        <IconComponent size={20} className="text-yellow-green" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-rich-black">{metric.value}</div>
                        <div className="text-sm text-gray-custom">{metric.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Results */}
              <div>
                <h4 className="text-lg font-bold text-rich-black mb-4">Principais Resultados</h4>
                <ul className="space-y-2">
                  {cases[activeCase].results.map((result, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-custom">
                      <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Placeholder */}
            <div className="bg-gradient-to-br from-yellow-green/20 to-pale-azure/20 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-custom">
                <div className="w-16 h-16 bg-yellow-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-yellow-green" />
                </div>
                <p className="font-semibold">{cases[activeCase].title}</p>
                <p className="text-sm opacity-75">Visualização do Projeto</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary">
            Criar Seu Caso de Sucesso
          </a>
        </div>
      </div>
    </section>
  )
}