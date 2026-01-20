# CSE-ISO27001-TECH-NO-DLP-012

**No Data Leakage Prevention**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-TECH-NO-DLP-012` |
| Domain | ISO27001 |
| Category | TECH |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data leakage prevention measures are not applied to systems and networks handling sensitive information. This signal indicates a lack of technical controls to detect and prevent unauthorized data disclosure or exfiltration. This is a new control in ISO 27001:2022.

## Applicability

- Organizations without data loss prevention (DLP) solutions
- Environments where sensitive data can be freely copied or transmitted
- Systems lacking monitoring for data exfiltration attempts
- Organizations without controls on removable media or cloud uploads
- Networks without email and web gateway DLP inspection

## Examples (Non-Normative)

### No DLP Controls

```yaml
dlp_configuration:
  network_dlp: not_deployed
  endpoint_dlp: not_installed
  cloud_dlp: not_configured
  email_gateway:
    content_inspection: disabled
    attachment_blocking: none
  web_gateway:
    upload_monitoring: disabled
    policy_enforcement: none
  removable_media:
    usb_blocking: disabled
    device_control: not_implemented
```

### Unrestricted Data Transfer

```yaml
data_transfer_controls:
  file_sharing:
    policy: unrestricted
    monitoring: disabled
  cloud_storage:
    personal_accounts: allowed
    dlp_scanning: not_available
  email:
    encryption: optional
    sensitive_data_detection: disabled
  network:
    egress_filtering: disabled
    anomaly_detection: not_configured
```

## ISO 27001:2022 Context (Informative)

- **A.8.12 Data leakage prevention**: Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information. This is a NEW control in ISO 27001:2022.

## Related Signals

- `CSE-ISO27001-TECH-NO-DATA-MASKING-011`
- `CSE-ISO27001-TECH-NO-ACCESS-RESTRICTION-003`
- `CSE-ISO27001-TECH-NO-MONITORING-016`
- `CSE-ISO27001-TECH-NO-LOGGING-015`
