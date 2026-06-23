import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Yesika Roa | Full Stack Developer',
  description:
    'Ingeniera de Sistemas y Desarrolladora Full-Stack especializada en JavaScript/TypeScript, React, Node.js y soluciones de IA.',
  keywords:
    'Yesika Roa,Full Stack Developer,Ingeniera de Sistemas,TypeScript,React,Node.js,PostgreSQL,AWS',
  robots: 'index, follow',
  openGraph: {
    title: 'Yesika Roa | Full Stack Developer',
    description:
      'Ingeniera de Sistemas y Desarrolladora Full-Stack especializada en JavaScript/TypeScript, React, Node.js y soluciones de IA.',
    url: 'https://yesikaroa.github.io',
    siteName: 'Yesika Roa',
    locale: 'es_VE',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0d0b14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={roboto.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
