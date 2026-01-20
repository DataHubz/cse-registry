# CSE-CCPA-OPTOUT-NO-COMBINED-LINK-003

**Combined Opt-Out Link Not Properly Implemented**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CCPA-OPTOUT-NO-COMBINED-LINK-003`    |
| Domain          | CCPA                                      |
| Category        | OPTOUT                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

A business that both sells and shares consumers' personal information attempts to use a combined opt-out link but does not properly implement it with compliant text or functionality.

This signal indicates that while the business may be attempting to provide a unified opt-out mechanism as permitted under CCPA/CPRA, the implementation does not meet the statutory requirements for clarity, conspicuousness, or proper wording.

## Applicability

This signal applies to:

- Websites combining sale and share opt-out into single link
- Privacy preference centers with unified controls
- Mobile applications with consolidated privacy settings
- E-commerce platforms with single opt-out mechanism
- Marketing platforms handling both sales and sharing
- SaaS applications with combined privacy controls
- Content publishers with integrated opt-out interfaces
- Any business subject to both sale and share opt-out requirements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Incorrect Combined Link Text

```html
<!-- Combined link with non-compliant wording -->
<footer>
  <a href="/privacy-preferences">Privacy Choices</a>
  <!-- Should be: "Do Not Sell or Share My Personal Information" -->
</footer>
```

### Partial Coverage Link

```html
<!-- Link only covers "sale" but claims to cover both -->
<footer>
  <a href="/opt-out-sale" title="Opt out of sale and sharing">
    Do Not Sell My Personal Information
  </a>
  <!-- Missing "or Share" in visible text -->
</footer>
```

### Combined Link With Broken Functionality

```javascript
// Opt-out handler only processes sale, not share
function handleOptOut() {
  // Only sets opt-out for sale
  localStorage.setItem('ccpa_opt_out_sale', 'true');

  // Missing: opt-out for sharing
  // Should also set: localStorage.setItem('ccpa_opt_out_share', 'true');
}
```

### Ambiguous Combined Interface

```html
<!-- Form doesn't clearly separate sale vs share options -->
<form action="/opt-out" method="post">
  <h2>Privacy Preferences</h2>
  <label>
    <input type="checkbox" name="opt_out_all" />
    Opt out of data sharing
    <!-- Unclear if this covers both sale AND share -->
  </label>
</form>
```

## What This Signal Does NOT Assert

- Whether separate links would be more appropriate
- Whether the opt-out actually processes correctly
- Whether consumers understand the combined mechanism
- The accessibility or prominence of the link
- Compliance or non-compliance with CCPA/CPRA
- Required remediation actions

## CCPA Context (Informative)

This signal is relevant to CCPA/CPRA requirements:

- **Section 1798.135(a)(1)**: A business that both sells and shares personal information may provide a single, clearly-labeled link titled "Do Not Sell or Share My Personal Information" that enables consumers to opt-out of both sale and sharing
- **Requirement**: The combined link must use the prescribed text or substantially similar language that clearly communicates both sale and sharing opt-out
- **Added by**: CPRA clarification allowing combined opt-out mechanism

These references are informative and do not constitute legal guidance.

## Related Signals

- `CSE-CCPA-OPTOUT-NO-SALE-LINK-001` — Missing "Do Not Sell" link
- `CSE-CCPA-OPTOUT-NO-SHARE-LINK-002` — Missing "Do Not Share" link
- `CSE-CCPA-OPTOUT-NO-GPC-SUPPORT-004` — Global Privacy Control not honored
- `CSE-CCPA-OPTOUT-SALE-AFTER-OPTOUT-007` — PI sold after opt-out

## Notes

Detection of this signal typically involves:

- Analysis of link text for proper "Sell or Share" wording
- Verification that opt-out mechanism covers both sale and sharing
- Review of backend processing logic for opt-out requests
- Testing of combined opt-out functionality
- Assessment of clarity and consumer understanding
- Validation that both sale and share are addressed

The presence of this signal indicates a condition that warrants review in the context of combined opt-out implementation requirements.
