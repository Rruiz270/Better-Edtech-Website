'use client'

import { useState } from 'react'
import { TrendingUp, Users, Clock, Award, ChevronRight } from 'lucide-react'

export default function SuccessCases() {
  const [selectedCase, setSelectedCase] = useState(0)

  const cases = [
    {
      title: 'São Paulo Municipal Schools',
      category: 'Public Education',
      description: 'Implementation of AI-driven personalized learning platform across 1,500 public schools in São Paulo, Brazil.',
      metrics: [
        { label: 'Students Impacted', value: '850K+', icon: Users },
        { label: 'Learning Improvement', value: '45%', icon: TrendingUp },
        { label: 'Implementation Time', value: '6 months', icon: Clock },
        { label: 'Teacher Satisfaction', value: '92%', icon: Award }
      ],
      results: [
        'Increased student engagement by 65%',
        'Reduced dropout rates by 30%',
        'Improved standardized test scores',
        'Enhanced teacher digital literacy'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'International School Network',
      category: 'Private Education',
      description: 'AI-powered curriculum adaptation for 200+ international schools across Latin America and Europe.',
      metrics: [
        { label: 'Schools', value: '200+', icon: Users },
        { label: 'Performance Boost', value: '38%', icon: TrendingUp },
        { label: 'Rollout Period', value: '4 months', icon: Clock },
        { label: 'Parent Approval', value: '96%', icon: Award }
      ],
      results: [
        'Multilingual support for 12 languages',
        'Adaptive assessment systems',
        'Real-time progress tracking',
        'Cultural context integration'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Corporate Training Program',
      category: 'Corporate Education',
      description: 'Enterprise-level AI training platform for Fortune 500 companies to upskill their workforce.',
      metrics: [
        { label: 'Companies', value: '50+', icon: Users },
        { label: 'Skill Acquisition', value: '60%', icon: TrendingUp },
        { label: 'Training Efficiency', value: '3x faster', icon: Clock },
        { label: 'ROI Increase', value: '240%', icon: Award }
      ],
      results: [
        'Personalized learning paths for employees',
        'AI-driven skill gap analysis',
        'Interactive simulation environments',
        'Competency-based certifications'
      ],
      image: '/api/placeholder/600/400'
    }
  ]

  return (
    <section id="cases" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Success Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world implementations demonstrating the transformative impact of our AI-powered educational solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {cases.map((caseStudy, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                selectedCase === index
                  ? 'bg-primary-600/20 border-primary-500'
                  : 'bg-slate-800 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs px-2 py-1 bg-slate-700 rounded-full text-gray-300">
                  {caseStudy.category}
                </span>
                <ChevronRight 
                  size={16} 
                  className={`transition-transform duration-200 ${
                    selectedCase === index ? 'rotate-90 text-primary-500' : 'text-gray-500'
                  }`}
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{caseStudy.title}</h3>
              <p className="text-gray-400 text-sm">{caseStudy.description}</p>
            </button>
          ))}
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs px-2 py-1 bg-primary-600 rounded-full text-white">
                  {cases[selectedCase].category}
                </span>
                <h3 className="text-2xl font-bold text-white">{cases[selectedCase].title}</h3>
              </div>
              
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                {cases[selectedCase].description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {cases[selectedCase].metrics.map((metric, index) => {
                  const IconComponent = metric.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-primary-600/20 p-2 rounded-lg">
                        <IconComponent size={20} className="text-primary-500" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Results</h4>
                <ul className="space-y-2">
                  {cases[selectedCase].results.map((result, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="w-16 h-16 bg-primary-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-primary-500" />
                </div>
                <p>Case Study Visualization</p>
                <p className="text-sm">Interactive dashboard preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}