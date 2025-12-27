# CSE-ISO27001-TECH-NO-ENDPOINT-SECURITY-001

**No Endpoint Security Protection**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-ENDPOINT-SECURITY-001` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information stored on, processed by, or accessible via user endpoint devices is not protected. This signal indicates a lack of adequate security controls on endpoint devices that handle organizational information.

## Applicability

- Organizations that allow users to access information on laptops, desktops, mobile devices, or tablets
- Environments where endpoint devices store or process sensitive data
- Organizations with remote or hybrid work arrangements
- Systems that lack endpoint detection and response (EDR) capabilities
- Devices without encryption, secure configuration, or mobile device management

## Examples (Non-Normative)

### Unencrypted Endpoint Device

```yaml
endpoint_device:
  type: laptop
  disk_encryption: disabled
  antivirus: not_installed
  firewall: disabled
  auto_updates: disabled
  mdm_enrollment: false
```

### Mobile Device Without MDM

```yaml
mobile_device:
  platform: iOS
  mdm_managed: false
  passcode_policy: not_enforced
  remote_wipe: unavailable
  data_encryption: user_controlled
  app_whitelisting: disabled
```

## ISO 27001:2022 Context (Informative)

- **A.8.1 User endpoint devices**: Information stored on, processed by or accessible via user endpoint devices shall be protected.

## Related Signals

- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-MALWARE-PROTECTION-007`
- `CSE-ISO27001-TECH-NO-CONFIG-MANAGEMENT-009`
