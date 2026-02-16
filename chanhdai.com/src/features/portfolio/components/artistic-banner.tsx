"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ArtisticBanner() {
  const greetings = ["Hello!", "नमस्कार!", "नमस्ते!", "Hallo!", "¡Hola!", "Bonjour!", "こんにちは!"]
  const [currentGreeting, setCurrentGreeting] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [greetings.length])

  return (
    <div
      className={cn(
        "aspect-2/1 border-x border-edge select-none sm:aspect-3/1 relative overflow-hidden",
        "flex items-center justify-center",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"
      )}
    >
      {/* Floating monochrome orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-64 h-64 rounded-full opacity-5 blur-3xl bg-zinc-950 dark:bg-zinc-50 animate-float"
          style={{
            top: "20%",
            left: "15%",
            animationDelay: "0s",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full opacity-5 blur-3xl bg-zinc-950 dark:bg-zinc-50 animate-float"
          style={{
            bottom: "25%",
            right: "20%",
            animationDelay: "2s",
            animationDuration: "10s",
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full opacity-5 blur-3xl bg-zinc-950 dark:bg-zinc-50 animate-float"
          style={{
            top: "40%",
            right: "10%",
            animationDelay: "4s",
            animationDuration: "12s",
          }}
        />
      </div>

      {/* Main greeting text */}
      <div className="relative z-10">
        <h2
          className="px-4 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-zinc-950 dark:text-zinc-50 transition-all duration-1000 ease-in-out"
        >
          {greetings[currentGreeting]}
        </h2>
        
        {/* Subtle accent line */}
        <div className="mt-4 flex justify-center gap-1">
          {greetings.map((_, index) => (
            <div
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-500",
                index === currentGreeting
                  ? "w-8 bg-zinc-950 dark:bg-zinc-50"
                  : "w-1 bg-zinc-300 dark:bg-zinc-700"
              )}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
      `}</style>
    </div>
  )
}
