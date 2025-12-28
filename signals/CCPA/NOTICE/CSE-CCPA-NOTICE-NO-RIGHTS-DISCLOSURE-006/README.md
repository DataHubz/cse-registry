# CSE-CCPA-NOTICE-NO-RIGHTS-DISCLOSURE-006

**Consumer Rights Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-RIGHTS-DISCLOSURE-006` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business fails to inform consumers of their CCPA rights in its privacy policy or other required notices. This signal indicates missing or incomplete disclosure of consumer rights such as the right to know, right to delete, right to opt-out of sale/sharing, right to correct, and right to limit sensitive personal information use.

CCPA mandates that businesses clearly describe consumer rights and provide instructions for exercising those rights.

## Applicability

This signal applies to:

- Privacy policies and comprehensive privacy notices
- "Your Privacy Choices" or "Your Rights" dedicated pages
- Account settings and preference centers
- Mobile application privacy sections
- Marketing communications and customer portals
- Website footers with privacy-related links
- Right-to-know and right-to-delete request forms
- Cookie consent and tracking preference interfaces

## Examples (Non-Normative)

### Privacy Policy Without Rights Section

```markdown
## Privacy Policy

### Information We Collect
We collect identifiers and commercial information...

### How We Use Information
We use your information to provide services...

<!-- Missing: Consumer Rights section describing CCPA rights -->
```

### Incomplete Rights Disclosure

```html
<div class="privacy-rights">
  <h3>Your Rights</h3>
  <p>You may request access to your personal information.</p>
  <!-- Missing: right to delete, opt-out, correct, limit -->
</div>
```

### Generic Privacy Notice

```yaml
# Privacy configuration
consumer_notice:
  sections:
    - collection
    - use
    - sharing
  # Missing: rights section
```

### Account Settings Without Rights Links

```json
// User account menu
{
  "menu_items": [
    {"label": "Profile", "href": "/profile"},
    {"label": "Security", "href": "/security"},
    {"label": "Billing", "href": "/billing"}
  ]
  // Missing: "Privacy Rights" or "Your Privacy Choices" link
}
```

## What This Signal Does NOT Assert

- Whether the business actually honors consumer rights requests
- The functionality or usability of rights request mechanisms
- Whether rights disclosures use exact statutory language
- Compliance with verification or response timeline requirements
- The accessibility or prominence of rights information
- Whether exceptions or limitations to rights are properly disclosed

## CCPA Context (Informative)

- **Section**: §1798.130(a)(2)
- **Requirement**: A business that collects a consumer's personal information shall disclose the consumer's rights under the CCPA and provide one or more designated methods for submitting requests
- **Added by**: CCPA (original 2018 statute), expanded by CPRA

CCPA consumer rights that must be disclosed include:
- Right to know what personal information is collected, used, disclosed, or sold (§1798.100, §1798.110, §1798.115)
- Right to delete personal information (§1798.105)
- Right to opt-out of sale or sharing of personal information (§1798.120)
- Right to correct inaccurate personal information (§1798.106, added by CPRA)
- Right to limit use and disclosure of sensitive personal information (§1798.121, added by CPRA)
- Right to non-discrimination for exercising CCPA rights (§1798.125)

## Related Signals

- `CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001` — Privacy Policy Missing
- `CSE-CCPA-RIGHTS-NO-OPT-OUT-LINK-001` — Opt-Out Link Missing (if defined)
- `CSE-CCPA-RIGHTS-NO-REQUEST-MECHANISM-002` — Rights Request Mechanism Missing (if defined)

## Notes

Detection of this signal typically involves:

- Natural language processing of privacy policy text for rights-related keywords
- Pattern matching for statutory rights language (know, delete, opt-out, correct, limit)
- Analysis of website navigation for "Your Rights" or "Privacy Choices" links
- Review of account settings for privacy rights controls
- Checking for "Do Not Sell or Share My Personal Information" links
- Scanning privacy notices for rights exercise instructions
- Evaluating mobile app privacy screens for rights disclosure

The presence of this signal indicates a fundamental transparency gap that may impair consumers' ability to understand and exercise their legal rights.
