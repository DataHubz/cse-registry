# CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002

**No Communication of Choices**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not communicate choices available regarding the collection, use, retention, disclosure, and disposal of personal information to data subjects.

## Applicability

- Consent management platforms
- Privacy preference centers
- Cookie consent banners
- Email subscription management
- Opt-out mechanisms
- Data subject rights portals

## Examples (Non-Normative)

### Missing Preference Center

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002
  severity: high
  context:
    issue: "No mechanism for users to manage privacy choices"
    location: "User account settings"
    impact: "Users cannot control their personal information"
  evidence:
    - "No privacy preferences in account settings"
    - "No opt-out link in marketing emails"
    - "No cookie management interface"
  recommendation: "Implement comprehensive privacy preference center"
```

### Unclear Choice Communication

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002
  severity: high
  context:
    issue: "Privacy choices not clearly communicated"
    unclear_areas:
      - "How to opt-out of data sharing"
      - "How to limit data collection"
      - "How to request data deletion"
  recommendation: "Provide clear, accessible information about all available privacy choices"
```

## SOC 2 Context (Informative)

- **P2.1**: The entity communicates choices available regarding the collection, use, retention, disclosure, and disposal of personal information to the data subjects and the consequences, if any, of each choice. Implicit or explicit consent is obtained at or before the time personal information is collected or soon after. The entity's communication provides information necessary for the data subject to make an informed decision.
- **GAPP Principle**: Choice and Consent - Organizations should describe the choices available to individuals and obtain their consent prior to the collection, use, and disclosure of their personal information.

## Related Signals

- `CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001` - Related to privacy notice provision
- `CSE-SOC2-PRIV-NO-CONSENT-MECHANISM-003` - Related to obtaining consent
- `CSE-GDPR-CONSENT-NO-VALID-CONSENT-001` - GDPR consent requirements
- `CSE-GDPR-RIGHTS-NO-ACCESS-MECHANISM-001` - GDPR data subject rights mechanisms
