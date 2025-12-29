# CSE-HITRUST-INCIDENT-NO-BREACH-NOTIFICATION-006

**Breach Notification Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-INCIDENT-NO-BREACH-NOTIFICATION-006` |
| Domain          | HITRUST                                           |
| Category        | INCIDENT                                          |
| Control Domain  | 11 - Information Security Incident Management     |
| Reference       | 11.f                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Procedures have not been established for breach notification to affected individuals, regulatory authorities, and other relevant parties in accordance with applicable legal and regulatory requirements.

This signal indicates that an organization has not implemented formal breach notification procedures required to comply with data protection laws, industry regulations, and contractual obligations.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA breach notification rules
- Organizations processing EU personal data under GDPR (72-hour notification)
- Financial institutions with state and federal notification requirements
- Organizations subject to state breach notification laws
- Payment card processors under PCI DSS requirements
- Cloud service providers with customer notification obligations
- Organizations handling personal information across multiple jurisdictions
- Publicly traded companies with disclosure requirements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Notification Procedures

```yaml
# Absence of documented breach notification procedures
# No procedures for:
# - Breach assessment and determination
# - Notification timing requirements
# - Content of notification communications
# - Affected individual notification
# - Regulatory authority notification
```

### Undocumented Notification Requirements

```text
Organization lacks documentation showing:
- Which incidents trigger notification obligations
- Timeline for breach determination
- Required notification timeframes
- Content requirements for notifications
- Methods of notification (mail, email, website)
- Documentation of notification efforts
```

### No Notification Framework

```markdown
# Missing procedures for:
- Breach risk assessment and harm analysis
- Determination of affected individuals
- Notification to regulatory authorities (OCR, FTC, state AGs)
- Individual notification letters and timing
- Media notification for large breaches
- Credit monitoring and remediation offers
```

### Absence of Notification Process

```json
{
  "incident_id": "BREACH-2024-001",
  "breach_determination": null,
  "notification_required": "not_assessed",
  "affected_individuals": "not_identified",
  "regulatory_notification": "not_sent",
  "individual_notification": "not_sent",
  "notification_timeline": "not_defined"
}
```

## What This Signal Does NOT Assert

- Whether a breach has actually occurred
- Whether notification obligations exist
- The timeliness of any informal notifications
- The adequacy of notification content
- Whether legal counsel has been consulted
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **11.f Breach Notification**: The organization shall establish procedures for breach notification in accordance with applicable legal and regulatory requirements

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-INCIDENT-NO-REPORTING-002` — Incident reporting missing
- `CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004` — Privacy compliance not verified
- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified

## Notes

Detection of this signal typically involves:

- Review of breach notification procedures and policies
- Examination of regulatory compliance documentation
- Analysis of notification templates and processes
- Review of legal and regulatory requirement mappings
- Inspection of breach assessment procedures
- Assessment of notification tracking and documentation systems

The presence of this signal indicates a condition that warrants review in the context of information security incident management requirements.
