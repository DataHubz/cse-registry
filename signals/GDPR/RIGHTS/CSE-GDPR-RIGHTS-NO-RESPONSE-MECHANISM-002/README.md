# CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002

**Data Subject Request Response Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002` |
| Domain | GDPR |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to respond to data subject requests without undue delay and within the required one-month timeframe.

Controllers must be able to receive, process, and respond to rights requests.

## Applicability

- Data subject access requests (DSAR)
- Erasure and rectification requests
- Portability requests
- Objection handling
- Request tracking and logging

## Examples (Non-Normative)

### No Request Handling Process

```yaml
dsr_handling:
  intake_mechanism: null
  tracking_system: null
  response_template: null
  escalation_process: null
```

### Inadequate Response Time

```
Request Metrics:
  Average Response Time: 45 days
  Requests Pending > 30 days: 15
  Automated Acknowledgment: No
  Tracking System: None
```

## GDPR Context (Informative)

- **Art. 12.3**: The controller shall provide information without undue delay and in any event within one month of receipt of the request
- **Art. 12.4**: If the controller does not take action, inform the data subject within one month

## Related Signals

- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
