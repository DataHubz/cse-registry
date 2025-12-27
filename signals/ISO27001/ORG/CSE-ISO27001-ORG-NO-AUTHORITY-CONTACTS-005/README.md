# CSE-ISO27001-ORG-NO-AUTHORITY-CONTACTS-005

**No Contact with Authorities**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-AUTHORITY-CONTACTS-005` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization has not established and maintained contacts with relevant authorities for security incident reporting.

## Applicability

- Organizations without documented contacts for law enforcement agencies
- Environments lacking relationships with regulatory authorities
- Companies without data protection authority contact procedures
- Organizations that have not identified relevant sectoral regulators
- Incident response plans missing authority escalation procedures

## Examples (Non-Normative)

### Missing Authority Contact List

```yaml
incident_response_plan:
  authority_contacts:
    law_enforcement: null
    data_protection_authority: null
    industry_regulator: null
    national_cybersecurity_center: null
  escalation_procedures: "not_documented"
```

### Undefined Reporting Thresholds

```yaml
authority_reporting:
  contacts_defined: false
  reporting_criteria:
    data_breach_notification: "undefined"
    law_enforcement_engagement: "undefined"
    regulatory_reporting: "undefined"
  last_review_date: null
```

## ISO 27001:2022 Context (Informative)

- **A.5.5 Contact with authorities**: The organization should establish and maintain contact with relevant authorities. This can include law enforcement, regulatory bodies, supervisory authorities and other authorities with a responsibility for information security incidents, as appropriate to the organization's context.

## Related Signals

- `CSE-ISO27001-ORG-NO-INTEREST-GROUP-CONTACTS-006`
