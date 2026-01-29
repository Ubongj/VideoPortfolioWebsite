export function SectionDivider() {
  return (
    <div className="relative w-full py-6">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative flex items-center justify-center">
          {/* Left line */}
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
          
          {/* Center diamond accent */}
          <div className="mx-6 relative">
            <div className="w-2 h-2 rotate-45 border border-border bg-background" />
          </div>
          
          {/* Right line */}
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-border" />
        </div>
      </div>
    </div>
  )
}
