# CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005

**Insufficient Request Submission Methods**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-REQUEST-METHODS-005` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Insufficient methods are provided for consumers to submit verifiable consumer requests, or the methods provided do not match how the business primarily interacts with consumers.

CCPA requires businesses to provide at least two designated methods for submitting requests, including at a minimum a toll-free number and a website address if the business maintains a website.

## Applicability

- Consumer-facing web applications
- Mobile applications
- E-commerce platforms
- Online service providers
- Businesses with consumer websites
- Direct-to-consumer brands

## Examples (Non-Normative)

### Single Method Only

```yaml
request_methods:
  toll_free_number: null
  website_form: "https://example.com/privacy-request"
  email_address: null
  mail_address: null
  total_methods: 1
```

### Method Not Aligned with Business Model

```
Request Submission Assessment:
  Primary Consumer Interaction: Mobile app
  Available Request Methods:
    - Postal mail only
  Toll-Free Number: Not provided
  Website Form: Not available
  In-App Mechanism: Missing
```

### Inaccessible Methods

```json
{
  "submission_methods": {
    "toll_free_number": false,
    "website_address": false,
    "email": "privacy@example.com",
    "alignment_with_primary_channel": false,
    "method_count": 1,
    "accessibility_compliant": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(1)
- **Requirement**: A business shall provide two or more designated methods for submitting requests, including, at a minimum, a toll-free telephone number, and if the business maintains an Internet Web site, a Web site address
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-DELETE-MECHANISM-002`
- `CSE-CCPA-RIGHTS-NO-AUTHORIZED-AGENT-008`
