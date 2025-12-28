# CSE-CIS-SOFTWARE-NO-ALLOWLISTING-SCRIPTS-007

**Script Allowlisting Not Implemented**

## Signal Overview

| Field           | Value                                              |
|-----------------|----------------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-SCRIPTS-007`     |
| Domain          | CIS                                                |
| Category        | SOFTWARE                                           |
| Status          | Active                                             |
| Introduced In   | 1.0.0                                              |

## Description

An organization does not implement technical controls to restrict the execution of unauthorized scripts on enterprise assets.

This signal indicates that scripts in languages such as PowerShell, Bash, Python, JavaScript, and others can execute without verification or authorization checks, potentially allowing malicious code execution through scripting engines.

## Applicability

This signal applies to:

- Windows systems with PowerShell
- Linux/Unix systems with shell access
- macOS systems with Terminal access
- Web browsers executing JavaScript
- Application servers running server-side scripts
- Automation and orchestration platforms
- Database systems with stored procedures
- Configuration management tools

## Examples (Non-Normative)

### PowerShell Execution Policy Not Enforced

```powershell
# PowerShell with unrestricted execution
Get-ExecutionPolicy
# Unrestricted or Bypass

# No script signing required
Get-ChildItem Cert:\CurrentUser\TrustedPublisher
# Empty or not checked
```

### No Bash Script Restrictions

```bash
# Any script can execute
$ chmod +x malicious.sh
$ ./malicious.sh
# No allowlist check performed

# No SELinux script restrictions
$ ls -Z /usr/local/bin/*.sh
# No security context restrictions
```

### JavaScript Execution Unrestricted

```html
<!-- Web application allowing inline scripts -->
<script>
  // No Content Security Policy restrictions
  eval(userInput); // Dangerous and unrestricted
</script>
```

### No Python Script Control

```bash
# Python scripts execute without verification
$ python3 untrusted-script.py
# No allowlist check, no signature verification

# No restricted execution environment
$ python3 -c "import os; os.system('rm -rf /')"
# Command executes without restriction
```

## What This Signal Does NOT Assert

- Whether malicious scripts have executed
- The specific control mechanism to be used
- Compliance or non-compliance with any framework
- Exceptions for administrative scripts
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.7**: Allowlist authorized scripts. Block unauthorized scripts from executing. Reassess bi-annually, or more frequently.
- **Implementation Group**: IG3
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005` — Software Allowlisting Not Implemented
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-LIBRARIES-006` — Library Allowlisting Not Implemented
- `CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003` — Unauthorized Software Detection Missing
