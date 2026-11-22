import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import SidebarPortfolioTemplate from "@/components/ui/sidebar-portfolio-template"
import { profile } from "@/data/profile"

// Follow the visitor's OS theme on first load; the moon/sun button flips it after.
const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarPortfolioTemplate {...profile} theme={prefersDark ? "dark" : "light"} />
  </StrictMode>,
)
