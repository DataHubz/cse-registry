# CSE-CCPA-OPTOUT-NO-SALE-LINK-001

**"Do Not Sell My Personal Information" Link Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-SALE-LINK-001`      |
| Domain          | CCPA                                    |
| Category        | OPTOUT                                  |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

A business that sells consumers' personal information does not provide a clear and conspicuous link titled "Do Not Sell My Personal Information" or "Do Not Sell My Info" on its homepage or in its privacy policy.

This signal indicates that the required opt-out mechanism for the sale of personal information is not present or not properly accessible to consumers, preventing them from exercising their CCPA rights.

## Applicability

This signal applies to:

- E-commerce websites that sell consumer data to third parties
- Marketing platforms that monetize personal information
- Data brokers and aggregators
- Mobile applications that share PI for monetary consideration
- SaaS platforms with data monetization business models
- Media and content sites using advertising exchanges
- Social networking platforms with third-party data sharing
- Any business website collecting California residents' PI and selling it

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Website Footer Without Required Link

```html
<!-- Footer missing "Do Not Sell My Personal Information" link -->
<footer>
  <nav>
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of Service</a>
    <a href="/contact">Contact Us</a>
    <!-- Missing: Do Not Sell link -->
  </nav>
</footer>
```

### Mobile App Settings Without Opt-Out Option

```swift
// Settings menu missing sale opt-out option
struct SettingsView: View {
    var body: some View {
        List {
            NavigationLink("Privacy Policy", destination: PrivacyView())
            NavigationLink("Terms of Service", destination: TermsView())
            NavigationLink("Account Settings", destination: AccountView())
            // Missing: "Do Not Sell My Personal Information" option
        }
    }
}
```

### Privacy Policy Page Without Homepage Link

```html
<!-- Privacy policy has opt-out form, but no link from homepage -->
<div class="privacy-policy">
  <h2>Your Privacy Rights</h2>
  <form action="/opt-out-sale" method="post">
    <!-- Form exists but not linked from homepage -->
  </form>
</div>
```

### Non-Compliant Link Placement

```html
<!-- Link buried in footer with non-compliant text -->
<footer>
  <div class="legal-links" style="font-size: 8px; color: #ccc;">
    <a href="/opt-out">Privacy Preferences</a>
    <!-- Text doesn't match required "Do Not Sell My Personal Information" -->
  </div>
</footer>
```

## What This Signal Does NOT Assert

- Whether the business actually sells personal information
- Whether the link text uses the exact required wording
- Whether the opt-out mechanism functions properly when accessed
- The accessibility or usability of the link
- Compliance or non-compliance with CCPA or any regulation
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CCPA requirements:

- **Section 1798.135(a)**: A business that sells consumers' personal information shall provide a clear and conspicuous link on the business's homepage, titled "Do Not Sell My Personal Information" or "Do Not Sell My Info," to an internet webpage that enables consumers to opt-out of the sale
- **Added by**: CCPA (original California Consumer Privacy Act of 2018)
- **Requirement**: The link must be clear and conspicuous, typically placed on the homepage and accessible from every page of the website

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-SHARE-LINK-002` — Missing "Do Not Share" link (CPRA requirement)
- `CSE-CCPA-OPTOUT-NO-COMBINED-LINK-003` — Combined opt-out link implementation issues
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored

## Notes

Detection of this signal typically involves:

- Automated scanning of website homepage and footer elements
- Analysis of link text and destination URLs
- Review of mobile application settings and privacy menus
- Verification of privacy policy accessibility
- Assessment of link prominence and conspicuousness

The presence of this signal indicates a condition that warrants review in the context of CCPA opt-out requirements.
