# CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002

**Right to Delete Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for consumers to request deletion of their personal information that a business has collected from them.

The right to delete requires businesses to provide accessible methods for consumers to submit deletion requests and to delete the consumer's personal information from their records.

## Applicability

- Consumer-facing web applications
- Mobile applications processing California residents' data
- Customer databases and CRM systems
- Marketing automation platforms
- User account management systems
- Analytics and tracking platforms

## Examples (Non-Normative)

### No Deletion Mechanism

```yaml
consumer_rights:
  deletion_request_method: null
  account_deletion_feature: false
  data_retention_policy: "Indefinite"
  deletion_workflow: null
```

### Incomplete Deletion Process

```
Deletion Capability Assessment:
  Request Submission: No method available
  Data Inventory: Not mapped
  Deletion Workflow: Not defined
  Service Provider Coordination: None
  Verification Process: Missing
```

### Manual-Only Process

```json
{
  "deletion_process": {
    "automated_deletion": false,
    "self_service": false,
    "request_tracking": false,
    "deletion_confirmation": false,
    "exception_handling": null
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.105
- **Requirement**: A consumer shall have the right to request that a business delete any personal information about the consumer which the business has collected from the consumer
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-SERVICE-PROVIDER-FORWARD-009`
- `CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005`
- `CSE-GDPR-RIGHTS-NO-ERASURE-MECHANISM-010`
