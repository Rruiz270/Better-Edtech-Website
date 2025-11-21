'use client'

import { ArrowRight, Play } from 'lucide-react'
import InteractiveFormula from './InteractiveFormula'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-baby-powder via-pale-azure/10 to-yellow-green/10"></div>
      <div 
        className="absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full opacity-10 animate-float"
        style={{
          background: 'linear-gradient(45deg, #A4DF00, #6CCFF6)',
          transform: 'translate(20%, -50%)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              <span className="block text-rich-black">Transformando a</span>
              <span className="block gradient-text">Educação</span>
              <span className="block text-rich-black">na Era da</span>
              <span className="block gradient-text">Inteligência Artificial</span>
            </h1>
            
            <p className="text-xl text-gray-custom mb-8 leading-relaxed">
              Unimos forças com marcas renomadas para revolucionar a educação através de tecnologia avançada, 
              oferecendo experiências personalizadas e impactantes para indivíduos, empresas, escolas e governos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-primary inline-flex items-center justify-center gap-2">
                Ver Demo
                <Play size={20} />
              </a>
              <a href="#ai-training" className="btn-secondary inline-flex items-center justify-center">
                Treinamento IA
              </a>
            </div>
          </div>

          {/* Right content - Video and Formula */}
          <div className="space-y-8">
            {/* Educational Tech Video */}
            <div className="relative">
              <iframe
                className="w-full h-64 rounded-2xl shadow-xl"
                src="https://www.youtube.com/embed/5MgBikgcWnY"
                title="Better Tech - Transformando a Educação com IA"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-rich-black/20 to-transparent rounded-2xl pointer-events-none"></div>
            </div>

            {/* Interactive Formula */}
            <InteractiveFormula />
          </div>
        </div>
      </div>
    </section>
  )
}