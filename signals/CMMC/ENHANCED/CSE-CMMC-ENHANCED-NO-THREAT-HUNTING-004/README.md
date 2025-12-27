# CSE-CMMC-ENHANCED-NO-THREAT-HUNTING-004

**Proactive Threat Hunting Not Performed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-THREAT-HUNTING-004` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Proactive threat hunting activities are not conducted to identify hidden threats.

This signal indicates that undetected adversaries may persist in the environment.

## Applicability

- Threat hunting teams
- Hypothesis-driven investigations
- Compromise assessments
- IOC-based hunting
- Behavioral hunting

## Examples (Non-Normative)

### No Hunting Program

```yaml
threat_hunting:
  program_established: false
  hunting_cadence: none
  dedicated_team: not_assigned
```

### Reactive Security Only

```
Security Operations Assessment:
  Threat Hunting: Not performed
  Proactive Investigations: None
  Last Hunt: Never
```

## CMMC Level 3 Context (Informative)

- **L3-SI.3.14.2e**: Conduct proactive threat hunting activities

## Related Signals

- `CSE-CMMC-ENHANCED-NO-APT-PROTECTION-003`
- `CSE-CMMC-ENHANCED-NO-SOC-010`
