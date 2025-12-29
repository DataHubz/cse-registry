# CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003

**MFA for External Access Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003`     |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Multi-factor authentication (MFA) is not required for user accounts accessing enterprise assets from external networks or the internet.

This signal indicates that users can authenticate using only a password without requiring a second authentication factor when accessing resources from outside the organization's trusted network perimeter.

## Applicability

This signal applies to:

- External-facing applications and portals
- Internet-accessible services
- Cloud-based applications (SaaS, IaaS, PaaS)
- Web-based email and collaboration tools
- Customer or partner portals
- Public-facing APIs with user authentication
- Any system accessible from untrusted networks

## Examples (Non-Normative)

### Cloud Application Without MFA

```yaml
findings:
  - Microsoft 365 tenant allows password-only authentication
  - No conditional access policies requiring MFA for external access
  - Users can access email from any location with just username/password
  - MFA enrollment is optional, not enforced
```

### Web Portal Single-Factor Authentication

```yaml
findings:
  - Corporate intranet portal accessible via internet
  - Authentication requires only AD credentials
  - No integration with MFA provider
  - Password-only authentication accepted from any IP address
```

### VPN Without MFA Requirement

```yaml
findings:
  - VPN allows connection with username and password only
  - MFA capability exists but not enforced for all users
  - External contractors authenticate without second factor
  - Legacy VPN profiles bypass MFA requirements
```

## What This Signal Does NOT Assert

- Whether MFA is available but not enforced
- The strength or type of MFA methods in use
- Whether users have enrolled in MFA voluntarily
- Whether network-based controls compensate for lack of MFA
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.3**: Require MFA for Externally-Exposed Applications (IG1)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Require all externally-exposed enterprise or third-party applications to enforce MFA, where supported. Enforcing MFA through a directory service or SSO provider is a satisfactory implementation of this safeguard.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-MFA-REMOTE-004` - MFA for Remote Network Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ADMIN-005` - MFA for Admin Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ALL-007` - MFA for All Applications Missing
