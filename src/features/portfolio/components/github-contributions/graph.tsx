"use client"

import { format } from "date-fns"
import { LoaderIcon } from "lucide-react"
import { use } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
} from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME, UTM_PARAMS } from "@/config/site"
import type { GitHubContributions } from "@/features/portfolio/data/github-contributions"
import { addQueryParams } from "@/utils/url"

export function GitHubContributionGraph({
  data,
}: {
  data: Promise<GitHubContributions>
}) {
  const { contributions, total } = use(data)

  return (
    <ContributionGraph
      className="mx-auto py-2"
      data={contributions}
      blockSize={11}
      blockMargin={3}
      blockRadius={0}
    >
      <ContributionGraphCalendar
        className="no-scrollbar px-2"
        title="GitHub Contributions"
      >
        {({ activity, dayIndex, weekIndex }) => (
          <Tooltip>
            <TooltipTrigger render={<g />}>
              <ContributionGraphBlock
                activity={activity}
                dayIndex={dayIndex}
                weekIndex={weekIndex}
              />
            </TooltipTrigger>

            <TooltipContent className="font-sans">
              <p>
                {activity.count} contribution{activity.count > 1 ? "s" : null}{" "}
                on {format(new Date(activity.date), "dd.MM.yyyy")}
              </p>
            </TooltipContent>
          </Tooltip>
        )}
      </ContributionGraphCalendar>

      <ContributionGraphFooter className="px-2">
        <div className="text-muted-foreground">
          <span className="font-medium text-foreground">
            {total.toLocaleString("en")}
          </span>{" "}
          contributions all time on{" "}
          <a
            className="font-medium underline underline-offset-4"
            href={addQueryParams(
              `https://github.com/${GITHUB_USERNAME}`,
              UTM_PARAMS
            )}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </div>

        <ContributionGraphLegend />
      </ContributionGraphFooter>
    </ContributionGraph>
  )
}

export function GitHubContributionFallback() {
  return (
    <div className="flex h-40.5 w-full items-center justify-center">
      <LoaderIcon className="animate-spin text-muted-foreground" />
    </div>
  )
}
