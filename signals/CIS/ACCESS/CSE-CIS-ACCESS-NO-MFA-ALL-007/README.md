# CSE-CIS-ACCESS-NO-MFA-ALL-007

**MFA for All Applications Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-MFA-ALL-007`          |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Multi-factor authentication (MFA) is not required for all enterprise applications, including both internal and external-facing systems where MFA support is available.

This signal indicates that while MFA may be implemented for some critical systems, it has not been comprehensively deployed across the full application portfolio, leaving gaps in authentication security.

## Applicability

This signal applies to:

- Enterprise applications (ERP, CRM, HRIS, etc.)
- Internal business applications
- Development and staging environments
- Collaboration platforms (email, chat, document sharing)
- Customer-facing applications
- Partner and vendor portals
- Cloud services and SaaS applications
- Database access and management tools
- DevOps and CI/CD platforms

## Examples (Non-Normative)

### Selective MFA Deployment

```yaml
findings:
  - MFA enforced for VPN and email but not internal apps
  - Critical applications like ERP lack MFA requirement
  - MFA available but enforcement varies by application
  - No centralized MFA policy across application portfolio
```

### Legacy Application Exemptions

```yaml
findings:
  - Older applications incapable of MFA integration excluded
  - No compensating controls for systems without MFA
  - Migration roadmap to MFA-capable platforms not defined
  - Applications authenticate against AD without MFA passthrough
```

### Internal Application Gaps

```yaml
findings:
  - MFA required for external access but not internal networks
  - Intranet applications accessible with password only
  - Assumption that network perimeter provides sufficient security
  - Internal portals and dashboards lack MFA enforcement
```

### Incomplete SSO Integration

```yaml
findings:
  - Some applications integrated with SSO/MFA, others standalone
  - Shadow IT applications outside centralized authentication
  - Applications using local authentication databases
  - Federated identity not enforced organization-wide
```

## What This Signal Does NOT Assert

- Whether MFA is implemented for any applications
- The number or criticality of applications lacking MFA
- Whether applications are technically capable of supporting MFA
- Whether compensating controls exist for non-MFA applications
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.7**: Centralize Access Control (IG2)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Centralize access control for all enterprise assets through a directory service or SSO provider, where supported.

Note: While CIS 6.7 emphasizes centralizing access control, comprehensive MFA deployment across all applications is a key component of mature access control management within CIS Control 6.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003` - MFA for External Access Missing
- `CSE-CIS-ACCESS-NO-MFA-REMOTE-004` - MFA for Remote Network Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ADMIN-005` - MFA for Admin Access Missing
