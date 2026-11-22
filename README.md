# Rohit Bhandari — Portfolio

Personal portfolio of Rohit Bhandari, Machine Learning Engineer building production LLM systems: knowledge-graph retrieval and RAG, LLM evaluation and guardrails, and inference optimization.

**Live site:** https://rohit-bhandari.github.io/Online-Portfolio/

Built with React, TypeScript and Vite, and deployed to GitHub Pages.

## Update the content

All text, links, experience, education, certifications and skills are in [`src/data/profile.ts`](src/data/profile.ts).

| What | Where |
|---|---|
| Profile photo | `src/assets/profile-picture.png` |
| Resume behind **Download CV** | `public/Rohit-Bhandari-Resume.pdf` |
| Favicon | `public/favicon.png` |
| Layout and styles | `src/components/ui/sidebar-portfolio-template.tsx` |

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`. In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
