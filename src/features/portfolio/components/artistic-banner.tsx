"use client"

import { cn } from "@/lib/utils"

export function ArtisticBanner() {
  return (
    <div
      className={cn(
        "relative aspect-2/1 overflow-hidden border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-zinc-50 dark:bg-zinc-950",
        // Pixelated grid pattern
        "bg-[repeating-conic-gradient(var(--pattern-color)_0_90deg,transparent_0_180deg)_0_0/8px_8px]",
        "[--pattern-color:var(--color-zinc-200)] dark:[--pattern-color:var(--color-zinc-900)]"
      )}
    >
      {/* Subtle pixelated squares */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
          style={{ top: "15%", left: "10%", animationDelay: "0s" }}
        />
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
          style={{ top: "25%", right: "15%", animationDelay: "1s" }}
        />
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
          style={{ bottom: "20%", left: "20%", animationDelay: "2s" }}
        />
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
          style={{ bottom: "30%", right: "25%", animationDelay: "1.5s" }}
        />
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
          style={{ top: "50%", left: "5%", animationDelay: "0.5s" }}
        />
        <div
          className="animate-pixel-pulse absolute h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
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
            "font-mono",
            "animate-in duration-700 ease-out zoom-in-95 fade-in"
          )}
          style={{
            textShadow: "2px 2px 0px rgba(0, 0, 0, 0.1)",
            imageRendering: "pixelated",
          }}
        >
          <span className="inline-block transition-transform duration-300 hover:scale-105">
            sometimes chaos
          </span>
          <br />
          <span className="inline-block transition-transform duration-300 hover:scale-105">
            sometimes code
          </span>
        </h2>

        {/* Pixelated underline */}
        <div className="mt-6 flex justify-center">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="animate-pixel-blink h-2 w-2 bg-zinc-950 dark:bg-zinc-50"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pixel-pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.6;
          }
        }
        @keyframes pixel-blink {
          0%,
          80%,
          100% {
            opacity: 1;
          }
          40% {
            opacity: 0.3;
          }
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
