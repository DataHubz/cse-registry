# CSE-HITRUST-INCIDENT-NO-PROCEDURES-001

**Incident Procedures Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-INCIDENT-NO-PROCEDURES-001`          |
| Domain          | HITRUST                                           |
| Category        | INCIDENT                                          |
| Control Domain  | 11 - Information Security Incident Management     |
| Reference       | 11.a                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Management responsibilities and procedures have not been established to ensure a quick, effective, and orderly response to information security incidents.

This signal indicates that an organization has not implemented formal incident management procedures that define roles, responsibilities, and processes for detecting, responding to, and recovering from security incidents.

## Applicability

This signal applies to:

- Healthcare organizations handling protected health information (PHI)
- Financial services organizations processing payment card data
- Organizations subject to breach notification requirements
- Cloud service providers with incident response obligations
- Managed security service providers (MSSPs)
- Organizations with 24/7 operational requirements
- Entities handling sensitive customer data
- Organizations subject to regulatory incident reporting

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Incident Response Plan

```yaml
# Absence of documented incident response procedures
# No file or system containing:
# - Incident classification criteria
# - Escalation procedures
# - Response team roles and responsibilities
# - Communication protocols
# - Recovery procedures
```

### Undocumented Response Procedures

```text
Organization lacks documentation showing:
- How to detect and identify security incidents
- Who to notify when an incident occurs
- Steps to contain and mitigate incidents
- Recovery and restoration procedures
- Post-incident review processes
- Management approval of procedures
```

### No Incident Management Framework

```markdown
# Missing procedures for:
- Initial incident triage and assessment
- Incident severity classification
- Assignment of incident handlers
- Coordination with internal teams
- Communication with stakeholders
- Documentation requirements during response
```

### Absence of Response Playbooks

```json
{
  "incident_type": "data_breach",
  "response_procedure": null,
  "assigned_team": "unassigned",
  "escalation_criteria": "not_defined",
  "communication_plan": "not_documented",
  "recovery_steps": []
}
```

## What This Signal Does NOT Assert

- Whether incidents have actually occurred
- The effectiveness of any informal response efforts
- Whether incident response training has been provided
- The existence of incident detection tools
- The quality or maturity of incident response capabilities
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **11.a Responsibilities and Procedures**: Management responsibilities and procedures shall be established to ensure a quick, effective, and orderly response to information security incidents

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-INCIDENT-NO-REPORTING-002` — Incident reporting missing
- `CSE-HITRUST-INCIDENT-NO-RESPONSE-003` — Incident response missing
- `CSE-HITRUST-INCIDENT-NO-LEARNING-004` — Incident learning missing
- `CSE-HITRUST-INCIDENT-NO-EVIDENCE-005` — Evidence collection missing

## Notes

Detection of this signal typically involves:

- Review of incident response documentation repositories
- Examination of security operations procedures
- Analysis of incident management policies
- Review of organizational roles and responsibilities
- Inspection of playbooks and runbooks
- Assessment of incident response plans and frameworks

The presence of this signal indicates a condition that warrants review in the context of information security incident management requirements.
