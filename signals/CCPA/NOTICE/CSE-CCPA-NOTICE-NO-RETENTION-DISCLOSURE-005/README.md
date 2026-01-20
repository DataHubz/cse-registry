# CSE-CCPA-NOTICE-NO-RETENTION-DISCLOSURE-005

**Retention Periods Not Disclosed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-RETENTION-DISCLOSURE-005` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business fails to disclose the length of time it intends to retain each category of personal information, or the criteria used to determine retention periods. This signal indicates missing or inadequate retention disclosures in privacy notices that would inform consumers about data lifecycle practices.

While CCPA does not mandate specific retention periods, it requires businesses to disclose their retention practices to enable informed consumer decisions.

## Applicability

This signal applies to:

- Privacy policies and comprehensive privacy notices
- Data retention policy documents
- Records management disclosures
- Response templates for "right to know" requests
- Data processing agreements and transparency reports
- Cookie and tracking technology retention notices
- Account deletion and data portability interfaces
- Vendor and service provider agreements

## Examples (Non-Normative)

### Privacy Policy Without Retention Information

```markdown
## Data We Collect

We collect identifiers, commercial information, and
internet activity information.

<!-- Missing: retention periods or criteria for each category -->
```

### Vague Retention Statement

```yaml
# Privacy configuration
data_retention:
  policy: "We retain data as long as necessary"
  # Missing: specific periods or criteria
```

### Cookie Notice Without Retention

```html
<div class="cookie-notice">
  We use cookies to enhance your experience.
  <button>Accept</button>
</div>

<!-- Missing: how long cookies persist -->
```

### Account Settings Without Retention Disclosure

```json
// User data export metadata
{
  "export_date": "2025-12-27",
  "categories": ["identifiers", "commercial_info"],
  "record_count": 1523
  // Missing: retention_periods field
}
```

## What This Signal Does NOT Assert

- Whether the business actually adheres to disclosed retention periods
- The reasonableness or appropriateness of retention periods
- Whether retention complies with data minimization principles
- The existence of internal retention policies (vs. disclosure)
- Whether retention is consistent with legal obligations
- The technical implementation of retention or deletion

## CCPA Context (Informative)

- **Section**: §1798.100(a)(3)
- **Requirement**: A business shall provide information about the length of time it intends to retain each category of personal information, including sensitive personal information, or if that is not possible, the criteria used to determine such period
- **Added by**: CPRA (2020 amendment)

The retention disclosure requirement was added by CPRA to enhance transparency about data lifecycle practices. Businesses must disclose either:
1. Specific retention periods for each category (e.g., "2 years from last interaction"), or
2. The criteria used to determine retention (e.g., "duration of customer relationship plus 7 years for tax compliance")

## Related Signals

- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Collection Purposes Not Disclosed
- `CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001` — Privacy Policy Missing

## Notes

Detection of this signal typically involves:

- Natural language processing of privacy policy text for retention language
- Pattern matching for time-based expressions (days, months, years)
- Analysis of "Data Retention" or "How Long We Keep Your Information" sections
- Review of cookie configuration for expiration settings
- Checking data processing agreements for retention schedules
- Scanning right-to-know response templates for retention fields
- Evaluating privacy notices for criteria-based retention descriptions

The presence of this signal indicates a CPRA-specific disclosure gap that may limit consumer understanding of data lifecycle practices.
