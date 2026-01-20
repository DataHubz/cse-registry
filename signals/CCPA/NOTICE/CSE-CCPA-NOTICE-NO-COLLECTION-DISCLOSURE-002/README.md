# CSE-CCPA-NOTICE-NO-COLLECTION-DISCLOSURE-002

**Collection Notice at Point of Collection Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-COLLECTION-DISCLOSURE-002` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business collects personal information from consumers without providing notice at or before the point of collection. This signal indicates the absence of required "just-in-time" notice informing consumers about what categories of personal information are being collected and the purposes for which they will be used.

The notice must be provided at or before the time of collection, not merely in a privacy policy accessible elsewhere.

## Applicability

This signal applies to:

- Web forms collecting personal information (registration, contact, checkout)
- Mobile applications requesting user data or permissions
- API endpoints receiving personal information from consumers
- Chatbots and conversational interfaces collecting data
- Marketing pages with embedded tracking or data collection
- Account creation flows and onboarding processes
- Payment and checkout processes
- Survey and feedback collection mechanisms

## Examples (Non-Normative)

### Contact Form Without Collection Notice

```html
<!-- Form collecting email without notice -->
<form action="/submit-contact" method="POST">
  <label>Email:</label>
  <input type="email" name="email" required>
  <label>Message:</label>
  <textarea name="message" required></textarea>
  <button type="submit">Submit</button>
  <!-- No notice about what PI is collected or why -->
</form>
```

### Mobile App Permission Request Without Context

```swift
// Requesting location permission without notice
func requestLocationAccess() {
    locationManager.requestWhenInUseAuthorization()
    // No notice explaining collection categories or purposes
}
```

### Account Registration Without Notice

```json
// Registration API without collection notice
{
  "endpoint": "/api/register",
  "fields": {
    "email": "user@example.com",
    "name": "John Doe",
    "phone": "+1234567890"
  }
  // No notice field or reference to collection disclosure
}
```

### Analytics Implementation Without Notice

```javascript
// Analytics tracking without disclosure
<script>
  gtag('config', 'GA-XXXXXXX', {
    'send_page_view': true,
    'anonymize_ip': false
  });
  // No notice to user about data collection
</script>
```

## What This Signal Does NOT Assert

- Whether a privacy policy exists elsewhere on the site
- The completeness or accuracy of collection notices (if present but incomplete)
- Whether the business has legitimate interest or consent
- Compliance or non-compliance with CCPA or other laws
- The technical implementation method for providing notice
- Whether consumers actually read or understand the notice

## CCPA Context (Informative)

- **Section**: §1798.100(b)
- **Requirement**: A business that collects a consumer's personal information shall, at or before the point of collection, inform consumers as to the categories of personal information to be collected and the purposes for which the categories of personal information shall be used
- **Added by**: CCPA (original 2018 statute), clarified by CPRA

The notice at collection requirement ensures consumers receive contextually relevant information about data practices at the moment when collection occurs, not just in a general privacy policy.

## Related Signals

- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Collection Purposes Not Disclosed
- `CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001` — Privacy Policy Missing

## Notes

Detection of this signal typically involves:

- Scanning form markup for collection notice text or links
- Reviewing mobile app permission request dialogs
- Analyzing API request/response patterns for notice delivery
- Checking JavaScript initialization for notice display logic
- Reviewing cookie consent banners for collection disclosures
- Examining checkout flows for data collection notices
- Testing user registration and onboarding sequences

The presence of this signal indicates a missing point-of-collection transparency requirement that may expose the business to consumer complaints or regulatory scrutiny.
