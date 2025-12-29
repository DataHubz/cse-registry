# CSE-GDPR-PRINCIPLES-NO-CONSENT-MECHANISM-011

**Valid Consent Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-CONSENT-MECHANISM-011` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

When consent is the lawful basis for processing, no valid mechanism exists to obtain, record, or verify consent that meets GDPR requirements.

Consent must be freely given, specific, informed, and unambiguous.

## Applicability

- Cookie consent banners
- Marketing opt-in forms
- Terms acceptance workflows
- Preference management centers
- Third-party data sharing consent

## Examples (Non-Normative)

### Invalid Consent Collection

```yaml
consent_mechanism:
  type: "Pre-ticked checkbox"
  granular_options: false
  withdrawal_mechanism: null
  records_maintained: false
```

### Bundled Consent

```html
<!-- Invalid: consent bundled with terms -->
<input type="checkbox" required>
  I agree to the terms of service and consent
  to marketing communications
</input>
```

## GDPR Context (Informative)

- **Art. 7**: Conditions for consent
- **Art. 4(11)**: Consent means freely given, specific, informed and unambiguous indication of wishes

## Related Signals

- `CSE-GDPR-CONSENT-NO-FREELY-GIVEN-001`
- `CSE-GDPR-CONSENT-NO-WITHDRAWAL-MECHANISM-004`
