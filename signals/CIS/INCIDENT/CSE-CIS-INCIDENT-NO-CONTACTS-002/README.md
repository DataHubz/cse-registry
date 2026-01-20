# CSE-CIS-INCIDENT-NO-CONTACTS-002

**Incident Reporting Contacts Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-INCIDENT-NO-CONTACTS-002` |
| Domain          | CIS                                |
| Category        | INCIDENT                           |
| Control         | 17 - Incident Response Management  |
| Safeguard       | 17.2                               |
| IG Level        | IG1                                |
| Asset Type      | N/A                                |
| Security Function | Respond                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks documented incident reporting contacts and procedures.

This signal indicates that there are no established and documented points of contact for reporting security incidents. Without clear reporting mechanisms, employees and stakeholders may not know how to report suspected security incidents, leading to delayed detection, prolonged incidents, and increased damage.

## Applicability

This signal applies to:

- Enterprise incident response programs
- Security awareness and training materials
- Internal communication procedures
- Security operations center (SOC) contact information
- Computer security incident response team (CSIRT) capabilities
- Employee handbooks and security policies
- Organizational communication channels

## Examples (Non-Normative)

### Missing Contact Information

```
No documented contacts for:
- Security incident reporting
- After-hours emergency response
- Internal security team escalation
- External incident reporting (ISACs, law enforcement)
```

### Undefined Reporting Procedures

```yaml
# No configuration for incident reporting
incident_contacts:
  internal_soc: undefined
  csirt_email: undefined
  emergency_phone: undefined
  escalation_list: []
  external_contacts: []
```

### Lack of Communication Channels

```
No established methods for:
- Employee incident reporting
- Automated alert notifications
- Management escalation
- Vendor security notifications
- Customer incident communication
```

### Missing Contact Documentation

```
Organization lacks:
- Published security contact information
- Incident reporting forms or portals
- Clear escalation procedures
- Contact information in policies
- Communication tree for incidents
```

## What This Signal Does NOT Assert

- Whether incidents are being reported informally
- The organization's ability to detect incidents
- Whether security contacts exist but are undocumented
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of informal reporting

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 17: Incident Response Management**
- **Safeguard 17.2**: Establish and maintain contact information for parties that need to be informed of security incidents. Contacts may include internal staff, third-party vendors, law enforcement, cyber insurance providers, relevant government agencies, Information Sharing and Analysis Center (ISAC) partners, or other stakeholders. Verify contacts annually to ensure that information is up-to-date

## Related Signals

- `CSE-CIS-INCIDENT-NO-PLAN-001` — Incident Response Plan Missing
- `CSE-CIS-INCIDENT-NO-ROLES-003` — Incident Response Roles Missing
- `CSE-CIS-TRAINING-NO-AWARENESS-001` — Security Awareness Training Missing
