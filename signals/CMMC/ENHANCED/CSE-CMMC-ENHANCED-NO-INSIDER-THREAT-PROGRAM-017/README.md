# CSE-CMMC-ENHANCED-NO-INSIDER-THREAT-PROGRAM-017

**Insider Threat Program Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-INSIDER-THREAT-PROGRAM-017` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

A formal insider threat program to detect and prevent malicious insider activity is not established.

This signal indicates that insider threats may not be systematically detected or addressed.

## Applicability

- Insider threat detection
- User behavior analytics
- Data loss prevention
- Privileged user monitoring
- Insider threat investigations

## Examples (Non-Normative)

### No Insider Threat Program

```yaml
insider_threat:
  program_established: false
  user_monitoring: none
  investigation_process: not_defined
```

### Missing Insider Detection

```
Insider Threat Assessment:
  Formal Program: Not established
  UBA/UEBA: Not deployed
  DLP: Not implemented
```

## CMMC Level 3 Context (Informative)

- **L3-PS.3.9.1e**: Establish a formal insider threat program

## Related Signals

- `CSE-CMMC-AWARENESS-NO-INSIDER-THREAT-TRAINING-002`
- `CSE-CMMC-ENHANCED-NO-BEHAVIOR-ANALYTICS-021`
