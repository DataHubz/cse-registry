# CSE-CIS-INCIDENT-NO-ROLES-003

**Incident Response Roles Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-INCIDENT-NO-ROLES-003`    |
| Domain          | CIS                                |
| Category        | INCIDENT                           |
| Control         | 17 - Incident Response Management  |
| Safeguard       | 17.3                               |
| IG Level        | IG1                                |
| Asset Type      | N/A                                |
| Security Function | Respond                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks defined incident response roles and responsibilities.

This signal indicates that there are no documented roles, responsibilities, and decision-making authorities for personnel involved in incident response activities. Without clearly defined roles, incident response efforts may be chaotic, uncoordinated, and ineffective, with confusion about who is responsible for critical decisions and actions.

## Applicability

This signal applies to:

- Enterprise incident response plans
- Security operations center (SOC) staffing
- Computer security incident response team (CSIRT) organization
- Organizational charts and role definitions
- Security policy documentation
- Job descriptions and responsibilities
- Incident management frameworks

## Examples (Non-Normative)

### Missing Role Definitions

```
No documented roles for:
- Incident response coordinator
- Security analysts
- Technical leads
- Communications officer
- Management escalation points
- Legal and compliance representatives
```

### Undefined Responsibilities

```yaml
# No role assignments for incident response
incident_response_team:
  coordinator: undefined
  analysts: []
  technical_leads: []
  decision_authority: undefined
  communications: undefined
  legal_liaison: undefined
```

### Lack of Decision Authority

```
No clear assignments for:
- Who can declare an incident
- Who authorizes containment actions
- Who approves system isolation
- Who communicates with external parties
- Who coordinates recovery efforts
```

### Missing Organizational Structure

```
Incident response lacks:
- Defined team structure
- Clear reporting lines
- Escalation procedures
- Backup personnel assignments
- Cross-functional coordination
- Authority levels and boundaries
```

## What This Signal Does NOT Assert

- Whether capable personnel exist in the organization
- The technical competency of staff
- Whether informal roles are understood
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of ad-hoc team formation

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 17: Incident Response Management**
- **Safeguard 17.3**: Establish and maintain an enterprise process for the reporting of security incidents. The process includes reporting timeframe, personnel to report to, mechanism for reporting, and the minimum information to be reported. Ensure the process is publicly available to all of the enterprise's workforce. Review annually, or when significant enterprise changes occur that could impact this Safeguard

## Related Signals

- `CSE-CIS-INCIDENT-NO-PLAN-001` — Incident Response Plan Missing
- `CSE-CIS-INCIDENT-NO-CONTACTS-002` — Incident Reporting Contacts Missing
- `CSE-CIS-INCIDENT-NO-EXERCISES-004` — Incident Response Exercises Missing
