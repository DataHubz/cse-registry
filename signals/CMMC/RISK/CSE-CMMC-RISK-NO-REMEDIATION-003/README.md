# CSE-CMMC-RISK-NO-REMEDIATION-003

**Vulnerability Remediation Not Performed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-RISK-NO-REMEDIATION-003` |
| Domain | CMMC |
| Category | RISK |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Identified vulnerabilities are not remediated in a timely manner according to risk priorities.

This signal indicates that known security weaknesses may persist and remain exploitable.

## Applicability

- Patching timelines
- Vulnerability remediation tracking
- Risk-based prioritization
- Remediation verification
- Exception management

## Examples (Non-Normative)

### Aged Critical Vulnerabilities

```yaml
vulnerability_status:
  critical_vulns_over_30_days: 15
  high_vulns_over_60_days: 47
  remediation_sla_met: 23%
```

### No Remediation Tracking

```
Vulnerability Management:
  Scanning: Active
  Findings: 250 vulnerabilities
  Remediation Tracking: None
  Average Age: 180 days
```

## CMMC Context (Informative)

- **RA.L2-3.11.3**: Remediate vulnerabilities in accordance with assessments of risk

## Related Signals

- `CSE-CMMC-RISK-NO-VULNERABILITY-SCAN-001`
- `CSE-CMMC-CONFIG-NO-PATCH-MANAGEMENT-003`
