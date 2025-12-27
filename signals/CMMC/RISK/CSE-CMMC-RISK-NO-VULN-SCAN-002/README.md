# CSE-CMMC-RISK-NO-VULN-SCAN-002

**Vulnerability Scanning Not Implemented**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CMMC-RISK-NO-VULN-SCAN-002`    |
| Domain          | CMMC                                |
| Category        | RISK                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

Systems are not regularly scanned for security vulnerabilities using automated tools.

This signal indicates that known vulnerabilities in systems, applications, or configurations may exist without being identified.

## Applicability

This signal applies to:

- Network vulnerability scanning
- Web application security testing
- Container image scanning
- Infrastructure-as-code security scanning
- Cloud configuration assessment
- Dependency vulnerability scanning
- Database security scanning

## Examples (Non-Normative)

### No Vulnerability Scanner Deployed

```
Scanning Infrastructure:
- Network scanner: None
- Web scanner: None
- Container scanner: None
```

### Scanning Disabled

```yaml
# CI/CD pipeline without security scanning
stages:
  - build
  - test
  - deploy
  # No security scan stage
```

### Outdated Scan Data

```
Last vulnerability scan: 180+ days ago
Scheduled scans: Disabled
```

## What This Signal Does NOT Assert

- The presence of specific vulnerabilities
- Whether systems have been compromised
- The effectiveness of other controls
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **RA.L2-3.11.2**: Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified
- **RA.L2-3.11.3**: Remediate vulnerabilities in accordance with risk assessments

## Related Signals

- `CSE-CMMC-INTEGRITY-NO-PATCHING-002` — Security Patching Not Current
- `CSE-CMMC-RISK-NO-ASSESSMENT-001` — Risk Assessment Not Conducted
