---
title: "Office Documents Password Recovery"
date: 2025-12-29
sidebar_position: 4
---

# AI-Driven Office Documents Password Recovery with HexStrike-AI and Gemini-CLI

From Encrypted Document to Readable Content Using LLM-Orchestrated Tooling 

* * *

### AI-Driven Office Documents Password Recovery with HexStrike-AI and Gemini-CLI

#### From Encrypted Document to Readable Content Using LLM-Orchestrated Tooling

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/0-NEMwBOBGpCmEwBNd.png)

### Overview

This guide shows how HexStrike-AI, orchestrated through Gemini-CLI, can autonomously handle a common, **authorized** security task:

**Regain access to a password-protected DOCX you own** (or are explicitly authorized to access), **identify the encryption scheme** , and **restore usability** — without handholding.

The core value here is not “magic cracking.” It’s the AI’s ability to **reason** , **validate assumptions** , and **pivot** when reality disagrees with the first plan.

This is a fully authorized, local scenario.

* * *

**Full guide how to install and use HexstrikeAI here:**

[**HexStrike on Kali Linux 2025.4: A Comprehensive Guide**](<https://medium.com/@1200km/hexstrike-on-kali-linux-2025-4-a-comprehensive-guide-85a0e5752949>)

**Manual Office file Password cracking. Guide with real life examples here:|  
**<https://medium.com/@1200km/office-file-doc-docx-ppt-password-cracking-guide-with-real-life-examples-f8e356144ca4>

### Scenario

#### Objective

  * Confirm a DOCX file is encrypted and determine _how_
  * Distinguish between **user password** vs **owner password / permissions**
  * Restore access **using known credentials** (password manager candidates, documented passphrases, owner-provided secrets)
  * Extract the content and retrieve the flag (CTF-style) _after access is legitimately obtained_



#### Inputs

  * Encrypted file:  
`/home/andrey/my_secret_file.txt`

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-kduNgL5-qOphNtjqD8Y5Gw.png)

  * Password Dictionary:  
`/home/andrey/Documents/passwords_list.txt`

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-lMl1ct5sA5HuWnB6xkYy6g.png)

* * *

### Step-by-Step Execution Flow

  * Run the HexstrikeAI server


    
    
    hexstrike_server

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-TogAVXnHW6s_p2I_SU9lUw.png)

  * Run Gemini-CLI


    
    
    gemeni-cli

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-KSvr7YDPe9YldkqTmp52rQ.png)

#### Promt:
    
    
    @hexstrike Crack password of /home/andrey/Documents/my_secret_file.txt. use passwords list /home/andrey/Documents/password_list.txt

* * *

### Execution Flow:

#### 1) Task initiation (single high-level prompt)

You issued one objective:

  * Recover access to /home/andrey/Documents/my_secret_file.txt using a provided candidate list
  * Proceed until the document content is readable



No manual tool selection, no pre-planned commands.

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-lU5QSvvGyWBxHEsz1IC6xg.png)

#### 2) Tool capability gap identified

HexStrike initially reported it didn’t have a dedicated “crack docx” tool.

**AI behavior:** rather than stopping, it shifted to a plan that starts with **deriving a verification artifact** from the docx (a representation suitable for offline validation).

#### 3) First failure: write location permissions

The AI attempted to save output under a system directory (`/usr/lib/...`) and hit **Permission denied**.

**Pivot:** it switched to a user-writable temp directory under the Gemini working area and retried.

#### 4) Second failure: dependency not in PATH

The helper utility needed for extraction wasn’t callable directly (**command not found**).

**Pivot:** the AI performed filesystem discovery, located the tool in a non-PATH location, and re-ran it using the full path.

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-PvX9xRmJWkkf2_3NJ9quIQ.png)

#### 5) Extraction succeeded (hash/verification artifact produced)

With the correct tool path and a writable output directory, the AI generated the intermediate artifact successfully and prepared it for offline checking.

#### 6) Offline candidate validation (dictionary replay)

The AI ran an **offline candidate check** using:

  * The extracted artifact from the DOCX file
  * The provided wordlist



**Failure:** wordlist path mismatch (`password_list.txt` vs `passwords_list.txt`).

**Pivot:** it listed `~/Documents`, confirmed the actual filename, and reran with the corrected path.

#### 7) Success: password recovered

After correcting the wordlist filename, the run completed and returned a valid password for the File:

  * **Recovered password:** `MyStrongPass`

![](/img/hexstrike-articles/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli/1-39QwyfsDFB64CHq4YCLJag.png)

* * *

### Conclusion

This DOCX flow demonstrates the real advantage of AI-orchestrated tooling: not the individual utilities, but the system’s ability to **self-correct** and still reach the objective from a single high-level instruction.

The key outcome is the closed-loop troubleshooting behavior:

  * **Precondition validation:** it verifies that the target file and the candidate list exist, are readable, and are correctly referenced (paths, filenames, permissions).
  * **Environment discovery:** when a required dependency or capability is missing, it doesn’t stall — it enumerates what is available and adjusts the plan accordingly.
  * **Error-driven adaptation:** permission issues, missing binaries, and incorrect assumptions (for example, a wrong filename in the prompt) are treated as telemetry. The AI diagnoses the failure, applies the minimal correction, and retries.
  * **End-to-end convergence:** the workflow remains goal-driven (recover access → validate → extract content) rather than tool-driven, which prevents “random command spam.”



This is what “one prompt success” actually means in practice: the user defines scope and intent once, and the AI handles the messy middle — environment quirks, path mistakes, and execution pivots — until it reaches a verified result.

By [Andrey Pautov](<https://medium.com/@1200km>) on [December 29, 2025](<https://medium.com/p/3c8bb7deb82d>).

[Canonical link](<https://medium.com/@1200km/ai-driven-office-documents-password-recovery-with-hexstrike-ai-and-gemini-cli-3c8bb7deb82d>)

Exported from [Medium](<https://medium.com>) on May 15, 2026.
