'use client'

import { Brain, Heart, Wrench, Lightbulb, Target } from 'lucide-react'

export default function TeachProgram() {
  const levels = [
    {
      id: 1,
      title: 'Fundação Filosófica',
      subtitle: '"Quem sou eu nesta revolução?"',
      description: 'Compreensão profunda do conceito de inteligência e do papel do educador na maior transformação da humanidade. Aqui, o professor redescobre seu valor e propósito.',
      icon: Brain,
      color: 'from-yellow-green to-yellow-green/80',
      duration: '2 semanas'
    },
    {
      id: 2,
      title: 'Contexto Social',
      subtitle: '"Como posso liderar esta mudança?"',
      description: 'Entendimento do contexto histórico, econômico e social que levou ao surgimento da IA. O professor se posiciona como agente de transformação, não espectador.',
      icon: Heart,
      color: 'from-pale-azure to-pale-azure/80',
      duration: '2 semanas'
    },
    {
      id: 3,
      title: 'Evolução Educacional',
      subtitle: '"Como ensinar na era da IA?"',
      description: 'Reflexão sobre como a IA está transformando o ensino e a aprendizagem. Desenvolvimento de competências pedagógicas para o futuro.',
      icon: Target,
      color: 'from-yellow-green to-pale-azure',
      duration: '3 semanas'
    },
    {
      id: 4,
      title: 'Compreensão Tecnológica',
      subtitle: '"Como a IA realmente funciona?"',
      description: 'Agora sim! Com base sólida em inteligência humana, exploramos conceitos de machine learning, deep learning e suas aplicações práticas na educação.',
      icon: Wrench,
      color: 'from-rich-black to-gray-custom',
      duration: '4 semanas'
    },
    {
      id: 5,
      title: 'Aplicação Prática',
      subtitle: '"Como transformar minha prática?"',
      description: 'Capacitação para aplicar IA de forma prática, crítica e criativa. Ferramentas, metodologias e boas práticas para um uso ético e responsável.',
      icon: Lightbulb,
      color: 'from-yellow-green to-yellow-green/60',
      duration: '3 semanas'
    }
  ]

  const stats = [
    { number: '80%', text: 'dos professores brasileiros relatam sinais de burnout' },
    { number: '90%', text: 'dos educadores não se sentem preparados para IA' },
    { number: '100%', text: 'das escolas precisarão integrar IA nos próximos 3 anos' },
  ]

  return (
    <section id="ai-training" className="py-20 bg-gradient-to-br from-rich-black to-gray-custom text-baby-powder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Programa <span className="text-yellow-green">TEACH</span>
            </h2>
            <h3 className="text-xl mb-6 opacity-90">
              Technology Education for Advanced Classroom Help
            </h3>
            <p className="text-lg leading-relaxed opacity-90 mb-8">
              Transformamos os 2.3 milhões de professores brasileiros em facilitadores de IA, 
              criando a base para um sistema educacional revolucionário que prepara estudantes 
              para um futuro impulsionado pela Inteligência Artificial.
            </p>
            <a href="#contact" className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-semibold hover:bg-baby-powder hover:text-rich-black transition-all duration-300">
              Conhecer Programa TEACH
            </a>
          </div>
          
          {/* Video Placeholder */}
          <div className="bg-baby-powder/10 rounded-2xl p-8 h-80 flex items-center justify-center border-2 border-yellow-green">
            <div className="text-center">
              <Brain size={64} className="mx-auto mb-4 text-yellow-green" />
              <p className="text-lg font-semibold">Demo do Programa TEACH</p>
              <p className="text-sm opacity-75">Transformação educacional com IA</p>
            </div>
          </div>
        </div>

        {/* Journey Title */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">A Jornada TEACH: Uma Transformação em 5 Níveis</h3>
          <p className="text-lg opacity-90">Cada nível foi cuidadosamente desenvolvido para preparar o educador de forma integral</p>
        </div>

        {/* Curriculum Levels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {levels.map((level) => {
            const IconComponent = level.icon
            return (
              <div
                key={level.id}
                className="bg-baby-powder/10 rounded-2xl p-8 text-center hover:transform hover:scale-105 transition-all duration-300 border-t-4 border-yellow-green backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-yellow-green font-bold">Nível {level.id}</span>
                  <span className="text-xs bg-yellow-green text-rich-black px-2 py-1 rounded-full">
                    {level.duration}
                  </span>
                </div>
                
                <div className="mb-6">
                  <IconComponent size={48} className="mx-auto text-yellow-green mb-4" />
                </div>
                
                <h4 className="text-xl font-bold text-yellow-green mb-2">
                  {level.title}
                </h4>
                
                <p className="text-sm font-medium mb-4 opacity-90">
                  {level.subtitle}
                </p>
                
                <p className="text-sm opacity-80 leading-relaxed">
                  {level.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-red-900/20 border-l-4 border-red-400 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-red-400">A Realidade dos Educadores Brasileiros</h3>
            <p className="mb-4">
              <strong>Os números não mentem:</strong> Nossos professores estão enfrentando uma crise de bem-estar mental sem precedentes. 
              Décadas de desafios acumulados criaram uma profissão em sofrimento.
            </p>
            <p>
              E agora, chegamos ao momento da maior revolução tecnológica da humanidade - a Inteligência Artificial. 
              Mas como podemos falar de tecnologia para quem ainda está lutando para se manter de pé?
            </p>
          </div>
          
          <div className="bg-yellow-green/20 border-l-4 border-yellow-green p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-yellow-green">Nossa Abordagem Revolucionária</h3>
            <p className="mb-4">
              <strong>Não começamos com IA. Começamos com o SER HUMANO.</strong>
            </p>
            <p>
              Acreditamos que antes de qualquer professor aprender sobre Inteligência Artificial, ele precisa primeiro 
              compreender e fortalecer sua própria inteligência humana. Precisa se reconhecer como protagonista dessa transformação, 
              não como vítima dela.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-baby-powder/10 rounded-2xl p-8 text-center backdrop-blur-sm">
              <div className="text-4xl font-bold text-yellow-green mb-2">
                {stat.number}
              </div>
              <p className="text-sm opacity-90">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Why It Works */}
        <div className="bg-baby-powder/10 border-l-4 border-yellow-green p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-6 text-yellow-green">🎯 Por Que Nossa Abordagem Funciona</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Respeita a humanidade do educador:</strong> Não tratamos professores como máquinas que precisam ser atualizadas</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Constrói confiança gradualmente:</strong> Cada nível prepara para o próximo</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Foca no bem-estar mental:</strong> Professores saudáveis emocionalmente aprendem melhor</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Empodera ao invés de substituir:</strong> O professor continua sendo o protagonista</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
              <span><strong>Prepara para liderar:</strong> Não apenas usar, mas guiar estudantes na era da IA</span>
            </li>
          </ul>
        </div>

        {/* Result */}
        <div className="bg-yellow-green/20 border-l-4 border-yellow-green p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-6 text-yellow-green">🚀 O Resultado: Educadores Transformados</h3>
          <p className="mb-6">
            Ao final da jornada TEACH, nossos educadores não são apenas usuários de IA - eles são <strong>líderes conscientes</strong> da revolução educacional, capazes de:
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                <span>Compreender profundamente o que é inteligência (humana e artificial)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                <span>Manter sua saúde mental e emocional em tempos de mudança</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                <span>Usar IA como ferramenta para potencializar, não substituir, sua humanidade</span>
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                <span>Guiar estudantes com sabedoria e ética no mundo digital</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-yellow-green rounded-full mt-2 flex-shrink-0"></div>
                <span>Continuar fazendo o que fazem de melhor: <strong>transformar vidas</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}