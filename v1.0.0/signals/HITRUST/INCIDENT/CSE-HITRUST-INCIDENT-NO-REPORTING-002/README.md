# CSE-HITRUST-INCIDENT-NO-REPORTING-002

**Incident Reporting Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-INCIDENT-NO-REPORTING-002`           |
| Domain          | HITRUST                                           |
| Category        | INCIDENT                                          |
| Control Domain  | 11 - Information Security Incident Management     |
| Reference       | 11.b                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Information security events have not been reported through appropriate management channels as quickly as possible, or reporting mechanisms and procedures have not been established.

This signal indicates that an organization has not implemented formal incident reporting procedures that enable timely notification of security events to appropriate stakeholders and management.

## Applicability

This signal applies to:

- Healthcare organizations with HIPAA breach notification requirements
- Financial institutions subject to regulatory reporting obligations
- Organizations processing payment card data under PCI DSS
- Cloud service providers with customer notification requirements
- Government contractors with incident reporting mandates
- Organizations subject to GDPR breach notification requirements
- Publicly traded companies with disclosure obligations
- Managed service providers with contractual reporting SLAs

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Reporting Channels

```yaml
# Absence of documented reporting mechanisms
# No defined channels for:
# - Internal incident reporting
# - Management escalation paths
# - Regulatory notification procedures
# - Customer communication protocols
# - Law enforcement coordination
```

### Undocumented Reporting Procedures

```text
Organization lacks documentation showing:
- How employees should report suspected incidents
- Contact information for security team
- Reporting timelines and requirements
- Escalation criteria to management
- External reporting obligations
- Communication templates and formats
```

### No Reporting Framework

```markdown
# Missing procedures for:
- Initial incident notification to security team
- Management escalation based on severity
- Regulatory reporting timeframes
- Customer breach notification
- Board and executive reporting
- Third-party vendor notification
```

### Absence of Reporting Mechanisms

```json
{
  "incident_id": "INC-2024-001",
  "reporting_channel": null,
  "notification_sent": false,
  "management_informed": "no_procedure",
  "escalation_path": "not_defined",
  "regulatory_reporting": "not_documented"
}
```

## What This Signal Does NOT Assert

- Whether incidents are being reported informally
- The timeliness of any existing reporting
- Whether management has been notified of incidents
- The quality or completeness of incident reports
- Whether external reporting obligations exist
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **11.b Reporting Information Security Events**: Information security events shall be reported through appropriate management channels as quickly as possible

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-INCIDENT-NO-PROCEDURES-001` — Incident procedures missing
- `CSE-HITRUST-INCIDENT-NO-RESPONSE-003` — Incident response missing
- `CSE-HITRUST-INCIDENT-NO-BREACH-NOTIFICATION-006` — Breach notification missing

## Notes

Detection of this signal typically involves:

- Review of incident reporting documentation
- Examination of escalation procedures
- Analysis of communication protocols
- Review of management notification processes
- Inspection of regulatory reporting procedures
- Assessment of incident tracking systems

The presence of this signal indicates a condition that warrants review in the context of information security incident management requirements.
