# prathfolio

Personal portfolio of **Prathamesh Medage** — Full Stack Developer / AI Engineer.
Live at [prathameshtech.in](https://prathameshtech.in).

A minimal, terminal-inspired portfolio built on Next.js 16 (App Router): profile,
experience, projects, awards, certifications, tech stack, testimonials, contact
form, plus a small MDX blog and a shadcn component registry.

## Tech stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4, shadcn/ui + Base UI primitives, `motion`
- **Content:** MDX (`next-mdx-remote`), custom blog loader
- **Email:** Resend (contact form API route)
- **Tooling:** pnpm 10, ESLint, Prettier, Husky + lint-staged, shadcn registry

## Project structure

```
src/
├── app/                      routes (App Router)
│   ├── (app)/(root)/         home page (portfolio)
│   ├── (app)/contact/        contact page
│   ├── (app)/(docs)/         blog, components, sponsors, testimonials
│   ├── (llms)/               llms.txt / markdown endpoints for agents
│   ├── api/contact/          contact form handler (Resend)
│   └── og/, vcard/           OG image and vCard generators
├── features/
│   ├── portfolio/            portfolio sections + your data
│   └── blog/                 blog UI, content (MDX) and loader
├── components/               shared UI components
├── registry/                 shadcn registry definitions
├── __registry__/             generated registry output (do not edit)
├── config/                   site + registry configuration
├── hooks/, lib/, utils/      shared helpers
└── styles/                   global CSS and Tailwind theme
public/                       images, icons, generated registry JSON
```

## Where to edit your content

| What                                        | File                                                          |
| ------------------------------------------- | ------------------------------------------------------------- |
| Name, bio, email, avatar, timezone          | `src/features/portfolio/data/user.ts`                         |
| Site URL, nav, GitHub username, sponsorship | `src/config/site.ts`                                          |
| Work experience                             | `src/features/portfolio/data/experiences.ts`                  |
| Projects                                    | `src/features/portfolio/data/projects.ts`                     |
| Tech stack                                  | `src/features/portfolio/data/tech-stack.ts`                   |
| Awards / certifications                     | `src/features/portfolio/data/awards.ts`, `certifications.ts`  |
| Social links                                | `src/features/portfolio/data/social-links.ts`                 |
| Testimonials / bookmarks                    | `src/features/portfolio/data/testimonials.ts`, `bookmarks.ts` |
| Blog posts                                  | `src/features/blog/content/*.mdx`                             |
| Profile photo / OG image                    | `public/profile.png`, `public/og-image.png`                   |

## Routes

| Route                               | Purpose                                     |
| ----------------------------------- | ------------------------------------------- |
| `/`                                 | Portfolio home                              |
| `/contact`                          | Contact page (form posts to `/api/contact`) |
| `/blog`, `/blog/[slug]`             | MDX blog + RSS at `/blog/rss`               |
| `/components`, `/components/[slug]` | Component registry showcase                 |
| `/sponsors`, `/testimonials`        | Supporters and testimonials                 |
| `/llms.txt`, `/*.md`                | Plain-text/markdown output for LLM agents   |
| `/vcard`, `/rss`                    | vCard download, legacy RSS redirect         |

## Deployment

The app lives at the repository root, so Vercel needs no Root Directory override:

1. Import the repo on [Vercel](https://vercel.com/new).
2. Framework: **Next.js** (auto-detected). Build `pnpm build`, install `pnpm install`.
3. Set `APP_URL` to the production URL (e.g. `https://prathameshtech.in`).
4. Optional: `RESEND_API_KEY` for the contact form, analytics keys if used.

`vercel.json` already contains the build/install settings. For Cloudflare Pages,
run `pnpm build` and serve `.next`.

## Known placeholder assets

The template ships with remote branding assets that are still referenced:

- Social/tool icons load from `assets.chanhdai.com` (remote URLs in data files).
- `public/profile.png` is the current placeholder photo.
- `public/og-image.png` is referenced in metadata and should be created (1200×630).
- The header logo and brand menu components still carry the template author's branding.

Replace these with your own assets when you get a chance. Everything else is yours.

## License & attribution

MIT. Based on [ncdai/chanhdai.com](https://github.com/ncdai/chanhdai.com); the
original copyright notice is preserved in `LICENSE`.

See [DEVELOPMENT.md](./DEVELOPMENT.md) for setup, scripts and troubleshooting.
