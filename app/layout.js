import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Chelate - Secure Your AI Agents in CI/CD',
  description: 'Chelate finds exploitable workflows and shows what your AI agents do in CI. Security that ships with your code.',
  keywords: ['CI/CD security', 'GitHub Actions', 'AI agents', 'workflow security', 'DevSecOps'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
