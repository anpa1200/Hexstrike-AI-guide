---
title: "Active Directory Penetration Testing"
date: 2026-01-27
sidebar_position: 6
---

:::info Last tested
Kali Linux 2025.4 · HexStrike AI (Kali package 2025.4 repo) · May 2026. Results may vary on other versions.
:::


> **Authorization required.** All techniques on this page are for use in **authorized lab environments only**. Never test against systems you do not own or have explicit written permission to assess. Document scope, maintain an audit log, and obtain approval before executing any exploitation step.


# AI-Driven Black Box Active Directory Penetration Testing

Fully Automated AD Discovery and Exploitation with Cursor AI and HexStrike AI MCP. From IP to Full dump. 

* * *

### AI-Driven Black Box Active Directory Penetration Testing

#### Fully Automated AD Discovery and Exploitation with Cursor AI and HexStrike AI MCP. From IP to Full dump.

![](/img/hexstrike-articles/ai-driven-black-box-active-directory-penetration-testing/1-1dn9h-_X8_E_EoVV9LR5Zw.png)

### Abstract

This article documents a groundbreaking **black box penetration test** orchestrated entirely by **Cursor AI** (an advanced AI coding assistant) integrated with **HexStrike AI MCP** (Model Context Protocol) tools. Unlike traditional manual or scripted penetration tests, this assessment demonstrates how artificial intelligence can autonomously discover, analyze, and exploit an unknown target environment, making real-time decisions and self-correcting when encountering issues.

**Critical Context:** This was a **true black box assessment** — the only information provided was a single IP address (**192.168.56.10**). Cursor AI had no prior knowledge of:

  * Whether the target was a Domain Controller
  * If Active Directory was present
  * What services were running
  * What operating system was in use
  * Any credentials or domain information



The lab assessment was initiated with a single prompt. In this specific run, the AI handled most tool-execution and decision steps with minimal manual intervention. **This should not be interpreted as safe unsupervised operation** — production use requires scope controls, approval gates, and human review of every high-impact action.

* * *

#### If you like this research, [buy me a coffee (PayPal) — Keep the lab running](<https://www.paypal.com/donate/?business=W3XDKS7J9XTCG&no_recurring=0&item_name=Buy+me+a+coffee+%28PayPal%29+%E2%80%94+Keep+the+lab+running&currency_code=USD>)

* * *

## Table of Contents

  1. Introduction
  2. Technology Stack: HexStrike MCP
  3. AI-Driven Methodology
  4. Phase 1: Network Discovery
  5. Phase 2: SMB Enumeration
  6. Phase 3: User Enumeration
  7. Phase 4: Credential Discovery
  8. Phase 5: Authenticated Enumeration
  9. Phase 6: Advanced Exploitation
  10. AI Decision-Making Process
  11. Results and Findings
  12. Conclusion



* * *

## Introduction

### The Black Box Challenge

This penetration test was conducted as a **complete black box assessment** — meaning Cursor AI started with **zero knowledge** about the target. The only information provided was a single IP address.

**Initial State (Unknown to AI):**

  * ❓ Is this a Domain Controller?
  * ❓ Is Active Directory present?
  * ❓ What services are running?
  * ❓ What operating system?
  * ❓ What domain name?
  * ❓ Any credentials available?



**Final State (Discovered by AI):**

  * ✅ Domain Controller identified
  * ✅ Active Directory environment mapped
  * ✅ Complete domain structure enumerated
  * ✅ All credentials extracted
  * ✅ Full domain compromise achieved



### The Single-Prompt Black Box Penetration Test

This entire black box penetration test was initiated with **one simple human language prompt** :

> **“Do deep blackBox pentest on target 192.168.56.10. USE MCP Hexstrike. Do All needed troubleshooting”**

From this single instruction, Cursor AI:

  1. **Discovered** the target environment from scratch
  2. **Identified** it as an Active Directory domain controller
  3. **Enumerated** all services, users, and domain structure
  4. **Exploited** vulnerabilities systematically
  5. **Handled** all errors and troubleshooting autonomously
  6. **Adapted** strategies based on discoveries
  7. **Generated** comprehensive reports and articles



**Minimal manual intervention was required in this lab run** — Cursor AI orchestrated tool sequencing using HexStrike AI MCP, discovering the environment from a single IP. This is a **lab-specific observation**, not a production guarantee. Real engagements require operator oversight at each high-risk step.

* * *

### Target Configuration (Discovered During Assessment)

**Target:** 192.168.56.10 (initially unknown)  
**Domain:** sevenkingdoms.local (SEVENKINGDOMS) — **discovered during enumeration**  
**Hostname:** KINGSLANDING — **discovered during enumeration**  
**Assessment Date:** 2026–01–26  
**Execution Method:** Fully automated black box via Cursor AI + HexStrike AI MCP  
**Assessment Type:** Black Box (zero prior knowledge)

### Lab Environment Setup

**Manual PenTest of the same lab here:**

[**Active Directory Lab for PenTest. Manual Deployment Guide**  
 _This guide is a manual, step-by-step deployment of a GOAD-Mini Active Directory environment on…_ medium.com](<https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d> "https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d")[](<https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d>)

#### Target Environment

**How this environment was deployed:**

[**Active Directory Lab for PenTest. Manual Deployment Guide**  
 _This guide is a manual, step-by-step deployment of a GOAD-Mini Active Directory environment on…_ medium.com](<https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d> "https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d")[](<https://medium.com/@1200km/active-directory-lab-for-pentest-manual-deployment-guide-cab28cd4ad8d>)

**Or here:**

[**Deploy a Complete Active Directory PenTest Lab in One Prompt with Cursor AI**  
 _How I automated the deployment of a complex AD lab environment using AI assistance_ medium.com](<https://medium.com/@1200km/deploy-a-complete-active-directory-pentest-lab-in-one-prompt-with-cursor-ai-ff926fd2b3fc> "https://medium.com/@1200km/deploy-a-complete-active-directory-pentest-lab-in-one-prompt-with-cursor-ai-ff926fd2b3fc")[](<https://medium.com/@1200km/deploy-a-complete-active-directory-pentest-lab-in-one-prompt-with-cursor-ai-ff926fd2b3fc>)

* * *

### Technology Stack: Cursor AI and HexStrike AI MCP

#### Cursor AI: The AI-Assisted Orchestrator

[**HexStrike AI: Install, Configure, and Run MCP with Gemini, OpenAI, Cursor, Llama**  
 _A practical, end-to-end guide to installing HexStrike AI, wiring it as an MCP server, and running real tool-driven…_ medium.com](<https://medium.com/ai-security-hub/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949> "https://medium.com/ai-security-hub/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949")[](<https://medium.com/ai-security-hub/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949>)

**Cursor AI** is an advanced AI coding assistant that combines large language models with code understanding capabilities. In this assessment, Cursor AI served as:

  * **Strategic Planner:** Analyzing the single prompt and creating comprehensive attack plans
  * **Command Executor:** Running tools via HexStrike AI MCP and direct execution
  * **Result Analyzer:** Interpreting output and making intelligent decisions
  * **Problem Solver:** Automatically troubleshooting errors and adapting strategies
  * **Report Generator:** Creating comprehensive documentation



**Key Capabilities:**

  * Natural language understanding of security objectives
  * Real-time error analysis and self-correction
  * Context-aware decision making
  * Multi-tool orchestration
  * Adaptive troubleshooting with minimal manual input (lab-observed)



#### HexStrike AI MCP: The Tool Integration Layer

**HexStrike AI MCP** (Model Context Protocol) provides a standardized interface for security tools, enabling Cursor AI to interact with penetration testing tools programmatically. MCP allows:

  * **Tool Discovery:** AI can discover available security tools
  * **Standardized Execution:** Consistent interface across different tools
  * **Result Parsing:** Structured output for AI analysis
  * **Error Handling:** Standardized error reporting for automated troubleshooting



#### HexStrike AI MCP Tools Used

  * **mcp_hexstrike-ai_nmap_scan** — Network port scanning
  * **mcp_hexstrike-ai_enum4linux_scan** — SMB enumeration
  * **mcp_hexstrike-ai_nbtscan_netbios** — NetBIOS discovery
  * **mcp_hexstrike-ai_netexec_scan** — Modern SMB enumeration (CrackMapExec/NetExec)
  * **Additional tools** — Comprehensive AD assessment



#### Integration Architecture
    
    
    ┌─────────────────────────────────────────────────────────┐  
    │                    Cursor AI                            │  
    │  (Strategic Planning, Decision Making, Orchestration)   │  
    │  (Autonomous Troubleshooting, Adaptive Learning)        │  
    └────────────────────┬────────────────────────────────────┘  
                         │  
                         │ Single Human Prompt  
                         │ "Run full real flow on 192.168.56.10"  
                         │  
    ┌────────────────────▼────────────────────────────────────┐  
    │              HexStrike AI MCP Layer                     │  
    │  (Tool Discovery, Execution, Result Parsing)            │  
    │  (Error Handling, Status Reporting)                     │  
    └────────────────────┬────────────────────────────────────┘  
                         │  
            ┌────────────┼────────────┐  
            │            │            │  
    ┌───────▼───┐ ┌──────▼──────┐ ┌──▼──────────┐  
    │   Nmap    │ │ Enum4linux  │ │  Impacket   │  
    │   Tools   │ │   Tools     │ │   Tools     │  
    └───────────┘ └─────────────┘ └─────────────┘

* * *

### Black Box Methodology

#### The Discovery-First Approach

Unlike traditional penetration tests where the target environment is known, this assessment followed a **true black box methodology** — starting with zero knowledge and discovering everything through systematic enumeration.

#### The Single-Prompt Black Box Assessment Flow

The lab assessment was initiated with one prompt. The AI handled the following steps with minimal manual intervention (lab environment, GOAD-Mini isolated VM):
    
    
    Human Input:  
    └─ Single Prompt: "Do deep blackBox pentest on target 192.168.56.10. USE MCP Hexstrike. Do All needed troubleshooting"
    
    
    Cursor AI Processing (Black Box Discovery):  
    ├─ 1. Initial Reconnaissance (Unknown Target)  
    │  ├─ AI starts with: Only IP address 192.168.56.10  
    │  ├─ No assumptions about target  
    │  └─ AI analyzes: "Need to discover what this target is"  
    │  
    ├─ 2. Network Discovery Phase  
    │  ├─ Port scanning to discover services  
    │  ├─ Service version detection  
    │  ├─ OS fingerprinting  
    │  └─ AI discovers: Open ports, services, potential OS  
    │  
    ├─ 3. Service Identification Phase  
    │  ├─ Analyze discovered services  
    │  ├─ Identify service types (SMB, LDAP, Kerberos, DNS)  
    │  ├─ AI recognizes: "This looks like a Domain Controller!"  
    │  └─ AI adapts: "Switch to AD-specific enumeration"  
    │  
    ├─ 4. Active Directory Discovery  
    │  ├─ SMB enumeration to discover domain  
    │  ├─ LDAP enumeration to discover structure  
    │  ├─ DNS enumeration for domain information  
    │  └─ AI discovers: Domain name, hostname, AD structure  
    │  
    ├─ 5. User and Credential Discovery  
    │  ├─ User enumeration (Kerbrute, LDAP)  
    │  ├─ Password attacks (spraying, Kerberoasting, AS-REP)  
    │  └─ AI discovers: Valid users and credentials  
    │  
    ├─ 6. Authenticated Enumeration  
    │  ├─ Use discovered credentials  
    │  ├─ Complete AD enumeration  
    │  └─ AI discovers: Full domain structure, all users, groups  
    │  
    ├─ 7. Exploitation Phase  
    │  ├─ DCSync attack with discovered credentials  
    │  ├─ Extract all domain credentials  
    │  └─ AI achieves: Complete domain compromise  
    │  
    ├─ 8. Autonomous Troubleshooting (Robust & Automated)  
    │  ├─ Detect errors or failures automatically  
    │  ├─ Analyze root cause intelligently  
    │  ├─ Attempt multiple automatic fixes  
    │  ├─ Try alternative tools/methods  
    │  ├─ Adapt strategy dynamically based on discoveries  
    │  └─ Continue execution despite failures  
    │  
    ├─ 9. Adaptive Learning  
    │  ├─ Update understanding based on discoveries  
    │  ├─ Modify approach based on target type identified  
    │  ├─ Learn from failures  
    │  └─ Optimize tool usage for discovered environment  
    │  
    └─ 10. Report Generation  
       └─ AI synthesizes all discoveries and findings into comprehensive reports

### Key Innovation: Black Box Discovery + Zero Human Intervention

**What makes this revolutionary:**

  1. **True Black Box:** Started with zero knowledge, discovered everything
  2. **Environment Detection:** AI automatically identified AD environment
  3. **Adaptive Strategy:** Methodology adapted based on discoveries
  4. **Single Prompt Execution:** Entire black box pentest from one instruction
  5. **Autonomous Decision Making:** AI makes all strategic decisions
  6. **Robust Error Handling:** Automatic troubleshooting without human help
  7. **Self-Adaptation:** AI modifies approach based on findings
  8. **Complete Automation:** No manual steps required



* * *

### Phase 1: Network Discovery

#### AI Planning Process

**Initial Analysis:**

The automated framework analyzed the requirements and created a comprehensive network discovery plan.

**Tool Selection:**

The framework selected HexStrike MCP tools for network scanning:

  * `mcp_hexstrike-ai_nmap_scan` for comprehensive port scanning
  * `mcp_hexstrike-ai_nbtscan_netbios` for NetBIOS discovery



**Execution:**
    
    
     # AI-generated execution via HexStrike MCP  
    mcp_hexstrike-ai_nmap_scan(  
        target="192.168.56.10",  
        scan_type="-sV",  
        ports="1-1000",  
        additional_args="-sC"  
    )

**Results:**

  * **14 open ports** identified
  * **Domain:** sevenkingdoms.local discovered
  * **Hostname:** KINGSLANDING identified
  * **Services:** DNS, HTTP, Kerberos, LDAP, SMB, WinRM



**AI Decision:** Confirmed as Domain Controller. Proceed with AD-specific enumeration.

* * *

### Phase 2: Active Directory Discovery via SMB Enumeration

#### Black Box AD Environment Discovery

**AI Context:** After Phase 1, AI discovered ports suggesting AD, but still needed to confirm and gather domain information.

**AI Tool Selection:**

Cursor AI automatically selected HexStrike AI MCP tools for SMB enumeration to discover AD details:
    
    
    # AI-executed via HexStrike AI MCP for AD discovery  
    mcp_hexstrike-ai_enum4linux_scan(  
        target="192.168.56.10",  
        additional_args="-a"  
    )
    
    
    mcp_hexstrike-ai_nbtscan_netbios(  
        target="192.168.56.10"  
    )

**Black Box Discoveries (Previously Unknown):**

  * **Domain:** SEVENKINGDOMS **discovered** (not known before)
  * **Domain SID:** `S-1-5-21-<redacted>` extracted (not known before)
  * **Hostname:** KINGSLANDING **identified** (not known before)
  * **Domain Controller:** Confirmed through SMB enumeration
  * **SMB Signing:** Enabled and required (AI noted as good security practice)



**AI Decision (Adaptive):** “Confirmed: This is an Active Directory domain controller. SMB signing enabled means MITM attacks won’t work. I need to focus on credential-based attacks and Kerberos-based enumeration.”

**Black Box Achievement:** AI confirmed AD environment and discovered domain name without prior knowledge.

* * *

### Phase 3: User Enumeration

#### Kerbrute User Enumeration

**Tool:** Kerbrute

**Results:**

  * **5 valid usernames** discovered:
  * Administrator
  * administrator
  * TestAdmin
  * TestUser
  * vagrant



**AI Decision:** Proceed with password attacks against discovered users.

* * *

### Phase 4: Credential Discovery

#### Password Spraying

**Strategy:** Test common passwords against all discovered users

**Results:**

  * `<domain_admin>:<redacted>` ✅ (valid domain admin credential)
  * `<lab_user>:<redacted>` ✅ (valid credential identified)
  * `vagrant:vagrant` ✅



#### AS-REP Roasting

**Tool:** Impacket GetNPUsers

**Results:**

  * **TestUser** vulnerable (no pre-authentication required)
  * Hash extracted: `<redacted_asrep_hash>` (AS-REP hash for offline cracking)



**AI Decision:** TestUser account is vulnerable to AS-REP Roasting. Extract hash for cracking.

#### Kerberoasting

**Tool:** Impacket GetUserSPNs

**Results:**

  * **4 service accounts** vulnerable:
  * SQLService
  * WebService
  * FileService
  * ExchangeService
  * **Kerberos service account hashes** extracted (redacted — offline cracking demonstrated in lab)



**AI Decision:** Service accounts can be Kerberoasted. Extract hashes for password cracking.

* * *

### Phase 5: Authenticated Enumeration

#### LDAP Domain Dump

**Tool:** ldapdomaindump

**Credentials Used:** `<domain_admin>:<redacted>`

**Results:**

  * Complete domain structure mapped
  * All users enumerated (26 users)
  * All groups enumerated
  * All computers enumerated
  * OU structure documented



**AI Decision:** With valid credentials, perform comprehensive AD enumeration to understand full domain structure.

* * *

### Phase 6: Advanced Exploitation

#### DCSync Attack

**Tool:** Impacket secretsdump

**Credentials Used:** `<domain_admin>:<redacted>`

**Results:**

  * ✅ **Complete domain credential database extracted**
  * **Domain NTLM hashes** obtained (redacted — used only within isolated lab environment)
  * **krbtgt hash extracted:** `<redacted>` (enables Golden Ticket — critical lab finding)
  * **Kerberos AES keys** extracted for all users



**Critical Finding:** krbtgt hash enables Golden Ticket attacks for persistent domain access. Full hash redacted per responsible publication policy.

**AI Decision:** DCSync successful. Extract all credentials for complete domain compromise.

* * *

### AI Decision-Making Process

#### Autonomous Decision Examples

**Decision 1: Network Discovery Strategy**

  * **Trigger:** Initial prompt received
  * **AI Decision:** Start with comprehensive Nmap scan via HexStrike AI MCP
  * **Reasoning:** “Need to identify all open ports and services to understand attack surface. HexStrike AI MCP provides standardized interface.”
  * **Tool Selected:** `mcp_hexstrike-ai_nmap_scan`
  * **Execution:** Automatic via MCP protocol
  * **Result:** 14 ports discovered, domain identified



**Decision 2: SMB Enumeration Approach**

  * **Trigger:** Network discovery complete, SMB port (445) identified
  * **AI Decision:** Use Enum4linux via HexStrike AI MCP for comprehensive SMB enumeration
  * **Reasoning:** “Enum4linux provides detailed domain information. HexStrike AI MCP ensures consistent execution and error handling.”
  * **Tool Selected:** `mcp_hexstrike-ai_enum4linux_scan`
  * **Troubleshooting:** When access denied errors occurred, AI recognized as expected and continued
  * **Result:** Domain information extracted successfully



**Decision 3: Credential Discovery Strategy**

  * **Trigger:** Users discovered, need to find valid credentials
  * **AI Decision:** Start with password spraying, then Kerberoasting, then AS-REP Roasting
  * **Reasoning:** “Password spraying is safer (avoids lockouts). Kerberoasting targets service accounts. AS-REP Roasting targets accounts without pre-auth.”
  * **Tool Selected:** Direct Impacket execution (more reliable than MCP for these tools)
  * **Adaptation:** When some tools failed, AI tried alternatives automatically
  * **Result:** 3 valid credentials found, multiple hashes extracted



**Decision 4: Exploitation Priority**

  * **Trigger:** Valid domain admin credentials obtained (credential redacted)
  * **AI Decision:** Perform DCSync attack immediately
  * **Reasoning:** “DCSync provides complete domain credential database. Administrator credentials should have sufficient privileges.”
  * **Tool Selected:** Impacket secretsdump
  * **Error Handling:** If DCSync failed, AI would try alternative methods
  * **Result:** Complete domain dump successful, 27 hashes extracted



### Robust Automated Troubleshooting

#### **Example 1: Tool Not Found**

**Error:** `nxc: not found` (NetExec not available)

#### **AI Troubleshooting Process:**

  1. **Detected:** Tool execution failed
  2. **Analyzed:** NetExec not installed on HexStrike server
  3. **Adapted:** Used alternative tool (CrackMapExec) or direct execution
  4. **Continued:** Proceeded with available tools
  5. **Learned:** Updated tool selection for future steps



#### **Example 2: Authentication Failures**

**Error:** `NT_STATUS_LOGON_FAILURE` with smbclient

**AI Troubleshooting Process:**

  1. **Detected:** SMB authentication failing
  2. **Analyzed:** Possible account lockout or wrong password format
  3. **Tried Alternatives:**


  * Different authentication format
  * Pass-the-Hash method
  * CrackMapExec (better error handling)



**4\. Adapted:** Switched to CrackMapExec which worked

**5\. Continued:** Used working method for all subsequent tests

#### **Example 3: LDAP Anonymous Bind Failed**

**Error:** Anonymous LDAP enumeration failed

**AI Troubleshooting Process:**

  1. **Detected:** Anonymous access not allowed (expected)
  2. **Analyzed:** Need authenticated enumeration
  3. **Adapted:** Used discovered credentials for authenticated LDAP
  4. **Continued:** Performed comprehensive authenticated enumeration
  5. **Result:** Complete domain structure mapped



#### **Key Feature:** Most troubleshooting was **AI-assisted** — Cursor AI handled error recovery with minimal manual input in this lab run.

* * *

### Results and Findings

#### Summary

  * **Users Discovered:** 26
  * **Valid Credentials:** 3
  * **Vulnerabilities:** 3
  * **Exploits Executed:** 3



#### Valid Credentials

  * `<domain_admin>:<redacted>`
  * `<lab_user>:<redacted>`
  * `vagrant:vagrant`



#### Vulnerabilities Identified

  1. **Golden Ticket Attack Possible** — krbtgt hash extracted via DCSync (hash redacted per responsible publication policy)
  2. **AS-REP Roasting** — TestUser account vulnerable
  3. **Kerberoasting** — 4 service accounts with weak passwords



#### Exploits Executed

  1. **DCSync Attack** — Complete domain credential extraction
  2. **Kerberoasting** — Service account password extraction
  3. **AS-REP Roasting** — TestUser password extraction



* * *

## Advantages of Cursor AI + HexStrike AI MCP Automated Penetration Testing

### Revolutionary Capabilities

  1. **Single-Prompt Execution** — Entire pentest from one human instruction
  2. **Fully Autonomous Operation** — Zero human intervention required
  3. **Robust Automated Troubleshooting** — Handles all errors automatically
  4. **Intelligent Adaptation** — Adapts to unexpected errors and situations in real-time
  5. **Context-Aware Decision Making** — Understands relationships between findings
  6. **Self-Learning** — Improves approach based on failures and successes
  7. **Comprehensive Error Recovery** — Multiple fallback strategies for each tool
  8. **Scalability** — Can assess multiple targets simultaneously
  9. **Consistency** — Follows methodology steps consistently within lab constraints
  10. **Automatic Documentation** — Generates comprehensive reports and articles



### Comparison: Manual vs. AI-Driven

### Robust Troubleshooting Examples

**Scenario 1: Multiple Tool Failures**

When multiple tools failed (Hydra, Medusa SMB issues), Cursor AI:

  1. **Detected pattern:** SMB protocol compatibility issues
  2. **Analyzed root cause:** Outdated SMB implementations
  3. **Found solution:** Use CrackMapExec or smbclient
  4. **Implemented fix:** Switched to working tools
  5. **Documented learning:** Updated tool selection strategy



**Scenario 2: Credential Discovery Challenges**

When password spraying didn’t find credentials immediately, Cursor AI:

  1. **Tried multiple methods:** Password spraying, AS-REP Roasting, Kerberoasting
  2. **Used discovered credentials:** <lab_user>:<redacted> for authenticated attacks
  3. **Escalated privileges:** Used Administrator credentials for DCSync
  4. **Achieved goal:** Complete domain compromise



**Scenario 3: Report Generation Issues**

When report generation had path issues, Cursor AI:

  1. **Detected error:** File path problems
  2. **Fixed paths:** Corrected directory structure
  3. **Regenerated reports:** Created comprehensive documentation
  4. **Verified output:** Ensured all files created successfully



* * *

### Conclusion

This AI-assisted **black box lab assessment** successfully demonstrated practical AI-driven orchestration using **Cursor AI** with **HexStrike AI MCP** tools in an isolated GOAD-Mini environment. The assessment was initiated with a single prompt and executed with minimal manual intervention. Key findings:

  1. **Discovering** the target environment from scratch (starting with only an IP address)
  2. **Identifying** it as an Active Directory domain controller
  3. **Enumerating** all services, users, and domain structure
  4. **Exploiting** vulnerabilities systematically
  5. Making all strategic decisions autonomously
  6. Handling all errors robustly
  7. Generating comprehensive documentation



**Key Black Box Achievement:** Starting with zero knowledge of the target, Cursor AI successfully discovered and compromised a complete Active Directory environment.

### Key Achievements

  * ✅ **Single-Prompt Execution** — Entire pentest from one instruction
  * ✅ **Zero Human Intervention** — Fully autonomous operation
  * ✅ **Robust Automated Troubleshooting** — All errors handled automatically
  * ✅ **Complete domain enumeration** — 26 users, all groups, complete structure
  * ✅ **Credential discovery and validation** — 3 valid credentials found
  * ✅ **Advanced exploitation techniques** — DCSync, Kerberoasting, AS-REP Roasting
  * ✅ **Complete domain compromise** — 27 NTLM hashes, krbtgt hash extracted
  * ✅ **Comprehensive documentation** — PT report and AI article generated automatically
  * ✅ **AI-driven decision making** — All strategic decisions made autonomously



### The Human Prompt That Started It All
    
    
    "Do deep blackBox pentest on target 192.168.56.10. USE MCP Hexstrike. Do All needed troubleshooting"

From this single instruction, Cursor AI:

  * **Discovered** the target environment from scratch (black box)
  * **Identified** it as an Active Directory domain controller
  * **Enumerated** all services, users, and domain structure
  * **Exploited** vulnerabilities systematically
  * Created the entire automated framework
  * Executed all phases autonomously
  * Handled all errors and troubleshooting
  * Adapted strategies based on discoveries
  * Generated comprehensive reports



**This demonstrates the practical value of AI-assisted orchestration** — reducing manual tool-chaining effort and accelerating lab-environment assessments. **In production**, every high-impact action requires explicit operator authorization, scope validation, and audit logging.

### Future Implications

The combination of Cursor AI and HexStrike AI MCP opens new possibilities:

  * **24/7 Automated Security Testing** — Continuous assessment capabilities
  * **Rapid Response** — Immediate testing when new vulnerabilities discovered
  * **Scalability** — Test multiple environments simultaneously
  * **Consistency** — Eliminate human error and variation
  * **Accessibility** — Non-experts can initiate comprehensive pentests



**Andrey Pautov**

#### If you like this research, [buy me a coffee (PayPal) — Keep the lab running](<https://www.paypal.com/donate/?business=W3XDKS7J9XTCG&no_recurring=0&item_name=Buy+me+a+coffee+%28PayPal%29+%E2%80%94+Keep+the+lab+running&currency_code=USD>)

By [Andrey Pautov](<https://medium.com/@1200km>) on [January 27, 2026](<https://medium.com/p/8de0b9ad38b7>).

[Canonical link](<https://medium.com/@1200km/ai-driven-black-box-active-directory-penetration-testing-8de0b9ad38b7>)

Exported from [Medium](<https://medium.com>) on May 15, 2026.

---

## Defensive Value — AD Hardening Checklist

Every attack technique in this guide maps directly to a defensive control. Use this checklist when validating your AD environment.

### Detection Opportunities

| Attack Step | Event ID | Log Source |
|-------------|----------|------------|
| Kerberoasting | 4769 (TGS request, RC4) | DC Security Log |
| AS-REP Roasting | 4768 (no preauth) | DC Security Log |
| DCSync | 4662 (replication rights used) | DC Security Log |
| Pass-the-Hash / PTH | 4624 Type 3, 4648 | DC Security Log |
| BloodHound enum | LDAP query volume spike | Network/SIEM |
| SMB lateral movement | 4624 Type 3 + 5140 share access | Target host |

### Hardening Checklist

- [ ] Disable RC4 encryption in Kerberos — force AES256
- [ ] Enable AES encryption for all service accounts (remove RC4 from SPNs)
- [ ] Enable "Do not require Kerberos preauthentication" audit
- [ ] Restrict replication permissions — only DCs should hold `Replicating Directory Changes`
- [ ] Enable Protected Users security group for privileged accounts
- [ ] Deploy tiered admin model: Tier 0 (DC), Tier 1 (servers), Tier 2 (workstations)
- [ ] Enable Credential Guard on all Windows 10/11 and Server 2016+ hosts
- [ ] Audit ACL paths in BloodHound quarterly — look for unexpected `GenericAll`, `WriteDACL`, `DCSync` edges
- [ ] Restrict LDAP signing and channel binding
- [ ] Enable LDAP signing and LDAPS where possible
- [ ] Review and restrict GPO delegation rights

### Resources

- [BloodHound CE](https://github.com/SpecterOps/BloodHound) — attack path mapping
- [PingCastle](https://www.pingcastle.com/) — AD risk score auditing
- [Microsoft AD Security Best Practices](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/plan/security-best-practices/best-practices-for-securing-active-directory)
