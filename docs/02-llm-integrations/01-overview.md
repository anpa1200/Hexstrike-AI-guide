---
title: LLM Integrations Overview
sidebar_position: 1
---

# Connecting LLMs to HexStrike

HexStrike acts as an **MCP (Model Context Protocol) server** — any LLM client that speaks MCP can drive it. Each integration has different strengths depending on your workflow, hardware, and the type of engagement.

## Supported Clients

| Client | Best For | Cost |
|--------|----------|------|
| [Gemini CLI](./gemini) | Fast recon, one-liner prompts, API-based | Free tier available |
| [OpenAI Codex](./openai-codex) | Deep exploitation, structured reasoning | Paid |
| [Cursor (MCP)](./cursor-mcp) | Full engagement orchestration, OSINT, AD attacks | Paid |
| [Ollama (Local)](./ollama-local) | Air-gapped labs, privacy-sensitive engagements | Free (CPU/GPU) |

## How MCP Works with HexStrike

```
Your Prompt
    │
    ▼
LLM Client (Gemini / Cursor / OpenAI)
    │  MCP protocol
    ▼
HexStrike MCP Server
    │  executes
    ▼
Security Tools (Nmap, Metasploit, Burp, Hydra...)
    │
    ▼
Results + AI Analysis → Next Action
```

The LLM never executes tools directly — it sends structured requests to HexStrike, which handles tool execution, error recovery, and result parsing before sending the output back to the LLM for the next reasoning step.

## Choosing an LLM

- **For quick recon**: Gemini CLI is fast and handles multi-step discovery well
- **For complex exploitation**: OpenAI Codex and Cursor have stronger multi-hop reasoning
- **For air-gapped environments**: Ollama with Qwen3 14B gives the best local performance
- **For full engagements (recon → report)**: Cursor with MCP is the most complete workflow
