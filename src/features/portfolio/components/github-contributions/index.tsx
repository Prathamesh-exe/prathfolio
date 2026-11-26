import { Suspense } from "react"

import { getGitHubContributions } from "../../data/github-contributions"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel"
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph"

export function GitHubContributions() {
  const contributions = getGitHubContributions()

  return (
    <Panel id="contributions">
      <PanelHeader>
        <PanelTitle>Contributions</PanelTitle>
      </PanelHeader>

      <PanelContent className="px-2 py-3 sm:px-4">
        <Suspense fallback={<GitHubContributionFallback />}>
          <GitHubContributionGraph contributions={contributions} />
        </Suspense>
      </PanelContent>
    </Panel>
  )
}
