"use client"

const videos = [
  {
    title: "ArcX",
    videoId: "1h8XxTIadMMLQuECHCRTfjksCSw2rPzzc"
  },
  {
    title: "Bungee",
    videoId: "1T3NlOvB_FG-gzhPVmceypDmoH5HScN4e"
  },
  {
    title: "Mantle",
    videoId: "12BTHniqqSiL50q1O7uJN6pyh7dPDE6Z-"
  },
  {
    title: "Starknet",
    videoId: "1lGylyrPBlnAye7ZhpGQHWdmTBLITC0sw"
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6 font-sans">
            Featured Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-sans">
            A selection of video content I've created for leading crypto projects and ecosystems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div 
              key={video.title}
              className="group relative rounded-2xl bg-foreground/5 backdrop-blur-xl border border-foreground/10 overflow-hidden hover:border-foreground/20 transition-all duration-500"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              
              <div className="p-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-background/50">
                  {video.videoId ? (
                    <iframe
                      src={`https://drive.google.com/file/d/${video.videoId}/preview`}
                      className="w-full h-full"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      loading="lazy"
                      title={`${video.title} video`}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/20 flex items-center justify-center mx-auto mb-4">
                          <svg 
                            className="w-6 h-6 text-foreground ml-1" 
                            fill="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground font-sans">Video pending</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="px-4 pb-4">
                <h3 className="font-serif text-lg font-medium text-foreground text-center group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
