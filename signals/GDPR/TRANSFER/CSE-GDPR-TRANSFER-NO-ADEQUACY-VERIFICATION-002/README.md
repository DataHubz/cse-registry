# CSE-GDPR-TRANSFER-NO-ADEQUACY-VERIFICATION-002

**Adequacy Decision Not Verified**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-TRANSFER-NO-ADEQUACY-VERIFICATION-002` |
| Domain | GDPR |
| Category | TRANSFER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Transfer to third country relies on adequacy decision but verification of current adequacy status has not been performed.

Article 45 allows transfers based on Commission adequacy decisions.

## Applicability

- Transfers based on adequacy decisions
- Must monitor adequacy decision validity
- Must have contingency plans for invalidation
- Applies to countries, territories, or sectors with adequacy

## Examples (Non-Normative)

### Unverified Adequacy Reliance

```yaml
adequacy_verification:
  transfer_destination: "Switzerland"
  legal_basis: "Adequacy decision"
  adequacy_verified: false
  last_verification_date: null
  monitoring_process: false
  contingency_plan: null
```

### Outdated Adequacy Assessment

```
Transfer Mechanism Review:
  Destination: United Kingdom
  Legal Basis: EU-UK adequacy decision
  Adequacy Verified: No (assumed valid)
  Last Check: Never
  Brexit Impact: Not assessed
  Alternative Safeguards: None prepared
```

## GDPR Context (Informative)

- **Art. 45.1**: Transfer may take place where Commission has decided third country ensures adequate level of protection
- **Art. 45.3**: Commission shall monitor developments in third countries
- **Art. 45.5**: Commission may repeal, amend, or suspend decisions

## Related Signals

- `CSE-GDPR-TRANSFER-NO-TRANSFER-ASSESSMENT-001`
- `CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003`
