import { ThemeProvider } from "@/components/theme/theme-provider"
import './globals.css'
import { Chango } from 'next/font/google'
import { Providers } from "./providers";

export const metadata = {
  title: 'Andre Suarez Schou',
  description: 'personal portfolio website',
}

const chango = Chango({ 
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={chango.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            <Providers>
              {children}
            </Providers>
          </ThemeProvider>
        </body>
      </html>
  )
}
