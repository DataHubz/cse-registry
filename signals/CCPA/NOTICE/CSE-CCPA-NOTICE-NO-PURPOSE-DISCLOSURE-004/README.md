# CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004

**Collection Purposes Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business fails to disclose the purposes for which it collects, uses, or sells personal information in its privacy notices. This signal indicates missing or inadequate purpose descriptions that would enable consumers to understand why their information is being collected and how it will be used.

The purposes must be disclosed at or before collection and in the privacy policy, with sufficient specificity to be meaningful to consumers.

## Applicability

This signal applies to:

- Privacy policies and privacy notices
- Notice at collection disclosures
- Terms of service documents referencing data use
- Mobile app permission request dialogs
- Cookie consent and preference centers
- Data processing agreements with consumers
- Marketing communications describing data practices
- Account settings and preference interfaces

## Examples (Non-Normative)

### Collection Notice Without Purposes

```html
<!-- Form collecting data without purpose disclosure -->
<form action="/newsletter" method="POST">
  <input type="email" name="email" placeholder="Enter your email">
  <button type="submit">Subscribe</button>
  <!-- No disclosure of purposes: marketing, analytics, etc. -->
</form>
```

### Privacy Policy With Vague Purposes

```markdown
## How We Use Your Information

We use the information we collect to provide and improve
our services and communicate with you.

<!-- Too vague - missing specific purposes like:
     - Fulfilling transactions
     - Detecting fraud
     - Internal research
     - Targeted advertising -->
```

### Mobile Permission Without Purpose

```swift
// Location permission without purpose disclosure
let locationManager = CLLocationManager()
locationManager.requestWhenInUseAuthorization()

// Missing: NSLocationWhenInUseUsageDescription with specific purpose
```

### API Response Missing Purpose

```json
// Privacy manifest without purposes
{
  "data_collected": {
    "categories": ["identifiers", "commercial_information"],
    "purposes": []  // Empty purposes array
  }
}
```

## What This Signal Does NOT Assert

- Whether the disclosed purposes are truthful or complete
- Whether the business uses data only for disclosed purposes
- The legal basis for processing (consent, legitimate interest, etc.)
- Compliance with purpose limitation principles
- Whether purposes are compatible with original collection context
- The granularity or specificity level required

## CCPA Context (Informative)

- **Section**: §1798.100(a)(1)
- **Requirement**: A business shall, at or before the point of collection, inform consumers about the categories of personal information to be collected and the purposes for which the categories of personal information shall be used
- **Added by**: CCPA (original 2018 statute)

The CCPA requires purpose disclosure as part of the notice at collection and in response to consumer requests to know. Purposes should align with the business or commercial purposes enumerated in regulations, such as:
- Performing services
- Detecting security incidents
- Debugging and repair
- Short-term, transient use
- Internal research
- Quality and safety verification
- Advertising and marketing

## Related Signals

- `CSE-CCPA-NOTICE-NO-COLLECTION-DISCLOSURE-002` — Collection Notice at Point of Collection Missing
- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-RETENTION-DISCLOSURE-005` — Retention Periods Not Disclosed

## Notes

Detection of this signal typically involves:

- Natural language processing of privacy notice text
- Pattern matching for purpose-related keywords and phrases
- Analysis of form markup and collection point disclosures
- Review of mobile app Info.plist purpose strings
- Checking API documentation for purpose declarations
- Scanning cookie consent interfaces for purpose categories
- Evaluating privacy policy sections for purpose descriptions

The presence of this signal indicates a gap in required transparency that prevents consumers from making informed decisions about data sharing.
