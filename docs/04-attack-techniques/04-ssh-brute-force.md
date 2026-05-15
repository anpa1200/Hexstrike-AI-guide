---
title: "SSH Credential Brute-Force"
date: 2026-01-04
sidebar_position: 4
---

# HexStrike + Gemini. AI-Assisted SSH Credential Brute-Force

From Service Validation → Dependency Fixes → Findings → Defensive Takeaways 

* * *

### HexStrike + Gemini. AI-Assisted SSH Credential Brute-Force

#### From Service Validation → Dependency Fixes → Findings → Defensive Takeaways

![](/img/hexstrike-articles/hexstrike-gemini-ai-assisted-ssh-credential-brute-force/0-BFm-ZoQNHk5Kp-pl.png)

### Overview

This guide documents a **fully authorized lab** workflow where an AI-orchestrated toolchain attempted to validate SSH exposure and assess **credential hygiene** on a target host. The value here is not “running tools,” but how the workflow **handles failures** , corrects environment issues (missing resources, permissions), and produces a **defender-usable outcome**.

[**HexStrike on Kali Linux 2025.4: A Comprehensive Guide**](<https://medium.com/ai-security-hub/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949>)**here:**

* * *

### Scenario

#### Objective

  1. Validate whether SSH is reachable on the target.
  2. Run a **controlled credential-hygiene check** using pre-approved test data (small lists).
  3. Capture operational issues and produce remediation guidance.



#### Inputs

  * **Target host:** `172.16.59.129`
  * **Wordlists used during the session:**
  * Built-in lists under `/usr/share/wordlists/…`
  * Custom lists:
  * `~/Documents/users_list.txt`
  * `~/Documents/passwords_list.txt`



#### Tooling (via HexStrike-AI / Gemini CLI orchestration)

  * Service validation (port check)
  * Credential-hygiene test runner
  * Linux utilities for environment discovery and file handling



* * *

### Step-by-step execution flow

#### 1) Promt
    
    
    @hexstrike: scan 172.16.59.129 find ssh port, do bruteforce for credentials with password dictionaries

![](/img/hexstrike-articles/hexstrike-gemini-ai-assisted-ssh-credential-brute-force/1-WTVKVELBsiaU5HwO5IGXgA.png)

**Key point:** The operator provides intent; the agent decides execution order.

* * *

### 2) Port scanning

![](/img/hexstrike-articles/hexstrike-gemini-ai-assisted-ssh-credential-brute-force/1-PGkBW3RGZzs2h3qqWRKl_Q.png)

* * *

### 3) Custom small lists succeeded (and exposed weak credentials)

![](/img/hexstrike-articles/hexstrike-gemini-ai-assisted-ssh-credential-brute-force/1-bUZwzZAWqh-3ZCLoeMHKwA.png)

* * *

**Important note (reporting hygiene)**  
I recommend **not publishing raw credentials** even for labs. In reports, redact passwords and keep only:

  * account name
  * authentication method
  * severity
  * evidence reference (log line / timestamp)
  * remediation



#### Findings summary (redacted example format)

FindingEvidence (from tool output)RiskMultiple accounts accept weak/default passwordsSeveral successful SSH authentications across different usernamesHigh: enables remote accessPrivileged account exposureOne successful authentication corresponds to a privileged accountCritical: immediate privilege

* * *

### Final result (lab outcome)

  * The workflow encountered and resolved:
  * missing dependencies (dictionary file path mismatch)
  * permissions issues (working directory / decompression)
  * runtime constraints (timeout on large attempt space)
  * The workflow ultimately produced a clear conclusion:
  * **credential hygiene is weak** on the target system (multiple successful logins using low-entropy passwords)



* * *

### Why this matters (defensive perspective)

Even though **SSH online authentication can be rate-limited** , weak credentials are still a high-value failure mode because:

  * attackers can use targeted credential sets (sprays)
  * leaked credentials and password reuse make “small list” attacks effective
  * success yields durable footholds and enables lateral movement



* * *

### Detection and hardening checklist (what to do next)

### Hardening (highest ROI first)

  1. **Disable password authentication** for SSH; enforce keys (or strong MFA where applicable).
  2. **Disable direct privileged logins** over SSH.
  3. **Restrict SSH exposure** (allowlist admin subnets / VPN only).
  4. **Add throttling / banning** for repeated failures (rate-limit, jail-based blocking).
  5. **Rotate credentials** and enforce a banned-password policy.



### Detection engineering

  * Alert on:
  * many failed logins from a single source IP
  * attempts across many usernames (“user enumeration” pattern)
  * successful login following a burst of failures
  * authentication to privileged accounts from non-admin networks



* * *

### Key takeaways

  * AI orchestration is not “blind automation” — it’s **dynamic troubleshooting**.
  * Most failures are **environmental** (paths, permissions, tooling assumptions).
  * The valuable output is not the run itself, but:
  * a reproducible execution record
  * a clear risk statement
  * actionable remediation and detection guidance



By [Andrey Pautov](<https://medium.com/@1200km>) on [January 4, 2026](<https://medium.com/p/a9162f8e253b>).

[Canonical link](<https://medium.com/@1200km/hexstrike-gemini-ai-assisted-ssh-credential-brute-force-a9162f8e253b>)

Exported from [Medium](<https://medium.com>) on May 15, 2026.
