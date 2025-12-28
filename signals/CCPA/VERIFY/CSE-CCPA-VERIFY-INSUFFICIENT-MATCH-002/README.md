# CSE-CCPA-VERIFY-INSUFFICIENT-MATCH-002

**Verification Not Reasonably Matched**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-VERIFY-INSUFFICIENT-MATCH-002` |
| Domain | CCPA |
| Category | VERIFY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The verification process does not use a reasonable method to match information provided by the consumer with information already maintained by the business.

CCPA requires verification to reasonably match the consumer's identity using at least two or three data points depending on the sensitivity of the request, preventing unauthorized access while not creating undue barriers.

## Applicability

- Privacy request verification systems
- Consumer identity verification workflows
- Access and deletion request handlers
- Account-based authentication systems
- Password-protected consumer accounts
- Multi-factor authentication implementations

## Examples (Non-Normative)

### Weak Verification Match

```yaml
verification_process:
  data_points_required: 1
  matching_method: "Email only"
  sensitivity_consideration: false
  reasonable_match: false
  risk_assessment: "Insufficient for sensitive data"
```

### Single-Factor Verification for Sensitive Request

```json
{
  "deletion_request_verification": {
    "request_type": "deletion",
    "data_sensitivity": "high",
    "verification_factors": ["email"],
    "matching_points": 1,
    "required_points": 3,
    "compliant": false
  }
}
```

### Inadequate Matching Logic

```
Verification Assessment:
  Request Type: Right to Know (Specific Pieces)
  Current Verification: Email address match only
  Required Data Points: 3 (for sensitive disclosure)
  Actual Data Points: 1
  Matching Quality: Insufficient
  Risk: Unauthorized disclosure of personal information
```

## CCPA Context (Informative)

- **Section**: §1798.185(a)(7)
- **Requirement**: Use a reasonable method to match the information provided by the consumer to the personal information maintained by the business, considering the type and sensitivity of personal information collected
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-VERIFY-NO-VERIFICATION-PROCESS-001`
- `CSE-CCPA-VERIFY-EXCESSIVE-PI-REQUIRED-004`
- `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001`
- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
