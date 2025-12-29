# CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024

**No Information Security Incident Management Planning**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Organization lacks plans and preparation for managing information security incidents. Effective incident management requires advance planning, defined procedures, clear roles and responsibilities, trained personnel, and adequate resources to detect, respond to, and recover from security incidents.

## Applicability

- All organizations that process information assets
- Organizations subject to breach notification requirements
- Environments with regulatory compliance obligations
- Organizations with critical systems and data
- Businesses dependent on technology operations
- Organizations handling customer or sensitive data

## Examples (Non-Normative)

### No Incident Response Plan

```yaml
incident_management:
  incident_response_plan: null        # Signal: No documented IRP

  organization:
    incident_response_team: null      # Signal: No designated IR team
    roles_and_responsibilities: null  # Signal: Undefined IR roles
    escalation_procedures: null       # Signal: No escalation paths

  preparation:
    training: null                    # Signal: No IR training
    exercises: null                   # Signal: No tabletop exercises
    tools: null                       # Signal: No IR tools prepared
    contact_lists: null               # Signal: No emergency contacts
```

### Inadequate Incident Preparedness

```yaml
security_operations:
  incident_procedures:
    detection: "ad-hoc"               # Signal: No systematic detection
    classification: null              # Signal: No incident classification
    containment: "reactive only"      # Signal: No containment procedures
    investigation: null               # Signal: No investigation process

  resources:
    forensic_capabilities: null       # Signal: No forensic tools/training
    backup_systems: null              # Signal: No incident response infrastructure
    communication_templates: null     # Signal: No pre-approved communications

  testing:
    last_exercise: "never"            # Signal: No IR exercises conducted
    plan_review_date: null            # Signal: Plan never reviewed
```

## ISO 27001:2022 Context (Informative)

- **A.5.24 Information security incident management planning and preparation**: Requires organizations to plan and prepare for managing information security incidents. This includes establishing incident management procedures, defining roles and responsibilities, providing training, maintaining response capabilities, and conducting regular exercises to ensure readiness.

## Related Signals

- `CSE-ISO27001-ORG-NO-EVENT-ASSESSMENT-025` (Assessment of information security events)
- `CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026` (Response to incidents)
- `CSE-ISO27001-ORG-NO-EVIDENCE-COLLECTION-028` (Collection of evidence)
