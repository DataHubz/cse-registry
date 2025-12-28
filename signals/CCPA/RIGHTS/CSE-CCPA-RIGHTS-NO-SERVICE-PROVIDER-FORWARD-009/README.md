# CSE-CCPA-RIGHTS-NO-SERVICE-PROVIDER-FORWARD-009

**Requests Not Forwarded to Service Providers**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-SERVICE-PROVIDER-FORWARD-009` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Deletion requests are not being forwarded to service providers who process consumer data on behalf of the business, or no mechanism exists to ensure service providers delete consumer data.

CCPA requires businesses to direct service providers to delete consumer data from their records when the business receives a deletion request.

## Applicability

- Multi-vendor data processing environments
- Cloud service provider integrations
- Third-party analytics platforms
- Marketing automation service providers
- Customer data platform (CDP) ecosystems
- SaaS application integrations

## Examples (Non-Normative)

### No Service Provider Coordination

```yaml
deletion_process:
  service_provider_inventory: null
  deletion_forwarding: false
  service_provider_notification: null
  deletion_confirmation_tracking: false
  contractual_deletion_obligations: "Not enforced"
```

### Missing Integration

```
Service Provider Deletion Assessment:
  Service Provider Mapping: Not documented
  Automated Forwarding: Not implemented
  Manual Notification Process: Undefined
  Deletion Confirmation: Not tracked
  Contract Terms: Do not include deletion obligations
  API Integration: None
```

### Incomplete Workflow

```json
{
  "deletion_workflow": {
    "service_provider_list": [],
    "automated_forwarding": false,
    "deletion_api_calls": [],
    "manual_notification_template": null,
    "confirmation_required": false,
    "deletion_verification": false,
    "audit_trail": false,
    "service_provider_sla": null
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.105(c)
- **Requirement**: A business or a service provider shall not be required to comply with a consumer's request to delete if it is necessary for the business or service provider to maintain the consumer's personal information for specified purposes. A business that receives a verifiable request to delete shall direct any service providers to delete the consumer's personal information from their records
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002`
- `CSE-CCPA-RIGHTS-NO-CONFIRMATION-012`
- `CSE-GDPR-RIGHTS-NO-ERASURE-PROPAGATION-011`
