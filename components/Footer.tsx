import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Better Tech</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming education through AI-powered solutions that adapt to every learner's unique needs and potential.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span>contact@better-tech.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>São Paulo, Brazil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#demo" className="block text-gray-400 hover:text-primary-500 transition-colors duration-200">
                Demo
              </a>
              <a href="#partnerships" className="block text-gray-400 hover:text-primary-500 transition-colors duration-200">
                Partnerships
              </a>
              <a href="#cases" className="block text-gray-400 hover:text-primary-500 transition-colors duration-200">
                Success Cases
              </a>
              <a href="#ai-training" className="block text-gray-400 hover:text-primary-500 transition-colors duration-200">
                AI Training
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Better Tech. All rights reserved. Transforming education for a better future.
          </p>
        </div>
      </div>
    </footer>
  )
}