# Development

How to run, edit and build the portfolio locally.

## Requirements

- **Node.js 22.x** (`engines` + `.nvmrc` pin 22.20.0). Newer versions work but
  pnpm prints an `Unsupported engine` warning.
- **pnpm** (repo is pinned to `pnpm@10.23.0`; `corepack enable` will pick it up)
- Git

## First run

```bash
pnpm install        # also installs the Husky pre-commit hook
cp .env.example .env.local   # if you don't have .env.local yet
pnpm dev            # http://localhost:1408
```

`.env.local` is git-ignored and already exists on this machine. All variables are
optional for local development.

## Environment variables

| Variable                                       | Purpose                                          | Required                                     |
| ---------------------------------------------- | ------------------------------------------------ | -------------------------------------------- |
| `APP_URL`                                      | Canonical site URL (metadata, sitemap, registry) | No (defaults to `https://prathameshtech.in`) |
| `RESEND_API_KEY`                               | Sends contact-form emails via Resend             | Only for the contact form                    |
| `GITHUB_API_TOKEN`                             | Raises GitHub API rate limit for the nav widget  | No                                           |
| `GITHUB_CONTRIBUTIONS_API_URL`                 | Contributions chart endpoint                     | No                                           |
| `NEXT_PUBLIC_POSTHOG_*`                        | PostHog analytics (production only)              | No                                           |
| `NEXT_PUBLIC_OPENPANEL_CLIENT_ID`              | OpenPanel analytics                              | No                                           |
| `NEXT_PUBLIC_DMCA_URL`                         | DMCA badge URL in the footer                     | No                                           |
| `REGISTRY_NAMESPACE`, `REGISTRY_NAMESPACE_URL` | shadcn registry name and URL                     | No                                           |

## Scripts

| Command                                   | Does                                                            |
| ----------------------------------------- | --------------------------------------------------------------- |
| `pnpm dev`                                | Dev server on port **1408** (Turbopack)                         |
| `pnpm build`                              | Production build                                                |
| `pnpm start`                              | Serve the production build                                      |
| `pnpm preview`                            | Build then serve on 1408                                        |
| `pnpm lint` / `pnpm lint:fix`             | ESLint                                                          |
| `pnpm check-types`                        | `tsc --noEmit`                                                  |
| `pnpm format:check` / `pnpm format:write` | Prettier                                                        |
| `pnpm registry:build`                     | Regenerate the shadcn registry (`src/__registry__`, `public/r`) |
| `pnpm capture`                            | Screenshot helper (needs a running server at `$URL`)            |

## Common tasks

**Change your content** — edit the data files under
`src/features/portfolio/data/` and `src/config/site.ts`; see the content table
in [README.md](./README.md#where-to-edit-your-content).

**Add a blog post** — create `src/features/blog/content/my-post.mdx`:

```mdx
---
title: My post
description: Short summary for lists and SEO.
category: components
icon: theme-switcher
createdAt: 2026-01-01
updatedAt: 2026-01-01
---
```

Posts are picked up automatically by the blog loader.

**Add a component** — create it under `src/registry/`, register it in the
relevant `src/registry/**/_registry.ts` file, then run `pnpm registry:build`.
Never edit `src/__registry__/*` or `public/r/*` by hand.

**Contact form** — create an API key at [resend.com](https://resend.com/api-keys),
set `RESEND_API_KEY` in `.env.local`, and update the `from` address in
`src/app/api/contact/route.ts` once your domain is verified. Free tier: 100
emails/day. Restart the dev server after changing env vars.

## Troubleshooting

- **`pnpm dev` uses webpack** — the home page currently fails to render under
  Turbopack dev (`Element type is invalid` from a Base UI component). Production
  builds still use Turbopack and work fine. Remove `--webpack` once upstream fixes it.
- **`Unsupported engine: wanted 22.x`** — you're on a newer Node; safe to ignore,
  or switch with `nvm use` / `fnm use`.
- **Port 1408 already in use** — stop the old server:
  `Get-NetTCPConnection -LocalPort 1408 | Stop-Process -Id { $_.OwningProcess }`
  (PowerShell) or `lsof -ti:1408 | xargs kill`.
- **`Ignored build scripts: sharp, esbuild...` on install** — pnpm 10 skips
  postinstall scripts by default. Prebuilt binaries are used and `sharp` works;
  if image optimization fails, run `pnpm approve-builds` and reinstall.
- **Contact form errors** — confirm `RESEND_API_KEY` is set, the dev server was
  restarted, and the `from` domain is verified in Resend.
- **Pre-commit hook not running** — run `pnpm install` (Husky needs `.git` at the
  repo root, which it now is).

## Deployment

Vercel: import the repo, keep the root directory as the repository root
(`vercel.json` already sets build/install), set `APP_URL` plus optionally
`RESEND_API_KEY`, and deploy. Cloudflare Pages: build with `pnpm build` and point
the output at `.next`. Use Node 22 in the build environment.
