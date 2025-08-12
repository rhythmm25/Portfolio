"use client"

import { motion } from "framer-motion"
import { Layers } from "lucide-react"
import {
  SiReact,
  SiNodedotjs,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiVite,
  SiFigma,
} from "react-icons/si"

export default function TechStack() {
  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Vite", icon: SiVite, color: "#646CFF" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <section id="tech-stack" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center mb-8">
          <Layers className="mr-3 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-2xl font-bold">
            <span className="syntax-keyword">import</span>{" "}
            <span className="text-emerald-600 dark:text-emerald-400">techStack</span>{" "}
            <span className="syntax-keyword">from</span> <span className="syntax-string">'./skills'</span>
          </h2>
        </div>

        <div className="code-block">
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 rounded-md bg-zinc-200/80 dark:bg-zinc-800/70 border border-zinc-300/50 dark:border-zinc-700/50 hover:border-emerald-500 transition-all duration-300 group"
                variants={item}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
              >
                <tech.icon
                  className="w-12 h-12 mb-3 transition-all duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 p-4 bg-zinc-200/50 dark:bg-zinc-800/70 border border-zinc-300/50 dark:border-zinc-700/50 rounded-md">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              <span className="syntax-comment">
                // I'm always exploring new technologies and tools to improve my development workflow.
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
