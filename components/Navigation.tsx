'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Demo', href: '#demo' },
    { name: 'Parcerias', href: '#partnerships' },
    { name: 'Casos', href: '#cases' },
    { name: 'Treinamento IA', href: '#ai-training' },
    { name: 'Blog', href: '#blog' },
    { name: 'Manifesto', href: '#manifesto' },
    { name: 'Contato', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-baby-powder/98 backdrop-blur-sm shadow-lg' 
        : 'bg-baby-powder/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <img 
              src="/logo-better-tech.png" 
              alt="Better Tech Logo" 
              className="h-8 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.setAttribute('style', 'display: block');
              }}
            />
            <span className="text-2xl font-bold text-rich-black tracking-tight" style={{display: 'none'}}>
              Better Tech
            </span>
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-custom hover:text-yellow-green font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <a href="#contact" className="hidden md:block btn-primary">
            Fale Conosco
          </a>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-custom hover:text-yellow-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-baby-powder/95 backdrop-blur-sm border-t border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-custom hover:text-yellow-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </header>
  )
}