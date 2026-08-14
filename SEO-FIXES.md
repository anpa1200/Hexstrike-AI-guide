# SEO fixes

Remediation record for the HexStrike AI guide source, prepared on 2026-08-14 for publication through the repository's standard pull-request and Pages workflow.

## Issue 4 — Docusaurus metadata consistency

- Centralized the browser-title suffix in `docusaurus.config.js` with site title `1200km` and delimiter `|`. Page source titles remain unsuffixed, so built pages render `{Page Title} | 1200km` exactly once.
- Set `og:site_name` to `1200km — Andrey Pautov Security Research` and replaced the square logo default card with an existing HexStrike editorial cover.
- Added page-specific `twitter:title` and `twitter:description` output for the custom homepage and every documentation route, using the same formatter and description as the standard and Open Graph metadata.
- The documentation metadata override emits `og:type: article`, Git-backed `article:modified_time`, and `article:published_time` only when valid publication-date frontmatter exists.
- Normalized invisible thin spaces in the overview title so the emitted Open Graph title exactly matches the browser title.
- Enabled Git-backed last-update display for documentation pages.
- Added a dedicated, unique 140–160 character value description to every Markdown document. None contains its page title verbatim, a double period, or a truncated ending.

Files:

- `docusaurus.config.js`
- `src/pages/index.js`
- `src/theme/DocItem/Metadata/index.js`
- `docs/intro.md`
- `docs/about.md`
- `docs/changelog.md`
- `docs/01-getting-started/01-overview.md`
- `docs/01-getting-started/02-installation.md`
- `docs/01-getting-started/03-vs-other-tools.md`
- `docs/02-llm-integrations/01-overview.md`
- `docs/02-llm-integrations/02-gemini.md`
- `docs/02-llm-integrations/03-openai-codex.md`
- `docs/02-llm-integrations/04-cursor-mcp.md`
- `docs/02-llm-integrations/05-ollama-local.md`
- `docs/03-recon-osint/01-shodan.md`
- `docs/03-recon-osint/02-email-osint.md`
- `docs/04-attack-techniques/01-network-discovery.md`
- `docs/04-attack-techniques/02-web-application.md`
- `docs/04-attack-techniques/03-wireless-wifi.md`
- `docs/04-attack-techniques/04-ssh-brute-force.md`
- `docs/04-attack-techniques/05-smb-brute-force.md`
- `docs/04-attack-techniques/06-active-directory.md`
- `docs/04-attack-techniques/07-adcs-esc8.md`
- `docs/04-attack-techniques/08-web-cloud.md`
- `docs/05-password-recovery/01-modern-cracking.md`
- `docs/05-password-recovery/02-zip.md`
- `docs/05-password-recovery/03-pdf.md`
- `docs/05-password-recovery/04-office-documents.md`
- `docs/06-full-pt-walkthroughs/01-full-pt-guide.md`
- `docs/06-full-pt-walkthroughs/02-lab-setup.md`
- `docs/06-full-pt-walkthroughs/03-full-subnet.md`
- `docs/06-full-pt-walkthroughs/04-black-box-ad.md`

## Issue 7 — HexStrike repository identity

- Labeled `github.com/0x4m4/hexstrike-ai` as `HexStrike AI (upstream project)` wherever it appears as a reader-facing link.
- Labeled the navigation link to this guide repository as `Guide source (site owner's repo)` so it cannot be mistaken for the upstream product repository.

Files:

- `docusaurus.config.js`
- `docs/intro.md`
- `docs/01-getting-started/02-installation.md`
- `docs/02-llm-integrations/02-gemini.md`
- `docs/02-llm-integrations/05-ollama-local.md`

## Issue 8 — Accurate sitemap dates

- Enabled Docusaurus sitemap `lastmod: date` and retained the framework's Git-derived dates for all documentation routes.
- Added a fail-closed Git-history lookup for the custom homepage. It emits a root `<lastmod>` only when Git returns a valid ISO date; it never substitutes the build date.
- Configured both CI checkouts to fetch complete history so production and link-check builds can calculate accurate dates.

Files:

- `docusaurus.config.js`
- `.github/workflows/deploy.yml`
- `.github/workflows/link-check.yml`

## Issue 9 — Breadcrumb structured data

- Added one valid `BreadcrumbList` JSON-LD block to the custom guide homepage, linking the 1200km root to the canonical HexStrike guide root.
- Confirmed Docusaurus emits one valid `BreadcrumbList` for each documentation route.

Files:

- `src/pages/index.js`

## Validation

- `npm run build` — passed with the production Docusaurus build.
- Built sitemap — 30 canonical URLs and 30 `<lastmod>` values.
- Shared built metadata audit (`/tmp/audit-docusaurus-seo.mjs`) — fully green across 30 routes: titles and `og:title`/`twitter:title` match; descriptions are unique, 140–160 characters, and match both Open Graph and Twitter; canonicals and `og:site_name` are exact; every route has one valid breadcrumb block.
- All 29 documentation routes expose Git-backed `article:modified_time`; explicit publication metadata is emitted only where source frontmatter supplies a valid date.
- Default social image — resolves to the existing HexStrike editorial cover in `static/img/hexstrike-articles/`.
- Source description audit — all 29 Markdown documents pass length, uniqueness, title-repetition, double-period, and truncation checks.
- `node --check docusaurus.config.js` — passed.
- `git diff --check` — passed.
- Temporary `node_modules` validation symlink — removed after the final build and audit.

## Release handoff

- Review the selected default social cover in an actual link-preview tool after deployment.
- Commit and merge the prepared source changes, then verify the resulting Docusaurus Pages deployment.
- After deployment, verify the live sitemap has 30/30 dates and resubmit the parent sitemap in Google Search Console and Bing Webmaster Tools.

## Audit-file inventory

- `SEO-FIXES.md`
