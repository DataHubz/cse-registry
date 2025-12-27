# CSE-CMMC-PHYSICAL-NO-MONITORING-006

**Physical Security Monitoring Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-PHYSICAL-NO-MONITORING-006` |
| Domain | CMMC |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Physical security monitoring through cameras, alarms, or guards is not implemented for facilities containing CUI.

This signal indicates that physical security incidents may go undetected.

## Applicability

- CCTV surveillance systems
- Intrusion alarm systems
- Security guard services
- Motion detection systems
- Environmental monitoring

## Examples (Non-Normative)

### No Surveillance System

```yaml
security_monitoring:
  cctv_installed: false
  alarm_system: none
  security_guards: none
```

### Inadequate Monitoring

```
Security Assessment:
  CCTV Coverage: Server room only (40%)
  Alarm Zones: Perimeter only
  After-Hours Monitoring: None
  Recording Retention: 7 days
```

## CMMC Context (Informative)

- **PE.L1-3.10.2**: Protect and monitor the physical facility and support infrastructure for organizational systems

## Related Signals

- `CSE-CMMC-PHYSICAL-NO-ACCESS-CONTROL-001`
- `CSE-CMMC-PHYSICAL-NO-ACCESS-LOGS-003`
