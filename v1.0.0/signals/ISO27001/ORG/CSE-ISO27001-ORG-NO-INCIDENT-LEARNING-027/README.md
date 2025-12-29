# CSE-ISO27001-ORG-NO-INCIDENT-LEARNING-027

**No Learning from Information Security Incidents**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INCIDENT-LEARNING-027` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Knowledge from security incidents is not used to strengthen controls and reduce future incidents. Organizations must establish processes to learn from security incidents through post-incident reviews, identify root causes, implement corrective actions, and continuously improve security controls based on incident knowledge.

## Applicability

- Organizations that have experienced security incidents
- Environments with recurring security issues
- Incident response and security operations teams
- Organizations implementing continuous improvement programs
- Entities undergoing security assessments and audits
- Organizations with mature incident management capabilities

## Examples (Non-Normative)

### No Post-Incident Review Process

```yaml
incident_management:
  closed_incidents: 45  # Last 12 months

  post_incident_activities:
    lessons_learned_reviews: null      # Signal: No PIR conducted
    root_cause_analysis: null          # Signal: No RCA process
    corrective_actions: null           # Signal: No improvements identified
    preventive_measures: null          # Signal: No prevention planning

  knowledge_management:
    incident_documentation: "minimal"  # Signal: Poor documentation
    knowledge_sharing: null            # Signal: No knowledge transfer
    training_updates: null             # Signal: No training from incidents
```

### Recurring Incidents Without Learning

```yaml
incident_analysis:
  phishing_incidents:
    2023_q1: 12
    2023_q2: 15
    2023_q3: 18
    2023_q4: 20

  improvement_actions:
    user_awareness_training: "not updated"    # Signal: No training improvement
    email_filtering: "no changes"             # Signal: Controls not enhanced
    incident_pattern_analysis: null           # Signal: Trends not analyzed

  similar_incidents:
    incident_001: "SQL injection"
    incident_045: "SQL injection"
    incident_089: "SQL injection"
    remediation: "patched individually"       # Signal: No systemic fix
    code_review_update: null                  # Signal: No process improvement
```

## ISO 27001:2022 Context (Informative)

- **A.5.27 Learning from information security incidents**: Requires organizations to use knowledge gained from information security incidents to strengthen and improve information security controls. This includes conducting post-incident reviews, analyzing incident trends, implementing corrective and preventive actions, and sharing lessons learned.

## Related Signals

- `CSE-ISO27001-ORG-NO-INCIDENT-RESPONSE-026` (Response to incidents)
- `CSE-ISO27001-ORG-NO-EVENT-ASSESSMENT-025` (Event assessment)
- `CSE-ISO27001-ORG-NO-CONTINUAL-IMPROVEMENT` (If applicable)
