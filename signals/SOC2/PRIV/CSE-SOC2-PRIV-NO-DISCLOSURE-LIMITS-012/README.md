# CSE-SOC2-PRIV-NO-DISCLOSURE-LIMITS-012

**No Disclosure Limitation**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-SOC2-PRIV-NO-DISCLOSURE-LIMITS-012`    |
| Domain          | SOC2                                        |
| Category        | PRIV                                        |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

The entity does not disclose personal information to third parties only for the purposes identified in the privacy notice and with the implicit or explicit consent of the data subject.

This signal indicates that personal data may be shared beyond stated purposes or without proper consent mechanisms, violating privacy commitments and data protection principles.

## Applicability

This signal applies to:

- Third-party API integrations
- Data sharing agreements and partnerships
- Marketing and analytics platforms
- Service provider relationships
- Data broker arrangements
- Cross-border data transfers
- Advertising networks
- Consent management platforms

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Broad Data Sharing Without Consent

```javascript
// Sharing user data with third parties without consent check
async function shareUserData(userId) {
  const userData = await getUserData(userId);

  // Shares with multiple third parties without consent verification
  await marketingPlatform.sync(userData);
  await analyticsService.track(userData);
  await dataBroker.upload(userData);
  // No consent check performed
}
```

### Privacy Policy Mismatch

```yaml
# Privacy policy states limited sharing
privacy_policy:
  third_party_sharing: "Only with service providers necessary for operations"

# Actual integrations are broader
integrations:
  - analytics_provider
  - marketing_automation
  - advertising_network  # Not mentioned in policy
  - data_enrichment_service  # Not mentioned in policy
  - social_media_pixels  # Not mentioned in policy
```

### API Configuration Without Purpose Limitation

```json
{
  "data_sharing": {
    "partner_api": {
      "enabled": true,
      "data_fields": ["email", "name", "phone", "address", "preferences", "behavior"],
      "purpose_limitation": false,
      "consent_required": false,
      "allowed_uses": "any"
    }
  }
}
```

### Consent Banner Without Granular Controls

```html
<!-- Cookie banner without specific consent for data sharing -->
<div class="cookie-banner">
  <p>We use cookies to improve your experience.</p>
  <button onclick="acceptAll()">Accept All</button>
  <!-- No option to reject third-party data sharing -->
  <!-- No granular consent for different purposes -->
</div>
```

## What This Signal Does NOT Assert

- Whether the data sharing is harmful or beneficial
- The specific consent mechanism required
- Whether legal bases other than consent exist
- Compliance or non-compliance with SOC 2 or any framework
- Required remediation approach

## SOC 2 Context (Informative)

This signal is relevant to SOC 2 Privacy criteria:

- **P6.1**: The entity discloses personal information to third parties with the explicit consent of data subjects, and such consent is obtained prior to disclosure. The entity discloses personal information to third parties only for the purposes for which the personal information was collected or created and only when those purposes are identified in the entity's privacy notice.
- **GAPP Principle**: Disclosure to third parties

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-SOC2-PRIV-NO-THIRD-PARTY-AUTH-013` — Missing disclosure authorization records
- `CSE-SOC2-PRIV-NO-DISCLOSURE-RECORDS-014` — Missing disclosure tracking
- `CSE-SOC2-PRIV-NO-PRIVACY-NOTICE-001` — Missing privacy notice (if defined)
- `CSE-GDPR-LAWFUL-BASIS-001` — GDPR lawful basis issues (if defined)

## Notes

Detection of this signal typically involves:

- Review of privacy policies and notices
- Analysis of third-party integrations and APIs
- Examination of data sharing agreements
- Assessment of consent management implementation
- Inspection of data flows and sharing practices
- Review of cookie and tracking technologies
- Comparison of stated purposes vs. actual sharing

Common disclosure scenarios requiring proper controls:
- Marketing and advertising purposes
- Analytics and measurement
- Service provider arrangements
- Business partnerships
- Legal or regulatory requirements
- Corporate transactions

The presence of this signal indicates a condition that warrants review in the context of privacy and data disclosure requirements.
