import type { Metadata } from 'next'
import '../styles/globals.css'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
            {children}
        <Footer /> 
      </body>
    </html>
  )
}
