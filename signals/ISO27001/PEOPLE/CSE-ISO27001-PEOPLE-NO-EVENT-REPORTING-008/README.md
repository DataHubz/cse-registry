# CSE-ISO27001-PEOPLE-NO-EVENT-REPORTING-008

**No Security Event Reporting Mechanism**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PEOPLE-NO-EVENT-REPORTING-008` |
| Domain | ISO27001 |
| Category | PEOPLE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mechanism for personnel to report observed or suspected security events is not provided. Without clear and accessible reporting channels, security incidents may go unreported, preventing timely response and allowing threats to escalate.

## Applicability

- All personnel (employees, contractors, third parties)
- Security incident reporting procedures
- Phishing and suspicious email reporting
- Physical security concerns
- Data breach or loss incidents
- Policy violation observations
- Anonymous reporting options

## Examples (Non-Normative)

### No Reporting Mechanism Defined

```yaml
security_program:
  incident_management:
    soc_team: true
    automated_detection: true

  personnel_reporting:
    mechanism: null
    # No defined way for employees to report incidents
    channels: []
    training: false
    awareness: false

  contact_information:
    security_team_email: null
    hotline: null
    web_form: null
```

### Unclear Reporting Procedures

```yaml
employee_handbook:
  security_section:
    - follow_security_policies
    - protect_passwords
    - lock_workstation

    # Missing: how to report security incidents
    incident_reporting:
      described: false
      contact_info: null
      examples: []

employee_survey:
  question: "Do you know how to report a security incident?"
  yes: 15
  no: 185  # 92.5% don't know how to report
```

### Inaccessible Reporting Channel

```yaml
incident_reporting:
  primary_channel: "email"
  email: "security@company.internal"  # Internal only

  accessibility:
    remote_workers: false  # Can't access from outside network
    contractors: false     # No access to internal email
    mobile_users: false    # Not accessible from mobile devices

  alternative_channels: []
  response_time_sla: null
  acknowledgment: "none"

  usage_metrics:
    reports_per_month: 0.5  # Extremely low usage indicates problems
```

### Missing Event Types and Examples

```yaml
reporting_guidance:
  what_to_report: "security issues"  # Too vague

  examples: []
  # Missing guidance on:
  # - Phishing emails
  # - Lost/stolen devices
  # - Unauthorized access attempts
  # - Data breaches
  # - Suspicious behavior
  # - Policy violations

  severity_classification: null
  escalation_criteria: null
```

## ISO 27001:2022 Context (Informative)

- **A.6.8 Information security event reporting**: The organization should provide a mechanism for personnel to report observed or suspected information security events through appropriate channels in a timely manner.

## Related Signals

- `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003`
- `CSE-ISO27001-ORGANIZATIONAL-NO-INCIDENT-RESPONSE`
- `CSE-ISO27001-TECHNICAL-NO-SECURITY-MONITORING`
