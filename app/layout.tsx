import { ReactQueryProvider } from './ReactQueryProvider'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Music Sansar',
  description: 'Sansar for music lovers',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryProvider>
    <html lang="en">
     
      <body className={inter.className}>
        
        <Navbar/>
        {children}
        </body>
        
    </html>
    </ReactQueryProvider>
  )
}
