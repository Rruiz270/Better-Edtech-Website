import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Better Tech - Transformando a Educação na Era da IA',
  description: 'Soluções educacionais impulsionadas por IA e caminhos de aprendizagem adaptativos para a educação moderna. Parceiro oficial para transformação educacional no Brasil.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}