"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      className="py-8 text-center text-zinc-500 text-sm"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <div className="flex items-center">
          <span className="text-emerald-400">{"<"}</span>
          <span className="mx-1">Designed & Built by Rhythm Aggarwal</span>
          <span className="text-emerald-400">{"/>"}</span>
        </div>
        <div className="text-xs">© {new Date().getFullYear()} • All Rights Reserved</div>
      </div>
    </motion.footer>
  )
}
