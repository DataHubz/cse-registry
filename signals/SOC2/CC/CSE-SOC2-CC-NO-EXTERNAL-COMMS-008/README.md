# CSE-SOC2-CC-NO-EXTERNAL-COMMS-008

**No External Communication**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-EXTERNAL-COMMS-008` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not communicate with external parties regarding matters affecting the functioning of internal control.

## Applicability

- Applies when control requirements are not communicated to vendors or service providers
- Applies when customers are not notified of control-relevant incidents
- Applies when there is no process for external parties to report control concerns
- Applies when regulatory communications about controls are absent
- Applies when external audit findings are not communicated to stakeholders
- Applies when control certifications or attestations are not shared appropriately
- Applies when there is no external reporting on control effectiveness

## Examples (Non-Normative)

### No Vendor Control Requirements

```yaml
vendor_onboarding:
  security_requirements: not_communicated
  control_expectations: undefined
  compliance_obligations: not_specified

vendor_contract:
  security_controls: not_included
  audit_rights: not_defined
  incident_notification: not_required
```

### No Customer Incident Notification

```yaml
data_breach_incident:
  date: 2024-07-15
  affected_customers: 5000
  customer_notification: none
  regulatory_notification: delayed

notification_policy:
  customer_communication: undefined
  timeline: not_specified
  responsible_party: unclear
```

### No External Reporting Channel

```yaml
external_communications:
  security_contact: not_published
  vulnerability_reporting: no_process
  responsible_disclosure: no_policy

  customer_feedback:
    control_concerns: no_mechanism
    security_questions: no_channel
```

## SOC 2 Context (Informative)

- **CC2.3**: The entity communicates with external parties regarding matters affecting the functioning of internal control
- **COSO Principle 15**: The organization communicates with external parties regarding matters affecting the functioning of internal control

## Related Signals

- `CSE-SOC2-CC-NO-INTERNAL-COMMS-007`
- `CSE-SOC2-CC-NO-DEFICIENCY-COMMS-014`
- `CSE-SOC2-CC-NO-RISK-IDENTIFICATION-010`
