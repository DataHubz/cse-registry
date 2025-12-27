# CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026

**No Information Security Incident Response**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security incidents are not responded to according to documented procedures. Organizations must have comprehensive incident response procedures that are followed consistently to ensure effective detection, containment, eradication, recovery, and post-incident review of information security incidents.

## Applicability

- All organizations experiencing security incidents
- Environments with incident response procedures
- Organizations with incident response teams or SOCs
- Businesses subject to breach notification laws
- Organizations handling sensitive or regulated data
- Entities with critical system dependencies

## Examples (Non-Normative)

### No Documented Incident Response Procedures

```yaml
incident_response:
  procedures:
    incident_detection: null          # Signal: No detection procedures
    initial_response: null            # Signal: No first response steps
    containment: null                 # Signal: No containment procedures
    eradication: null                 # Signal: No eradication process
    recovery: null                    # Signal: No recovery procedures
    post_incident: null               # Signal: No post-incident activities

  incident_12345:
    detected: "2024-11-15"
    status: "handled ad-hoc"          # Signal: No procedural response
    documentation: "incomplete"        # Signal: Poor incident documentation
```

### Inadequate Incident Response Actions

```yaml
security_incident:
  incident_id: "INC-2024-089"
  type: "Ransomware attack"

  response_actions:
    containment:
      network_isolation: "not performed"     # Signal: No containment action
      affected_systems: "not identified"     # Signal: Scope not determined

    communication:
      stakeholder_notification: null         # Signal: No notifications sent
      regulatory_reporting: "overdue"        # Signal: Missed reporting deadlines
      customer_notification: null            # Signal: No breach notification

    investigation:
      root_cause_analysis: null              # Signal: No RCA performed
      timeline_reconstruction: "incomplete"  # Signal: Inadequate investigation

    recovery:
      restoration_plan: null                 # Signal: No recovery plan
      validation_testing: null               # Signal: No recovery verification
```

## ISO 27001:2022 Context (Informative)

- **A.5.26 Response to information security incidents**: Requires organizations to respond to information security incidents in accordance with documented procedures. This includes prompt action to contain, investigate, remediate, and recover from incidents, as well as communicating with relevant parties and maintaining records.

## Related Signals

- `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` (Incident management planning)
- `CSE-ISO27001-ORG-NO-EVENT-ASSESSMENT-025` (Event assessment)
- `CSE-ISO27001-ORG-NO-INCIDENT-LEARNING-027` (Learning from incidents)
- `CSE-ISO27001-ORG-NO-EVIDENCE-COLLECTION-028` (Evidence collection)
