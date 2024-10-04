import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { BannerDomicilio, TailwindIndicator } from '@/components'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'
import { Footer, Header } from '@/lib/common/components'
import { TopLoader } from '@/lib/common/components/progressBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('flex min-h-screen flex-col bg-background antialiased', inter.className)}>
        <TopLoader />
        <BannerDomicilio />
        <Header />
        <div className="flex-1 bg-marusColor-fondoClaro">
          <div className="container px-6 md:pb-10">{children}</div>
        </div>
        <Footer />
        <TailwindIndicator />
        <Toaster richColors closeButton />
      </body>
    </html>
  )
}
