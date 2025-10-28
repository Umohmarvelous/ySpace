import type { Metadata } from 'next'
// import './globals.css'
import '../styles/globals.css'
import Footer from '@/components/footer'
import Navigation from '@/components/navigation'


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
        <Navigation />
            {children}
        <Footer /> 
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
