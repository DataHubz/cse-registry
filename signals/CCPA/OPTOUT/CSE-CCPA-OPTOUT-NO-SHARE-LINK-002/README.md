# CSE-CCPA-OPTOUT-NO-SHARE-LINK-002

**"Do Not Share My Personal Information" Link Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-SHARE-LINK-002`     |
| Domain          | CCPA                                    |
| Category        | OPTOUT                                  |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

A business that shares consumers' personal information for cross-context behavioral advertising does not provide a clear and conspicuous link titled "Do Not Share My Personal Information" on its homepage or in its privacy policy.

This signal indicates that the CPRA-required opt-out mechanism for sharing personal information is not present or not properly accessible to consumers, preventing them from exercising their California privacy rights.

## Applicability

This signal applies to:

- Websites using third-party advertising pixels or tags
- Mobile applications with cross-context behavioral advertising
- Platforms sharing data with advertising networks
- Businesses using customer data platforms (CDPs) for ad targeting
- SaaS applications integrating with marketing automation tools
- E-commerce sites with retargeting campaigns
- Social media platforms with advertising partnerships
- Content publishers with programmatic advertising

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Website Without Required Share Opt-Out Link

```html
<!-- Homepage missing "Do Not Share My Personal Information" link -->
<header>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/ccpa-opt-out">Do Not Sell My Personal Information</a>
    <!-- Missing: Do Not Share My Personal Information link (CPRA requirement) -->
  </nav>
</header>
```

### Mobile App Privacy Settings Incomplete

```kotlin
// Android app settings missing share opt-out
class PrivacySettingsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val options = listOf(
            "Privacy Policy",
            "Do Not Sell My Personal Information"
            // Missing: "Do Not Share My Personal Information" option
        )
    }
}
```

### Privacy Center Missing Share Controls

```javascript
// Privacy preference center missing share opt-out
const privacyControls = {
  optOutSale: {
    label: 'Do Not Sell My Personal Information',
    enabled: true
  }
  // Missing: optOutShare control for cross-context behavioral advertising
};
```

### Combined Link Without Share Language

```html
<!-- Link combines sale + share but doesn't mention "share" -->
<footer>
  <a href="/privacy-choices">Do Not Sell My Personal Information</a>
  <!-- Should also mention "Share" per CPRA requirements -->
</footer>
```

## What This Signal Does NOT Assert

- Whether the business actually shares PI for behavioral advertising
- Whether a combined "Do Not Sell or Share" link exists
- Whether the opt-out mechanism functions when accessed
- The visibility or accessibility of the link
- Compliance or non-compliance with CPRA or any regulation
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CPRA requirements:

- **Section 1798.135(a)**: A business that shares consumers' personal information for cross-context behavioral advertising shall provide a clear and conspicuous link titled "Do Not Share My Personal Information" to enable opt-out
- **Added by**: CPRA (California Privacy Rights Act, effective January 1, 2023)
- **Requirement**: The link must be clear and conspicuous, similar to the "Do Not Sell" requirement, and may be combined with the sale opt-out link using "Do Not Sell or Share My Personal Information"

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-OPTOUT-NO-COMBINED-LINK-003` — Combined opt-out link implementation issues
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-OPTOUT-NO-LIMIT-SPI-LINK-005` — Missing sensitive PI limitation link

## Notes

Detection of this signal typically involves:

- Automated scanning of website pages for required link text
- Analysis of privacy preference center controls
- Review of mobile application privacy settings menus
- Inspection of third-party advertising integrations
- Verification of link prominence and accessibility
- Assessment of whether combined "Sell or Share" link is used

The presence of this signal indicates a condition that warrants review in the context of CPRA sharing opt-out requirements.
