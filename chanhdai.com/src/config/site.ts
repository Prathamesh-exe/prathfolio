import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://yoursite.com", // TODO: Update with your domain
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export const GITHUB_USERNAME = "prathamesh" // TODO: Update with your GitHub username
export const SOURCE_CODE_GITHUB_REPO = "prathamesh/prathfolio" // TODO: Update
export const SOURCE_CODE_GITHUB_URL = "https://github.com/prathamesh/prathfolio" // TODO: Update

export const SPONSORSHIP_URL = "https://github.com/sponsors/prathamesh" // TODO: Update or remove

export const UTM_PARAMS = {
  utm_source: "yoursite.com", // TODO: Update with your domain
}
