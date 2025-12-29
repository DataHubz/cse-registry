# CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003

**Appropriate Safeguards Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003` |
| Domain | GDPR |
| Category | TRANSFER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Transfer to third country without adequacy decision lacks appropriate safeguards as required by Article 46.

Safeguards include binding corporate rules, standard contractual clauses, or approved codes of conduct.

## Applicability

- Transfers without adequacy decision
- Requires legally binding and enforceable safeguards
- Data subjects must have enforceable rights
- Effective legal remedies must be available

## Examples (Non-Normative)

### No Safeguards for Transfer

```yaml
transfer_safeguards:
  destination_country: "Brazil"
  adequacy_decision: false
  safeguard_mechanism: null
  standard_contractual_clauses: false
  binding_corporate_rules: false
  data_subject_rights_enforceable: false
```

### Missing Transfer Safeguards

```
Third Country Processing:
  Processor: DataAnalytics Ltd (India)
  Adequacy Decision: No
  Contract: Standard vendor agreement
  SCCs: Not included
  BCRs: Not applicable
  Transfer Impact Assessment: Not conducted
  Safeguards: None implemented
```

## GDPR Context (Informative)

- **Art. 46.1**: In absence of adequacy decision, transfer may occur with appropriate safeguards
- **Art. 46.2**: Appropriate safeguards include BCRs, SCCs, codes of conduct, certification mechanisms
- **Art. 46.3**: Transfer subject to suitable safeguards may require authorization

## Related Signals

- `CSE-GDPR-TRANSFER-NO-SCC-004`
- `CSE-GDPR-TRANSFER-NO-BCR-005`
- `CSE-GDPR-TRANSFER-NO-TRANSFER-ASSESSMENT-001`
