---
title: "Changelog"
sidebar_position: 100
---

# Changelog

## May 2026 — v2.0 (Current)

**Safety & framing**
- Added site-wide authorization banner on every page
- Added per-page authorization disclaimer to all attack technique and walkthrough pages
- Reframed homepage: "AI-assisted orchestrator" replaces "autonomous operator"
- Reframed AD and ADCS articles: "lab-observed, approval-gated" replaces "fully autonomous / no human intervention"
- Full PT guide rewritten as "Controlled Lab Assessment Workflow" with explicit authorization gates at each phase
- Offensive prompts replaced with structured templates: objective / authorization gate / evidence / detection / remediation

**Redaction**
- AD page: lab credentials, NTLM hashes, AS-REP hashes, krbtgt hash redacted
- SMB page: raw credential list replaced with generalized description
- All `/home/andrey/` paths replaced with generic placeholders
- SSH key name generalized to `~/.ssh/<your_key>`

**Content quality**
- Defensive hardening sections added to AD and ADCS pages (event IDs, hardening checklists, tooling)
- Benchmark methodology appendix added to HackerAI comparison (versions, run count, success criteria, limitations)
- "Last tested" version banners added to all LLM integration and attack technique pages
- Password security page retitled and reframed as "Authorized Password Security Auditing"
- "AI determines optimal next steps" → "proposes next steps for operator review"

**Technical fixes**
- Repo URL fixed: `HexStrike/hexstrike-ai` → `0x4m4/hexstrike-ai`
- Quick-start corrected: `hexstrike_server` / `hexstrike_mcp` (matches Kali package)
- All Google-search placeholder links replaced with direct Medium URLs
- Password math formulas corrected: `10⁴`, `26⁵`
- MCP config argument fixed: ` - server` (Unicode dash) → `--server`
- Port 8889 in web+cloud page labeled and explained
- HexStrike AI capitalization normalized to HexStrike AI
- "Press enter or click to view image" Medium residue removed (5 instances)
- All "Promt" typos fixed (7 files)
- Tested version matrix added to installation page

**Infrastructure**
- Link-check CI job added (runs on push to main and weekly)
- About page added with author bio, social links, donate link
- Changelog added

---

## December 2025 — v1.0 (Initial)

Initial publication — complete Docusaurus site built from Medium article exports.
