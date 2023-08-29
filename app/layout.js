import './globals.css'
import { Montserrat } from 'next/font/google'

const montserratAlt = Montserrat({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: 'Weather app',
  description: 'Descubre el presente y futuro del clima'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserratAlt.className} bg-slate-400`}>
        {children}
      </body>
    </html>
  )
}
