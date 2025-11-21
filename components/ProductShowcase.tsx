'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, GraduationCap, CreditCard, BookOpen, Microscope, Server } from 'lucide-react'

export default function ProductShowcase() {
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])

  const products = [
    {
      id: 1,
      name: 'Better EdTech',
      subtitle: 'Plataformas Educacionais',
      description: 'Soluções completas de tecnologia educacional com IA integrada para transformar o ensino e a aprendizagem.',
      icon: GraduationCap,
      color: 'yellow-green',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['LMS Personalizado', 'IA para Educação', 'Analytics Avançado'],
      href: '/edtech'
    },
    {
      id: 2,
      name: 'Better Pay',
      subtitle: 'Soluções de Pagamento',
      description: 'Sistema integrado de pagamentos e gestão financeira especialmente desenvolvido para instituições educacionais.',
      icon: CreditCard,
      color: 'pale-azure',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Pagamentos Educacionais', 'Gestão Financeira', 'Analytics de Receita'],
      href: '/pay'
    },
    {
      id: 3,
      name: 'Better Learn',
      subtitle: 'Cursos e Capacitação',
      description: 'Plataforma de cursos especializados em tecnologia educacional e capacitação para educadores modernos.',
      icon: BookOpen,
      color: 'yellow-green',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Programa TEACH', 'Certificações', 'Mentoria Especializada'],
      href: '/learn'
    },
    {
      id: 4,
      name: 'Better Labs',
      subtitle: 'Pesquisa e Comunidade',
      description: 'Centro de pesquisa e desenvolvimento focado em inovações educacionais e construção de comunidades.',
      icon: Microscope,
      color: 'pale-azure',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Pesquisa Aplicada', 'Comunidade Ativa', 'Eventos & Meetups'],
      href: '/labs'
    },
    {
      id: 5,
      name: 'Better Systems',
      subtitle: 'Infraestrutura e DevOps',
      description: 'Soluções robustas de infraestrutura e sistemas para suportar operações educacionais em grande escala.',
      icon: Server,
      color: 'yellow-green',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Cloud Infrastructure', 'DevOps Education', 'Sistema Escalável'],
      href: '/systems'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const productId = parseInt(entry.target.getAttribute('data-product-id') || '0')
            setVisibleProducts(prev => [...prev, productId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-product-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-baby-powder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-rich-black mb-6">
            Nosso <span className="gradient-text">Ecossistema</span>
          </h2>
          <p className="text-xl text-gray-custom max-w-3xl mx-auto leading-relaxed">
            Cinco produtos integrados que trabalham em harmonia para revolucionar 
            a educação e a tecnologia no Brasil
          </p>
        </div>

        {/* Featured Product - Better EdTech */}
        <div className="mb-20">
          <div 
            className={`
              group cursor-pointer transition-all duration-700 transform
              ${visibleProducts.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
            data-product-id="1"
            onClick={() => window.location.href = '/edtech'}
          >
            <div className="bg-baby-powder rounded-3xl shadow-xl overflow-hidden border border-gray-200 group-hover:shadow-2xl group-hover:border-yellow-green/20 transition-all duration-500 group-hover:scale-[1.02]">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative order-2 lg:order-1">
                  <img 
                    src={products[0].image}
                    alt={products[0].name}
                    className="w-full h-full object-cover min-h-96"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-rich-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-green text-rich-black px-4 py-2 rounded-full text-sm font-bold">
                      Produto Principal
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center order-1 lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-yellow-green/20 rounded-2xl flex items-center justify-center">
                      <GraduationCap size={32} className="text-yellow-green" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-rich-black">{products[0].name}</h3>
                      <p className="text-gray-custom font-medium">{products[0].subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-custom mb-8 leading-relaxed">
                    {products[0].description}
                  </p>
                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {products[0].features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-yellow-green rounded-full"></div>
                        <span className="text-gray-custom">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-yellow-green font-bold text-lg group-hover:gap-5 transition-all duration-300">
                    Explorar Better EdTech
                    <ArrowRight size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Products Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.slice(1).map((product, index) => {
            const IconComponent = product.icon
            return (
              <div
                key={product.id}
                data-product-id={product.id}
                className={`
                  group cursor-pointer transition-all duration-700 transform
                  ${visibleProducts.includes(product.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => window.location.href = product.href}
              >
                <div className="bg-baby-powder rounded-3xl shadow-lg overflow-hidden border border-gray-200 group-hover:shadow-xl group-hover:border-gray-300 group-hover:scale-105 transition-all duration-500 h-full">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className={`w-12 h-12 bg-${product.color}/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-${product.color}/30`}>
                        <IconComponent size={24} className={`text-${product.color}`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-rich-black mb-2 group-hover:text-yellow-green transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-custom font-medium mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-sm text-gray-custom mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 bg-${product.color} rounded-full`}></div>
                          <span className="text-xs text-gray-custom">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className={`flex items-center gap-2 text-${product.color} font-semibold text-sm group-hover:gap-3 transition-all duration-300`}>
                      Explorar
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Integration Message */}
        <div className="mt-20 text-center bg-gradient-to-r from-rich-black to-gray-custom text-baby-powder p-12 rounded-3xl">
          <h3 className="text-3xl font-bold mb-6 text-yellow-green">
            Mais Forte Juntos
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
            Nossos produtos foram desenvolvidos para trabalhar em perfeita sinergia, 
            criando um ecossistema educacional completo que amplifica resultados e 
            multiplica o impacto de cada solução individual.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#contact" 
              className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-bold text-lg hover:bg-baby-powder transition-all duration-300 inline-flex items-center gap-3"
            >
              Conhecer o Ecossistema Completo
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}