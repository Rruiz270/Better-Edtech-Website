'use client'

import { useState, useEffect } from 'react'

export default function InteractiveFormula() {
  const [clickedItems, setClickedItems] = useState<number[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const formulaItems = [
    { id: 1, icon: '🔍', text: 'Pesquisa' },
    { id: 2, icon: '⚙️', text: 'Tecnologia' },
    { id: 3, icon: '🤖', text: 'IA' },
    { id: 4, icon: '🎓', text: 'Cursos Especializados' },
    { id: 5, icon: '📈', text: 'Marketing com Valor' },
    { id: 6, icon: '💡', text: 'Engajamento' },
  ]

  const handleItemClick = (itemId: number) => {
    if (isAnimating || clickedItems.includes(itemId)) return

    setClickedItems(prev => {
      const newClicked = [...prev, itemId]
      if (newClicked.length === formulaItems.length) {
        setTimeout(() => setIsCompleted(true), 500)
        setIsAnimating(true)
      }
      return newClicked
    })
  }

  const resetFormula = () => {
    setClickedItems([])
    setIsCompleted(false)
    setIsAnimating(false)
  }

  useEffect(() => {
    if (isCompleted) {
      const timer = setTimeout(() => {
        resetFormula()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isCompleted])

  // Auto-demonstration every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (clickedItems.length === 0 && !isAnimating) {
        demonstrateFormula()
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [clickedItems, isAnimating])

  const demonstrateFormula = () => {
    setIsAnimating(true)
    formulaItems.forEach((item, index) => {
      setTimeout(() => {
        setClickedItems(prev => [...prev, item.id])
      }, index * 800)
    })
    
    setTimeout(() => {
      setIsCompleted(true)
    }, formulaItems.length * 800 + 500)
  }

  return (
    <div className="bg-baby-powder rounded-2xl p-8 shadow-xl border border-yellow-green/20 relative overflow-hidden">
      {/* Shimmer effect */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-yellow-green/10 to-transparent animate-shimmer"
        style={{ transform: 'translateX(-100%)' }}
      />
      
      <h3 className="text-2xl font-bold text-rich-black mb-4 text-center">
        Nossa Fórmula de Sucesso
      </h3>
      
      <p className="text-gray-custom text-center mb-8 text-sm opacity-80">
        ✨ <em>Clique em cada elemento da fórmula para descobrir como transformamos educação!</em> ✨
      </p>

      <div className={`flex flex-wrap justify-center items-center gap-2 sm:gap-4 relative z-10 transition-all duration-1000 ${
        isCompleted ? 'bg-gradient-to-br from-yellow-green/20 to-transparent rounded-2xl p-6' : ''
      }`}>
        {formulaItems.map((item, index) => (
          <div key={item.id} className="flex items-center">
            <div
              onClick={() => handleItemClick(item.id)}
              className={`
                bg-gradient-to-br from-yellow-green to-yellow-green/80 text-rich-black 
                px-4 py-3 rounded-2xl text-center min-w-[120px] cursor-pointer
                transition-all duration-300 transform scale-90 hover:scale-100
                shadow-lg hover:shadow-xl
                ${clickedItems.includes(item.id) 
                  ? 'scale-100 shadow-2xl bg-gradient-to-br from-yellow-green/90 to-yellow-green' 
                  : 'hover:scale-95'
                }
                ${clickedItems.includes(item.id) && !isCompleted 
                  ? 'animate-bounce-custom' 
                  : ''
                }
              `}
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'both'
              }}
            >
              <div className="text-2xl mb-2 animate-bounce-custom">
                {item.icon}
              </div>
              <div className="text-sm font-bold leading-tight">
                {item.text}
              </div>
            </div>
            
            {index < formulaItems.length - 1 && (
              <div className="text-2xl font-bold text-gray-custom mx-2 animate-pulse-custom">
                +
              </div>
            )}
            
            {index === formulaItems.length - 1 && (
              <>
                <div className="text-3xl font-bold text-yellow-green mx-4 animate-pulse-custom">
                  =
                </div>
                <div className={`
                  bg-gradient-to-br from-rich-black to-gray-custom text-yellow-green
                  px-6 py-4 rounded-2xl text-center min-w-[140px] border-2 border-yellow-green
                  transition-all duration-500 transform scale-90
                  ${isCompleted 
                    ? 'scale-110 animate-pulse shadow-2xl bg-gradient-to-br from-yellow-green to-yellow-green/80 text-rich-black' 
                    : ''
                  }
                `}>
                  <div className="text-3xl mb-2">
                    🌟
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider">
                    Comunidade
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Confetti effect when completed */}
      {isCompleted && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 20}%`,
                backgroundColor: ['#A4DF00', '#6CCFF6', '#001011', '#FFFFFC'][Math.floor(Math.random() * 4)],
                animationDelay: `${i * 0.1}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}