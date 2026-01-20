# CSE-SOC2-PRIV-NO-SENSITIVE-DATA-CONSENT-005

**No Explicit Consent for Sensitive Data**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-SENSITIVE-DATA-CONSENT-005` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not obtain explicit consent for collection of sensitive personal information.

## Applicability

- Health and medical information
- Financial account data
- Biometric data collection
- Genetic information
- Race, ethnicity, or national origin
- Religious or philosophical beliefs
- Sexual orientation or gender identity
- Children's personal information
- Government-issued identifiers

## Examples (Non-Normative)

### Health Data Without Explicit Consent

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SENSITIVE-DATA-CONSENT-005
  severity: high
  context:
    issue: "Health information collected without explicit consent"
    sensitive_data_type: "Medical history and conditions"
    consent_mechanism: "General terms acceptance only"
  evidence:
    - "Health questionnaire in registration form"
    - "No separate consent for health data"
    - "Bundled with general terms of service"
  recommendation: "Implement explicit, unbundled consent mechanism for health data collection"
```

### Biometric Data Collection

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SENSITIVE-DATA-CONSENT-005
  severity: high
  context:
    issue: "Facial recognition enabled without explicit consent"
    sensitive_data_type: "Biometric facial templates"
    application: "Mobile app login"
  evidence:
    - "Face ID enabled by default"
    - "No opt-in mechanism presented"
    - "Privacy notice mentions biometrics but no specific consent"
  recommendation: "Require explicit opt-in consent before collecting biometric data with clear explanation of use"
```

### Financial Information Collection

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-SENSITIVE-DATA-CONSENT-005
  severity: high
  context:
    issue: "Bank account information collected without specific consent"
    purpose: "Optional payment method"
    consent_obtained: "Implied through form submission"
  recommendation: "Obtain explicit consent for financial data collection separate from other data"
```

## SOC 2 Context (Informative)

- **P3.2**: For sensitive personal information, explicit consent is obtained from data subjects for the collection, use, and disclosure of their personal information. Sensitive personal information includes information about an individual's medical or health condition, racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, sex life, or criminal background.
- **GAPP Principle**: Collection - Explicit consent is required for the collection of sensitive personal information, which requires higher levels of protection and transparency.

## Related Signals

- `CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003` - Related to consent for new uses
- `CSE-SOC2-PRIV-NO-COLLECTION-LIMITATION-004` - Related to collection limitation
- `CSE-GDPR-SPECIAL-CATS-NO-VALID-BASIS-001` - GDPR special categories of personal data
- `CSE-GDPR-CONSENT-NO-VALID-CONSENT-001` - GDPR consent requirements
