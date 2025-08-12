"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Code } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    /*{
      id: 1,
      title: "Genie: The City Explorer",
      description:
        "A smart travel app for discovering hidden local gems, historical spots, and experiences with real-time translation features.",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["React Native", "Firebase", "Google Maps API", "Translation API"],
      github: "#",
      demo: "#",
      category: "mobile",
    }*/

  ]

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
    <section id="projects" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center mb-8">
          <Code className="mr-3 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-2xl font-bold">
            <span className="syntax-keyword">const</span>{" "}
            <span className="text-emerald-600 dark:text-emerald-400">projects</span>{" "}
            <span className="text-zinc-800 dark:text-zinc-300">=</span>
          </h2>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-zinc-200/80 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 w-full sm:w-auto flex flex-wrap">
            <TabsTrigger value="all" className="flex-1 sm:flex-none">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="web" className="flex-1 sm:flex-none">
              Web Apps
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex-1 sm:flex-none">
              Mobile Apps
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ProjectGrid projects={projects} hoveredProject={hoveredProject} setHoveredProject={setHoveredProject} />
          </TabsContent>

          <TabsContent value="web">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "web")}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          </TabsContent>

          <TabsContent value="mobile">
            <ProjectGrid
              projects={projects.filter((p) => p.category === "mobile")}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}

interface ProjectGridProps {
  projects: any[]
  hoveredProject: number | null
  setHoveredProject: (id: number | null) => void
}

function ProjectGrid({ projects, hoveredProject, setHoveredProject }: ProjectGridProps) {
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
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={item}>
          <Card
            className="bg-zinc-100/80 dark:bg-zinc-800/50 border-zinc-200/80 dark:border-zinc-700/50 overflow-hidden transition-all duration-300 hover:border-emerald-500 card-hover"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative overflow-hidden h-48">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out"
                style={{
                  backgroundImage: `url(${project.image})`,
                  transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 dark:from-zinc-800/90 to-transparent opacity-70" />
            </div>

            <CardHeader>
              <CardTitle className="text-zinc-800 dark:text-zinc-100">{project.title}</CardTitle>
              <CardDescription className="text-zinc-600 dark:text-zinc-400">{project.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag: string) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-zinc-200/80 dark:bg-zinc-700/50 border-zinc-300/80 dark:border-zinc-600/50 text-zinc-700 dark:text-zinc-300 text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <a
                href={project.github}
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                <span>Code</span>
              </a>
              <a
                href={project.demo}
                className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                <span>Demo</span>
              </a>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
