"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Code, User, Briefcase, Layers, Mail, FileText, Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("sidebar")
      const menuButton = document.getElementById("menu-button")

      if (
        isOpen &&
        isMobile &&
        sidebar &&
        menuButton &&
        !sidebar.contains(event.target as Node) &&
        !menuButton.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen, isMobile])

  // Update active section based on scroll position or pathname
  useEffect(() => {
    if (pathname.startsWith("/blog")) {
      setActiveSection("blog")
      return
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const navigation = [
    { name: "Home", href: "/", icon: Code, id: "home" },
    { name: "About", href: "/#about", icon: User, id: "about" },
    { name: "Projects", href: "/#projects", icon: Briefcase, id: "projects" },
    { name: "Tech Stack", href: "/#tech-stack", icon: Layers, id: "tech-stack" },
    { name: "Contact", href: "/#contact", icon: Mail, id: "contact" },
    { name: "Blog", href: "/blog", icon: FileText, id: "blog" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/rhythmm25", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/25-rhythm-aggarwal", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/rhythmm25", icon: Twitter },
  ]

  // Overlay for mobile sidebar
  const Overlay = () => (
    <AnimatePresence>
      {isOpen && isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  )

  return (
    <>
      <Overlay />

      {/* Mobile header with menu button and theme toggle */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between p-4 bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-sm border-b border-zinc-200/50 dark:border-zinc-700/50 md:hidden">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="text-emerald-600 dark:text-emerald-400">{">"}</span> Rhythm Aggarwal
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            id="menu-button"
            onClick={toggleSidebar}
            className="p-2 rounded-md bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="sidebar"
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Sidebar */}
      <motion.aside
        id="sidebar"
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-zinc-100/90 dark:bg-zinc-800/90 backdrop-blur-sm border-r border-zinc-200/50 dark:border-zinc-700/50 transition-transform duration-300 ease-in-out",
          "md:translate-x-0", // Always visible on desktop
          isMobile && !isOpen && "-translate-x-full", // Hidden on mobile when closed
        )}
        initial={false}
        animate={{
          x: isMobile && !isOpen ? -320 : 0,
          transition: { type: "spring", stiffness: 300, damping: 30 },
        }}
      >
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between h-16 px-6 border-b border-zinc-200/50 dark:border-zinc-700/50">
            <Link href="/" className="text-lg font-bold tracking-tight cursor-pointer" onClick={() => setIsOpen(false)}>
              <span className="text-emerald-600 dark:text-emerald-400">{">"}</span> Rhythm Aggarwal
            </Link>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </div>

          <TooltipProvider delayDuration={300}>
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const isActive =
                  (item.id === "home" && pathname === "/") ||
                  (item.id === "blog" && pathname.startsWith("/blog")) ||
                  (pathname === "/" && activeSection === item.id)

                return (
                  <Tooltip key={item.name}>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm rounded-md transition-colors group",
                          isActive
                            ? "bg-zinc-200/80 dark:bg-zinc-700/50 text-emerald-600 dark:text-emerald-400"
                            : "hover:bg-zinc-200/50 dark:hover:bg-zinc-700/30 text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200",
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon
                          className={cn(
                            "mr-3 h-5 w-5 transition-colors",
                            isActive
                              ? "text-emerald-600 dark:text-emerald-400"
                              : "text-zinc-500 dark:text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300",
                          )}
                        />
                        {item.name}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent
                      side="right"
                      className="bg-zinc-100/90 dark:bg-zinc-800/90 border-zinc-200/50 dark:border-zinc-700/50 text-zinc-800 dark:text-zinc-200"
                    >
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </nav>
          </TooltipProvider>

          <div className="px-6 py-4 border-t border-zinc-200/50 dark:border-zinc-700/50">
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">Available for work</span>
            </div>

            <div className="flex items-center justify-between">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
