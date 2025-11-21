'use client'

import { useState } from 'react'
import { ExternalLink, Users, Award, Globe } from 'lucide-react'

export default function Partnerships() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const partners = [
    {
      name: 'Alumni Network',
      description: 'Global educational alumni network connecting graduates worldwide',
      category: 'Network',
      impact: '50K+ Alumni',
      icon: Users,
      color: 'bg-blue-600'
    },
    {
      name: 'Sprix Learning',
      description: 'Advanced learning management and student assessment platform',
      category: 'Platform',
      impact: '200+ Schools',
      icon: Award,
      color: 'bg-purple-600'
    },
    {
      name: 'Google for Education',
      description: 'Strategic partnership for cloud-based educational solutions',
      category: 'Technology',
      impact: 'Global Reach',
      icon: Globe,
      color: 'bg-green-600'
    },
    {
      name: 'Microsoft Education',
      description: 'Collaborative tools and AI integration for modern classrooms',
      category: 'Technology',
      impact: '1M+ Students',
      icon: Users,
      color: 'bg-indigo-600'
    },
    {
      name: 'UNESCO Partnership',
      description: 'Supporting global education initiatives and digital literacy',
      category: 'Institution',
      impact: '80+ Countries',
      icon: Globe,
      color: 'bg-orange-600'
    },
    {
      name: 'EdTech Alliance',
      description: 'Leading coalition of educational technology innovators',
      category: 'Network',
      impact: '500+ Members',
      icon: Award,
      color: 'bg-teal-600'
    }
  ]

  return (
    <section id="partnerships" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Strategic Partnerships</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders to create innovative educational solutions that transform learning experiences globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon
            return (
              <div
                key={index}
                className={`relative bg-slate-900 rounded-xl p-6 border border-slate-700 card-hover cursor-pointer ${
                  hoveredCard === index ? 'border-primary-500' : ''
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${partner.color} p-3 rounded-lg`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-gray-300">
                    {partner.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{partner.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary-500">{partner.impact}</span>
                  </div>
                  <ExternalLink 
                    size={16} 
                    className={`text-gray-500 transition-all duration-200 ${
                      hoveredCard === index ? 'text-primary-500 transform translate-x-1' : ''
                    }`}
                  />
                </div>

                {hoveredCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-emerald-600/10 rounded-xl pointer-events-none"></div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2">
            Become a Partner
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}