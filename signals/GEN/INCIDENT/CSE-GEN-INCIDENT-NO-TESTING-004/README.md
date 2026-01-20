# CSE-GEN-INCIDENT-NO-TESTING-004

**Incident Response Testing Missing**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-GEN-INCIDENT-NO-TESTING-004`     |
| Domain          | GEN (General)                         |
| Category        | INCIDENT                              |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Incident response plans and procedures are not tested through exercises or simulations.

This signal indicates that the organization has not validated the effectiveness of its incident response capabilities through tabletop exercises, simulations, or actual response drills, potentially leaving gaps and inefficiencies undiscovered.

## Applicability

This signal applies to:

- Incident response testing and exercise programs
- Tabletop exercise planning and execution
- Simulation and drill documentation
- Incident response team training and readiness
- Business continuity and disaster recovery testing
- Red team and purple team exercises
- Crisis management simulations
- Recovery procedure validation

## Examples (Non-Normative)

### No Testing Documentation

```
/incident-response/
├── incident-response-plan.md
├── playbooks/
│   ├── ransomware-response.md
│   ├── data-breach-response.md
│   └── ddos-response.md
└── # No testing or exercise records
```

### Testing Planned but Not Executed

```markdown
# Incident Response Plan

## Testing Schedule
- Quarterly tabletop exercises
- Annual disaster recovery test
- Semi-annual backup restore validation

## Last Test Date
Never tested

## Next Scheduled Test
TBD
```

### Incomplete Exercise Documentation

```markdown
# Tabletop Exercise - 2023-Q1

## Planned
- Date: March 15, 2023
- Scenario: Ransomware attack
- Participants: IR team, IT leadership

## Status
Postponed - rescheduling pending
```

### Testing Plan Without Evidence

```yaml
# Testing configuration
incident_response_testing:
  enabled: false
  frequency: quarterly
  participants:
    - security_team
    - it_operations
  scenarios:
    - data_breach
    - ransomware
  # No execution logs or results
```

## What This Signal Does NOT Assert

- Whether the incident response plan itself exists
- Whether the organization has responded to actual incidents
- The quality or effectiveness of the response plan
- Compliance or non-compliance with any specific framework
- Required testing frequency or methods
- Whether informal walkthroughs have occurred

## Related Signals

- `CSE-GEN-INCIDENT-NO-RESPONSE-PLAN-001` — Incident Response Plan Missing
- `CSE-GEN-INCIDENT-NO-RECOVERY-PLAN-003` — Disaster Recovery Plan Missing
- `CSE-GEN-INCIDENT-NO-LESSONS-LEARNED-005` — Post-Incident Review Missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 17.9 — Conduct periodic incident response exercises
- **NIST CSF**: RS.RP-1 — Response plan is executed during or after an incident
- **ISO 27001**: A.17.1.3 — Verify, review and evaluate information security continuity

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning for testing and exercise documentation
- Checking calendar systems for scheduled drills
- Reviewing exercise after-action reports and findings
- Verifying training and simulation records
- Looking for evidence of backup restore tests
- Checking for tabletop exercise plans and results
- Monitoring testing frequency and participation

The presence of this signal indicates that response capabilities have not been validated through practical testing, which may reveal gaps only during actual incidents.
