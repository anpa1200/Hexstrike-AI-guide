---
title: "Controlled Lab Assessment Workflow with HexStrike AI"
sidebar_position: 1
---

:::info Last tested
Kali Linux 2025.4 · HexStrike AI (Kali package 2025.4 repo) · May 2026. Results may vary on other versions.
:::

# Controlled Lab Assessment Workflow with HexStrike AI

This guide walks through a controlled, end-to-end lab assessment using HexStrike AI as an orchestration layer for approved tool execution, troubleshooting, evidence collection, and reporting. Each phase should be scoped, reviewed, and documented before moving to the next step.

All techniques demonstrated here are covered in detail in the linked articles, all performed in authorized lab environments.

---

## Known Limitations

:::caution
This workflow is a documentation template for authorized labs and scoped engagements. It does not guarantee exploitation success, autonomous reliability, or production suitability. Tool output, credentials, network policy, endpoint controls, and operator approvals determine what can be validated.
:::

---

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Kali Linux 2025+ | HexStrike runs best on Kali with full toolset installed |
| HexStrike AI installed | See [Installation Guide](/docs/getting-started/installation) |
| LLM client connected | Gemini CLI, Cursor, or OpenAI Codex — see [LLM Integrations](/docs/llm-integrations/overview) |
| Authorized target | Lab VM, vulnerable box, or scoped engagement |

---

## Phase 1 — Reconnaissance & OSINT

**Authorization gate:** confirm scope, allowed sources, timing, and evidence-handling rules before collection.

**Goal:** Build a complete picture of the target before touching the network.

### External / Passive Recon

Use Shodan and OSINT tools to enumerate internet-facing assets, open ports, exposed services, and known vulnerabilities — without sending a single packet to the target.

**Prompt (Gemini CLI):**
```
Authorized lab assessment for target.com.
Search approved OSINT sources for in-scope assets.
List open ports, service banners, CVE matches, and geolocation.
Summarize the attack surface.
```

- Full guide: [Shodan Integration](/docs/recon-osint/shodan)
- Identity-based OSINT (email → full exposure map): [OSINT from One Email](/docs/recon-osint/email-osint)

### Network Discovery

Discover all live hosts, open ports, OS fingerprints, and running services on the target subnet.

**Prompt:**
```
Authorized lab assessment.
Scan 192.168.1.0/24 for live hosts.
For each host found, enumerate all open ports and service versions.
Identify potential attack vectors and prioritize by risk.
```

- Full guide: [Network Discovery & Exploitation](/docs/attack-techniques/network-discovery)

---

## Phase 2 — Enumeration & Service Analysis

**Goal:** Deep-dive into discovered services to find exploitable weaknesses.

**Authorization gate:** confirm active probing is allowed for each host and service before enumeration.

### Web Services

For every HTTP/HTTPS service found, map the full attack surface: directories, parameters, authentication mechanisms, and technology stack.

**Prompt:**
```
Target: http://192.168.1.50
Perform approved web recon: directory discovery, technology fingerprinting,
authentication analysis, and misconfiguration review.
Collect evidence and flag any high-impact tests for operator approval.
```

- Full guide: [Web Application Pentesting](/docs/attack-techniques/web-application)

### SMB Enumeration

```
Target: 192.168.1.50
Enumerate SMB shares, check for null sessions, list accessible files,
and document authentication posture using only approved test accounts.
```

- Full guide: [SMB Brute-Force](/docs/attack-techniques/smb-brute-force)

### SSH Enumeration

```
Target: 192.168.1.50:22
Check SSH version, review approved authentication checks,
validate key-based auth configuration.
```

- Full guide: [SSH Brute-Force](/docs/attack-techniques/ssh-brute-force)

### Wireless Networks (if in scope)

```
Monitor mode on wlan0.
List visible in-scope lab networks.
Capture WPA2 handshakes only for approved SSIDs and document evidence.
```

- Full guide: [Wireless / WiFi Cracking](/docs/attack-techniques/wireless-wifi)

### Active Directory (if in scope)

```
Starting from IP 192.168.1.10 — assumed Domain Controller.
Enumerate domain: users, groups, SPNs, ACLs, GPOs, trust relationships.
Identify Kerberoastable accounts and privilege escalation paths.
```

- Full guide: [Active Directory PT](/docs/attack-techniques/active-directory)
- ESC8 certificate attack: [ADCS ESC8](/docs/attack-techniques/adcs-esc8)

---

## Phase 3 — Exploitation

**Goal:** Validate confirmed findings in a controlled way and demonstrate impact with the least intrusive proof.

**Authorization gate:** obtain explicit approval for each exploit attempt, payload, credential test, or lateral movement step.

### Network Exploitation (Metasploitable lab)

**Prompt (OpenAI Codex or Cursor):**
```
You have scan results for 192.168.1.100.
Identify the highest-risk confirmed findings.
For each proposed validation step, explain impact, prerequisites, and rollback.
Wait for approval before execution and capture minimal proof.
```

- Full walkthrough with Metasploitable: [OpenAI Codex Integration](/docs/llm-integrations/openai-codex)
- Full subnet compromise: [Full Subnet Compromise](/docs/full-pt-walkthroughs/full-subnet)

### Web Exploitation

```
Using the attack surface map from Phase 2,
propose validation steps for the highest-severity findings.
Test for SQLi, XSS, CSRF, auth bypass, and IDOR.
Demonstrate impact with safe PoC evidence for each confirmed vulnerability.
```

- Full guide: [Web Application Pentesting](/docs/attack-techniques/web-application)
- Combined web + cloud: [Web & Cloud PT](/docs/attack-techniques/web-cloud)

### Active Directory Exploitation

```
Domain: lab.local
Use enumeration results to propose the highest-impact AD validation path.
Document prerequisites, expected evidence, and required approvals.
```

Black-box AD lab walkthrough: [Black-Box AD PT Walkthrough](/docs/full-pt-walkthroughs/black-box-ad)

ESC8 lab validation:
```
Assess ADCS ESC8 exposure in lab.local.
Start from enumeration, identify vulnerable templates,
and propose safe validation steps with evidence and remediation.
```
Guide: [ADCS ESC8](/docs/attack-techniques/adcs-esc8)

---

## Phase 4 — Password Recovery (Offline)

For encrypted files found during the engagement:

| File Type | Prompt Example |
|-----------|----------------|
| ZIP | `Recover the password for report.zip using wordlist attack` |
| PDF | `Unlock this password-protected PDF. Try default and common passwords first.` |
| Office | `Recover access to credentials.docx` |
| WiFi | `Crack the captured WPA2 handshake for SSID CorpNet` |

- [Modern Password Cracking Overview](/docs/password-recovery/modern-cracking)
- [ZIP Recovery](/docs/password-recovery/zip)
- [PDF Recovery](/docs/password-recovery/pdf)
- [Office Documents Recovery](/docs/password-recovery/office-documents)

---

## Phase 5 — Post-Exploitation & Lateral Movement

If initial access is obtained in an authorized lab, keep post-exploitation bounded to the approved objective:

**Authorization gate:** confirm host-level scope, allowed evidence, credential-handling rules, and explicit stop conditions.

**Prompt:**
```
I have a shell on 192.168.1.50 as www-data.
Enumerate the host: running processes, sudo rights, SUID binaries,
cron jobs, readable sensitive files, network connections.
Identify privilege escalation risk and collect minimal evidence.
Do not dump credentials or pivot unless separately approved.
```

HexStrike can assist with:
1. Run `sudo -l`, `find / -perm -4000`, `cat /etc/crontab`
2. Identify the escalation vector (kernel exploit, sudo misconfiguration, SUID binary)
3. Propose validation steps and rollback notes
4. Capture minimal proof for the report
5. Document remediation and detection opportunities

---

## Phase 6 — Reporting

**Prompt:**
```
Based on the full engagement against 192.168.1.0/24:
Generate a penetration test report including:
- Executive summary
- Scope and methodology
- All findings with CVSS scores
- Evidence (screenshots, tool output)
- Remediation recommendations ordered by priority
```

---

## Full Engagement Example Prompts

### Scoped network assessment template (Gemini CLI):
```
Target network: 192.168.1.0/24
Authorized penetration test.
Goal: discover hosts, enumerate services, prioritize findings, and document evidence.
Propose any exploit validation or privilege escalation step for explicit approval
before execution, then produce a final report.
```

### Black-box AD lab assessment template (Cursor MCP):
```
IP: 192.168.10.5 — believed to be a Windows domain environment.
Authorized engagement.
Enumerate the environment, identify the domain, find attack paths,
and propose validation steps with evidence and remediation guidance.
```

### Web + cloud assessment template (Cursor + HexStrike + Burp MCP):
```
Target: https://app.target.lab (AWS-hosted)
Authorized.
Map the web attack surface and cloud configuration.
Find and safely validate vulnerabilities across both layers.
Produce actionable findings with PoCs.
```

---

## Lab Environments

Practice all techniques safely in your own lab:

- [Build a Vulnerable Ubuntu 24.04 Lab](/docs/full-pt-walkthroughs/lab-setup) — SSH, FTP, Samba, NFS, Apache, MariaDB, privesc vectors
- Vulnerable Windows lab, AD lab, Kubernetes lab, and GCP lab covered in the extended article series at [medium.com/@1200km](https://medium.com/@1200km)
