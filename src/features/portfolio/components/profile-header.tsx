import { USER } from "@/features/portfolio/data/user"
import { FlipSentences } from "@/registry/components/flip-sentences"

import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-after relative flex flex-col items-center border-x border-edge px-4 pb-6">
      <div className="relative z-10 -mt-16 size-32 shrink-0 overflow-hidden rounded-full bg-background ring-4 ring-background sm:-mt-20 sm:size-40">
        <img
          className="size-full object-cover object-top select-none"
          alt={`${USER.displayName}'s avatar`}
          src={USER.avatar}
          fetchPriority="high"
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <h1 className="text-center text-3xl font-semibold tracking-tight">
          {USER.displayName}
        </h1>

        <VerifiedIcon
          className="size-4.5 text-info select-none"
          aria-label="Verified"
        />
      </div>

      <FlipSentences
        className="mt-1 font-pixel-square text-sm text-balance text-muted-foreground"
        variants={{
          initial: { y: -10, opacity: 0 },
          animate: { y: -1, opacity: 1 },
          exit: { y: 10, opacity: 0 },
        }}
      >
        {USER.flipSentences}
      </FlipSentences>
    </div>
  )
}
