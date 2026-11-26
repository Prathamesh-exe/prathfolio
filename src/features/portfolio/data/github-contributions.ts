import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  total?: Record<string, number>
  contributions: Activity[]
}

export type GitHubContributions = {
  contributions: Activity[]
  total: number
}

const API_BASE =
  process.env.GITHUB_CONTRIBUTIONS_API_URL ||
  "https://github-contributions-api.jogruber.de"

const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000

export const getGitHubContributions = unstable_cache(
  async (): Promise<GitHubContributions> => {
    try {
      const res = await fetch(`${API_BASE}/v4/${GITHUB_USERNAME}?y=all`, {
        next: { revalidate: 86400 },
      })

      if (!res.ok) {
        return { contributions: [], total: 0 }
      }

      const data = (await res.json()) as GitHubContributionsResponse

      // All-time total: the API returns a per-year map, e.g. { "2025": 38, "2026": 89 }
      const total = Object.entries(data.total ?? {})
        .filter(([key]) => /^\d{4}$/.test(key))
        .reduce((sum, [, value]) => sum + Number(value), 0)

      // The heatmap shows the last 12 months; the total above is all time.
      const cutoff = Date.now() - ONE_YEAR_MS
      const contributions = (data.contributions ?? []).filter(
        (activity) => new Date(activity.date).getTime() >= cutoff
      )

      return { contributions, total }
    } catch {
      return { contributions: [], total: 0 }
    }
  },
  ["github-contributions", GITHUB_USERNAME],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
