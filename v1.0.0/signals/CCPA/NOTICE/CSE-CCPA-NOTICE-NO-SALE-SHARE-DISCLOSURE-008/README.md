# CSE-CCPA-NOTICE-NO-SALE-SHARE-DISCLOSURE-008

**Sale/Sharing Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-SALE-SHARE-DISCLOSURE-008` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business that sells or shares personal information fails to disclose this practice in its privacy policy or provide required notices about consumer opt-out rights. This signal indicates missing or inadequate disclosures about sale or sharing of personal information, including the absence of required "Do Not Sell or Share My Personal Information" notices.

CCPA and CPRA impose specific disclosure obligations on businesses that sell or share personal information, distinct from general data disclosure requirements.

## Applicability

This signal applies to:

- Privacy policies of businesses selling or sharing personal information
- Websites and mobile applications with third-party tracking or advertising
- Marketing platforms and data brokers
- Publishers with advertising networks or analytics partners
- E-commerce sites with affiliate programs or retargeting pixels
- Social media platforms and user-generated content sites
- Mobile applications with ad SDKs or cross-context behavioral advertising
- Cookie consent and preference management platforms

## Examples (Non-Normative)

### Third-Party Analytics Without Sale Disclosure

```html
<!-- Google Analytics without sale/share disclosure -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('config', 'GA-XXXXXXX', {
    'allow_google_signals': true  // Cross-site tracking enabled
  });
</script>

<!-- Missing: disclosure that this constitutes "sharing" under CCPA -->
```

### Advertising Pixels Without Disclosure

```javascript
// Facebook Pixel for retargeting
fbq('init', '1234567890');
fbq('track', 'PageView');

// Missing: disclosure of personal information sale/sharing
// and opt-out mechanism
```

### Privacy Policy Missing Sale Section

```markdown
## How We Share Your Information

We may share your information with service providers
who assist us in operating our website.

<!-- Missing: disclosure of "sale" or "sharing" as defined
     by CCPA, categories sold/shared, and opt-out rights -->
```

### Mobile App With Ad SDK

```json
// App configuration with advertising SDK
{
  "dependencies": {
    "google-mobile-ads": "^2.0.0",
    "facebook-audience-network": "^6.0.0"
  }
  // Missing: privacy manifest declaring sale/sharing
}
```

## What This Signal Does NOT Assert

- Whether the data transfer actually constitutes a "sale" or "sharing" under CCPA definitions
- Whether the business believes it sells or shares personal information
- The presence or absence of contractual restrictions with third parties
- Compliance with opt-out requirements or mechanisms
- Whether exceptions to sale/sharing disclosure apply
- The business's intent or good faith interpretation of CCPA

## CCPA Context (Informative)

- **Section**: §1798.115(c)
- **Requirement**: A business that sells or shares consumers' personal information shall disclose the categories of personal information sold or shared, and the categories of third parties to whom the information was sold or shared
- **Added by**: CCPA (original 2018 statute for "sale"), CPRA (2020 amendment added "sharing")

Key definitions:
- **Sale** (§1798.140(ad)): Selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating personal information for monetary or other valuable consideration
- **Sharing** (§1798.140(ah), added by CPRA): Sharing, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating personal information to a third party for cross-context behavioral advertising

Many common third-party integrations (analytics, advertising, social media plugins) may constitute "sharing" even if no money changes hands.

## Related Signals

- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-RIGHTS-DISCLOSURE-006` — Consumer Rights Not Disclosed
- `CSE-CCPA-RIGHTS-NO-OPT-OUT-LINK-001` — Opt-Out Link Missing (if defined)

## Notes

Detection of this signal typically involves:

- Network traffic analysis for third-party HTTP requests with personal data
- JavaScript analysis for tracking pixels, analytics, and advertising scripts
- Review of privacy policy for "sale" and "sharing" disclosures
- Pattern matching for third-party SDK imports and configurations
- Checking for "Do Not Sell or Share My Personal Information" links
- Analysis of cookie consent categories (advertising, analytics, social media)
- Scanning for Global Privacy Control (GPC) signal handling
- Review of data processing agreements with third parties

The presence of this signal indicates a significant transparency gap that may expose the business to regulatory enforcement and consumer complaints, especially given the CCPA's private right of action and statutory damages provisions.
