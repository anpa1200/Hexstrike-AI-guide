import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const FEATURES = [
  {
    icon: '🧠',
    title: 'Autonomous Orchestrator',
    desc: 'HexStrike is not a scanner — it\'s an AI operator. It maintains context, reasons about findings, recovers from failures, and chains tools into multi-stage attack paths without human input.',
  },
  {
    icon: '🔗',
    title: '150+ Security Tools',
    desc: 'Nmap, Metasploit, Burp Suite, Hydra, SQLMap, Aircrack-ng, Hashcat, Ghidra, CrackMapExec, Shodan, theHarvester — all orchestrated by natural language prompts.',
  },
  {
    icon: '🤖',
    title: 'Multi-LLM Support',
    desc: 'Works with Gemini CLI, OpenAI Codex, Cursor (MCP), and local Ollama models. Pick the right engine for the engagement — cloud speed or air-gapped privacy.',
  },
  {
    icon: '⚡',
    title: 'Full Kill Chain Coverage',
    desc: 'Recon → Enumeration → Exploitation → Lateral Movement → Reporting. A single natural-language goal drives the entire engagement, phase by phase.',
  },
  {
    icon: '🛡️',
    title: 'Real Error Recovery',
    desc: 'When tools fail, HexStrike diagnoses the problem, adjusts the approach, and retries — exactly like a skilled human operator would.',
  },
  {
    icon: '📋',
    title: 'Structured Reporting',
    desc: 'Produces executive summaries, technical findings with CVSS scores, evidence bundles, and prioritized remediation recommendations automatically.',
  },
];

const SECTIONS = [
  {
    num: '01',
    emoji: '🚀',
    title: 'Getting Started',
    desc: 'What HexStrike is, installation on Kali Linux, and how it compares to HackerAI and other AI security tools.',
    to: '/docs/getting-started/overview',
    links: [
      { label: 'Overview', to: '/docs/getting-started/overview' },
      { label: 'Installation', to: '/docs/getting-started/installation' },
      { label: 'vs HackerAI', to: '/docs/getting-started/vs-other-tools' },
    ],
  },
  {
    num: '02',
    emoji: '🤖',
    title: 'LLM Integrations',
    desc: 'Connect HexStrike to Gemini CLI, OpenAI Codex, Cursor MCP, or local Ollama models for air-gapped labs.',
    to: '/docs/llm-integrations/overview',
    links: [
      { label: 'Gemini', to: '/docs/llm-integrations/gemini' },
      { label: 'OpenAI Codex', to: '/docs/llm-integrations/openai-codex' },
      { label: 'Cursor MCP', to: '/docs/llm-integrations/cursor-mcp' },
      { label: 'Ollama', to: '/docs/llm-integrations/ollama-local' },
    ],
  },
  {
    num: '03',
    emoji: '🔍',
    title: 'Recon & OSINT',
    desc: 'Passive intelligence with Shodan integration and email-to-full-exposure-map OSINT workflows.',
    to: '/docs/recon-osint/shodan',
    links: [
      { label: 'Shodan', to: '/docs/recon-osint/shodan' },
      { label: 'Email OSINT', to: '/docs/recon-osint/email-osint' },
    ],
  },
  {
    num: '04',
    emoji: '⚔️',
    title: 'Attack Techniques',
    desc: 'Network, web, wireless, SSH, SMB, Active Directory, ADCS ESC8, and combined web+cloud attack walkthroughs.',
    to: '/docs/attack-techniques/network-discovery',
    links: [
      { label: 'Network', to: '/docs/attack-techniques/network-discovery' },
      { label: 'Web App', to: '/docs/attack-techniques/web-application' },
      { label: 'WiFi', to: '/docs/attack-techniques/wireless-wifi' },
      { label: 'Active Directory', to: '/docs/attack-techniques/active-directory' },
      { label: 'ADCS ESC8', to: '/docs/attack-techniques/adcs-esc8' },
    ],
  },
  {
    num: '05',
    emoji: '🔑',
    title: 'Password Recovery',
    desc: 'AI-orchestrated recovery for ZIP, PDF, Office documents. Brute force, wordlists, modern cracking methods.',
    to: '/docs/password-recovery/modern-cracking',
    links: [
      { label: 'Overview', to: '/docs/password-recovery/modern-cracking' },
      { label: 'ZIP', to: '/docs/password-recovery/zip' },
      { label: 'PDF', to: '/docs/password-recovery/pdf' },
      { label: 'Office', to: '/docs/password-recovery/office-documents' },
    ],
  },
  {
    num: '06',
    emoji: '📋',
    title: 'Full PT Walkthroughs',
    desc: 'End-to-end lab engagements: full subnet compromise, black-box Active Directory, web+cloud — all AI-driven.',
    to: '/docs/full-pt-walkthroughs/full-pt-guide',
    links: [
      { label: 'Full PT Guide', to: '/docs/full-pt-walkthroughs/full-pt-guide' },
      { label: 'Lab Setup', to: '/docs/full-pt-walkthroughs/lab-setup' },
      { label: 'Full Subnet', to: '/docs/full-pt-walkthroughs/full-subnet' },
      { label: 'Black-Box AD', to: '/docs/full-pt-walkthroughs/black-box-ad' },
    ],
  },
];

const STEPS = [
  {
    n: '1',
    title: 'Write a Goal',
    desc: 'Describe your objective in plain language — "Scan this subnet and find exploitable services" or "Crack this PDF password."',
  },
  {
    n: '2',
    title: 'HexStrike Plans',
    desc: 'The LLM reasons about the goal, selects the right tools, sequences the attack chain, and handles dependencies automatically.',
  },
  {
    n: '3',
    title: 'Tools Execute',
    desc: 'HexStrike fires the tools, parses results, recovers from errors, and feeds findings back into the LLM for the next decision.',
  },
  {
    n: '4',
    title: 'Report Delivered',
    desc: 'Structured findings with evidence, CVSS scores, and remediation recommendations — ready to deliver.',
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="AI-Powered Penetration Testing Orchestrator"
      description="HexStrike AI — bridge LLMs to 150+ security tools via MCP. Autonomous penetration testing with Gemini, OpenAI, Cursor, and Ollama."
    >
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            AI-Powered · MCP Server · 150+ Tools
          </div>

          <h1 className={styles.heroTitle}>
            <span>HexStrike AI</span>
            <br />
            Penetration Testing Orchestrator
          </h1>

          <p className={styles.heroSubtitle}>
            Bridge large language models to real-world security tools via MCP.
            Write a goal in plain language — HexStrike plans, executes, recovers,
            and reports autonomously.
          </p>

          {/* Terminal */}
          <div className={styles.terminal}>
            <div className={styles.terminalBar}>
              <span className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
              <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
              <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
              <span className={styles.terminalTitle}>hexstrike — kali@lab</span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>❯ </span>
              <span className={styles.terminalCmd}>gemini --mcp hexstrike</span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalOut}>
                [MCP] HexStrike server connected · 152 tools available
              </span>
            </div>
            <div className={styles.terminalLine}>&nbsp;</div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalPrompt}>❯ </span>
              <span className={styles.terminalCmd}>
                Scan 192.168.1.0/24, find all services,
                <br />
                &nbsp;&nbsp;exploit the highest-risk vulnerabilities, get root.
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalOut}>
                [+] Discovery: 7 hosts found
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalOut}>
                [+] CVE-2021-4034 confirmed on 192.168.1.42
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalWarn}>
                [!] SSH auth failed — retrying with credential list...
              </span>
            </div>
            <div className={styles.terminalLine}>
              <span className={styles.terminalSuccess}>
                [✓] root@192.168.1.42 — shell obtained
              </span>
              <span className={styles.cursor} />
            </div>
          </div>

          {/* CTAs */}
          <div className={styles.ctaRow}>
            <Link className={styles.btnPrimary} to="/docs/full-pt-walkthroughs/full-pt-guide">
              ▶ Full PT Guide
            </Link>
            <Link className={styles.btnSecondary} to="/docs/getting-started/installation">
              📦 Installation
            </Link>
            <Link className={styles.btnSecondary} to="/docs/">
              📖 All Docs
            </Link>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {[
              { num: '150+', label: 'Security Tools' },
              { num: '21',   label: 'Guides' },
              { num: '6',    label: 'LLM Clients' },
              { num: '6',    label: 'Attack Phases' },
            ].map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY HEXSTRIKE ────────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className="container">
          <p className={styles.sectionLabel}>Why HexStrike</p>
          <h2 className={styles.sectionTitle}>Not a scanner. An operator.</h2>
          <p className={styles.sectionSubtitle}>
            Traditional tools execute one command at a time. HexStrike reasons about the
            entire engagement, adapts to failures, and drives the attack chain to completion.
          </p>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTATION SECTIONS ───────────────────────────────────── */}
      <section className={styles.sectionsArea}>
        <div className="container">
          <p className={styles.sectionLabel}>Documentation</p>
          <h2 className={styles.sectionTitle}>Everything you need</h2>
          <p className={styles.sectionSubtitle}>
            From first installation to full Active Directory compromise —
            every step covered with real lab walkthroughs.
          </p>
          <div className={styles.sectionsGrid}>
            {SECTIONS.map((s) => (
              <Link key={s.num} className={styles.sectionCard} to={s.to}>
                <div className={styles.sectionCardTop}>
                  <span className={styles.sectionCardEmoji}>{s.emoji}</span>
                  <div>
                    <div className={styles.sectionCardNum}>{s.num}</div>
                    <h3>{s.title}</h3>
                  </div>
                </div>
                <p>{s.desc}</p>
                <div className={styles.sectionCardLinks}>
                  {s.links.map((l) => (
                    <span key={l.label} className={styles.sectionCardLink}>
                      {l.label}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className={styles.howSection}>
        <div className="container">
          <p className={styles.sectionLabel}>How It Works</p>
          <h2 className={styles.sectionTitle}>Four steps, one prompt</h2>
          <p className={styles.sectionSubtitle}>
            Write your objective. HexStrike does the rest.
          </p>
          <div className={styles.steps}>
            {STEPS.map((s) => (
              <div key={s.n} className={styles.step}>
                <div className={styles.stepNum}>{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <h2>Ready to start your first AI-driven pentest?</h2>
          <p>Follow the complete guide — from installation to root shell.</p>
          <div className={styles.ctaRow}>
            <Link className={styles.btnPrimary} to="/docs/getting-started/installation">
              ▶ Get Started
            </Link>
            <Link className={styles.btnSecondary} to="/docs/full-pt-walkthroughs/full-pt-guide">
              📋 Full PT Guide
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
