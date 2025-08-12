import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/sidebar"
import { FileX } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 font-mono">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-4 md:p-8 overflow-y-auto pt-20 md:pt-8">
        <div className="max-w-5xl mx-auto py-4 md:py-8 flex flex-col items-center justify-center min-h-[70vh]">
          <FileX className="h-16 w-16 text-emerald-600 dark:text-emerald-400 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-zinc-700 dark:text-zinc-300 mb-6 text-center">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/blog">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Return to Blog</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
