"use client"

import { motion } from "framer-motion"
import type { BlogPost } from "@/data/blog-posts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar } from "lucide-react"

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map((post) => (
        <motion.div key={post.id} variants={item}>
          <Card className="h-full flex flex-col bg-zinc-100/80 dark:bg-zinc-800/50 border-zinc-200/80 dark:border-zinc-700/50 overflow-hidden transition-all duration-300 hover:border-emerald-500 card-hover">
            <div className="relative overflow-hidden h-48">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ backgroundImage: `url(${post.coverImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 dark:from-zinc-800/90 to-transparent opacity-70" />
            </div>

            <CardHeader>
              <CardTitle className="text-zinc-800 dark:text-zinc-100">{post.title}</CardTitle>
              <CardDescription className="flex items-center text-zinc-600 dark:text-zinc-400">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-zinc-700 dark:text-zinc-300 mb-4">{post.summary}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.slice(0, 3).map((tag) => (
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

            <CardFooter>
              <Link href={`/blog/${post.slug}`} className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-zinc-300/80 dark:border-zinc-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 text-zinc-800 dark:text-zinc-200"
                >
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
