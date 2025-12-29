# CSE-CIS-AUDIT-NO-DETAILED-LOGGING-004

**Detailed Command Logging Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-AUDIT-NO-DETAILED-LOGGING-004` |
| Domain          | CIS                                |
| Category        | AUDIT                              |
| Control         | 08 - Audit Log Management          |
| Safeguard       | 8.4                                |
| IG Level        | IG2                                |
| Asset Type      | Network                            |
| Security Function | Detect                           |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

Systems are not configured to log detailed command-line activity, including administrative commands executed by users.

This signal indicates that there is insufficient logging of command execution, making it difficult to track privileged user actions, detect unauthorized activities, or conduct forensic investigations of security incidents.

## Applicability

This signal applies to:

- Linux/Unix shell command logging (bash, zsh, sh)
- Windows PowerShell logging
- Windows Command Prompt logging
- Privileged access management (PAM) systems
- Jump servers and bastion hosts
- Database command logging
- Network device CLI logging
- Container exec command logging
- SSH session logging

## Examples (Non-Normative)

### Bash History Disabled

```bash
$ echo $HISTSIZE
0
# Command history disabled

$ cat ~/.bash_history
# File empty or non-existent
```

### PowerShell Logging Not Enabled

```powershell
Get-WinEvent -LogName "Microsoft-Windows-PowerShell/Operational"
# No PowerShell command execution logs

# Module logging disabled
(Get-Module).LogPipelineExecutionDetails
False
```

### No auditd Rules for execve

```bash
$ auditctl -l
No rules
# execve syscall not being audited
```

### Missing Script Block Logging

```
# PowerShell script block logging disabled
Registry: HKLM\SOFTWARE\Policies\Microsoft\Windows\PowerShell\ScriptBlockLogging
EnableScriptBlockLogging: 0 or not present
```

### Sudo Without Logging

```bash
$ grep log_output /etc/sudoers
# No log_output directive configured

# Sudo commands not being logged to syslog
```

### SSH Session Without Recording

```bash
# No session recording configured
$ ls /var/log/session-recordings/
ls: cannot access '/var/log/session-recordings/': No such file or directory
```

### Database Without Command Audit

```sql
-- PostgreSQL audit logging disabled
SHOW log_statement;
 log_statement
---------------
 none
```

## What This Signal Does NOT Assert

- Whether basic authentication logging exists
- Whether security incidents have occurred
- The storage or retention of existing logs
- Compliance or non-compliance with any framework
- Required logging verbosity levels
- Performance impact of command logging

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 8: Audit Log Management**
- **Safeguard 8.4**: Standardize time synchronization. Configure at least two synchronized time sources across enterprise assets, where supported

## Related Signals

- `CSE-CIS-AUDIT-NO-PROCESS-001` — Audit Log Management Process Missing
- `CSE-CIS-AUDIT-NO-TIMESTAMPS-003` — Audit Log Timestamps Missing
- `CSE-CIS-AUDIT-NO-CENTRALIZED-007` — Centralized Log Management Missing
- `CSE-CIS-AUDIT-NO-REVIEW-008` — Audit Log Review Missing
