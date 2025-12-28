# CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003

**Personal Information Categories Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business's privacy policy or collection notice fails to disclose the categories of personal information collected, sold, shared, or disclosed. This signal indicates that required categorical descriptions of personal information are missing or insufficiently specific in consumer-facing privacy notices.

CCPA requires businesses to describe personal information using enumerated categories defined in the statute, not merely generic references to "data" or "information."

## Applicability

This signal applies to:

- Privacy policies and privacy notices
- Notice at collection disclosures
- Right to know response templates
- Data processing agreements and disclosures
- Mobile app privacy labels (App Store, Google Play)
- Cookie and tracking technology notices
- Marketing materials describing data practices
- Vendor and third-party disclosure statements

## Examples (Non-Normative)

### Privacy Policy Without Categories

```markdown
## Information We Collect

We collect information you provide to us and information
automatically collected when you use our service.

<!-- Missing: specific CCPA categories like "identifiers",
     "commercial information", "internet activity", etc. -->
```

### Vague Collection Notice

```html
<div class="collection-notice">
  We collect personal data to improve our services.
  <a href="/privacy">Learn more</a>
</div>

<!-- Missing: categories such as "identifiers (name, email)",
     "geolocation data", "inferences", etc. -->
```

### Incomplete Privacy Policy Section

```yaml
# Privacy configuration missing categories
data_collection:
  enabled: true
  description: "We collect user information"
  # Missing: categories array with CCPA-defined categories
```

### Generic Mobile App Privacy Label

```json
// App Store privacy manifest
{
  "privacy_types": [
    {
      "type": "user_data",
      "description": "We collect your information"
      // Missing: specific CCPA categories
    }
  ]
}
```

## What This Signal Does NOT Assert

- Whether the business actually collects the categories it should disclose
- The accuracy of category disclosures (if present but incorrect)
- Whether the business uses the exact statutory language
- Compliance with category-specific disclosure requirements
- Whether all collected data fits neatly into CCPA categories
- The level of detail or granularity required

## CCPA Context (Informative)

- **Section**: §1798.110(c)
- **Requirement**: A business that receives a verifiable consumer request shall disclose the categories of personal information it has collected about that consumer, using the categories defined in §1798.140(v)
- **Added by**: CCPA (original 2018 statute)

The CCPA defines specific categories of personal information in §1798.140(v), including:
- Identifiers
- California Customer Records categories
- Protected classification characteristics
- Commercial information
- Biometric information
- Internet or network activity
- Geolocation data
- Sensory data
- Professional or employment information
- Education information
- Inferences

## Related Signals

- `CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001` — Privacy Policy Missing
- `CSE-CCPA-NOTICE-NO-COLLECTION-DISCLOSURE-002` — Collection Notice at Point of Collection Missing
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Collection Purposes Not Disclosed

## Notes

Detection of this signal typically involves:

- Natural language processing of privacy policy text
- Keyword matching for CCPA-defined category terms
- Comparison against statutory category enumeration (§1798.140(v))
- Analysis of privacy notice completeness
- Review of "right to know" response templates
- Checking mobile app privacy manifests and labels
- Scanning collection notices for category-specific language

The presence of this signal indicates a substantive gap in required privacy disclosures that may impair consumers' ability to understand data practices.
