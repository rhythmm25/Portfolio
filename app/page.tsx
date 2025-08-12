import { Sidebar } from "@/components/sidebar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 font-mono">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto pt-20 md:pt-0">
        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32 py-4 md:py-8">
          <Hero />
          <About />
          <Projects />
          <TechStack />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  )
}
