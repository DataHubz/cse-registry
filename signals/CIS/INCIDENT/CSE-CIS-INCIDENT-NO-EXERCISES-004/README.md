# CSE-CIS-INCIDENT-NO-EXERCISES-004

**Incident Response Exercises Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-INCIDENT-NO-EXERCISES-004`|
| Domain          | CIS                                |
| Category        | INCIDENT                           |
| Control         | 17 - Incident Response Management  |
| Safeguard       | 17.4                               |
| IG Level        | IG2                                |
| Asset Type      | N/A                                |
| Security Function | Respond                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks regular incident response exercises and testing.

This signal indicates that the organization does not conduct regular tabletop exercises, simulations, or tests of incident response capabilities. Without periodic testing, the incident response plan may become outdated, personnel may not be familiar with their roles, and gaps in response capabilities may go undetected until a real incident occurs.

## Applicability

This signal applies to:

- Enterprise incident response programs
- Security operations center (SOC) training
- Computer security incident response team (CSIRT) readiness
- Business continuity and disaster recovery testing
- Security awareness programs
- Organizational resilience initiatives
- Compliance validation activities

## Examples (Non-Normative)

### Missing Exercise Program

```
No documented exercises for:
- Tabletop scenario discussions
- Technical simulation drills
- Full-scale incident response tests
- Cross-functional coordination practice
- Communication procedure validation
```

### Undefined Testing Schedule

```yaml
# No exercise program defined
incident_response_exercises:
  tabletop_exercises: never
  technical_simulations: never
  full_scale_tests: never
  last_exercise: never
  next_scheduled: undefined
  participation_tracking: false
```

### Lack of Preparedness Testing

```
No regular testing of:
- Incident detection capabilities
- Escalation procedures
- Communication channels
- Technical response tools
- Recovery procedures
- Third-party coordination
```

### Missing Exercise Documentation

```
Organization lacks:
- Exercise planning procedures
- Scenario development process
- Participation tracking
- Exercise after-action reports
- Improvement tracking from exercises
- Regular exercise schedule
```

## What This Signal Does NOT Assert

- Whether the incident response plan is adequate
- The organization's ability to respond to actual incidents
- Whether informal testing or discussions occur
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of the response plan

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 17: Incident Response Management**
- **Safeguard 17.4**: Establish and maintain a process to conduct periodic incident response exercises. Exercises need to test communication channels, decision-making, and workflows. Conduct testing on an annual basis, at a minimum

## Related Signals

- `CSE-CIS-INCIDENT-NO-PLAN-001` — Incident Response Plan Missing
- `CSE-CIS-INCIDENT-NO-ROLES-003` — Incident Response Roles Missing
- `CSE-CIS-INCIDENT-NO-LESSONS-LEARNED-005` — Post-Incident Review Missing
