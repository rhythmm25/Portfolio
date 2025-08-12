"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Terminal, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import emailjs from "emailjs-com"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

export default function Contact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      formSchema.parse(formData)
      setIsSubmitting(true)
  
      const { name, email, message } = formData
  
      const result = await emailjs.send(
        "Portfolio",
        "template_y35e2sn",
        {
          from_name: name,
          reply_to: email,
          message,
        },
        "XZPj0hUSdosVEegaY"
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        variant: "success",
      })

      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message
          }
        })
        setErrors(fieldErrors)

        // Show error toast
        toast({
          title: "Form validation error",
          description: "Please check the form for errors.",
          variant: "destructive",
        })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex items-center mb-8">
          <Terminal className="mr-3 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-2xl font-bold">
            <span className="syntax-keyword">function</span>{" "}
            <span className="text-emerald-600 dark:text-emerald-400">contact</span>
            <span className="text-zinc-800 dark:text-zinc-300">()</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="code-block">
            <h3 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
              <span className="syntax-comment">// Get in touch</span>
            </h3>

            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project
              in mind or just want to connect!
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors animated-underline"
              >
                <Github className="mr-3 h-5 w-5" />
                <span>github.com/rhythmm25</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors animated-underline"
              >
                <Linkedin className="mr-3 h-5 w-5" />
                <span>linkedin.com/in/25-rhythm-aggarwal</span>
              </a>

              <a
                href="mailto:rhythm@example.com"
                className="flex items-center text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors animated-underline"
              >
                <Mail className="mr-3 h-5 w-5" />
                <span>rhythm.agg25@gmail.com</span>
              </a>
            </div>

            <div className="mt-8 p-4 bg-zinc-200/50 dark:bg-zinc-800/70 border border-zinc-300/50 dark:border-zinc-700/50 rounded-md">
              <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2">
                <Terminal size={16} className="mr-2" />
                <span>echo $AVAILABILITY</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300">
                Currently available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="text-xs ml-2 text-zinc-500 dark:text-zinc-400">message.sh</span>
            </div>

            <div className="terminal-body">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2 text-sm">
                    <span>$ enter name:</span>
                  </div>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`bg-zinc-200/50 dark:bg-zinc-800/70 border-zinc-300/50 dark:border-zinc-700/50 focus:border-emerald-500 text-zinc-700 dark:text-zinc-300 ${
                      errors.name ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2 text-sm">
                    <span>$ enter email:</span>
                  </div>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Name@example.com"
                    className={`bg-zinc-200/50 dark:bg-zinc-800/70 border-zinc-300/50 dark:border-zinc-700/50 focus:border-emerald-500 text-zinc-700 dark:text-zinc-300 ${
                      errors.email ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <div className="flex items-center text-emerald-600 dark:text-emerald-400 mb-2 text-sm">
                    <span>$ compose message:</span>
                  </div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Rhythm, I'd like to discuss a project..."
                    className={`bg-zinc-200/50 dark:bg-zinc-800/70 border-zinc-300/50 dark:border-zinc-700/50 focus:border-emerald-500 text-zinc-700 dark:text-zinc-300 min-h-[120px] ${
                      errors.message ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    aria-invalid={errors.message ? "true" : "false"}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-200/80 dark:bg-zinc-800 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-zinc-800 dark:text-zinc-200 hover:text-white dark:hover:text-white border border-zinc-300/50 dark:border-zinc-700/50 hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "$ send_message.sh"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
