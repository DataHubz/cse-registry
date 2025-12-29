# CSE-CMMC-AUDIT-NO-CORRELATION-007

**Audit Record Correlation Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-AUDIT-NO-CORRELATION-007` |
| Domain | CMMC |
| Category | AUDIT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Audit records from different sources are not correlated to identify patterns indicating potential security incidents.

This signal indicates that coordinated attacks or complex incidents may go undetected.

## Applicability

- SIEM correlation rules
- Cross-system event analysis
- Threat detection automation
- Pattern-based alerting
- Multi-source log analysis

## Examples (Non-Normative)

### No Correlation Rules

```yaml
siem_configuration:
  log_collection: enabled
  correlation_rules: []
  automated_alerts: none
```

### Disabled Event Correlation

```
SIEM Status:
  Data Ingestion: Active
  Correlation Engine: Disabled
  Alert Rules: 0 configured
```

## CMMC Context (Informative)

- **AU.L2-3.3.1**: Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity
- **AU.L2-3.3.2**: Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions

## Related Signals

- `CSE-CMMC-AUDIT-NO-CENTRAL-MANAGEMENT-006`
- `CSE-CMMC-AUDIT-NO-REVIEW-003`
