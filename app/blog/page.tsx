import { blogPosts } from "@/data/blog-posts"
import BlogList from "@/components/blog-list"
import { Sidebar } from "@/components/sidebar"
import { FileText, Code } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Rhythm Aggarwal",
  description: "Technical articles and tutorials on web development, mobile apps, and more.",
}

export default function BlogPage() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 font-mono">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto pt-20 md:pt-8">
        <div className="max-w-5xl mx-auto py-4 md:py-8">
          <div className="flex items-center mb-8">
            <FileText className="mr-3 text-emerald-600 dark:text-emerald-400" />
            <h1 className="text-2xl font-bold">
              <span className="syntax-keyword">blog</span>{" "}
              <span className="text-zinc-800 dark:text-zinc-300">()</span>
            </h1>
          </div>

          <div className="mb-8">
            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Welcome to my blog where I share my thoughts, experiences, and tutorials on web development, mobile apps,
              and more.
              
              <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              Stay tuned for in-depth content<Code className="mr-2 text-emerald-600 dark:text-emerald-400" /></p></p>
          </div>

          <BlogList posts={blogPosts} />
        </div>
      </main>
    </div>
  )
}
