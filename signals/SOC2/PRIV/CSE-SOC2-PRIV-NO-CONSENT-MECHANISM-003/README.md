# CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003

**No Consent for New Uses**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not obtain consent for uses of personal information beyond those stated in the privacy notice when such consent is required.

## Applicability

- Secondary use of personal information
- Changes to data processing purposes
- New third-party data sharing arrangements
- Marketing use of transactional data
- Cross-context behavioral advertising
- Material changes to privacy practices

## Examples (Non-Normative)

### Secondary Use Without Consent

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003
  severity: high
  context:
    issue: "Customer data used for marketing without consent"
    original_purpose: "Order fulfillment and customer service"
    new_purpose: "Third-party marketing campaigns"
    consent_status: "Not obtained"
  evidence:
    - "Privacy policy states data collected for transactions only"
    - "Marketing emails sent to all customers"
    - "No opt-in mechanism for marketing use"
  recommendation: "Obtain explicit consent before using data for marketing purposes"
```

### New Data Sharing Without Consent

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003
  severity: high
  context:
    issue: "Data shared with new third party without consent"
    third_party: "Analytics vendor XYZ"
    disclosure_status: "Not in original privacy notice"
  evidence:
    - "New vendor added to data processing pipeline"
    - "No consent obtained from users"
    - "Privacy notice not updated"
  recommendation: "Obtain user consent and update privacy notice before sharing data with new third parties"
```

## SOC 2 Context (Informative)

- **P2.2**: The entity obtains implicit or explicit consent at or before the time personal information is collected or soon after. For sensitive personal information, explicit consent is obtained directly from the data subject at or before the time of collection. If a individual's personal information is obtained from a third party, the entity confirms that the individual was informed of the collection and use of their personal information at or before the time it was collected.
- **GAPP Principle**: Choice and Consent - Consent should be obtained for new uses of personal information that are materially different from those identified in the original notice.

## Related Signals

- `CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002` - Related to communicating choices
- `CSE-SOC2-PRIV-NO-USE-LIMITATION-006` - Related to purpose limitation
- `CSE-GDPR-CONSENT-NO-VALID-CONSENT-001` - GDPR consent validity requirements
- `CSE-GDPR-LAWFUL-BASIS-CHANGE-WITHOUT-JUSTIFICATION-001` - GDPR lawful basis changes
