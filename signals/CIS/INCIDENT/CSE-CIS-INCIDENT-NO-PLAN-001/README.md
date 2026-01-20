# CSE-CIS-INCIDENT-NO-PLAN-001

**Incident Response Plan Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-INCIDENT-NO-PLAN-001`     |
| Domain          | CIS                                |
| Category        | INCIDENT                           |
| Control         | 17 - Incident Response Management  |
| Safeguard       | 17.1                               |
| IG Level        | IG1                                |
| Asset Type      | N/A                                |
| Security Function | Respond                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a documented and implemented incident response plan.

This signal indicates that there is no formal incident response plan defining how the organization will detect, respond to, and recover from security incidents. Without a documented plan, the organization may be unprepared to effectively handle security events, leading to extended incident durations, increased damage, and regulatory non-compliance.

## Applicability

This signal applies to:

- Enterprise incident response policies and procedures
- Security operations center (SOC) operations
- Computer security incident response team (CSIRT) capabilities
- Business continuity and disaster recovery planning
- Organizational security documentation
- Compliance and governance frameworks
- Incident management programs

## Examples (Non-Normative)

### Missing Incident Response Documentation

```
No documented plan exists defining:
- Incident detection and analysis procedures
- Containment strategies
- Eradication and recovery steps
- Post-incident activities
```

### Undefined Response Procedures

```yaml
# No configuration management for incident response
incident_response_plan:
  status: undefined
  documented: false
  approved: false
  implemented: false
  last_updated: never
```

### Ad-Hoc Incident Handling

```
Organization relies on:
- Reactive responses without planning
- Individual judgment during incidents
- No standardized response procedures
- Inconsistent handling across incidents
```

### Missing Plan Components

```
No documented procedures for:
- Incident classification and prioritization
- Communication protocols during incidents
- Evidence collection and preservation
- Coordination with external parties
- Legal and regulatory notification requirements
```

## What This Signal Does NOT Assert

- Whether incidents have occurred or are occurring
- The organization's ability to detect security events
- Whether informal response capabilities exist
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of ad-hoc incident handling

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 17: Incident Response Management**
- **Safeguard 17.1**: Designate personnel to manage incident handling and designated recovery activities. Review annually, or when significant enterprise changes occur that could impact this Safeguard

## Related Signals

- `CSE-CIS-INCIDENT-NO-CONTACTS-002` — Incident Reporting Contacts Missing
- `CSE-CIS-INCIDENT-NO-ROLES-003` — Incident Response Roles Missing
- `CSE-CIS-INCIDENT-NO-EXERCISES-004` — Incident Response Exercises Missing
