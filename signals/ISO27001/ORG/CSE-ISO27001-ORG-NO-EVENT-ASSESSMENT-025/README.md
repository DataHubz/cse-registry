# CSE-ISO27001-ORG-NO-EVENT-ASSESSMENT-025

**No Information Security Event Assessment**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-EVENT-ASSESSMENT-025` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security events are not assessed to determine if they should be categorized as incidents. Organizations must have processes to evaluate information security events, apply classification criteria, and make informed decisions about which events warrant incident response procedures.

## Applicability

- Organizations with security monitoring and alerting systems
- Security Operations Centers (SOC) and incident response teams
- Environments generating security event logs and alerts
- Organizations with security information and event management (SIEM) systems
- Managed security service arrangements
- All environments requiring threat detection and response

## Examples (Non-Normative)

### No Event Assessment Process

```yaml
security_monitoring:
  events_detected: 1247  # Daily average

  assessment_process:
    triage_procedures: null           # Signal: No event triage process
    classification_criteria: null     # Signal: No incident classification
    severity_levels: null             # Signal: No severity definitions
    decision_authority: "undefined"   # Signal: No clear decision makers

  event_handling:
    review_process: "none"            # Signal: Events not reviewed
    false_positive_analysis: null     # Signal: No false positive handling
    escalation_triggers: null         # Signal: No escalation criteria
```

### Inadequate Event Evaluation

```yaml
alert_handling:
  antivirus_alert:
    event_type: "Malware detected"
    assessment: "none"                # Signal: Not assessed
    incident_determination: "unknown" # Signal: Not classified as incident/non-incident
    action_taken: "alert dismissed"   # Signal: No proper evaluation

  failed_login_attempts:
    event_count: 500
    pattern_analysis: null            # Signal: No analysis performed
    threat_assessment: null           # Signal: No threat evaluation
    incident_status: "not determined" # Signal: No incident decision

  data_exfiltration_alert:
    event_source: "DLP system"
    investigation: "pending indefinitely"  # Signal: No timely assessment
    impact_analysis: null                  # Signal: No impact evaluation
```

## ISO 27001:2022 Context (Informative)

- **A.5.25 Assessment and decision on information security events**: Requires organizations to assess information security events and decide whether they are to be categorized as information security incidents. This includes establishing criteria for incident classification, defining assessment procedures, and ensuring timely decision-making.

## Related Signals

- `CSE-ISO27001-ORG-NO-INCIDENT-PLANNING-024` (Incident management planning)
- `CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026` (Response to incidents)
- `CSE-ISO27001-TECH-NO-LOGGING` (If applicable for event detection)
