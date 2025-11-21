'use client'

import { CheckCircle, Play } from 'lucide-react'

export default function Demo() {
  const features = [
    'Trilha de aprendizagem adaptativa por perfil de aluno',
    'Painéis de acompanhamento inteligentes para gestores, professores e alunos',
    'Experiências interativas que combinam vídeos, gamificação e prática oral com IA',
    'Relatórios dinâmicos por turma, por unidade e por progresso individual',
    'Suporte multilíngue e compatibilidade com diversos dispositivos'
  ]

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-yellow-green/5 to-pale-azure/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-6">
              Plataforma Educacional Alumni
            </h2>
            <p className="text-xl text-gray-custom mb-8 leading-relaxed">
              Nossa parceria com a Alumni exemplifica a potência de nossas soluções. 
              Criamos uma plataforma LMS totalmente personalizada, com identidade visual 
              própria e funcionalidades específicas para o modelo híbrido de ensino.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-yellow-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-custom">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a href="#contact" className="btn-primary">
              Agendar com nossa equipe
            </a>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="text-center text-gray-custom">
                <Play size={64} className="mx-auto mb-4 text-yellow-green" />
                <p className="text-lg font-semibold">Demo da Plataforma Alumni</p>
                <p className="text-sm opacity-75">LMS personalizado e adaptativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}