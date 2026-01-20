# CSE-HITRUST-INCIDENT-NO-RESPONSE-003

**Incident Response Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-INCIDENT-NO-RESPONSE-003`            |
| Domain          | HITRUST                                           |
| Category        | INCIDENT                                          |
| Control Domain  | 11 - Information Security Incident Management     |
| Reference       | 11.c                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Information security incident response procedures have not been established and maintained to ensure consistent and effective handling of security incidents.

This signal indicates that an organization has not implemented documented response procedures that guide the containment, eradication, and recovery activities following a security incident.

## Applicability

This signal applies to:

- Healthcare organizations responding to PHI breaches
- Financial services organizations handling fraud and cyber attacks
- Organizations operating security operations centers (SOCs)
- Cloud service providers with incident response commitments
- Critical infrastructure operators
- Organizations with cyber insurance requirements
- E-commerce platforms handling customer data
- Organizations subject to incident response audits

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Response Procedures

```yaml
# Absence of documented incident response procedures
# No procedures for:
# - Incident containment and isolation
# - Malware eradication
# - System recovery and restoration
# - Evidence preservation
# - Communication during response
```

### Undocumented Response Actions

```text
Organization lacks documentation showing:
- Steps to contain active incidents
- Procedures to eradicate threats
- Recovery and restoration processes
- Validation and testing before restoration
- Coordination among response teams
- Decision-making authority during incidents
```

### No Response Playbooks

```markdown
# Missing response procedures for:
- Ransomware attacks
- Data breach incidents
- Denial of service attacks
- Insider threat scenarios
- Third-party compromise
- Supply chain incidents
```

### Absence of Response Framework

```json
{
  "incident_type": "malware_outbreak",
  "containment_procedure": null,
  "eradication_steps": [],
  "recovery_plan": "not_defined",
  "validation_process": "not_documented",
  "restoration_criteria": null
}
```

## What This Signal Does NOT Assert

- Whether incident response activities are occurring
- The effectiveness of any informal response efforts
- Whether incident response tools are deployed
- The skill level of response personnel
- Whether tabletop exercises are conducted
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **11.c Incident Response**: Information security incident response procedures shall be established and maintained to ensure consistent and effective handling of information security incidents

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-INCIDENT-NO-PROCEDURES-001` — Incident procedures missing
- `CSE-HITRUST-INCIDENT-NO-EVIDENCE-005` — Evidence collection missing
- `CSE-HITRUST-INCIDENT-NO-LEARNING-004` — Incident learning missing

## Notes

Detection of this signal typically involves:

- Review of incident response procedures and playbooks
- Examination of response documentation repositories
- Analysis of incident handling workflows
- Review of containment and recovery procedures
- Inspection of response team operational guides
- Assessment of incident response frameworks

The presence of this signal indicates a condition that warrants review in the context of information security incident management requirements.
