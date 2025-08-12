import { blogPosts } from "@/data/blog-posts"
import BlogPostComponent from "@/components/blog-post"
import { Sidebar } from "@/components/sidebar"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Rhythm Aggarwal",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | Rhythm Aggarwal`,
    description: post.summary,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 font-mono">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto pt-20 md:pt-8">
        <div className="max-w-5xl mx-auto py-4 md:py-8">
          <BlogPostComponent post={post} />
        </div>
      </main>
    </div>
  )
}
