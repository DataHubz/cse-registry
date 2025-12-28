# CSE-CCPA-RIGHTS-NO-PORTABILITY-MECHANISM-004

**Data Portability Mechanism Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-RIGHTS-NO-PORTABILITY-MECHANISM-004` |
| Domain | CCPA |
| Category | RIGHTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No mechanism exists to provide personal information to consumers in a portable and readily usable format that allows transmission to another entity without hindrance.

Data portability is a component of the right to know, requiring businesses to deliver data in a format that enables consumers to transmit it to other services.

## Applicability

- Consumer data platforms
- Social media and networking applications
- Cloud storage and file sharing services
- Subscription-based services
- E-commerce platforms
- Productivity and collaboration tools

## Examples (Non-Normative)

### No Export Capability

```yaml
data_portability:
  export_format: null
  structured_data_export: false
  machine_readable_format: false
  transmission_capability: false
```

### Proprietary Format Only

```
Portability Assessment:
  Export Format: PDF only (not machine-readable)
  Structured Data: Not available
  API Access: None
  Bulk Export: Not supported
  Common Format Support: None (no JSON/CSV/XML)
```

### Manual Data Collection

```json
{
  "portability_features": {
    "automated_export": false,
    "structured_format": false,
    "api_access": false,
    "bulk_download": false,
    "interoperable_format": false,
    "direct_transmission": false
  }
}
```

## CCPA Context (Informative)

- **Section**: §1798.130(a)(2)(B)
- **Requirement**: Personal information shall be delivered in a portable and, to the extent technically feasible, readily usable format that allows the consumer to transmit this information to another entity without hindrance
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-RIGHTS-NO-ACCESS-MECHANISM-001`
- `CSE-CCPA-RIGHTS-NO-FREE-DISCLOSURE-007`
- `CSE-GDPR-RIGHTS-NO-PORTABILITY-MECHANISM-014`
