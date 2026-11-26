import { USER } from "@/features/portfolio/data/user"
import type { NavItem } from "@/types/nav"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://prathameshtech.in",
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

export const GITHUB_USERNAME = "Prathamesh-exe"
export const SOURCE_CODE_GITHUB_REPO = "Prathamesh-exe/prathfolio"
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/Prathamesh-exe/prathfolio"

export const SPONSORSHIP_URL = "https://github.com/sponsors/Prathamesh-exe"

export const UTM_PARAMS = {
  utm_source: "prathameshtech.in",
}
