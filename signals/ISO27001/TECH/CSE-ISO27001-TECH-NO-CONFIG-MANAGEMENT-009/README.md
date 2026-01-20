# CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009

**No Configuration Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Configurations including security configurations are not established, documented, and managed. This signal indicates a lack of systematic configuration management processes and documentation. This is a new control in ISO 27001:2022.

## Applicability

- Organizations without documented baseline configurations
- Environments lacking configuration management databases (CMDB)
- Systems deployed without security hardening standards
- Organizations that do not track or detect configuration drift
- Environments without Infrastructure as Code or configuration automation

## Examples (Non-Normative)

### Undocumented Configuration

```yaml
configuration_management:
  baseline_configs:
    documented: false
    version_controlled: false
    security_hardening: not_applied
  tracking:
    cmdb: not_implemented
    drift_detection: disabled
    change_tracking: manual
  enforcement:
    automation: none
    compliance_scanning: never
    remediation: ad_hoc
```

### Manual Configuration Drift

```yaml
server_configuration:
  baseline_defined: false
  security_settings:
    documented: false
    hardening_guide: not_followed
  configuration_state:
    last_audit: never
    known_drift: yes
    automated_remediation: disabled
  change_management:
    approval_required: false
    rollback_capability: none
```

## ISO 27001:2022 Context (Informative)

- **A.8.9 Configuration management**: Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, implemented, monitored and reviewed. This is a NEW control in ISO 27001:2022.

## Related Signals

- `CSE-ISO27001-TECH-NO-VULN-MANAGEMENT-008`
- `CSE-ISO27001-TECH-NO-ENDPOINT-SECURITY-001`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
