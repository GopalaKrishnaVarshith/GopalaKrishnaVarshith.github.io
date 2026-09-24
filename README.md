# Krishna Varshith R — Portfolio

A tailored Next.js portfolio built from create-neo-portfolio (https://github.com/deepakmodidev/create-neo-portfolio), under its MIT license.

The content combines Krishna's September 2026 resume with his [LinkedIn profile](https://www.linkedin.com/in/varshithrgk/) as reviewed on September 23, 2026. The capability and delivery sections synthesize documented work in business analysis, regulatory quality, workflow automation, digital product delivery, and responsible AI. They are positioning statements, not new credentials. The [five-question guide](https://www.linkedin.com/feed/update/urn:li:activity:7488556613524439041/) appears in the site's How I Work section and was listed in LinkedIn's Featured section.

Krishna supplied the portrait in public/krishna-varshith-portrait.png. The site displays it as a small CSS crop in the hero identity card with subtle motion that is disabled when the visitor requests reduced motion.

The dedicated skill section groups demonstrated strengths into workflow analysis, regulatory quality, automation engineering, and responsible AI. The experience section includes role-level highlights from the resume and LinkedIn profile, including the short-term CraftMyStory.com venture listed on LinkedIn.

Amgen case studies use descriptive public-facing titles and summarize the type of work. Internal product names, acronyms, detailed implementation specifics, and internal figures are intentionally excluded from the site.

## Employer marks and published work

The small employer marks were captured from the corresponding company pages shown in Krishna's LinkedIn experience section on September 23, 2026: [Amgen India](https://www.linkedin.com/company/105733358/), [Pfizer](https://www.linkedin.com/company/1185/), [ICON plc](https://www.linkedin.com/company/5831/), [IQVIA](https://www.linkedin.com/company/4057/), [CliMed Research Solutions](https://www.linkedin.com/company/82531505/), and [Practo](https://www.linkedin.com/company/2390063/). They are kept as local assets in public/companies. CraftMyStory.com and Baycuro remain text-only because a reliable mark was not verified.

The published-work card links to the [publisher listing for *Pharmacovigilance Made Easy*](https://notionpress.com/in/read/pharmacovigilance-made-easy) and uses the cover image shown there, stored locally as public/pharmacovigilance-made-easy-cover.webp. Employer marks identify past roles; they do not imply endorsement. Review trademark permissions before public release. [Pfizer's public FAQ](https://www.pfizer.com/contact/faqs) specifically asks for written permission to use its name or logo.

## Run locally

From the portfolio folder:

    npm ci
    npm run dev

Open http://localhost:3000. To verify a production build:

    npm run build
    npm run lint

## Before publishing

- Set NEXT_PUBLIC_SITE_URL to the final public URL (for example, https://your-domain.example) before deployment. Until it is set, robots.txt disallows crawling and page metadata requests no indexing; this prevents a preview from advertising localhost as its canonical URL.
- Review internal case-study wording before public release.
- The site intentionally uses no internal screenshots, source code, fake testimonials, contact form, or unverified social accounts.
- Contact links point to the email address from the resume and the verified LinkedIn profile.
- The site includes a custom social preview image and a reduced-motion variant for the portrait.

Edit content in src/app/constants/data.ts and src/app/constants/projects.ts. Layout and styling are in src/app/page.tsx and src/app/globals.css.

## GitHub Pages deployment

This repository is configured as the user site `GopalaKrishnaVarshith.github.io`.
Every push to `main` runs `.github/workflows/deploy-pages.yml`, exports the
Next.js application as static files, and deploys the `out` directory through
GitHub Pages.

Production URL: https://gopalakrishnavarshith.github.io/
