---
title: "AI-Assisted ADCS ESC8 Lab Validation in GOAD-Mini"
description: "Validate ADCS ESC8 conditions in a controlled GOAD-Mini lab with Cursor and HexStrike, preserving evidence, limitations, and remediation guidance."
date: 2026-01-29
sidebar_position: 7
---

:::info Last tested
Kali Linux 2025.4 · HexStrike AI (Kali package 2025.4 repo) · May 2026. Results may vary on other versions.
:::

# AI-Assisted ADCS ESC8 Lab Validation in GOAD-Mini

Controlled lab validation in a GOAD-Mini environment

* * *

### AI-Assisted ADCS ESC8 Lab Validation in GOAD-Mini

#### Controlled ADCS ESC8 validation with Cursor and HexStrike MCP

![Cursor HexStrike fully automated ADCS ESC8 attack — Controlled ADCS ESC8 validation with Cursor and HexStrike MCP](/img/hexstrike-articles/cursor-hexstrike-fully-automated-adcs-esc8-attack/1-npVtspHqp4Ac88UEt_5ziQ.png)

### Abstract

This article documents a **controlled lab engagement** that validates ADCS ESC8 exposure in GOAD-Mini. Starting from an IP address, the AI-assisted workflow helped sequence reconnaissance, ADCS enumeration, certificate-abuse validation, evidence collection, and remediation notes.

**Lab result:** In this GOAD-Mini run, a single high-level prompt initiated a multi-phase workflow. The outcome demonstrates orchestration capability in a controlled environment, not guaranteed autonomous reliability in production.

### Known Limitations

:::caution
This is a GOAD-Mini lab observation. It depends on intentionally vulnerable ADCS configuration, lab credentials, tool versions, and operator approval. Credential values and hashes are redacted in this public version.
:::

* * *

#### If you like this research, [buy me a coffee (PayPal) — Keep the lab running](<https://www.paypal.com/donate/?business=W3XDKS7J9XTCG&no_recurring=0&item_name=Buy+me+a+coffee+%28PayPal%29+%E2%80%94+Keep+the+lab+running&currency_code=USD>)

* * *

### Introduction

Traditional penetration testing requires careful operator control at each step: running tools, interpreting results, making decisions, and troubleshooting failures. This article demonstrates **AI-assisted orchestration from a single prompt** for a controlled ADCS ESC8 validation sequence in a lab environment.

### What Makes This Attack Complicated?

  1. **Multi-Stage Attack Chain:** 7 distinct phases, each with dependencies
  2. **Blackbox Approach:** Starting with zero knowledge (only IP address)
  3. **Troubleshooting Support:** Helps diagnose errors and propose alternatives
  4. **Tool Orchestration:** Coordinates multiple security tools seamlessly
  5. **Contextual Sequencing:** AI selects the next tool based on prior output



* * *

### Attack Overview

#### Target Environment

  * **Target IP:** `192.168.56.10`
  * **Environment:** GOAD-Mini (Game of Active Directory)
  * **Starting Point:** IP address only (blackbox)
  * **End Goal:** Validate ESC8 impact and document remediation evidence



### Attack Chain
    
    
    IP Address (192.168.56.10)  
        ↓  
    [Phase 1] Reconnaissance  
        ├─ Port Scanning  
        ├─ Service Enumeration  
        ├─ Domain Discovery  
        └─ ADCS Detection  
        ↓  
    [Phase 2] Credential Acquisition  
        ├─ Password Spraying  
        ├─ ASREPRoasting  
        └─ Kerberoasting  
        ↓  
    [Phase 3] ADCS Enumeration  
        ├─ CA Discovery  
        ├─ Template Enumeration  
        └─ Vulnerability Verification  
        ↓  
    [Phase 4] Certificate Request  
        ├─ Authenticate with Low-Privilege Creds  
        ├─ Request Administrator Certificate  
        └─ Save redacted certificate artifact  
        ↓  
    [Phase 5] Certificate Authentication  
        ├─ Use Certificate for PKINIT  
        ├─ Obtain Kerberos TGT  
        └─ Extract NTLM Hash  
        ↓  
    [Phase 6] Impact Validation  
        ├─ DCSync Attack  
        ├─ Confirm DCSync risk in the lab  
        └─ Redact sensitive hash material  
        ↓  
    [Phase 7] Reporting  
        ├─ Generate Comprehensive Report  
        ├─ Document All Artifacts  
        └─ Create Proof of Compromise

* * *

### Single-Prompt Initiation

#### The Prompt
    
    
    Perform a blackbox penetration test starting from IP address 192.168.56.10.   
    Validate ADCS ESC8 exposure in the GOAD-Mini lab. Use HexStrike MCP   
    tools for approved enumeration, evidence collection, and troubleshooting support.

### Why This Works

  1. **Comprehensive Instructions:** The prompt contains all phases, objectives, and troubleshooting steps
  2. **Tool Integration:** Leverages HexStrike MCP tools for seamless tool execution
  3. **Error Handling:** Includes automatic troubleshooting for common failures
  4. **Adaptive Execution:** AI can make decisions based on intermediate results



* * *

### Phase-by-Phase Execution

#### Phase 1: Reconnaissance

**Objective:** Discover the target environment with zero prior knowledge.

**Tools Used:**

  * `nmap_advanced_scan` \- Comprehensive port scanning
  * `rustscan_fast_scan` \- Quick port discovery
  * `enum4linux_scan` \- SMB enumeration
  * `smbmap_scan` \- Share enumeration
  * `nbtscan_netbios` \- NetBIOS name discovery
  * `httpx_probe` \- HTTP service detection



**Key Discoveries:**

  * Domain: `sevenkingdoms.local`
  * NetBIOS: `SEVENKINGDOMS`
  * DC Hostname: `kingslanding.sevenkingdoms.local`
  * ADCS Web Enrollment: `http://192.168.56.10/certsrv/` (HTTP - vulnerable!)



**Automation Features:**

  * Automatically identifies Windows Domain Controller
  * Extracts domain information from enumeration results
  * Detects ADCS Web Enrollment endpoint



* * *

#### Phase 2: Credential Acquisition

**Objective:** Obtain low-privilege domain credentials.

**Tools Used:**

  * `hydra_attack` \- Password spraying
  * `netexec_scan` \- Credential validation



**Attack Strategy:**

  1. Extract usernames from Phase 1 enumeration
  2. Attempt password spraying with common passwords
  3. Use the approved lab credential test set



**Results:**

  * **Credentials Obtained:** `TestUser:<redacted>`
  * **Access Level:** Low-privilege domain user



**Automation Features:**

  * Runs only the approved lab credential checks
  * Validates credentials before proceeding
  * Documents credential exposure with sensitive values redacted



* * *

#### Phase 3: ADCS Enumeration

**Objective:** Enumerate ADCS configuration and identify vulnerabilities.

**Tools Used:**

  * `dirsearch_scan` \- ADCS endpoint discovery
  * `execute_python_script` \- Certipy enumeration



**Enumeration Commands:**
    
    
     certipy find -u TestUser@sevenkingdoms.local -p '<redacted>' \  
      -dc-ip 192.168.56.10

**Key Findings:**

  * **CA Name:** `SEVENKINGDOMS-CA`
  * **Vulnerable Templates:** ESC1, ESC8
  * **ESC8 Confirmed:** HTTP Web Enrollment accessible
  * **Template Count:** 34 templates discovered



**Automation Features:**

  * Automatically parses certipy output
  * Identifies vulnerable templates
  * Verifies ESC8 vulnerability exists



* * *

#### Phase 4: Certificate Request

**Objective:** Obtain certificate for Administrator account.

**Tools Used:**

  * `execute_python_script` \- Certipy certificate request



**Command pattern:**
    
    
     certipy req -u TestUser@sevenkingdoms.local -p '<redacted>' \  
      -target http://192.168.56.10 \  
      -ca SEVENKINGDOMS-CA \  
      -template ESC1 \  
      -upn Administrator@sevenkingdoms.local \  
      -out <redacted-certificate-artifact>

**Results:**

  * **Certificate Obtained:** `<redacted-certificate-artifact>`
  * **Status:** ✓ Success
  * **Template Used:** ESC1 (vulnerable template)



**Automation Features:**

  * Automatically selects vulnerable template
  * Handles certificate request errors
  * Verifies certificate file creation



* * *

#### Phase 5: Certificate Authentication

**Objective:** Use certificate for Kerberos authentication.

**Tools Used:**

  * `execute_python_script` \- Certipy authentication



**Command pattern:**
    
    
     certipy auth -pfx <redacted-certificate-artifact> -dc-ip 192.168.56.10

**Results:**

  * **Kerberos TGT:** `<redacted-cache-artifact>` (obtained)
  * **NTLM Hash:** `<redacted>` (extraction confirmed in lab)
  * **Status:** ✓ Authentication successful



**Automation Features:**

  * Automatically uses certificate for PKINIT
  * Confirms NTLM hash extraction risk
  * Saves a redacted credential-cache artifact for the next approved phase



* * *

#### Phase 6: Impact Validation (DCSync Risk)

**Objective:** Validate DCSync impact and document the exposure with sensitive values redacted.

**Tools Used:**

  * `execute_python_script` \- Impacket secretsdump



**Command pattern:**
    
    
     export KRB5CCNAME=<redacted-cache-artifact>  
    secretsdump.py -k -no-pass Administrator@sevenkingdoms.local@192.168.56.10

**Results:**

  * **Total Hashes Extracted:** 27 user accounts
  * **krbtgt Hash:** Extraction confirmed and redacted (enables Golden Ticket attacks)
  * **DCSync Risk:** Confirmed in the lab



**Sample Hashes:**
    
    
     Administrator:500:<redacted>:<redacted>:::  
    krbtgt:502:<redacted>:<redacted>:::  
    TestUser:1001:<redacted>:<redacted>:::

**Automation Features:**

  * Automatically sets Kerberos environment variables
  * Performs DCSync attack
  * Confirms hash extraction impact
  * Redacts sensitive hash material from public documentation



* * *

#### Phase 7: Reporting

**Objective:** Generate comprehensive report with all artifacts.

**Tools Used:**

  * `create_file` \- Report generation



**Report Contents:**

  1. Executive Summary
  2. Phase-by-phase execution details
  3. All discovered information
  4. Vulnerabilities found
  5. Redacted credential-exposure evidence
  6. Proof of validated impact
  7. All approved artifacts (certificates, redacted hash evidence, logs)



**Artifacts Generated:**

  * `<redacted-certificate-artifact>` \- certificate proof artifact
  * `<redacted-cache-artifact>` \- Kerberos cache proof artifact
  * `<redacted-hash-evidence>` \- redacted NTLM hash evidence
  * `<redacted-dcsync-evidence>` \- redacted domain hash evidence
  * `<report-artifact>` \- comprehensive report
  * `<execution-log>` \- execution log with sensitive values removed



* * *

### Automation Features

#### 1\. Automatic Troubleshooting

The framework handles common errors automatically:

  * **Port Scan Fails:** Tries alternative scan methods
  * **SMB Enumeration Fails:** Attempts with different credentials
  * **Certificate Request Fails:** Tries alternative templates
  * **Authentication Fails:** Retries with different methods
  * **DCSync Fails:** Verifies Kerberos and retries



#### 2\. Intelligent Decision Making

The AI makes decisions based on results:

  * **Domain Discovery:** Automatically extracts domain from enumeration
  * **Template Selection:** Chooses vulnerable templates automatically
  * **Credential Validation:** Tests credentials before using them
  * **Error Recovery:** Adapts strategy based on failures



#### 3\. Comprehensive Logging

Every action is logged:

  * Tool execution commands
  * Outputs and results
  * Errors and troubleshooting steps
  * Decision points and rationale



* * *

### Results Summary

#### Attack Timeline

### Key Achievements

  * ✅ **Zero Knowledge Start:** Began with only IP address
  * ✅ **High-Impact ADCS Exposure Validated:** DCSync risk confirmed; sensitive hashes redacted
  * ✅ **krbtgt Hash Exposure:** confirmed and redacted
  * ✅ **AI-Assisted Orchestration:** single prompt initiated a reviewed workflow
  * ✅ **Comprehensive Reporting:** Full documentation generated



* * *

### Technical Deep Dive

#### Why This Attack is Complicated

  1. **Multi-Tool Orchestration:** Coordinates 10+ different security tools
  2. **Dependency Management:** Each phase depends on previous results
  3. **Error Handling:** Automatically recovers from failures
  4. **Data Parsing:** Extracts structured data from unstructured outputs
  5. **Decision Logic:** Makes intelligent choices based on context



### Attack Complexity Metrics

  * **Tools Used:** 15+
  * **Phases:** 7
  * **Decision Points:** 20+
  * **Error Scenarios Handled:** 10+
  * **Artifacts Generated:** 10+



* * *

### Defense and Mitigation

#### Immediate Actions

  1. **Disable HTTP Web Enrollment:** Force HTTPS only
  2. **Enable SMB Signing:** Prevent NTLM relay
  3. **Restrict Certificate Templates:** Remove vulnerable templates
  4. **Monitor Certificate Requests:** Alert on suspicious requests
  5. **Implement Certificate Pinning:** Prevent certificate abuse



### Long-Term Security

  1. **Regular ADCS Audits:** Review template permissions
  2. **Network Segmentation:** Isolate ADCS servers
  3. **Privileged Access Management:** Limit certificate enrollment
  4. **Security Monitoring:** Detect ESC8 attack patterns
  5. **Staff Training:** Educate on ADCS security



* * *

### Detection and Monitoring

#### Indicators of Compromise (IOCs)

  1. **Certificate Requests:**


  * Unusual certificate requests for privileged accounts
  * Certificate requests from non-standard IPs
  * Multiple certificate requests in short time



**2\. Authentication Patterns:**

  * PKINIT authentication from unexpected sources
  * Certificate-based authentication anomalies
  * DCSync attempts from non-DC systems



**3\. Network Traffic:**

  * NTLM relay to ADCS HTTP endpoints
  * Unusual SMB authentication patterns
  * Certificate enrollment over HTTP



### Detection Queries

**Windows Event Log:**
    
    
     Event ID 4886 - Certificate Request  
    Event ID 4887 - Certificate Request Disposition  
    Event ID 4624 - Successful Logon (PKINIT)  
    Event ID 4662 - DCSync Operation

**SIEM Queries:**

  * Certificate requests for Administrator account
  * HTTP requests to /certsrv/ from non-DC IPs
  * NTLM authentication to ADCS endpoints



* * *

### Conclusion

This lab-observed ADCS ESC8 attack demonstrates:

  1. **The Power of AI-Driven Pentesting:** Single prompt achieves complete attack chain
  2. **The Severity of ESC8:** one misconfiguration can enable domain-level impact
  3. **The Need for Automation:** Manual testing cannot match AI speed and consistency
  4. **The Importance of Defense:** Proper ADCS configuration is critical



### Key Takeaways

  * ✅ **ESC8 is Critical:** HTTP Web Enrollment is a severe vulnerability
  * ✅ **Orchestration Works:** AI can sequence complex attack chains in a prepared lab environment
  * ✅ **Defense is Possible:** Proper configuration prevents this attack
  * ✅ **Monitoring is Essential:** Detect and respond to certificate-based attacks



### References

  * [Certified Pre-Owned Research](<https://specterops.io/assets/resources/Certified_Pre-Owned.pdf>) — SpecterOps
  * [ADCS ESC8 Vulnerability](<https://github.com/ly4k/Certipy>) — Certipy Documentation
  * [GOAD Lab Environment](<https://github.com/Orange-Cyberdefense/GOAD>) — Game of Active Directory



**Andrey Pautov**

### If you like this research, [buy me a coffee (PayPal) — Keep the lab running](<https://www.paypal.com/donate/?business=W3XDKS7J9XTCG&no_recurring=0&item_name=Buy+me+a+coffee+%28PayPal%29+%E2%80%94+Keep+the+lab+running&currency_code=USD>)

---

## Known Limitations

:::caution
- Results are specific to the lab configuration used; outcomes will differ on hardened or patched targets.
- AI tool selection is heuristic — novel service configurations may require re-prompting or manual follow-up.
- All walkthroughs ran in an isolated VirtualBox/VMware network, not a production environment.
- Timing and success rates vary with host CPU, RAM, and network latency.
- Some tool outputs are truncated in the screenshots; full output was reviewed live during the session.
:::

By [Andrey Pautov](<https://medium.com/@1200km>) on [January 29, 2026](<https://medium.com/p/8736fec53c58>).

[Canonical link](<https://medium.com/@1200km/cursor-hexstrike-fully-automated-adcs-esc8-attack-8736fec53c58>)

Exported from [Medium](<https://medium.com>) on May 15, 2026.
