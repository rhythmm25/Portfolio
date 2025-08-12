"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="border-zinc-700/50 dark:border-zinc-300/20 bg-transparent w-9 h-9"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-zinc-700/50 dark:border-zinc-300/20 bg-transparent w-9 h-9 relative"
          aria-label="Toggle theme"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-zinc-700 dark:text-zinc-300" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-zinc-700 dark:text-zinc-300" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-zinc-50/90 dark:bg-zinc-800/90 backdrop-blur-sm border-zinc-200/80 dark:border-zinc-700/50"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-zinc-700 dark:text-zinc-300 focus:bg-zinc-200/80 dark:focus:bg-zinc-700/50 cursor-pointer"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-zinc-700 dark:text-zinc-300 focus:bg-zinc-200/80 dark:focus:bg-zinc-700/50 cursor-pointer"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-zinc-700 dark:text-zinc-300 focus:bg-zinc-200/80 dark:focus:bg-zinc-700/50 cursor-pointer"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
