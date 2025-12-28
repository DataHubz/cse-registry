# CSE-CCPA-RIGHTS-NO-FREE-DISCLOSURE-007

**Disclosure Not Free of Charge**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-FREE-DISCLOSURE-007` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Fees are charged to consumers for disclosing or deleting their personal information, or unreasonable or excessive requests are not properly identified before charging fees.

CCPA requires that disclosures be provided free of charge within a 12-month period, with limited exceptions for manifestly unfounded or excessive requests.

## Applicability

- Consumer data request processing systems
- Privacy portal billing configurations
- Customer service fee structures
- Data access request workflows
- Consumer rights fulfillment processes
- Subscription and account management platforms

## Examples (Non-Normative)

### Fees Charged for Standard Requests

```yaml
request_pricing:
  access_request_fee: "$25.00"
  deletion_request_fee: "$15.00"
  correction_request_fee: "$10.00"
  free_requests_per_year: 0
  manifestly_unfounded_assessment: false
```

### No Fee Exception Process

```
Disclosure Pricing Assessment:
  Standard Request Fee: Charged
  Free Disclosure Period: Not honored
  12-Month Request Tracking: Not implemented
  Excessive Request Criteria: Undefined
  Fee Waiver Process: None
  Manifest Unfounded Determination: Not documented
```

### Improper Fee Structure

```json
{
  "fee_policy": {
    "first_request_free": false,
    "subsequent_request_fee": 50.00,
    "twelve_month_tracking": false,
    "excessive_request_criteria": null,
    "unfounded_request_assessment": false,
    "fee_justification_process": null,
    "consumer_notification_of_fees": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(2)
- **Requirement**: The disclosure shall be provided by mail or electronically at the consumer's option, and shall be free of charge. For requests made more than twice in a 12-month period, a business may charge a reasonable fee to cover administrative costs
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-PORTABILITY-MECHANISM-004`
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-007`
