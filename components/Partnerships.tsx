'use client'

import { useState, useEffect } from 'react'
import { Building2, Globe, Users, Award } from 'lucide-react'

export default function Partnerships() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const partners = [
    {
      id: 1,
      name: 'Alumni',
      description: 'Centro Binacional Brasil-USA cursos de idiomas com tecnologia avançada para aprendizado híbrido e personalizado',
      category: 'Educação',
      highlighted: false,
    },
    {
      id: 2,
      name: 'Sprix',
      description: 'Empresa japonesa - Torneio inovador de coding Brasil com competições tecnológicas educacionais',
      category: 'Tecnologia',
      highlighted: false,
    },
    {
      id: 3,
      name: 'Enkel + AWS',
      description: 'Infraestrutura tecnológica robusta e escalável na nuvem para soluções educacionais empresariais',
      category: 'Infraestrutura',
      highlighted: false,
    },
    {
      id: 4,
      name: 'Google',
      description: 'Tecnologia e inovação educacional de ponta com ferramentas Google for Education integradas',
      category: 'Tecnologia',
      highlighted: false,
    },
    {
      id: 5,
      name: 'Jinso',
      description: 'Soluções educacionais avançadas com IA para matemática e ciências exatas com metodologia japonesa',
      category: 'EdTech',
      highlighted: true,
    },
    {
      id: 6,
      name: 'Kidpreneur',
      description: 'Educação empreendedora para jovens com foco em inovação, criatividade e desenvolvimento de negócios',
      category: 'Educação',
      highlighted: false,
    },
    {
      id: 7,
      name: 'Sebrae',
      description: 'Desenvolvimento empresarial e educacional para micro e pequenas empresas com metodologias comprovadas',
      category: 'Governo',
      highlighted: false,
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-card-id') || '0')
            setVisibleCards(prev => [...prev, cardId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-card-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Educação': return <Users className="w-6 h-6 text-yellow-green" />
      case 'Tecnologia': return <Building2 className="w-6 h-6 text-pale-azure" />
      case 'EdTech': return <Award className="w-6 h-6 text-yellow-green" />
      case 'Infraestrutura': return <Globe className="w-6 h-6 text-gray-custom" />
      case 'Governo': return <Building2 className="w-6 h-6 text-rich-black" />
      default: return <Building2 className="w-6 h-6 text-gray-custom" />
    }
  }

  return (
    <section id="partnerships" className="py-20 bg-gradient-to-br from-yellow-green/5 to-pale-azure/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nossas <span className="gradient-text">Parcerias Estratégicas</span>
          </h2>
          <p className="section-subtitle">
            Colaboramos com líderes do mercado que compartilham nossa visão de transformar a educação na nova era da IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              data-card-id={partner.id}
              className={`
                bg-baby-powder rounded-2xl p-6 shadow-lg border-2 transition-all duration-500 cursor-pointer
                transform hover:scale-105 hover:shadow-xl
                ${partner.highlighted 
                  ? 'border-yellow-green shadow-yellow-green/20' 
                  : 'border-transparent hover:border-yellow-green/50'
                }
                ${visibleCards.includes(partner.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
                }
                ${hoveredCard === partner.id 
                  ? 'shadow-2xl border-yellow-green' 
                  : ''
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setHoveredCard(partner.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Header with icon and category */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(partner.category)}
                  <span className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-custom font-medium">
                    {partner.category}
                  </span>
                </div>
                {partner.highlighted && (
                  <div className="w-3 h-3 bg-yellow-green rounded-full animate-pulse"></div>
                )}
              </div>

              {/* Logo placeholder */}
              <div className="w-20 h-20 bg-gray-50 border-2 border-gray-200 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-gray-custom font-bold text-sm text-center leading-tight">
                  {partner.name.toUpperCase()}
                </div>
              </div>

              {/* Partner name */}
              <h3 className="text-xl font-bold text-rich-black mb-3 break-words">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-gray-custom text-sm leading-relaxed">
                {partner.description}
              </p>

              {/* Hover effect indicator */}
              {hoveredCard === partner.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-green/5 to-pale-azure/5 rounded-2xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Torne-se um Parceiro
            <Building2 size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}