import { Eczar } from 'next/font/google'
import './globals.css'

const eczar = Eczar({ subsets: ['latin'] })

export const metadata = {
  title: 'SensoryPet Sneak Peek:',
  description: 'A brief menu introducing you to your potential next stuffed buddy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={eczar.className}>
        {children}
      </body>
    </html>
  )
}
