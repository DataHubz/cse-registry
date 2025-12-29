# CSE-HITRUST-PRIVACY-NO-NOTICE-001

**Privacy Notice Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-NOTICE-001` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A privacy notice has not been established or provided to individuals whose personal or protected health information (PHI) is collected, processed, or maintained by the organization.

This signal indicates the absence of a documented privacy notice that informs individuals about what personal information is collected, how it is used, with whom it is shared, and what rights individuals have regarding their information. A privacy notice is a fundamental requirement for transparency and regulatory compliance in healthcare and other privacy-sensitive environments.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Health information exchanges (HIEs)
- Healthcare SaaS providers
- Medical device manufacturers collecting health data
- Digital health applications
- Telehealth platforms

## Examples (Non-Normative)

### Missing Privacy Notice on Website

```html
<!-- Healthcare portal without privacy notice -->
<footer>
  <a href="/terms">Terms of Service</a>
  <a href="/contact">Contact Us</a>
  <!-- No privacy notice or privacy policy link -->
</footer>
```

### Mobile App Without Privacy Disclosure

```json
{
  "app_metadata": {
    "name": "HealthTracker",
    "terms_url": "https://example.com/terms",
    "privacy_policy_url": null,
    "data_collection": "health metrics, location, contacts"
  }
}
```

### Patient Portal Configuration

```yaml
# Portal configuration missing privacy notice
portal:
  authentication: enabled
  data_access: enabled
  privacy_notice:
    enabled: false
    url: null
    version: null
```

### API Documentation Without Privacy Statement

```markdown
# Healthcare API Documentation
## Authentication
## Endpoints
## Data Formats
# Privacy Notice - NOT PROVIDED
```

## What This Signal Does NOT Assert

- Whether informal privacy practices are communicated verbally
- The quality or completeness of existing privacy disclosures
- Whether the organization is compliant or non-compliant with HITRUST
- The specific content requirements for a privacy notice
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for privacy notice that:
- Informs individuals about collection and use of personal information
- Describes the purposes for which information is used
- Identifies third parties with whom information may be shared
- Explains individual rights regarding their information
- Provides contact information for privacy inquiries
- Is provided at or before the time of collection

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-CONSENT-002` - Consent management missing
- `CSE-HITRUST-PRIVACY-NO-USE-LIMITATION-003` - Use limitation missing
- `CSE-HIPAA-PRIVACY-NO-NOTICE-001` - HIPAA privacy notice requirements (if defined)
- `CSE-GDPR-TRANSPARENCY-NO-NOTICE-001` - GDPR transparency requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of organizational websites and patient portals
- Examination of mobile applications and digital health tools
- Analysis of registration and enrollment processes
- Verification of privacy notice distribution and acknowledgment
- Assessment of notice content and accessibility
- Review of privacy documentation repositories

The presence of this signal indicates a critical gap in privacy governance and transparency that should be addressed as a priority for HITRUST compliance and regulatory requirements.
