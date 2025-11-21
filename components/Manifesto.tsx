'use client'

import { useState, useEffect } from 'react'
import { Book, Brain, Users, Lightbulb, ArrowRight, ChevronDown } from 'lucide-react'

export default function Manifesto() {
  const [visibleSections, setVisibleSections] = useState<number[]>([])
  const [expandedSection, setExpandedSection] = useState<number | null>(null)

  const sections = [
    {
      id: 1,
      title: "O Limiar da Transformação",
      icon: Brain,
      content: [
        "Há períodos na evolução das sociedades quando as estruturas existentes não correspondem mais às realidades emergentes. Essas transições não implicam falha no que veio antes; indicam que as condições mudaram.",
        "O desenvolvimento humano, como qualquer sistema complexo, se expande até encontrar suas próprias limitações. Quando essas limitações se tornam sistêmicas, novas arquiteturas devem ser concebidas — não como correções, mas como continuações.",
        "A educação em todo o mundo está entrando em tal limiar. Não por colapso, mas por incompatibilidade."
      ]
    },
    {
      id: 2,
      title: "Uma Nova Realidade Cognitiva",
      icon: Lightbulb,
      content: [
        "As demandas colocadas sobre a cognição humana hoje diferem qualitativamente daquelas que moldaram os marcos educacionais do século passado.",
        "A informação não é mais escassa; a atenção é. A complexidade não é mais excepcional; é o ambiente. As habilidades não são mais estáveis; evoluem junto com tecnologias que aprendem, se adaptam e respondem.",
        "A tensão que emerge não é ideológica. É estrutural."
      ]
    },
    {
      id: 3,
      title: "O Papel Transformador da Tecnologia",
      icon: Users,
      content: [
        "O papel da tecnologia, neste contexto, é frequentemente mal compreendido. Não é uma substituição para a inteligência humana, nem um remédio para suas limitações.",
        "A tecnologia se torna transformadora apenas quando expande o alcance, clareza e intencionalidade da ação humana. Uma ferramenta é significativa quando reorganiza a complexidade de forma que permita à mente operar em sua máxima capacidade.",
        "Esta é a premissa por trás da Better: criar uma infraestrutura para o aprendizado que alinhe o potencial humano com as realidades do presente e as possibilidades do futuro."
      ]
    },
    {
      id: 4,
      title: "O Educador como Condutor de Significado",
      icon: Book,
      content: [
        "A organização não trata a educação como distribuição de informação, mas como cultivo da inteligência — cognitiva, emocional, ética, interpretativa.",
        "Aborda o aprendizado como um processo adaptativo que depende de estrutura, contexto e dinâmicas relacionais. Sob esta perspectiva, a figura central do processo de aprendizado permanece sendo o educador humano, não como transmissor de conteúdo, mas como condutor de significado.",
        "As ferramentas desenvolvidas pela Better não substituem esse papel; elas o estendem."
      ]
    },
    {
      id: 5,
      title: "Uma Transformação para o Brasil",
      icon: ArrowRight,
      content: [
        "O Brasil possui, em nível cultural, qualidades que o posicionam de forma única para esta transição: criatividade, inteligência relacional, adaptabilidade e uma profunda capacidade de reinvenção.",
        "O que tem faltado é uma estrutura capaz de transformar esses traços em capacidades estruturadas. O trabalho da Better existe nesta interseção: não como uma resposta, mas como uma plataforma para que respostas emerjam através das pessoas.",
        "A convergência da inteligência humana e artificial não é uma ameaça à educação; é seu próximo capítulo."
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.getAttribute('data-section-id') || '0')
            setVisibleSections(prev => [...prev, sectionId])
          }
        })
      },
      { threshold: 0.3 }
    )

    const sectionElements = document.querySelectorAll('[data-section-id]')
    sectionElements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="manifesto" className="py-20 bg-gradient-to-br from-rich-black to-gray-custom text-baby-powder">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-yellow-green">BETTER EDTECH</span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-light mb-8 opacity-90">
            O Contínuo da Inteligência Humana
          </h3>
          <div className="w-24 h-1 bg-yellow-green mx-auto mb-8"></div>
          <p className="text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            Um manifesto sobre a evolução da educação na era da inteligência artificial e o papel transformador da tecnologia no desenvolvimento humano.
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-baby-powder/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-16 border border-yellow-green/20">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              <strong className="text-yellow-green">Há momentos na história</strong> quando as estruturas existentes 
              não conseguem mais acompanhar as realidades emergentes. Estes não são momentos de falha, 
              mas de evolução necessária.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              A educação mundial está em um desses limiares. Não por colapso, mas por transformação. 
              Este manifesto explora como a Better Tech está contribuindo para esta evolução.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon
            const isVisible = visibleSections.includes(section.id)
            const isExpanded = expandedSection === section.id
            
            return (
              <div
                key={section.id}
                data-section-id={section.id}
                className={`
                  transition-all duration-700 transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div 
                  className={`
                    bg-baby-powder/5 backdrop-blur-sm rounded-2xl border border-yellow-green/20
                    hover:border-yellow-green/40 transition-all duration-300 cursor-pointer
                    ${isExpanded ? 'bg-baby-powder/10 border-yellow-green/60' : ''}
                  `}
                  onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                >
                  {/* Section Header */}
                  <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-yellow-green/20 p-3 rounded-xl">
                        <IconComponent size={24} className="text-yellow-green" />
                      </div>
                      <div>
                        <span className="text-sm text-yellow-green font-medium">
                          {String(section.id).padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold">{section.title}</h3>
                      </div>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-green transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  
                  {/* Section Content */}
                  <div className={`
                    transition-all duration-500 overflow-hidden
                    ${isExpanded ? 'max-h-screen pb-6' : 'max-h-0'}
                  `}>
                    <div className="px-6">
                      <div className="border-l-2 border-yellow-green/30 pl-6 space-y-4">
                        {section.content.map((paragraph, pIndex) => (
                          <p 
                            key={pIndex}
                            className="text-lg leading-relaxed opacity-90"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Conclusion */}
        <div className="mt-16 bg-gradient-to-r from-yellow-green/20 to-pale-azure/20 rounded-3xl p-8 lg:p-12 text-center border border-yellow-green/30">
          <h3 className="text-2xl font-bold mb-6 text-yellow-green">O Convite</h3>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6 opacity-90">
              <strong>O limiar está aqui. A transição é possível.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              E a próxima era da inteligência humana começará quando sistemas e pessoas aprenderem a evoluir juntos.
              Este é o convite que a Better coloca sobre a mesa — não urgente por pressão, mas urgente por coerência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-semibold hover:bg-baby-powder transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Fazer Parte da Transformação
                <ArrowRight size={20} />
              </a>
              <a 
                href="#ai-training" 
                className="border-2 border-yellow-green text-yellow-green hover:bg-yellow-green hover:text-rich-black px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Conhecer o Programa TEACH
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}