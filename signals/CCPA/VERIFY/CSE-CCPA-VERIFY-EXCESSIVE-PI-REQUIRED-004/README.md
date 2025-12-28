# CSE-CCPA-VERIFY-EXCESSIVE-PI-REQUIRED-004

**Excessive PI Required for Verification**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-VERIFY-EXCESSIVE-PI-REQUIRED-004` |
| Domain | CCPA |
| Category | VERIFY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The verification process requires consumers to provide excessive personal information beyond what is reasonably necessary to verify their identity.

CCPA requires verification methods to be proportionate to the sensitivity of the request and the risk of unauthorized access, and businesses must not use verification as a pretext to collect additional personal information.

## Applicability

- Identity verification workflows
- Consumer request intake forms
- Access and deletion verification processes
- Privacy portal authentication
- Account recovery systems
- Multi-step verification procedures

## Examples (Non-Normative)

### Excessive Information Collection

```yaml
verification_requirements:
  request_type: "categories_of_PI"
  required_fields:
    - email
    - full_name
    - date_of_birth
    - social_security_number
    - government_id
    - utility_bill
  sensitivity_level: "low"
  proportionality: false
  necessary_minimum: false
```

### Overly Burdensome Verification

```json
{
  "deletion_verification": {
    "required_documents": [
      "government_issued_photo_id",
      "proof_of_residence",
      "credit_card_statement",
      "birth_certificate",
      "employment_verification"
    ],
    "data_sensitivity": "general",
    "proportionate": false,
    "barrier_to_rights": true
  }
}
```

### Disproportionate Requirements

```
Verification Assessment:
  Request Type: Right to Know (Categories)
  Sensitivity: Low
  Required Information:
    - Full SSN
    - Driver's license number
    - Passport number
    - Biometric data
    - Financial account information
  Assessment: Excessive for low-sensitivity request
  Effect: Creates barriers to exercising consumer rights
```

## CCPA Context (Informative)

- **Section**: §1798.185(a)(7)
- **Requirement**: Verification procedures shall be designed to avoid collecting personal information that is not reasonably necessary to verify the consumer making a request, considering the type and sensitivity of personal information subject to the request
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-VERIFY-INSUFFICIENT-MATCH-002`
- `CSE-CCPA-VERIFY-NO-VERIFICATION-PROCESS-001`
- `CSE-CCPA-RETENTION-EXCESSIVE-COLLECTION-002`
- `CSE-CCPA-RIGHTS-NO-NON-DISCRIMINATION-010`
