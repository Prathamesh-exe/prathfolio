import Image from "next/image"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"

import { TECH_STACK } from "../data/tech-stack"
import type { TechStack as Tech } from "../types/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

const MIDDLE = Math.ceil(TECH_STACK.length / 2)
const ROWS = [TECH_STACK.slice(0, MIDDLE), TECH_STACK.slice(MIDDLE)]

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-4 py-5">
        {ROWS.map((row, rowIndex) => (
          <Marquee key={rowIndex}>
            <MarqueeFade side="left" className="w-10 sm:w-16" />
            <MarqueeFade side="right" className="w-10 sm:w-16" />

            <MarqueeContent
              direction={rowIndex === 0 ? "left" : "right"}
              speed={26}
              gradient={false}
              pauseOnHover={false}
            >
              {row.map((tech) => (
                <MarqueeItem key={tech.key} className="mx-0 px-3">
                  <TechIcon tech={tech} />
                </MarqueeItem>
              ))}
            </MarqueeContent>
          </Marquee>
        ))}
      </PanelContent>
    </Panel>
  )
}

function TechIcon({ tech }: { tech: Tech }) {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <a
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={tech.title}
          />
        }
      >
        {tech.theme ? (
          <>
            <Image
              src={`/tech-stack-icons/${tech.key}-light.svg`}
              alt={`${tech.title} light icon`}
              width={40}
              height={40}
              className="hidden [html.light_&]:block"
              unoptimized
            />
            <Image
              src={`/tech-stack-icons/${tech.key}-dark.svg`}
              alt={`${tech.title} dark icon`}
              width={40}
              height={40}
              className="hidden [html.dark_&]:block"
              unoptimized
            />
          </>
        ) : (
          <Image
            src={`/tech-stack-icons/${tech.key}.svg`}
            alt={`${tech.title} icon`}
            width={40}
            height={40}
            unoptimized
          />
        )}
      </TooltipTrigger>

      <TooltipContent>
        <p>{tech.title}</p>
      </TooltipContent>
    </Tooltip>
  )
}
