import { Montserrat } from 'next/font/google'
import './globals.css'

// components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza ordering Web App',
  description: 'Best pizza shop',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
