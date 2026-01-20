# CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004

**Consent Withdrawal Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004` |
| Domain | GDPR |
| Category | CONSENT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists for data subjects to withdraw consent as easily as it was given.

Article 7.3 requires that withdrawal be as easy as giving consent and that data subjects are informed of withdrawal right.

## Applicability

- All consent-based processing
- Withdrawal must be as easy as giving consent
- Data subjects must be informed of right before consent
- Processing must cease upon withdrawal
- Cannot require account deletion to withdraw consent

## Examples (Non-Normative)

### No Withdrawal Mechanism

```yaml
consent_management:
  consent_method: "Single click checkbox"
  withdrawal_method: null
  withdrawal_documented: false
  ease_of_withdrawal: "Not available"
  processing_stops_on_withdrawal: "Unknown"
```

### Difficult Withdrawal Process

```
Consent vs Withdrawal Comparison:
  Consent Given: Single checkbox on website
  Withdrawal Process:
    1. Email customer service
    2. Receive manual form via post
    3. Complete and return form
    4. Wait 30 days for processing
  Issue: Withdrawal not as easy as consent
  Requirement: Same ease (single click unsubscribe)
```

## GDPR Context (Informative)

- **Art. 7.3**: Data subject has right to withdraw consent at any time
- **Art. 7.3**: Withdrawal shall be as easy as giving consent
- **Art. 7.3**: Data subject shall be informed of right to withdraw before giving consent
- **Recital 42**: Should be as easy to withdraw as to give consent

## Related Signals

- `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001`
- `CSE-GDPR-CONSENT-NO-RECORDS-005`
