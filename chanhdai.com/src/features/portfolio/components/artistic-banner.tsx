"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ArtisticBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1 relative overflow-hidden",
        "flex items-center justify-center",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-zinc-50 dark:bg-zinc-950",
        // Pixelated grid pattern
        "bg-[repeating-conic-gradient(var(--pattern-color)_0_90deg,transparent_0_180deg)_0_0/8px_8px]",
        "[--pattern-color:var(--color-zinc-200)] dark:[--pattern-color:var(--color-zinc-900)]"
      )}
    >
      {/* Subtle pixelated squares */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ top: "25%", right: "15%", animationDelay: "1s" }}
        />
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ bottom: "20%", left: "20%", animationDelay: "2s" }}
        />
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ bottom: "30%", right: "25%", animationDelay: "1.5s" }}
        />
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ top: "50%", left: "5%", animationDelay: "0.5s" }}
        />
        <div
          className="absolute w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-pulse"
          style={{ top: "60%", right: "8%", animationDelay: "2.5s" }}
        />
      </div>

      {/* Main quote text with pixelated font styling */}
      <div className="relative z-10 px-4">
        <h2
          className={cn(
            "text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl",
            "text-zinc-950 dark:text-zinc-50",
            "tracking-wider uppercase",
            "transition-all duration-700 ease-out",
            "font-mono",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          )}
          style={{
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.1)",
            imageRendering: "pixelated",
          }}
        >
          <span className="inline-block hover:scale-105 transition-transform duration-300">
            sometimes chaos
          </span>
          <br />
          <span className="inline-block hover:scale-105 transition-transform duration-300">
            sometimes code
          </span>
        </h2>

        {/* Pixelated underline */}
        <div className="mt-6 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-zinc-950 dark:bg-zinc-50 animate-pixel-blink"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pixel-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        @keyframes pixel-blink {
          0%, 80%, 100% { opacity: 1; }
          40% { opacity: 0.3; }
        }
        .animate-pixel-pulse {
          animation: pixel-pulse 3s ease-in-out infinite;
        }
        .animate-pixel-blink {
          animation: pixel-blink 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
