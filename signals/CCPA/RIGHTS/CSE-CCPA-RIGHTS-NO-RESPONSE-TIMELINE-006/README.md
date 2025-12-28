# CSE-CCPA-RIGHTS-NO-RESPONSE-TIMELINE-006

**Response Timeline Not Met**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-RESPONSE-TIMELINE-006` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consumer requests are not being responded to within the required 45-day timeframe, or no process exists to ensure timely responses.

CCPA mandates that businesses respond to verifiable consumer requests within 45 days of receipt, with a possible 45-day extension when reasonably necessary with notice to the consumer.

## Applicability

- Consumer request management systems
- Privacy portal workflows
- Customer service ticketing systems
- Data subject access request (DSAR) tools
- Privacy operations processes
- Request tracking and case management systems

## Examples (Non-Normative)

### No Timeline Tracking

```yaml
request_processing:
  sla_defined: false
  automated_tracking: false
  deadline_monitoring: false
  extension_notification: null
  average_response_time: "90+ days"
```

### Missing Process Controls

```
Response Timeline Assessment:
  Request Receipt Tracking: Not implemented
  45-Day SLA Monitoring: None
  Automated Reminders: Disabled
  Extension Process: Undefined
  Consumer Notification: Not automated
  Escalation Procedure: Missing
```

### Inadequate Workflow

```json
{
  "request_workflow": {
    "intake_timestamp": false,
    "sla_timer": false,
    "deadline_alerts": false,
    "extension_capability": false,
    "extension_notification_template": null,
    "response_time_reporting": false,
    "average_response_days": 67
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(2)
- **Requirement**: A business shall respond to verifiable consumer requests within 45 days of receipt. The response period may be extended once by an additional 45 days when reasonably necessary, provided the consumer is given notice of the extension within the first 45-day period
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-CONFIRMATION-012`
- `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002`
