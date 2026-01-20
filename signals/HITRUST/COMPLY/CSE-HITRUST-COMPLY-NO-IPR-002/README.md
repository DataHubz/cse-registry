# CSE-HITRUST-COMPLY-NO-IPR-002

**Intellectual Property Rights Not Protected**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-IPR-002`         |
| Domain          | HITRUST                                 |
| Category        | COMPLY                                  |
| Control Domain  | 06 - Compliance                         |
| Reference       | 06.b                                    |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Appropriate procedures have not been implemented to ensure compliance with legal, statutory, regulatory, and contractual requirements related to intellectual property rights (IPR) and the use of proprietary software products.

This signal indicates that an organization lacks documented processes to protect intellectual property, manage software licenses, prevent unauthorized use of copyrighted materials, and ensure proper attribution and licensing compliance.

## Applicability

This signal applies to:

- Software development organizations creating proprietary code
- Organizations using third-party commercial software
- Companies utilizing open-source software components
- Content management systems handling copyrighted materials
- Cloud service providers using licensed technologies
- Organizations with patent portfolios
- Development teams using third-party libraries and frameworks
- Companies creating or using AI/ML models with licensing requirements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Software License Management

```yaml
# Absence of software asset management showing:
dependencies:
  - package: "commercial-sdk"
    license: "unknown"
    compliance_verified: false
    license_count: "not_tracked"
    expiration_date: null
```

### Undocumented Open Source Compliance

```json
{
  "project": "customer-portal",
  "open_source_components": [
    {
      "name": "third-party-lib",
      "license": "GPL-3.0",
      "compliance_review": "not_performed",
      "attribution_provided": false,
      "license_terms_met": "unknown"
    }
  ]
}
```

### No IPR Protection Procedures

```markdown
# Missing documentation for:
- Software license inventory and tracking
- Open source license compliance process
- Copyright notice and attribution requirements
- Patent and trademark usage policies
- Proprietary information handling procedures
- Third-party IP agreement reviews
- License violation remediation process
```

### Unmanaged Code Repository Licensing

```text
Repository lacks:
- LICENSE file defining usage terms
- Copyright headers in source files
- Third-party attribution notices
- Open source license compatibility analysis
- Proprietary vs. open source code separation
```

## What This Signal Does NOT Assert

- Whether IPR violations have occurred
- The validity or enforceability of existing licenses
- Whether legal counsel has reviewed IP matters
- The adequacy of existing IP protections
- Compliance or non-compliance with specific licensing terms
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.b Intellectual Property Rights**: Appropriate procedures shall be implemented to ensure compliance with legislative, regulatory, and contractual requirements on the use of material in respect of which there might be intellectual property rights and on the use of proprietary software products

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified
- `CSE-HITRUST-COMPLY-NO-TECHNICAL-COMPLIANCE-005` — Technical compliance not checked
- `CSE-HITRUST-COMPLY-NO-AUDIT-006` — Compliance audit not conducted

## Notes

Detection of this signal typically involves:

- Review of software asset management systems
- Analysis of software bill of materials (SBOM)
- Examination of license compliance tools and processes
- Review of procurement and vendor management procedures
- Inspection of code repositories for license files and headers
- Assessment of third-party dependency management
- Review of IP assignment and licensing agreements

The presence of this signal indicates a condition that warrants review in the context of intellectual property rights management and software licensing compliance.
