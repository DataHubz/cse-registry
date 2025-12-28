# CSE-HITRUST-VENDOR-NO-MONITORING-004

**Vendor Monitoring Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-VENDOR-NO-MONITORING-004` |
| Domain | HITRUST |
| Category | VENDOR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Detects the absence of continuous monitoring processes for vendor and third-party service provider security performance. Organizations must implement ongoing monitoring of vendor security controls, compliance status, service delivery, incident response, and risk indicators to ensure vendors maintain appropriate security posture and meet contractual obligations throughout the engagement.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Technology vendors in healthcare sector
- Organizations with critical vendor dependencies

## Examples (Non-Normative)

### Missing Vendor Monitoring

```yaml
# Example: No evidence of vendor monitoring program
vendor_monitoring:
  monitoring_program_established: false
  security_metrics_tracked: false
  compliance_status_monitored: false
  incident_notifications_tracked: false
  performance_reviews: null
  automated_monitoring: false
  alert_thresholds: null
```

## HITRUST Context (Informative)

- **Control Domain**: 16 - Third Party Security
- **Control Reference**: 16.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5 (Policy through Managed)

## Related Signals

- CSE-HITRUST-VENDOR-NO-RISK-ASSESSMENT-001
- CSE-HITRUST-VENDOR-NO-DUE-DILIGENCE-003
- CSE-HITRUST-VENDOR-NO-TERMINATION-005
- CSE-SOC2-CC9-NO-VENDOR-MONITORING-004
- CSE-ISO27001-VENDOR-NO-MONITORING-003
