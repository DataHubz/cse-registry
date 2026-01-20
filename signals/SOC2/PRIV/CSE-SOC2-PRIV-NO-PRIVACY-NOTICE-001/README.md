# CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001

**No Privacy Notice**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001` |
| Domain | SOC2 |
| Category | PRIV |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not provide notice to data subjects about its privacy practices to meet the entity's objectives related to privacy.

## Applicability

- Privacy policies displayed on websites and applications
- Data collection notices at point of collection
- Privacy statements in mobile applications
- Notice provisions in terms of service
- Transparency documentation for data subjects

## Examples (Non-Normative)

### Missing Privacy Policy

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001
  severity: high
  context:
    issue: "Website collects user data without privacy policy"
    location: "www.example.com"
    impact: "Data subjects unaware of data practices"
  evidence:
    - "No privacy policy link in footer"
    - "Data collection forms present without notice"
    - "No privacy disclosure at registration"
  recommendation: "Implement comprehensive privacy policy accessible from all pages"
```

### Incomplete Privacy Notice

```yaml
finding:
  signal: CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001
  severity: high
  context:
    issue: "Privacy policy missing key elements"
    missing_elements:
      - "Data retention periods"
      - "Third-party data sharing practices"
      - "User rights and choices"
  recommendation: "Update privacy policy to include all required disclosures"
```

## SOC 2 Context (Informative)

- **P1.1**: The entity provides notice to data subjects about its privacy practices to meet the entity's objectives related to privacy. Notice is provided to inform data subjects of the entity's privacy practices, including what personal information is collected, how it is collected, the purposes for which it is used, how it is shared, and the rights and responsibilities of both the data subject and the entity.
- **GAPP Principle**: Notice and Communication - Organizations should provide notice about their privacy policies and practices at or before the time personal information is collected.

## Related Signals

- `CSE-GDPR-TRANS-NO-PRIVACY-POLICY-001` - GDPR equivalent for privacy information requirements
- `CSE-SOC2-PRIV-NO-CHOICE-COMMUNICATION-002` - Related to communicating choices
- `CSE-SOC2-CC-NO-POLICY-COMMUNICATION-001` - Common Criteria policy communication requirements
