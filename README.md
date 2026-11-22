# Rohit Bhandari — Portfolio

Personal portfolio site for Rohit Bhandari, Machine Learning Engineer. It's a single-page React + Vite site built on the MIT-licensed *Sidebar Portfolio Template* by Kedhareswer Naidu, and it deploys to GitHub Pages.

**Live:** https://rohit-bhandari.github.io/Online-Portfolio/

## Edit the content

All text, links, experience, education, certifications and skills are in **[`src/data/profile.ts`](src/data/profile.ts)**. You don't need to touch the component to update the site.

| What | Where |
|---|---|
| Profile photo | `src/assets/profile-picture.png` |
| Resume behind **Download CV** | `public/Rohit-Bhandari-Resume.pdf` |
| Favicon | `public/favicon.png` |
| Layout, styles and behaviour | `src/components/ui/sidebar-portfolio-template.tsx` |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Deploy to GitHub Pages

1. Push to `main`.
2. On GitHub, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it on every push to `main`. You can also run it by hand from the **Actions** tab.

All asset paths are relative (`base: "./"` in `vite.config.ts`), so the same build works at `/Online-Portfolio/` and on a custom domain.
