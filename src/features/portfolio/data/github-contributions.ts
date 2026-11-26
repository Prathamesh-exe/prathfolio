import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"
import { GITHUB_USERNAME } from "@/config/site"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const API_BASE =
  process.env.GITHUB_CONTRIBUTIONS_API_URL ||
  "https://github-contributions-api.jogruber.de"

export const getGitHubContributions = unstable_cache(
  async (): Promise<Activity[]> => {
    try {
      const res = await fetch(`${API_BASE}/v4/${GITHUB_USERNAME}?y=last`, {
        next: { revalidate: 86400 },
      })

      if (!res.ok) {
        return []
      }

      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions ?? []
    } catch {
      return []
    }
  },
  ["github-contributions", GITHUB_USERNAME],
  { revalidate: 86400 } // Cache for 1 day (86400 seconds)
)
