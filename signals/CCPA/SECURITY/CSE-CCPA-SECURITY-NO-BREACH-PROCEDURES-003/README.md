# CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003

**Breach Response Procedures Missing (§1798.150)**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003` |
| Domain | CCPA |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal identifies when a business lacks documented and tested incident response procedures for detecting, responding to, and mitigating data breaches involving personal information. While CCPA §1798.150 doesn't explicitly require breach procedures, having them is essential to fulfilling the duty to implement reasonable security measures and to respond appropriately when breaches occur.

## Applicability

- Businesses required to implement reasonable security procedures under CCPA §1798.150
- Organizations that have experienced a security incident but lack documented response procedures
- Companies without incident detection, escalation, or notification workflows
- Businesses that have not tested or updated their breach response plans

## Examples (Non-Normative)

### Missing Incident Response Plan

```yaml
security_documentation:
  incident_response_plan: false
  breach_notification_procedures: false
  escalation_matrix: false
  contact_list: []
  forensics_procedures: false
  containment_protocols: false
  signal: CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003
  compliance_gap: true
```

### Untested Response Procedures

```yaml
incident_readiness:
  documented_plan: true
  last_updated: "2020-01-15"
  tested: false
  tabletop_exercises: []
  staff_training: false
  third_party_contacts: "outdated"
  notification_templates: "not available"
  signal: CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003
  effectiveness: questionable
```

### Incomplete Breach Detection

```yaml
security_monitoring:
  intrusion_detection: false
  log_monitoring: false
  anomaly_detection: false
  security_alerts: "not configured"
  mean_time_to_detect: "unknown"
  breach_detection_capability: "minimal"
  signal: CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003
  risk_level: high
```

## CCPA Context (Informative)

- **Section**: §1798.150
- **Requirement**: While not explicitly mandating breach procedures, §1798.150 establishes a private right of action for data breaches resulting from failure to implement reasonable security measures. Having documented breach response procedures is a key component of reasonable security practices.
- **Added by**: CCPA

## Related Signals

- `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001`
- `CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005`
- `CSE-CCPA-RIGHTS-NO-BREACH-NOTICE-010`
