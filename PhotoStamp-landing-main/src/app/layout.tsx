import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Landing',
  description: 'PhotoStamp',
}
const navItems = [
  { label: "Inicio", route: "#" },
  { label: "Nosotros", route: "#us" },
  { label: "Servicios", route: "#servs" },
  { label: "Productos", route: "#prod" },
  { label: "Reseñas", route: "#revs" },
  { label: "Contacto", route: "#cont" }
]

export default function RootLayout(
  {
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          <NavBar navItems={navItems}/>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
