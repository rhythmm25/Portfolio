"use client"

import { motion } from "framer-motion"
import type { BlogPost } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPostComponent({ post }: BlogPostProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <Link href="/blog">
          <Button
            variant="outline"
            className="mb-6 border-zinc-300/80 dark:border-zinc-700/50 hover:border-emerald-500 hover:bg-emerald-500/10 text-zinc-800 dark:text-zinc-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4"
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-6 text-zinc-600 dark:text-zinc-400"
        >
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-zinc-200/80 dark:bg-zinc-700/50 border-zinc-300/80 dark:border-zinc-600/50 text-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </Badge>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative overflow-hidden h-64 md:h-96 rounded-lg mb-8"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="prose prose-zinc dark:prose-invert max-w-none"
      >
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </motion.div>
    </motion.div>
  )
}
