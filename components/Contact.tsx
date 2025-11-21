'use client'

import { useState } from 'react'
import { Phone, Mail, Globe, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-green/5 to-rich-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-rich-black mb-6">
              Fale com nossos{' '}
              <span className="gradient-text">especialistas</span>
            </h2>
            <p className="text-xl text-gray-custom mb-8">
              Agende com nossa equipe e vamos fazer as coisas acontecerem!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-baby-powder border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-yellow-green rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-rich-black" />
                </div>
                <div>
                  <div className="font-semibold text-rich-black">Telefone</div>
                  <div className="text-gray-custom">(11) 97653-6773</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-baby-powder border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-yellow-green rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-rich-black" />
                </div>
                <div>
                  <div className="font-semibold text-rich-black">E-mail</div>
                  <div className="text-gray-custom">contato@betteredtech.com.br</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-baby-powder border border-gray-200 rounded-xl">
                <div className="w-12 h-12 bg-yellow-green rounded-full flex items-center justify-center">
                  <Globe size={24} className="text-rich-black" />
                </div>
                <div>
                  <div className="font-semibold text-rich-black">Website</div>
                  <div className="text-gray-custom">www.betteredtech.com.br</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-baby-powder rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-rich-black mb-6">Fale conosco</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-green focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-green focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefone com DDD"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-green focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Mensagem"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-yellow-green focus:outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}