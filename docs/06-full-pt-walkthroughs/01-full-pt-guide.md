---
title: "Full Penetration Test with HexStrike AI — Complete Guide"
sidebar_position: 1
---

# Full Penetration Test with HexStrike AI

This guide walks through a complete, end-to-end penetration test using HexStrike AI as the execution orchestrator. Every phase is AI-driven — you write goals in natural language, HexStrike plans and executes the tool chain, recovers from failures, and chains findings into attack paths autonomously.

All techniques demonstrated here are covered in detail in the linked articles, all performed in authorized lab environments.

---

## Prerequisites

| Requirement | Details |
|-------------|---------|
| Kali Linux 2025+ | HexStrike runs best on Kali with full toolset installed |
| HexStrike AI installed | See [Installation Guide](../01-getting-started/02-installation) |
| LLM client connected | Gemini CLI, Cursor, or OpenAI Codex — see [LLM Integrations](../02-llm-integrations/01-overview) |
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

- Full guide: [Shodan Integration](../03-recon-osint/01-shodan)
- Identity-based OSINT (email → full exposure map): [OSINT from One Email](../03-recon-osint/02-email-osint)

### Network Discovery

Discover all live hosts, open ports, OS fingerprints, and running services on the target subnet.

**Prompt:**
```
Scan 192.168.1.0/24 for live hosts.
For each host found, enumerate all open ports and service versions.
Identify potential attack vectors and prioritize by risk.
```

- Full guide: [Network Discovery & Exploitation](../04-attack-techniques/01-network-discovery)

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

- Full guide: [Web Application Pentesting](../04-attack-techniques/02-web-application)

### SMB Enumeration

```
Target: 192.168.1.50
Enumerate SMB shares, check for null sessions, list accessible files,
and test default credentials.
```

- Full guide: [SMB Brute-Force](../04-attack-techniques/05-smb-brute-force)

### SSH Enumeration

```
Target: 192.168.1.50:22
Check SSH version, test known weak credentials,
validate key-based auth configuration.
```

- Full guide: [SSH Brute-Force](../04-attack-techniques/04-ssh-brute-force)

### Wireless Networks (if in scope)

```
Monitor mode on wlan0.
Capture WPA2 handshakes from all visible networks.
Attempt cracking with rockyou.txt wordlist.
```

- Full guide: [Wireless / WiFi Cracking](../04-attack-techniques/03-wireless-wifi)

### Active Directory (if in scope)

```
Starting from IP 192.168.1.10 — assumed Domain Controller.
Enumerate domain: users, groups, SPNs, ACLs, GPOs, trust relationships.
Identify Kerberoastable accounts and privilege escalation paths.
```

- Full guide: [Active Directory PT](../04-attack-techniques/06-active-directory)
- ESC8 certificate attack: [ADCS ESC8](../04-attack-techniques/07-adcs-esc8)

---

## Phase 3 — Exploitation

**Goal:** Gain initial access and demonstrate real impact.

### Network Exploitation (Metasploitable lab)

**Prompt (OpenAI Codex or Cursor):**
```
You have scan results for 192.168.1.100.
Select the highest-probability exploits for each open service.
Attempt exploitation in sequence. For each success, capture proof
(hostname, whoami, network interfaces). Continue until root is obtained.
```

- Full walkthrough with Metasploitable: [OpenAI Codex Integration](../02-llm-integrations/03-openai-codex)
- Full subnet compromise: [Full Subnet Compromise](./03-full-subnet)

### Web Exploitation

```
Using the attack surface map from Phase 2,
exploit the highest-severity findings.
Test for SQLi, XSS, CSRF, auth bypass, and IDOR.
Demonstrate impact with PoC for each confirmed vulnerability.
```

- Full guide: [Web Application Pentesting](../04-attack-techniques/02-web-application)
- Combined web + cloud: [Web & Cloud PT](../04-attack-techniques/08-web-cloud)

### Active Directory Exploitation

```
Domain: lab.local
Use enumeration results to exploit the attack path with highest impact.
Goal: Domain Admin. Document every step.
```

Full autonomous black-box walkthrough: [Black-Box AD PT Walkthrough](./04-black-box-ad)

ESC8 single-prompt domain compromise:
```
Perform a complete ADCS ESC8 attack against lab.local.
Start from enumeration, identify vulnerable templates,
request and abuse the certificate, obtain DA.
```
Guide: [ADCS ESC8](../04-attack-techniques/07-adcs-esc8)

---

## Phase 4 — Password Recovery (Offline)

For encrypted files found during the engagement:

| File Type | Prompt Example |
|-----------|----------------|
| ZIP | `Recover the password for report.zip using wordlist attack` |
| PDF | `Unlock this password-protected PDF. Try default and common passwords first.` |
| Office | `Recover access to credentials.docx` |
| WiFi | `Crack the captured WPA2 handshake for SSID CorpNet` |

- [Modern Password Cracking Overview](../05-password-recovery/01-modern-cracking)
- [ZIP Recovery](../05-password-recovery/02-zip)
- [PDF Recovery](../05-password-recovery/03-pdf)
- [Office Documents Recovery](../05-password-recovery/04-office-documents)

---

## Phase 5 — Post-Exploitation & Lateral Movement

Once initial access is obtained, HexStrike continues the chain:

**Prompt:**
```
I have a shell on 192.168.1.50 as www-data.
Enumerate the host: running processes, sudo rights, SUID binaries,
cron jobs, readable sensitive files, network connections.
Find a privilege escalation path to root.
After root, dump credentials and pivot to other hosts.
```

HexStrike will:
1. Run `sudo -l`, `find / -perm -4000`, `cat /etc/crontab`
2. Identify the escalation vector (kernel exploit, sudo misconfiguration, SUID binary)
3. Execute the escalation
4. Dump `/etc/shadow`, SSH keys, credentials files
5. Use found credentials against other hosts on the subnet

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

### Single-prompt full network PT (Gemini CLI):
```
Target network: 192.168.1.0/24
Authorized penetration test.
Goal: compromise as many hosts as possible and document findings.
Start with discovery, enumerate services, exploit vulnerabilities,
escalate privileges, and produce a final report.
```

### Single-prompt black-box AD engagement (Cursor MCP):
```
IP: 192.168.10.5 — believed to be a Windows domain environment.
Authorized engagement.
Enumerate the environment, identify the domain, find attack paths,
compromise a domain admin account. Document everything.
```

### One-prompt web + cloud PT (Cursor + HexStrike + Burp MCP):
```
Target: https://app.target.lab (AWS-hosted)
Authorized.
Map the web attack surface and cloud configuration.
Find and exploit vulnerabilities across both layers.
Produce actionable findings with PoCs.
```

---

## Lab Environments

Practice all techniques safely in your own lab:

- [Build a Vulnerable Ubuntu 24.04 Lab](./02-lab-setup) — SSH, FTP, Samba, NFS, Apache, MariaDB, privesc vectors
- Vulnerable Windows lab, AD lab, Kubernetes lab, and GCP lab covered in the extended article series at [medium.com/@1200km](https://medium.com/@1200km)
