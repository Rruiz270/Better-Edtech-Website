'use client'

import { ArrowRight, BookOpen, Brain, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-white">Transforming</span>
          <span className="block gradient-text">Education</span>
          <span className="block text-white">in the AI Era</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          AI-driven educational solutions that create adaptive learning paths and personalized experiences for every student.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2">
            Start Demo
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
            Learn More
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex flex-col items-center">
            <div className="bg-primary-600/20 p-6 rounded-full mb-4">
              <Brain size={48} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Learning</h3>
            <p className="text-gray-400 text-center">Adaptive algorithms that personalize education for each student's unique learning style.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-primary-600/20 p-6 rounded-full mb-4">
              <BookOpen size={48} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Comprehensive Platform</h3>
            <p className="text-gray-400 text-center">Complete educational ecosystem with tools for students, teachers, and administrators.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-primary-600/20 p-6 rounded-full mb-4">
              <Users size={48} className="text-primary-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p className="text-gray-400 text-center">Connecting educators and institutions worldwide for collaborative learning.</p>
          </div>
        </div>
      </div>
    </section>
  )
}