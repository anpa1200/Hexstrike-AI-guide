---
title: "Full Penetration Test with HexStrike AI — Complete Guide"
sidebar_position: 1
---

# Controlled Lab Assessment Workflow with HexStrike AI

> **Authorized lab environments only.** This guide covers an AI-assisted assessment workflow for isolated, vulnerable lab targets. Each phase requires explicit scope authorization. Every exploitation step must be human-reviewed before execution.

This guide walks through a complete lab assessment using HexStrike AI as the workflow orchestrator. Each phase includes: **objective → authorization gate → prompt template → expected evidence → detection/logging value → remediation mapping.**

All techniques demonstrated here are covered in detail in the linked articles, all performed in authorized lab environments.

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

**Goal:** Build a complete picture of the target before touching the network.

### External / Passive Recon

Use Shodan and OSINT tools to enumerate internet-facing assets, open ports, exposed services, and known vulnerabilities — without sending a single packet to the target.

**Prompt (Gemini CLI):**
```
Search Shodan for all assets belonging to target.com.
List open ports, service banners, CVE matches, and geolocation.
Summarize the attack surface.
```

- Full guide: [Shodan Integration](/docs/recon-osint/shodan)
- Identity-based OSINT (email → full exposure map): [OSINT from One Email](/docs/recon-osint/email-osint)

### Network Discovery

Discover all live hosts, open ports, OS fingerprints, and running services on the target subnet.

**Prompt:**
```
Scan 192.168.1.0/24 for live hosts.
For each host found, enumerate all open ports and service versions.
Identify potential attack vectors and prioritize by risk.
```

- Full guide: [Network Discovery & Exploitation](/docs/attack-techniques/network-discovery)

---

## Phase 2 — Enumeration & Service Analysis

**Goal:** Deep-dive into discovered services to find exploitable weaknesses.

### Web Services

For every HTTP/HTTPS service found, map the full attack surface: directories, parameters, authentication mechanisms, and technology stack.

**Prompt:**
```
Target: http://192.168.1.50
Perform full web recon: directory brute force, technology fingerprinting,
authentication analysis, identify injection points and misconfigurations.
```

- Full guide: [Web Application Pentesting](/docs/attack-techniques/web-application)

### SMB Enumeration

```
Target: 192.168.1.50
Enumerate SMB shares, check for null sessions, list accessible files,
and test default credentials.
```

- Full guide: [SMB Brute-Force](/docs/attack-techniques/smb-brute-force)

### SSH Enumeration

```
Target: 192.168.1.50:22
Check SSH version, test known weak credentials,
validate key-based auth configuration.
```

- Full guide: [SSH Brute-Force](/docs/attack-techniques/ssh-brute-force)

### Wireless Networks (if in scope)

```
Monitor mode on wlan0.
Capture WPA2 handshakes from all visible networks.
Attempt cracking with rockyou.txt wordlist.
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

## Phase 3 — Exploitation (Lab)

**Objective:** Demonstrate real impact by exploiting confirmed vulnerabilities in an isolated lab VM.

> **Authorization gate:** Before this phase, confirm: written scope covers exploitation, target is an isolated lab VM, audit logging is active, and you have an operator present to review findings before escalation.

### Network Exploitation (Metasploitable lab)

**Lab prompt template:**
```
Target: 192.168.1.100 — isolated Metasploitable lab VM, authorized.
Review scan results and identify the highest-probability vulnerability.
Attempt to exploit one service. Capture proof of access:
hostname, id output, and network interfaces.
Stop and report before any further escalation.
```

**Expected evidence:** shell access proof, service banner, CVE identifier, CVSS score
**Detection log:** failed auth attempts, exploit traffic signatures, unexpected process spawn
**Remediation:** patch or disable vulnerable service, network segmentation

- Full walkthrough with Metasploitable: [OpenAI Codex Integration](/docs/llm-integrations/openai-codex)
- Full subnet lab: [Full Subnet Lab Walkthrough](/docs/full-pt-walkthroughs/full-subnet)

### Web Exploitation

**Lab prompt template:**
```
Target: http://192.168.1.50 — authorized isolated web app lab.
Using the attack surface map from Phase 2,
test for SQLi and XSS on identified input fields.
Demonstrate impact with a safe PoC (no data destruction, no persistence).
Document evidence: request, response, and reproduction steps.
```

**Expected evidence:** PoC request/response, CWE/CVE identifier, impact statement
**Detection log:** WAF alerts, error-rate spike, abnormal parameter payloads
**Remediation:** parameterized queries, output encoding, CSP headers

- Full guide: [Web Application Pentesting](/docs/attack-techniques/web-application)
- Combined web + cloud: [Web & Cloud PT](/docs/attack-techniques/web-cloud)

### Active Directory Exploitation (Lab)

**Lab prompt template:**
```
Domain: lab.local — isolated GOAD-Mini lab VM, authorized.
Using enumeration results from Phase 2,
identify the single highest-impact attack path.
Document the path with evidence before executing.
Operator approval required before each privilege escalation step.
```

> **Operator checkpoint:** Review the proposed attack path before allowing execution. Log every command and its output.

Lab walkthrough: [Black-Box AD PT Walkthrough](/docs/full-pt-walkthroughs/black-box-ad)
AD CS ESC8 lab: [ADCS ESC8](/docs/attack-techniques/adcs-esc8)

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

Once initial access is obtained, HexStrike continues the chain:

> **Authorization requirement:** Confirm written scope covers post-exploitation, credential collection, and lateral movement before this phase.

**Prompt:**
```
I have a shell on 192.168.1.50 as www-data on an authorized lab target.
Enumerate the host: running processes, sudo rights, SUID binaries,
cron jobs, readable sensitive files, network connections.
Identify privilege escalation paths and document findings.
```

HexStrike will:
1. Run `sudo -l`, `find / -perm -4000`, `cat /etc/crontab`
2. Identify the escalation vector (sudo misconfiguration, SUID binary, writable cron)
3. Document the escalation path with evidence
4. Collect proof-of-compromise artifacts for the report (hostname, id, interfaces)
5. Map credentials found to scope and note reuse risk

**Operator checkpoint:** Review escalation paths before executing. Document every command run and its output for the report evidence chain.

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

## Lab Assessment Prompt Templates

> These templates are for **isolated vulnerable VM labs only**. Always add explicit scope, authorization confirmation, and stop conditions to every prompt.

### Scoped network lab assessment (Gemini CLI):
```
Target: 192.168.1.0/24 — authorized, isolated lab network.
Authorization: confirmed in writing.
Phase: discovery and enumeration only. Do not exploit without explicit operator approval.
Goal: map all live hosts, open ports, service versions, and potential attack surface.
Stop after enumeration and report findings for operator review.
```

### Structured black-box AD lab (Cursor MCP):
```
IP: 192.168.10.5 — isolated Windows domain lab VM, authorized.
Phase 1: enumerate environment, identify domain name and DC.
Stop and report before any exploitation.
Operator will review findings and authorize next steps.
```

### Web + cloud lab (Cursor + HexStrike + Burp MCP):
```
Target: https://app.target.lab (isolated lab, AWS sandbox)
Authorized.
Map the web attack surface and cloud configuration.
Document all findings. Produce PoC only for confirmed findings in isolated lab.
No persistence, no data exfil, no lateral movement without operator approval.
```

---

## Lab Environments

Practice all techniques safely in your own lab:

- [Build a Vulnerable Ubuntu 24.04 Lab](/docs/full-pt-walkthroughs/lab-setup) — SSH, FTP, Samba, NFS, Apache, MariaDB, privesc vectors
- Vulnerable Windows lab, AD lab, Kubernetes lab, and GCP lab covered in the extended article series at [medium.com/@1200km](https://medium.com/@1200km)
