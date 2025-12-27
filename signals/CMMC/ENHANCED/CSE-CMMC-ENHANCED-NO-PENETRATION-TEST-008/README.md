# CSE-CMMC-ENHANCED-NO-PENETRATION-TEST-008

**Penetration Testing Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-PENETRATION-TEST-008` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Regular penetration testing of systems and applications is not conducted.

This signal indicates that exploitable vulnerabilities may exist without detection.

## Applicability

- Network penetration testing
- Application security testing
- Social engineering assessments
- Physical penetration testing
- Cloud security testing

## Examples (Non-Normative)

### No Penetration Testing

```yaml
penetration_testing:
  program_established: false
  annual_testing: not_performed
  scope: undefined
```

### Outdated Testing

```
Penetration Test Records:
  Last External Test: 3 years ago
  Last Internal Test: Never
  Web App Testing: Not performed
```

## CMMC Level 3 Context (Informative)

- **L3-CA.3.12.3e**: Conduct penetration testing on organizational systems

## Related Signals

- `CSE-CMMC-ENHANCED-NO-RED-TEAM-009`
- `CSE-CMMC-RISK-NO-VULNERABILITY-SCAN-001`
