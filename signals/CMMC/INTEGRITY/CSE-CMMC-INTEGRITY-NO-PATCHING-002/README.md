# CSE-CMMC-INTEGRITY-NO-PATCHING-002

**Security Patching Not Current**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CMMC-INTEGRITY-NO-PATCHING-002`     |
| Domain          | CMMC                                     |
| Category        | INTEGRITY                                |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Systems have not been updated with current security patches or are running software versions with known vulnerabilities.

This signal indicates that systems may be exposed to exploits for publicly disclosed vulnerabilities.

## Applicability

This signal applies to:

- Operating system patches
- Application updates
- Third-party library versions
- Firmware updates
- Container base images
- Runtime environments
- Database software

## Examples (Non-Normative)

### Outdated Operating System

```bash
$ cat /etc/os-release
VERSION="18.04 LTS"  # End of life
```

### Vulnerable Dependencies

```json
{
  "dependencies": {
    "lodash": "4.17.11"  # Known CVE
  }
}
```

### Missing Windows Updates

```powershell
Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 1
# Last patch installed: 180 days ago
```

### Outdated Container Image

```dockerfile
FROM node:12  # End of life version
```

### Vulnerable Library

```bash
$ npm audit
found 15 vulnerabilities (5 high, 10 critical)
```

## What This Signal Does NOT Assert

- Whether vulnerabilities are actively exploited
- The severity of specific vulnerabilities
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SI.L2-3.14.1**: Identify, report, and correct system flaws in a timely manner

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001` — Malware Protection Not Implemented
- `CSE-CMMC-CONFIG-NO-BASELINE-001` — Security Configuration Baseline Not Defined
