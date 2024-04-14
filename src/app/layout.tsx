import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers';
import { Header } from './header';
import { Footer } from './footer';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clone Calendly - Daniela Santos',
  description: 'Clone Calendly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className}>
          <AntdRegistry>
            <Header />
            <main>
                {children}
            </main>
            <Footer/>
          </AntdRegistry>
        </body>
      </Providers>
    </html>

  )
}
