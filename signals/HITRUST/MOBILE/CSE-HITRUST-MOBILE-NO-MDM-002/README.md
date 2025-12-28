# CSE-HITRUST-MOBILE-NO-MDM-002

**Mobile Device Management Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-MOBILE-NO-MDM-002` |
| Domain | HITRUST |
| Category | MOBILE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mobile Device Management (MDM) or Enterprise Mobility Management (EMM) solutions have not been implemented for an organization or system handling protected health information (PHI) or other sensitive data.

This signal indicates the absence of technical controls and management capabilities for mobile devices that access organizational resources or process sensitive information. MDM solutions provide centralized management, security policy enforcement, application management, and remote device control capabilities essential for maintaining security and compliance standards on mobile devices.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Organizations with mobile workforce or BYOD programs
- Organizations allowing mobile access to email or enterprise systems

## Examples (Non-Normative)

### No MDM Solution Deployed

```yaml
# Organization lacks mobile device management capability
mobile_security:
  mdm_solution: null
  enrolled_devices: 0
  policy_enforcement: false
  remote_wipe_capability: false
```

### Unmanaged Device Access

```json
{
  "email_access": {
    "mobile_clients": 85,
    "mdm_enrolled": 0,
    "unmanaged_devices": 85,
    "compliance_enforcement": false
  }
}
```

### Missing MDM Infrastructure

```terraform
# Infrastructure configuration without MDM service
resource "aws_workspaces" "virtual_desktop" {
  # Desktop infrastructure defined
}

# resource "aws_worklink" "mobile_mdm" {
#   # MDM integration - NOT CONFIGURED
# }
```

## What This Signal Does NOT Assert

- Whether mobile devices are currently in use
- The specific MDM solution required
- Whether alternative mobile security controls exist
- The organization's compliance status with HITRUST
- The effectiveness of manual device management processes
- Whether specific mobile platforms require MDM

## HITRUST Context (Informative)

- **Control Domain**: 15 - Mobile Device Security
- **Control Reference**: 15.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing mobile device management capabilities that:
- Enforce security policies on enrolled devices
- Provide remote lock and wipe capabilities
- Monitor device compliance with security requirements
- Manage application installation and updates
- Control device configuration settings
- Provide visibility into mobile device inventory
- Enable conditional access based on device compliance

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-MOBILE-NO-POLICY-001` - Mobile device policy missing
- `CSE-HITRUST-MOBILE-NO-BYOD-003` - BYOD controls missing
- `CSE-HITRUST-MOBILE-NO-APP-SECURITY-004` - Mobile app security missing
- `CSE-HITRUST-ACCESS-NO-MFA-006` - Multi-factor authentication missing
- `CSE-HITRUST-OPS-NO-MALWARE-PROTECTION-005` - Malware protection missing

## Notes

Detection of this signal typically involves:

- Review of mobile device management infrastructure
- Examination of device enrollment records and compliance reporting
- Analysis of MDM/EMM solution configurations
- Verification of remote management capabilities
- Assessment of device compliance monitoring
- Review of mobile access logs and authentication methods
- Evaluation of application management and distribution processes

The presence of this signal indicates a significant gap in mobile device security controls that should be addressed promptly, particularly for organizations where mobile devices access PHI or other sensitive data. MDM solutions are considered a baseline security requirement for enterprise mobile device management.
