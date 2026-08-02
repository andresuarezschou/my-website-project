import { ThemeProvider } from "@/components/theme/theme-provider"
import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Personal portfolio website',
  description: 'includes projects and resume',
}

const chango = Chango({ subsets: ['latin'] })

export default function RootLayout({ 
  children,
 }:Readonly <{
  children: React.ReactNode;
   }>) {
  return (
      <html lang="en">
        <body className={chango.className}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
      </body>
      </html>
    
  )
}
