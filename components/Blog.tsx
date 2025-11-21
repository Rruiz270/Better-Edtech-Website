'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, ArrowRight, Play, ExternalLink, ChevronLeft } from 'lucide-react'

export default function Blog() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null)
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  const articles = [
    {
      id: 1,
      title: "O Futuro da IA na Educação Brasileira: Uma Revolução Silenciosa em Curso",
      subtitle: "Como a Inteligência Artificial está transformando salas de aula do Amazonas ao Rio Grande do Sul",
      excerpt: "Explore como escolas brasileiras estão pioneiramente integrando IA para criar experiências de aprendizagem mais personalizadas e eficazes, respeitando nossa diversidade cultural e necessidades locais.",
      author: "Dr. Rafael Silva",
      authorRole: "CTO & Fundador, Better Tech",
      date: "15 de Novembro, 2024",
      readTime: "12 min",
      category: "Inovação Educacional",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/t4kyRyKyOpo",
      content: {
        introduction: "No silêncio das madrugadas brasileiras, uma revolução está acontecendo. Não nas ruas ou nos palácios, mas nas salas de aula de escolas espalhadas por todo o território nacional. É uma revolução alimentada por algoritmos, dados e, principalmente, pela determinação de educadores que acreditam que a tecnologia pode sim amplificar o potencial humano.",
        sections: [
          {
            title: "O Despertar da IA Educacional no Brasil",
            content: "Desde as escolas rurais do interior do Ceará até os colégios particulares de São Paulo, a Inteligência Artificial está começando a redefinir como ensinamos e aprendemos. Não se trata de substituir o professor — nunca foi essa a intenção. Trata-se de dar ao educador brasileiro ferramentas que permitem personalizar o ensino para cada um dos 48 milhões de estudantes do país.",
            highlight: "A IA na educação brasileira não é sobre substituição; é sobre amplificação do potencial humano."
          },
          {
            title: "Casos Reais de Transformação",
            content: "Em Palmares Paulista, uma cidade de 12 mil habitantes, vimos professores utilizando assistentes de IA para criar trilhas de aprendizagem personalizadas. O resultado? Um aumento de 35% no desempenho dos alunos em avaliações municipais. Em Resende, no interior do Rio, o projeto Sprix introduziu gamificação com IA, transformando o aprendizado de programação em uma aventura que engaja crianças e adolescentes.",
            stats: [
              { label: "Municípios Impactados", value: "12+" },
              { label: "Professores Capacitados", value: "2.000+" },
              { label: "Melhoria no Engajamento", value: "40%" }
            ]
          },
          {
            title: "Desafios e Oportunidades Únicos",
            content: "O Brasil possui desafios únicos: desigualdade de acesso, diversidade cultural imensa, diferentes níveis de letramento digital. Mas também possui vantagens competitivas: criatividade natural, capacidade de improvisação, e uma cultura educacional que valoriza as relações humanas. A IA precisa ser implementada respeitando essas características."
          }
        ],
        conclusion: "O futuro da educação brasileira não será definido pela sofisticação da tecnologia que utilizamos, mas pela sabedoria com que a implementamos. A IA é uma ferramenta poderosa, mas sua verdadeira força emerge quando colocada nas mãos de educadores que compreendem que ensinar é, fundamentalmente, um ato de amor e transformação humana.",
        callToAction: "Quer fazer parte desta revolução? Conheça como o Programa TEACH está preparando educadores para liderar a transformação da educação brasileira."
      }
    },
    {
      id: 2,
      title: "Como Professores Podem Liderar a Revolução da IA: O Guia Prático para Educadores",
      subtitle: "De receosos a protagonistas: a jornada de transformação do educador moderno",
      excerpt: "Um roadmap detalhado para professores que querem deixar de temer a IA e passar a liderá-la, baseado em experiências reais de educadores que já estão transformando suas práticas.",
      author: "Prof. Ana Beatriz Santos",
      authorRole: "Coordenadora Pedagógica, Better Tech",
      date: "22 de Novembro, 2024",
      readTime: "15 min",
      category: "Desenvolvimento Profissional",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/f_u7Q1DMhMk",
      content: {
        introduction: "\"Não consigo mais ignorar. Meus alunos falam de ChatGPT o tempo todo, e eu me sinto perdida.\" Essa foi a confissão de Maria, professora de português de uma escola pública em Minas Gerais, durante um de nossos workshops. Seis meses depois, ela estava liderando um projeto de escrita criativa com IA que virou referência nacional.",
        sections: [
          {
            title: "O Mindset do Professor-Líder em IA",
            content: "A primeira transformação não é técnica; é mental. Professores-líderes em IA não nasceram sabendo programar. Eles nasceram curiosos, dispostos a experimentar e, principalmente, com a convicção de que a tecnologia deve servir à educação, e não o contrário.",
            highlight: "Liderar a IA na educação começa com a disposição de aprender junto com os alunos."
          },
          {
            title: "As 5 Competências do Educador IA-Ready",
            content: "Durante nossos dois anos trabalhando com mais de 2.000 educadores, identificamos cinco competências essenciais: Curadoria Inteligente (saber filtrar e adaptar conteúdo gerado por IA), Pedagogia Adaptativa (personalizar métodos de ensino), Ética Digital (ensinar uso responsável), Colaboração Híbrida (integrar humano e máquina), e Mentalidade de Crescimento Contínuo.",
            stats: [
              { label: "Professores Treinados", value: "2.000+" },
              { label: "Taxa de Adoção", value: "87%" },
              { label: "Satisfação Docente", value: "94%" }
            ]
          },
          {
            title: "Ferramentas Práticas para Começar Hoje",
            content: "Comece pequeno: use IA para criar quizzes personalizados, gere ideias para projetos interdisciplinares, adapte textos para diferentes níveis de leitura. Depois, evolua para co-criação de conteúdo com alunos, análise de dados de aprendizagem e desenvolvimento de competências digitais."
          }
        ],
        conclusion: "A revolução da IA na educação não será liderada por programadores ou executivos de Big Tech. Será liderada por professores corajosos que entendem que tecnologia sem humanidade é apenas código. Professores que sabem que o futuro da educação está na síntese perfeita entre inteligência artificial e sabedoria humana.",
        callToAction: "Pronto para liderar? Inscreva-se no Programa TEACH e transforme sua prática educacional com IA."
      }
    },
    {
      id: 3,
      title: "Construindo Comunidades Digitais Educacionais: O Poder das Redes de Aprendizagem",
      subtitle: "Como a Better Tech está conectando educadores e estudantes além das fronteiras físicas",
      excerpt: "Descubra como comunidades digitais estão criando ecossistemas de aprendizagem que transcendem salas de aula, conectando mentes brilhantes de todo o Brasil e criando impacto duradouro.",
      author: "Bruno Oliveira",
      authorRole: "Head de Comunidade, Better Tech",
      date: "1 de Dezembro, 2024",
      readTime: "10 min",
      category: "Comunidade & Networking",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      videoUrl: "https://www.youtube.com/embed/QhNk4jT9MhA",
      content: {
        introduction: "Em 2023, uma professora de matemática de uma escola rural em Rondônia colaborou com um engenheiro da Google em São Paulo para criar um projeto de ensino de algoritmos usando música regional. Eles nunca se encontraram pessoalmente, mas mudaram a vida de centenas de estudantes. Esta é a magia das comunidades digitais educacionais.",
        sections: [
          {
            title: "Além dos Muros da Escola: O Novo Paradigma",
            content: "As comunidades digitais educacionais não são apenas grupos online; são ecossistemas vivos onde conhecimento, experiências e sonhos se encontram. Elas quebram as barreiras geográficas, socioeconômicas e hierárquicas que tradicionalmente limitam o acesso ao conhecimento e às oportunidades.",
            highlight: "Comunidades digitais transformam aprendizagem de processo individual em jornada coletiva."
          },
          {
            title: "Arquitetura de uma Comunidade que Funciona",
            content: "Nossa experiência construindo a comunidade Better Tech ensinou-nos que comunidades educacionais prósperas precisam de três pilares: Propósito Compartilhado (missão clara de transformação educacional), Diversidade Intencional (diferentes perfis, regiões e experiências) e Facilitação Ativa (curadoria de conteúdo e conexões significativas).",
            stats: [
              { label: "Membros Ativos", value: "15.000+" },
              { label: "Projetos Colaborativos", value: "200+" },
              { label: "Estados Brasileiros", value: "26" }
            ]
          },
          {
            title: "Casos de Sucesso que Inspiram",
            content: "O projeto 'Favela Code' conectou jovens da periferia de São Paulo com mentores tech de startups. Resultado: 78% dos participantes conseguiram estágios ou empregos na área. A 'Rede Amazônia Digital' levou educação tecnológica para comunidades ribeirinhas através de parcerias com universidades federais."
          }
        ],
        conclusion: "O futuro da educação é distribuído, colaborativo e profundamente humano. As comunidades digitais não substituem a escola; elas a expandem, conectam e potencializam. Em um mundo cada vez mais conectado, a pergunta não é se devemos construir essas comunidades, mas como fazê-lo de forma mais inclusiva e impactante.",
        callToAction: "Junte-se à nossa comunidade de educadores transformadores e faça parte da rede que está redefinindo o futuro da educação no Brasil."
      }
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.getAttribute('data-article-id') || '0')
            setVisibleCards(prev => [...prev, cardId])
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = document.querySelectorAll('[data-article-id]')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [selectedArticle])

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle)!
    return (
      <section id="blog" className="py-20 bg-baby-powder min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-gray-custom hover:text-yellow-green mb-8 transition-colors duration-200"
          >
            <ChevronLeft size={20} />
            Voltar aos artigos
          </button>

          {/* Article Header */}
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <span className="inline-block bg-yellow-green text-rich-black px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {article.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-rich-black leading-tight mb-4">
                {article.title}
              </h1>
              <p className="text-xl text-gray-custom leading-relaxed mb-6">
                {article.subtitle}
              </p>
              
              {/* Author & Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-custom mb-8">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span className="font-medium text-rich-black">{article.author}</span>
                  <span>• {article.authorRole}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {article.readTime} de leitura
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Featured Video */}
            <div className="mb-8">
              <iframe
                className="w-full h-64 md:h-96 rounded-2xl shadow-xl"
                src={article.videoUrl}
                title={article.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Article Content */}
            <div className="space-y-8">
              {/* Introduction */}
              <div className="bg-gray-50 border-l-4 border-yellow-green p-6 rounded-r-lg">
                <p className="text-lg leading-relaxed text-gray-700 italic">
                  {article.content.introduction}
                </p>
              </div>

              {/* Sections */}
              {article.content.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold text-rich-black">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {section.content}
                  </p>
                  
                  {section.highlight && (
                    <div className="bg-yellow-green/10 border border-yellow-green/20 p-4 rounded-lg">
                      <p className="text-rich-black font-medium italic">
                        💡 {section.highlight}
                      </p>
                    </div>
                  )}
                  
                  {section.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                      {section.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="bg-gradient-to-br from-yellow-green/10 to-pale-azure/10 p-4 rounded-xl text-center border border-yellow-green/20">
                          <div className="text-2xl font-bold text-rich-black">{stat.value}</div>
                          <div className="text-sm text-gray-custom">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Conclusion */}
              <div className="bg-gradient-to-r from-rich-black to-gray-custom text-baby-powder p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4 text-yellow-green">Conclusão</h3>
                <p className="text-lg leading-relaxed mb-6">
                  {article.content.conclusion}
                </p>
                <div className="bg-yellow-green/20 border border-yellow-green/30 p-4 rounded-lg">
                  <p className="font-medium">
                    {article.content.callToAction}
                  </p>
                  <a href="#contact" className="inline-flex items-center gap-2 mt-4 bg-yellow-green text-rich-black px-6 py-3 rounded-full font-semibold hover:bg-baby-powder transition-all duration-300">
                    Entrar em Contato
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-baby-powder to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="gradient-text">Blog Better Tech</span>
          </h2>
          <p className="section-subtitle">
            Insights, histórias e reflexões sobre o futuro da educação na era da inteligência artificial
          </p>
          <div className="w-24 h-1 bg-yellow-green mx-auto mt-8"></div>
        </div>

        {/* Featured Article */}
        <div 
          className="mb-16 cursor-pointer group"
          onClick={() => setSelectedArticle(articles[0].id)}
        >
          <div className="bg-baby-powder rounded-3xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl group-hover:border-yellow-green/20 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={articles[0].image} 
                  alt={articles[0].title}
                  className="w-full h-full object-cover min-h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rich-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-yellow-green text-rich-black px-3 py-1 rounded-full text-sm font-semibold">
                    Artigo em Destaque
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block bg-yellow-green/20 backdrop-blur-sm text-baby-powder px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {articles[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-3xl font-bold text-rich-black mb-4 leading-tight group-hover:text-yellow-green transition-colors duration-300">
                  {articles[0].title}
                </h3>
                <p className="text-gray-custom mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-custom mb-6">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span className="font-medium">{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {articles[0].readTime}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-yellow-green font-semibold group-hover:gap-4 transition-all duration-300">
                  Ler artigo completo
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {articles.slice(1).map((article, index) => (
            <div
              key={article.id}
              data-article-id={article.id}
              className={`
                cursor-pointer group transition-all duration-500 transform
                ${visibleCards.includes(article.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => setSelectedArticle(article.id)}
            >
              <div className="bg-baby-powder rounded-2xl shadow-lg overflow-hidden border border-gray-100 group-hover:shadow-xl group-hover:border-yellow-green/20 group-hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-green text-rich-black px-2 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Play size={24} className="text-baby-powder opacity-80" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-rich-black mb-3 leading-tight group-hover:text-yellow-green transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-custom mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-custom">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span className="font-medium">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-green font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      <span>Ler mais</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-rich-black to-gray-custom text-baby-powder p-8 lg:p-12 rounded-3xl">
          <h3 className="text-2xl font-bold mb-4 text-yellow-green">Quer contribuir com nosso blog?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Compartilhe suas experiências e insights sobre educação e tecnologia. 
            Juntos, podemos inspirar mais educadores a transformar o futuro da aprendizagem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-yellow-green text-rich-black px-8 py-4 rounded-full font-semibold hover:bg-baby-powder transition-all duration-300 inline-flex items-center justify-center gap-2">
              Enviar Artigo
              <ExternalLink size={18} />
            </a>
            <a href="#contact" className="border-2 border-yellow-green text-yellow-green hover:bg-yellow-green hover:text-rich-black px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center">
              Assinar Newsletter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}