"use client"

import { useEffect, useState } from "react"

export function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-sans">
          © {year ?? "2025"} All rights reserved.
        </p>
        
        <div className="flex items-center gap-8">
          <a 
            href="https://x.com/ubong_ephraim" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
          >
            Twitter
          </a>
          <a 
            href="https://www.linkedin.com/in/ubong-ephraim/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
