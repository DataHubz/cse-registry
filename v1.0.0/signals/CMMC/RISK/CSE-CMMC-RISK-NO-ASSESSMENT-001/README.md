# CSE-CMMC-RISK-NO-ASSESSMENT-001

**Risk Assessment Not Conducted**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-CMMC-RISK-NO-ASSESSMENT-001`   |
| Domain          | CMMC                                |
| Category        | RISK                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

The organization has not conducted periodic risk assessments to identify threats, vulnerabilities, and potential impacts to systems and data.

This signal indicates that security risks may not be formally identified, documented, or prioritized.

## Applicability

This signal applies to:

- Organizational risk assessments
- System-level risk analysis
- Threat modeling activities
- Vulnerability identification
- Impact and likelihood analysis
- Risk registers and documentation
- Risk treatment planning

## Examples (Non-Normative)

### No Risk Assessment Documentation

```
/security/
├── policies/
└── # No risk assessment documents
```

### Outdated Risk Assessment

```markdown
# Risk Assessment
Last Updated: 2019-01-15
Status: Never reviewed
```

### Missing Risk Register

```
Risk Register: Not found
Threat Model: Not found
```

## What This Signal Does NOT Assert

- The actual risk level of the organization
- Whether informal risk analysis occurs
- The effectiveness of security controls
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **RA.L2-3.11.1**: Periodically assess the risk to organizational operations, organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI

## Related Signals

- `CSE-CMMC-RISK-NO-VULN-SCAN-002` — Vulnerability Scanning Not Implemented
- `CSE-CMMC-INTEGRITY-NO-PATCHING-002` — Security Patching Not Current
