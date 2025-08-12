"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const experiences = ["React.js", "Node.js", "Firebase", "MongoDB", "SQL", "Flutter", "React Native", "Figma"]

  return (
    <section id="about" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="vscode-window">
          <div className="vscode-header">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            </div>
            <div className="text-xs text-zinc-400">about.tsx - portfolio</div>
            <div></div>
          </div>

          <div className="vscode-tabs">
            <div className="vscode-tab active">
              <span>about.tsx</span>
            </div>
            <div className="vscode-tab">
              <span>skills.tsx</span>
            </div>
          </div>

          <div className="vscode-body">
            <div className="flex">
              <div className="line-numbers w-10 mr-4">
                <div>01</div>
                <div>02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
                <div>06</div>
                <div>07</div>
                <div>08</div>
                <div>09</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-6">
                  <span className="syntax-keyword">class</span> <span className="text-emerald-400">AboutMe</span> {"{"}
                </h2>

                <div className="space-y-6 pl-6">
                  <p className="text-white-600">
                    I'm a full-stack developer specializing in building exceptional digital experiences. I focus on
                    creating fast, scalable, and user-focused applications that solve real-world problems.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-200">
                      <span className="syntax-comment">// Expertise</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-zinc-800/70 hover:bg-zinc-700 border-zinc-700/50 text-zinc-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-200">
                      <span className="syntax-comment">// Passion</span>
                    </h3>
                    <ul className="space-y-2 text-white-600">
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">→</span>
                        Clean, maintainable code architecture
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">→</span>
                        Performance optimization and best practices
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">→</span>
                        User-centered design and accessibility
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-400 mr-2">→</span>
                        Continuous learning and improvement
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-2xl font-bold mb-6">
                  {"}"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
