# CSE-HITRUST-ACCESS-NO-REMOTE-ACCESS-CONTROL-008

**Remote Access Controls Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-REMOTE-ACCESS-CONTROL-008` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Controls for managing and securing remote access to systems containing protected health information (PHI) or other sensitive data have not been implemented.

This signal indicates the absence of security controls specific to remote access scenarios, including VPN requirements, remote desktop protections, encryption enforcement, monitoring capabilities, and approval processes. Remote access represents an elevated risk and requires additional security measures beyond standard access controls.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Virtual Private Network (VPN) infrastructure
- Remote desktop services (RDP, VNC)
- Cloud infrastructure remote access
- Third-party vendor remote access
- Telehealth and remote care systems

## Examples (Non-Normative)

### Uncontrolled Remote Desktop Access

```yaml
# RDP accessible without proper controls
remote_access:
  rdp:
    enabled: true
    network_restriction: "0.0.0.0/0"
    mfa_required: false
    encryption: "negotiable"
    logging: false
    approval_required: false
```

### VPN Without Security Controls

```json
{
  "vpn_configuration": {
    "enabled": true,
    "access_control": {
      "ip_whitelist": [],
      "device_compliance_check": false,
      "mfa_enforced": false,
      "encryption_level": "optional"
    },
    "monitoring": {
      "connection_logging": false,
      "activity_monitoring": false,
      "anomaly_detection": false
    }
  }
}
```

### Cloud Console Remote Access

```hcl
# AWS/Azure/GCP console accessible globally without controls
# No conditional access policies
# No IP restrictions
# No device compliance requirements
# No session recording
resource "aws_iam_user" "remote_admin" {
  name = "remote-administrator"
  # Can access from anywhere
  # No MFA enforcement at policy level
  # No monitoring of remote sessions
}
```

### SSH Without Bastion Controls

```yaml
# Direct SSH access to production systems
security_groups:
  ssh_access:
    port: 22
    protocol: tcp
    source: "0.0.0.0/0"
    # No bastion host requirement
    # No jump server
    # No session recording
    # No time-based access
```

### Third-Party Remote Access Uncontrolled

```javascript
// Vendor remote access without governance
const vendorAccess = {
  enabled: true,
  approvalRequired: false,
  timeboxed: false,
  monitored: false,
  mfaEnforced: false,
  activityLogged: false,
  // Vendors can access anytime without oversight
};
```

## What This Signal Does NOT Assert

- Whether remote access is necessary or appropriate
- The specific remote access technologies in use
- Whether remote access is being abused
- Compliance or non-compliance with HITRUST
- The performance impact of remote access controls
- Whether on-premises access is properly secured

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.h
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for remote access including:
- Approved remote access technologies and methods
- Multi-factor authentication for remote access
- Encryption of remote access sessions
- Network-level access controls (IP restrictions, VPN)
- Monitoring and logging of remote access
- Approval process for remote access requests
- Time-limited remote access where appropriate
- Device compliance verification for remote devices
- Segregation of remote access traffic
- Protection of remote access credentials

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ACCESS-NO-MFA-006` - Multi-factor authentication not implemented
- `CSE-HITRUST-ACCESS-NO-SESSION-MANAGEMENT-007` - Session management controls missing
- `CSE-HITRUST-ACCESS-NO-ACCESS-LOGGING-012` - Access logging not implemented
- `CSE-CMMC-ACCESS-REMOTE-NO-CONTROL-004` - CMMC remote access (if defined)
- `CSE-HIPAA-TECH-NO-REMOTE-ACCESS-CONTROL-001` - HIPAA remote access (if defined)

## Notes

Detection of this signal typically involves:

- Review of VPN and remote access configurations
- Analysis of network security group and firewall rules
- Examination of conditional access policies
- Assessment of remote access approval workflows
- Review of remote session monitoring capabilities
- Analysis of encryption enforcement for remote connections
- Verification of device compliance checks

The presence of this signal indicates a critical security gap that significantly increases the risk of unauthorized access, data breaches, and compliance violations from remote connections.
