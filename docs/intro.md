---
title: HexStrike AI — Documentation
sidebar_position: 1
slug: /
---

# HexStrike AI

**HexStrike AI** is an AI-powered penetration testing orchestrator that acts as a Model Context Protocol (MCP) server, bridging large language models (Gemini, OpenAI, Cursor, Llama) to 150+ real-world security tools — Nmap, Metasploit, Burp Suite, Aircrack-ng, Hydra, SQLMap, and more.

Unlike a scanner or a chatbot with tools, HexStrike **maintains context across an entire engagement**, autonomously chains findings into attack paths, recovers from tool failures, and produces structured reports — all driven by natural language prompts.

---

## What's in This Guide

| Section | What You'll Learn |
|---------|-------------------|
| [Getting Started](./01-getting-started/01-overview) | What HexStrike is, installation on Kali Linux, and how it compares to other AI security tools |
| [LLM Integrations](./02-llm-integrations/01-overview) | How to connect HexStrike to Gemini CLI, OpenAI Codex, Cursor MCP, and local Ollama models |
| [Recon & OSINT](./03-recon-osint/01-shodan) | Passive intelligence with Shodan, email-to-exposure mapping via Cursor |
| [Attack Techniques](./04-attack-techniques/01-network-discovery) | Network, web, wireless, SSH, SMB, Active Directory, ADCS ESC8, and cloud attacks |
| [Password Recovery](./05-password-recovery/01-modern-cracking) | AI-orchestrated recovery for ZIP, PDF, Office, WiFi, and SSH credentials |
| [Full PT Walkthroughs](./06-full-pt-walkthroughs/01-full-pt-guide) | End-to-end lab penetration tests: single target, full subnet, black-box AD, web+cloud |

---

## Quick Start

```bash
# 1. Clone and install HexStrike
git clone https://github.com/HexStrike/hexstrike-ai
cd hexstrike-ai && pip install -r requirements.txt

# 2. Run as MCP server
python hexstrike.py --mcp

# 3. Connect Gemini CLI
gemini --mcp hexstrike
```

See the full [Installation Guide](./01-getting-started/02-installation) for all LLM clients.

---

## Author

Written by **Andrey Pautov** — security researcher, penetration tester, and AI offensive security practitioner.
All techniques are demonstrated in authorized lab environments.

- Medium: [medium.com/@1200km](https://medium.com/@1200km)
- GitHub: [github.com/anpa1200](https://github.com/anpa1200)
