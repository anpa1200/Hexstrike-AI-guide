---
title: "AI-Driven ZIP Password Recovery with HexStrike-AI and Gemini-CLI"
date: 2025-12-25
---

# AI-Driven ZIP Password Recovery with HexStrike-AI and Gemini-CLI

From Encrypted Archive to Flag Using LLM-Orchestrated Tooling 

* * *

### AI-Driven ZIP Password Recovery with HexStrike-AI and Gemini-CLI

#### **From Encrypted Archive to Flag Using LLM-Orchestrated Tooling**

![](https://cdn-images-1.medium.com/max/800/0*ugjfFZjFfBwT__hh.png)

#### Overview

> This guide demonstrates how **HexStrike-AI** , orchestrated through **Gemini-CLI** , can autonomously solve a common security / CTF task:

> _Recover the contents of an encrypted ZIP archive using a known password dictionary._

What makes this workflow different is not the tools themselves — but **how the AI reasons, pivots, and adapts** when something fails.

This is a **fully authorized, local lab scenario**.

* * *

### Scenario

**Objective**

  * Open an encrypted ZIP file
  * Recover the password using a provided wordlist
  * Extract the contents and retrieve the flag



**Inputs**

  * Encrypted ZIP:  
`/home/andrey/secret_file.zip`
  * Password dictionary:  
`/home/andrey/Documents/passwords_list.txt`



**Tooling (via HexStrike-AI)**

  * `zip2john`
  * `john`
  * `unzip`
  * `7z`
  * Standard Linux utilities



* * *

### Step-by-Step Execution Flow

### 1\. Task initiation (LLM-driven)

The user provides a **single high-level prompt** :
[code]
    Open encrypted zip file and find the flag using the provided password list.
[/code]

![](https://cdn-images-1.medium.com/max/800/1*ANUdip5C59veqsAwPgXw1A.png)

No commands.  
No tool selection.  
No manual troubleshooting.

* * *

### 2\. Tool discovery & preparation

HexStrike-AI:

  * Determines that ZIP cracking requires **hash extraction**
  * Locates `zip2john` automatically
  * Verifies tool availability on the system

![](https://cdn-images-1.medium.com/max/800/1*0gFo7D_MsfBgaWqvMS00aA.png)

**Key point:**  
The AI does _environment discovery_ before acting.

* * *

### 3\. ZIP hash extraction

Initial attempts fail due to incorrect paths.

HexStrike-AI:

  * Enumerates `/home`
  * Identifies the correct user (`andrey`)
  * Locates:
  * `/home/andrey/secret_file.zip`



Then successfully extracts the ZIP hash:
[code]
    zip2john secret_file.zip > zip_hash.txt
[/code]

* * *

### 4\. Offline password cracking

HexStrike-AI selects the correct cracking strategy:

  * Offline attack (safe, fast, no lockouts)
  * Uses `john` with the provided wordlist


[code]
    john --wordlist=passwords_list.txt zip_hash.txt
[/code]

**Result**
[code]
     Password found: Israel123
[/code]

![](https://cdn-images-1.medium.com/max/800/1*TRaSGxPOQBkXbiPg-xGREA.png)

### 5\. First extraction attempt (failure handling)

The AI attempts:
[code]
    unzip -P Israel123 secret_file.zip
[/code]

Failure occurs:

  * Unsupported compression method (AES / method 99)



**Critical behavior:**  
HexStrike-AI does **not stop** and does **not guess**.

* * *

### 6\. Adaptive pivot (tool switching)

HexStrike-AI:

  * Recognizes AES-encrypted ZIP
  * Checks for alternative tooling
  * Detects `7z` is available
  * Switches extraction method automatically


[code]
    7z x -pIsrael123 secret_file.zip
[/code]

Extraction succeeds.

![](https://cdn-images-1.medium.com/max/800/1*8vRwcwtg6s_rZg_nplK6kw.png)

* * *

### 7\. Flag retrieval

Final step:
[code]
    cat secret_file.txt
[/code]

**Flag recovered**

![](https://cdn-images-1.medium.com/max/800/1*XqUL-oAX4gre4MnjbaOb7Q.png)
[code]
     Your Flag
[/code]

* * *

### Final Result

ItemValueZIP Password`Israel123`EncryptionZIP AESFlag`Your Flag`Attack TypeOffline dictionaryInteractionSingle promptManual interventionNone

* * *

### Why This Matters

This is **not** about cracking ZIP files.

This example demonstrates how **AI-driven execution changes security workflows** :

### What HexStrike-AI did autonomously

  * Identified the correct attack class
  * Located missing files
  * Corrected user errors
  * Selected appropriate tools
  * Pivoted when a tool failed
  * Completed the objective end-to-end



### What the user did

  * Defined scope
  * Provided a wordlist
  * Issued one prompt



* * *

### Key Takeaways

  * AI is not “running tools blindly”
  * It performs **reasoned decision-making**
  * Failures are treated as signals, not blockers
  * Tool chaining is dynamic, not scripted
  * This mirrors how a **real junior pentester / analyst** works — at machine speed



* * *

### Defensive Perspective

From a blue-team standpoint, this highlights why:

  * Weak passwords remain dangerous even with “strong” encryption
  * Offline attacks bypass rate limits entirely
  * Password reuse and leaked wordlists are critical risks



* * *

### Conclusion

This lab shows how **HexStrike-AI + Gemini-CLI** can execute a complete security task:

> _From problem definition → tool discovery → exploitation → validation → result_

All driven by **one prompt**.

This is not automation replacing expertise.  
It is **expertise amplified**.

By [Andrey Pautov](https://medium.com/@1200km) on [December 25, 2025](https://medium.com/p/b8fc5c475ebc).

[Canonical link](https://medium.com/@1200km/ai-driven-zip-password-recovery-with-hexstrike-ai-and-gemini-cli-b8fc5c475ebc)

Exported from [Medium](https://medium.com) on May 15, 2026.
