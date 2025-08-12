"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Blog() {
  // Placeholder for future blog posts
  const blogPosts = [
    {
      title: "Coming Soon",
      description: "Technical articles and tutorials will be published here soon.",
      date: "Future",
      tags: ["Web Development", "Mobile Apps", "Tutorials"],
    },
  ]

  return (
    <section id="blog" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center mb-8">
          <FileText className="mr-3 text-emerald-400" />
          <h2 className="text-2xl font-bold">
            <span className="syntax-keyword">async function</span> <span className="text-emerald-400">blog</span>
            <span className="text-zinc-300">()</span>
          </h2>
        </div>

        <div className="vscode-window">
          <div className="vscode-header">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            </div>
            <div className="text-xs text-zinc-400">blog.md - portfolio</div>
            <div></div>
          </div>

          <div className="vscode-body">
            <div className="markdown prose prose-invert max-w-none">
              <h1>Technical Blog</h1>
              <p>
                This section will contain technical articles, tutorials, and insights about web and mobile development.
                Stay tuned for in-depth content on:
              </p>

              <ul>
                <li>Modern web development techniques</li>
                <li>Mobile app architecture patterns</li>
                <li>Performance optimization strategies</li>
                <li>UI/UX design principles</li>
                <li>Backend and database best practices</li>
              </ul>

              <div className="space-y-6 mt-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-zinc-800/70 border-zinc-700/50">
                    <CardHeader>
                      <CardTitle className="text-zinc-100">{post.title}</CardTitle>
                      <CardDescription className="text-zinc-400">{post.date}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className="text-zinc-300">{post.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="bg-zinc-700/50 border-zinc-600/50 text-zinc-300 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-zinc-700/50 hover:border-emerald-500 hover:bg-transparent text-zinc-300"
                        disabled
                      >
                        Stay Tuned
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
