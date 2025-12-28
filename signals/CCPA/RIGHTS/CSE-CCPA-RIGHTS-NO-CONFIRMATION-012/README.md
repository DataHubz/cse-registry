# CSE-CCPA-RIGHTS-NO-CONFIRMATION-012

**Request Confirmation Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-CONFIRMATION-012` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Consumers do not receive confirmation when they submit a privacy rights request, or no mechanism exists to acknowledge receipt and track request status.

CCPA requires businesses to confirm receipt of consumer requests and to provide mechanisms for consumers to track the status of their requests.

## Applicability

- Consumer request intake systems
- Privacy portal workflows
- Email notification systems
- Request tracking dashboards
- Customer service ticketing platforms
- Data subject access request (DSAR) tools

## Examples (Non-Normative)

### No Receipt Confirmation

```yaml
request_workflow:
  receipt_confirmation: false
  confirmation_email: null
  request_tracking_number: null
  status_portal: null
  automated_acknowledgment: false
```

### Missing Tracking Capability

```
Request Confirmation Assessment:
  Automated Receipt Email: Not sent
  Tracking Number Assigned: No
  Status Portal Available: No
  Timeline Communication: Not provided
  Contact Information: Not included
  Request Reference: Not generated
```

### Inadequate Communication

```json
{
  "request_submission": {
    "confirmation_sent": false,
    "tracking_number": null,
    "receipt_acknowledgment": false,
    "expected_timeline_communicated": false,
    "status_check_method": null,
    "contact_information_provided": false,
    "automated_notifications": false,
    "request_history_access": false
  }
}
```

### Silent Submission

```
Consumer Experience:
  Form Submitted: Yes
  Confirmation Message: None
  Email Confirmation: Not received
  Request ID: Not provided
  Status Check: Not possible
  Timeline Provided: No
  Contact for Questions: Unknown
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(2)
- **Requirement**: A business shall confirm receipt of the request and provide information about how the business will process the request, including the business's verification process
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-RESPONSE-TIMELINE-006`
- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-GDPR-RIGHTS-NO-RESPONSE-MECHANISM-002`
