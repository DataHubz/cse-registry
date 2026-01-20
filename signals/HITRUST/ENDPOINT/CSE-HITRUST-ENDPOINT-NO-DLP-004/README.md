# CSE-HITRUST-ENDPOINT-NO-DLP-004

**Data Loss Prevention Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ENDPOINT-NO-DLP-004` |
| Domain | HITRUST |
| Category | ENDPOINT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data loss prevention (DLP) controls have not been implemented on endpoints accessing or storing protected health information (PHI) or other sensitive data.

This signal indicates the absence of DLP mechanisms on endpoints such as workstations, laptops, or mobile devices. DLP controls monitor, detect, and prevent unauthorized transmission, copying, or exfiltration of sensitive data through various channels including email, removable media, cloud storage, web uploads, and printing.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers

## Examples (Non-Normative)

### Endpoint Without DLP

```yaml
# Endpoint lacking data loss prevention
endpoint_dlp:
  device: "admin-laptop-19"
  dlp_agent: null
  usb_controls: "unrestricted"
  email_monitoring: false
  cloud_upload_blocking: false
  phi_detection: false
```

### Unrestricted Data Transfer

```json
{
  "data_protection": {
    "endpoint_id": "PHYSICIAN-WS-07",
    "sensitive_data_access": true,
    "dlp_installed": false,
    "removable_media": "allowed",
    "personal_email": "allowed",
    "cloud_storage": "unrestricted",
    "printing_controls": false
  }
}
```

### Missing DLP Controls

```bash
# Checking for DLP agent
$ ps aux | grep -i "dlp\|endpoint_protector\|symantec_dlp\|mcafee_dlp"
# No DLP agents found

# USB devices unrestricted
$ lsusb
# Multiple removable storage devices connected without controls
```

## What This Signal Does NOT Assert

- Whether network-level DLP controls are in place
- The quality or effectiveness of data encryption controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific DLP solution required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 17 - Endpoint Protection
- **Control Reference**: 17.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing data loss prevention that:
- Monitors and controls data exfiltration channels
- Detects and prevents unauthorized data transfers
- Restricts use of removable media and external devices
- Monitors cloud storage and web uploads
- Enforces policies for sensitive data handling

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ENDPOINT-NO-PROTECTION-001` - Endpoint protection missing
- `CSE-HITRUST-ENDPOINT-NO-DETECTION-002` - Endpoint detection missing
- `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004` - Asset classification missing
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` - Encryption in transit missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of endpoint DLP solution deployment and coverage
- Examination of data exfiltration prevention controls
- Analysis of removable media and device controls
- Verification of sensitive data monitoring capabilities
- Assessment of DLP policies and enforcement mechanisms

The presence of this signal indicates a gap in data protection controls that may allow unauthorized disclosure or exfiltration of PHI and other sensitive data. This should be addressed as a priority for HITRUST compliance and data protection requirements.
