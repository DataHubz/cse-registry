# CSE-ISO27001-TECH-NO-MONITORING-016

**No Monitoring Activities**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-MONITORING-016` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Networks, systems, and applications are not monitored for anomalous behavior and appropriate actions taken. This signal indicates a lack of proactive monitoring that could delay detection of security incidents, performance issues, or operational problems. This is a new control in ISO 27001:2022.

## Applicability

- Organizations without security monitoring tools (SIEM, IDS/IPS)
- Environments lacking network and system monitoring
- Systems without anomaly detection capabilities
- Organizations without defined incident response procedures
- Environments lacking 24/7 security operations or monitoring coverage

## Examples (Non-Normative)

### No Security Monitoring

```yaml
monitoring_configuration:
  siem: not_deployed
  ids_ips: not_configured
  edr: not_installed
  network_monitoring: disabled
  application_monitoring: none
  anomaly_detection:
    behavioral_analysis: not_available
    baseline_established: false
  alerting:
    security_alerts: disabled
    escalation_procedures: undefined
```

### Reactive-Only Approach

```yaml
security_operations:
  monitoring_coverage: business_hours_only
  log_review: manual_weekly
  threat_detection:
    automated: false
    threat_intelligence: not_integrated
  incident_response:
    detection_time: unknown
    response_procedures: undefined
  monitoring_tools:
    siem: not_implemented
    user_behavior_analytics: none
```

## ISO 27001:2022 Context (Informative)

- **A.8.16 Monitoring activities**: Networks, systems and applications shall be monitored for anomalous behaviour and appropriate actions taken to evaluate potential information security incidents. This is a NEW control in ISO 27001:2022.

## Related Signals

- `CSE-ISO27001-TECH-NO-LOGGING-015`
- `CSE-ISO27001-TECH-NO-MALWARE-PROTECTION-007`
- `CSE-ISO27001-TECH-NO-VULN-MANAGEMENT-008`
- `CSE-ISO27001-TECH-NO-DLP-012`
