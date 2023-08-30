import './globals.css'
import { Montserrat } from 'next/font/google'
import Head from './head'

const montserratAlt = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <Head />
      <body className={`${montserratAlt.className} bg-slate-400`}>
        {children}
      </body>
    </html>
  )
}
