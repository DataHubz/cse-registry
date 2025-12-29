# CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001

**Privacy Policy Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-NOTICE-NO-PRIVACY-POLICY-001` |
| Domain | CCPA |
| Category | NOTICE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business subject to CCPA requirements does not maintain or make available a privacy policy that is reasonably accessible to consumers. This signal indicates the absence of a required privacy policy document or the inability to locate such a policy through normal consumer access paths.

The privacy policy must be posted online and updated at least once every 12 months to comply with CCPA notice requirements.

## Applicability

This signal applies to:

- Business websites and mobile applications collecting personal information
- Online services and platforms subject to CCPA
- E-commerce platforms operating in or targeting California
- SaaS applications processing California consumer data
- Any business meeting CCPA applicability thresholds
- Marketing websites with contact forms or tracking technologies
- Customer portals and authentication systems

## Examples (Non-Normative)

### Website Without Privacy Policy Link

```html
<!-- Footer missing privacy policy link -->
<footer>
  <nav>
    <a href="/terms">Terms of Service</a>
    <a href="/contact">Contact Us</a>
    <!-- No privacy policy link present -->
  </nav>
</footer>
```

### Mobile App Without Privacy Policy

```json
// App configuration missing privacy policy URL
{
  "app_name": "Example App",
  "version": "1.0.0",
  "legal": {
    "terms_of_service": "https://example.com/terms"
    // No privacy_policy field
  }
}
```

### Inaccessible Privacy Policy

```yaml
# robots.txt blocking privacy policy
User-agent: *
Disallow: /privacy
Disallow: /legal/
```

## What This Signal Does NOT Assert

- Whether the business is actually subject to CCPA
- The completeness or accuracy of privacy policy content (if one exists but is incomplete)
- Whether the policy meets all substantive CCPA requirements
- Compliance or non-compliance with CCPA or other privacy laws
- The business's intent or good faith efforts
- Required remediation timeline

## CCPA Context (Informative)

- **Section**: §1798.130(a)(5)
- **Requirement**: Businesses must make available to consumers a privacy policy that includes the information required by §1798.110, and shall update the policy at least once every 12 months
- **Added by**: CCPA (original 2018 statute)

The CCPA requires businesses to maintain a reasonably accessible privacy policy as a foundational transparency requirement. This policy serves as the primary vehicle for informing consumers about their rights and the business's data practices.

## Related Signals

- `CSE-CCPA-NOTICE-NO-PI-CATEGORIES-003` — Personal Information Categories Not Disclosed
- `CSE-CCPA-NOTICE-NO-RIGHTS-DISCLOSURE-006` — Consumer Rights Not Disclosed
- `CSE-CCPA-NOTICE-NO-PURPOSE-DISCLOSURE-004` — Collection Purposes Not Disclosed

## Notes

Detection of this signal typically involves:

- Scanning website footer and header navigation for privacy policy links
- Checking mobile app metadata and configuration files
- Reviewing API documentation for privacy policy references
- Verifying accessibility of privacy policy URLs (200 HTTP status)
- Checking for robots.txt or noindex directives blocking policy access
- Reviewing app store listings for privacy policy URLs

The presence of this signal indicates a foundational gap in CCPA compliance infrastructure that warrants immediate attention.
