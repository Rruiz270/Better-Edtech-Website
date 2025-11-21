import { Linkedin, Instagram, MessageCircle, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-rich-black text-baby-powder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-green mb-4">Better Tech</h3>
            <p className="text-gray-custom mb-6 max-w-md leading-relaxed">
              Transformando a educação através de tecnologia avançada e soluções personalizadas 
              para criar o futuro da aprendizagem. Construindo autoridade, conexão, credibilidade 
              e clareza para o futuro da educação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-yellow-green rounded-full flex items-center justify-center text-rich-black hover:bg-baby-powder transition-all duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-green rounded-full flex items-center justify-center text-rich-black hover:bg-baby-powder transition-all duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-green rounded-full flex items-center justify-center text-rich-black hover:bg-baby-powder transition-all duration-200">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-yellow-green rounded-full flex items-center justify-center text-rich-black hover:bg-baby-powder transition-all duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-yellow-green mb-4">Serviços</h4>
            <div className="space-y-2">
              <a href="#demo" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Plataformas Educacionais
              </a>
              <a href="#cases" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Gestão Educacional
              </a>
              <a href="#cases" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Soluções Editoriais
              </a>
              <a href="#ai-training" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Programa TEACH
              </a>
              <a href="#demo" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Demonstrações
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-yellow-green mb-4">Empresa</h4>
            <div className="space-y-2">
              <a href="#partnerships" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Parcerias
              </a>
              <a href="#cases" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Casos de Sucesso
              </a>
              <a href="#about" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Sobre Nós
              </a>
              <a href="#careers" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Carreiras
              </a>
              <a href="#blog" className="block text-gray-custom hover:text-yellow-green transition-colors duration-200">
                Blog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-custom/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-custom text-sm">
              <p>contato@betteredtech.com.br | +55 (11) 97653-6773 | São Paulo, SP - Brasil</p>
              <p>CNPJ: 00.000.000/0001-00</p>
            </div>
            <div className="text-yellow-green text-sm font-medium">
              © 2024 Better Tech. Todos os direitos reservados.
            </div>
          </div>
          <div className="text-center mt-4 text-gray-custom text-sm">
            Pesquisa + Tecnologia + IA + Cursos Especializados + Marketing com Valor + Engajamento = Comunidade
          </div>
        </div>
      </div>
    </footer>
  )
}