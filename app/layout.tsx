import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { SpeedInsights } from "@/components/speed-insights"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { AnimatedBackground } from "@/components/animated-background"

export const metadata: Metadata = {
  title: "Rhythm Aggarwal | Full-Stack Developer",
  description:
    "Portfolio of Rhythm Aggarwal, a full-stack developer specializing in high-performance web and mobile applications"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-zinc-50 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 font-mono antialiased transition-colors duration-300">
        <ThemeProvider defaultTheme="dark" storageKey="rhythm-theme-preference">
          <AnimatedBackground />
          <Suspense>{children}</Suspense>
          <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
