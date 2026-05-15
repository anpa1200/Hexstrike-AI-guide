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
| [Getting Started](/docs/getting-started/overview) | What HexStrike is, installation on Kali Linux, and how it compares to other AI security tools |
| [LLM Integrations](/docs/llm-integrations/overview) | How to connect HexStrike to Gemini CLI, OpenAI Codex, Cursor MCP, and local Ollama models |
| [Recon & OSINT](/docs/recon-osint/shodan) | Passive intelligence with Shodan, email-to-exposure mapping via Cursor |
| [Attack Techniques](/docs/attack-techniques/network-discovery) | Network, web, wireless, SSH, SMB, Active Directory, ADCS ESC8, and cloud attacks |
| [Password Recovery](/docs/password-recovery/modern-cracking) | AI-orchestrated recovery for ZIP, PDF, Office, WiFi, and SSH credentials |
| [Full PT Walkthroughs](/docs/full-pt-walkthroughs/full-pt-guide) | End-to-end lab penetration tests: single target, full subnet, black-box AD, web+cloud |

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

See the full [Installation Guide](/docs/getting-started/installation) for all LLM clients.

---

## About the Author

Written by **Andrey Pautov** — security researcher, penetration tester, and AI offensive security practitioner.

Focused on **offensive security, AI security, real-world attack simulations, CTI, and detection engineering**.
All techniques are demonstrated in authorized lab environments.

| | |
|--|--|
| Medium | [medium.com/@1200km](https://medium.com/@1200km) |
| LinkedIn | [linkedin.com/in/andrey-pautov](https://linkedin.com/in/andrey-pautov) |
| GitHub | [github.com/anpa1200](https://github.com/anpa1200) |
| Contact | [1200km@gmail.com](mailto:1200km@gmail.com) |

If this research is useful to you — **[buy me a coffee ☕](https://paypal.me/anpa1200)** to keep the lab running.

→ [Full author page & support](/docs/about)
