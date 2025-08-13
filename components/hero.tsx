"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Terminal, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText =
    "Hi, I'm Rhythm Aggarwal — a developer who builds fast, scalable, and user-focused web and mobile applications."

  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 40)

    return () => clearInterval(typingInterval)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="order-2 md:order-1" variants={item}>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-xs ml-2 text-zinc-500 dark:text-zinc-400">rhythm@portfolio:~</span>
            </div>
            <div className="terminal-body">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2">
                <Terminal size={16} className="mr-2" />
                <span>whoami</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 cursor-blink">{displayText}</h1>
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2">
                <Terminal size={16} className="mr-2" />
                <span>cat skills.json</span>
              </div>
              <pre className="text-xs md:text-base bg-zinc-200/50 dark:bg-zinc-800/50 p-3 rounded-md overflow-x-auto">
                <code>
                  {`{
  "frontend": ["React", "Next.js"],
  "backend": ["Node.js", "Firebase"],
  "mobile": ["React Native", "Flutter"],
  "database": ["MongoDB", "SQL"],
  "design": ["Figma", "UI/UX"]
}`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        <motion.div className="flex justify-center order-1 md:order-2" variants={item}>
          <div className="dev-photo-frame rounded-lg w-64 h-64 md:w-80 md:h-80">
            <img
              src="/ghibli.png?height=320&width=320"
              alt="Rhythm Aggarwal"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-zinc-50/80 dark:bg-zinc-900/80 p-2 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                rhythm_aggarwal.jpg
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <Button
          variant="outline"
          size="lg"
          className="group border-zinc-200/80 dark:border-zinc-700/50 hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-transparent w-full sm:w-auto"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          Explore My Work
          <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
        </Button>

        <a
          href="/Resume.pdf"
          download="RhythmCv.pdf"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-600 dark:bg-emerald-600 text-white hover:bg-emerald-700 dark:hover:bg-emerald-700 h-11 px-8 w-full sm:w-auto"
          aria-label="Download Resume"
        >
          Download Resume
          <Download className="ml-2 h-4 w-4" />
        </a>
      </motion.div>
    </section>
  )
}
