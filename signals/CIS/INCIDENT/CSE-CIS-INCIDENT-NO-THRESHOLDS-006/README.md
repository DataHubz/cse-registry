# CSE-CIS-INCIDENT-NO-THRESHOLDS-006

**Incident Escalation Thresholds Missing**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-CIS-INCIDENT-NO-THRESHOLDS-006` |
| Domain          | CIS                                  |
| Category        | INCIDENT                             |
| Control         | 17 - Incident Response Management    |
| Safeguard       | 17.6                                 |
| IG Level        | IG2                                  |
| Asset Type      | N/A                                  |
| Security Function | Respond                            |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

The organization lacks defined incident escalation thresholds and criteria.

This signal indicates that there are no documented criteria for when security incidents should be escalated to higher levels of management or external parties. Without clear escalation thresholds, incidents may not receive appropriate attention and resources based on their severity, potentially leading to inadequate responses to critical events or unnecessary escalation of minor issues.

## Applicability

This signal applies to:

- Enterprise incident response plans
- Security operations center (SOC) procedures
- Computer security incident response team (CSIRT) workflows
- Incident classification frameworks
- Management reporting procedures
- Regulatory notification requirements
- Crisis management protocols

## Examples (Non-Normative)

### Missing Escalation Criteria

```
No documented thresholds for:
- Incident severity classification
- Management notification triggers
- Executive escalation points
- External party notifications
- Regulatory reporting requirements
```

### Undefined Escalation Procedures

```yaml
# No escalation thresholds defined
incident_escalation:
  severity_levels: undefined
  time_thresholds: []
  impact_criteria: undefined
  management_triggers: []
  external_notification: undefined
  regulatory_reporting: undefined
```

### Lack of Classification Framework

```
No clear criteria for:
- Critical vs. high vs. medium vs. low severity
- Data breach notification requirements
- Law enforcement involvement
- Public disclosure thresholds
- Board-level reporting
- Customer notification timing
```

### Missing Threshold Documentation

```
Organization lacks:
- Incident severity matrix
- Escalation decision trees
- Time-based escalation rules
- Impact assessment criteria
- Stakeholder notification matrix
- Regulatory trigger identification
```

## What This Signal Does NOT Assert

- Whether incidents are being escalated
- The appropriateness of current escalation practices
- Whether informal criteria are understood
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of incident handling

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 17: Incident Response Management**
- **Safeguard 17.6**: Establish and maintain security incident thresholds, including, at a minimum, differentiating between an incident and an event. Examples can include: anomalous activity, security alerts, and determining whether a security incident has occurred. Review annually, or when significant enterprise changes occur that could impact this Safeguard

## Related Signals

- `CSE-CIS-INCIDENT-NO-PLAN-001` — Incident Response Plan Missing
- `CSE-CIS-INCIDENT-NO-ROLES-003` — Incident Response Roles Missing
- `CSE-CIS-INCIDENT-NO-CONTACTS-002` — Incident Reporting Contacts Missing
