# CSE-CIS-NETWORK-NO-SECURE-AAA-006

**Secure AAA Infrastructure Missing**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CIS-NETWORK-NO-SECURE-AAA-006`       |
| Domain          | CIS                                       |
| Category        | NETWORK                                   |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

The organization lacks centralized network Authentication, Authorization, and Auditing (AAA) infrastructure for managing access to network devices and resources.

This signal indicates that network access may be managed using local device credentials, inconsistent authentication methods, or without comprehensive audit logging.

## Applicability

This signal applies to:

- RADIUS and TACACS+ servers
- IEEE 802.1X network access control
- Network device authentication
- Wireless network security
- VPN authentication systems
- Network access control (NAC) solutions
- Directory services integration
- Authentication audit logs

## Examples (Non-Normative)

### No Centralized AAA

```yaml
findings:
  - Network devices using local authentication only
  - No RADIUS or TACACS+ server deployment
  - Each device maintains its own user database
  - Inconsistent authentication methods across infrastructure
```

### Missing Network Access Control

```yaml
findings:
  - No 802.1X authentication for wired or wireless networks
  - MAC address filtering used instead of proper authentication
  - Guest and employee devices not distinguished
  - Network access granted without authentication
```

### Inadequate Audit Logging

```yaml
findings:
  - Network authentication events not centrally logged
  - No tracking of who accessed which network devices
  - Authorization changes not audited
  - Insufficient retention of network access logs
```

## What This Signal Does NOT Assert

- Whether unauthorized network access has occurred
- The security of specific authentication credentials
- Compliance or non-compliance with any framework
- Required remediation actions
- The effectiveness of existing access controls

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 12.6**: Use of Secure Network Management and Communication Protocols (IG2)
- **Asset Type**: Network
- **Security Function**: Protect

**Control Description**: Use secure network management and communication protocols (e.g., 802.1X, Wi-Fi Protected Access 2 (WPA2) Enterprise or greater).

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-NETWORK-NO-MGMT-ISOLATION-003` - Network Management Isolation Missing
- `CSE-CIS-NETWORK-NO-SECURE-CONFIG-002` - Secure Network Configuration Missing
- `CSE-CIS-AUDIT-NO-PROCESS-001` - Audit Process Missing
