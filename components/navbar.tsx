"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]">
      <div className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-foreground/5 backdrop-blur-xl border border-foreground/10 shadow-lg">
        <Link
          href="/"
          className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 whitespace-nowrap"
        >
          Home
        </Link>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=Ubongephraim@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 whitespace-nowrap"
        >
          <span className="sm:hidden">Contact</span>
          <span className="hidden sm:inline">Let's work together</span>
        </a>
        <a
          href="https://x.com/ubong_ephraim/highlights"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-sans text-foreground/80 hover:text-foreground hover:bg-foreground/10 transition-all duration-300 whitespace-nowrap"
        >
          Highlights
        </a>
      </div>
    </nav>
  )
}
