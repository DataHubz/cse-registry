# CSE-CIS-ACCESS-NO-MFA-REMOTE-004

**MFA for Remote Network Access Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-ACCESS-NO-MFA-REMOTE-004`       |
| Domain          | CIS                                      |
| Category        | ACCESS                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Multi-factor authentication (MFA) is not required for users establishing remote network access to the enterprise network infrastructure.

This signal indicates that remote access solutions such as VPN, remote desktop services, or jump hosts allow authentication with only username and password without requiring a second authentication factor.

## Applicability

This signal applies to:

- Virtual Private Network (VPN) connections
- Remote Desktop Protocol (RDP) gateways
- SSH bastion hosts and jump servers
- Remote access services (RAS)
- Zero Trust Network Access (ZTNA) solutions
- Cloud-based virtual desktops (VDI)
- Remote management interfaces
- Terminal services and jump boxes

## Examples (Non-Normative)

### VPN Without MFA Enforcement

```yaml
findings:
  - VPN server accepts username/password authentication only
  - No integration with MFA provider (e.g., Duo, Okta, Azure MFA)
  - Split tunneling enabled with single-factor auth
  - Client certificates used but no interactive MFA
```

### RDP Gateway Single-Factor

```yaml
findings:
  - Remote Desktop Gateway allows AD password authentication
  - No MFA prompt before establishing RDP session
  - Network Level Authentication (NLA) enabled but no MFA
  - Smart card authentication not enforced
```

### SSH Without MFA

```yaml
findings:
  - SSH bastion host accepts password or key-based auth only
  - No PAM module for MFA enforcement
  - Public key authentication without interactive MFA
  - No integration with authentication provider requiring MFA
```

## What This Signal Does NOT Assert

- Whether VPN or remote access infrastructure exists
- The number of users with remote access privileges
- Whether compensating network controls are in place
- Whether MFA is configured but not enforced
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 6.4**: Require MFA for Remote Network Access (IG1)
- **Asset Type**: Users
- **Security Function**: Protect

**Control Description**: Require MFA for remote network access.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-ACCESS-NO-MFA-EXTERNAL-003` - MFA for External Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ADMIN-005` - MFA for Admin Access Missing
- `CSE-CIS-ACCESS-NO-MFA-ALL-007` - MFA for All Applications Missing
