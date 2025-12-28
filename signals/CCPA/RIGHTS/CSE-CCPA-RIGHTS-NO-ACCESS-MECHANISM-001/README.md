# CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001

**Right to Know Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for consumers to request disclosure of the categories and specific pieces of personal information that a business has collected about them.

The right to know is a foundational consumer right under CCPA, requiring businesses to provide accessible methods for consumers to submit requests.

## Applicability

- Consumer-facing web applications
- Mobile applications processing California residents' data
- Customer data platforms
- Marketing and analytics platforms
- E-commerce systems
- SaaS applications with consumer users

## Examples (Non-Normative)

### No Access Request Mechanism

```yaml
consumer_rights:
  access_request_method: null
  privacy_page_url: null
  request_submission: "No mechanism available"
  data_discovery_capability: false
```

### Incomplete Mechanism

```
Right to Know Assessment:
  Web Form: None
  Email Address: None
  Toll-Free Number: None
  Data Mapping: Not implemented
  Response Process: Undefined
```

### Missing Privacy Portal

```json
{
  "privacy_features": {
    "data_access_request": false,
    "self_service_portal": false,
    "request_tracking": false,
    "automated_disclosure": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.110
- **Requirement**: A consumer shall have the right to request that a business that collects personal information disclose to the consumer the categories and specific pieces of personal information collected
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005`
- `CSE-CCPA-RIGHTS-NO-RESPONSE-TIMELINE-006`
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
