# CSE-HITRUST-ENDPOINT-NO-PROTECTION-001

**Endpoint Protection Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ENDPOINT-NO-PROTECTION-001` |
| Domain | HITRUST |
| Category | ENDPOINT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Endpoint protection software or controls have not been deployed on devices accessing or storing protected health information (PHI) or other sensitive data.

This signal indicates the absence of endpoint protection mechanisms such as anti-malware, antivirus, or endpoint security software on workstations, laptops, mobile devices, or servers. Endpoint protection is a critical security control that defends against malicious software, unauthorized access, and security threats at the device level.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers

## Examples (Non-Normative)

### Unprotected Workstation

```yaml
# Endpoint without anti-malware protection
endpoint:
  hostname: "medical-workstation-01"
  os: "Windows 10"
  antivirus_installed: false
  antimalware_installed: false
  edr_agent: null
```

### Missing Endpoint Security Agent

```json
{
  "device_inventory": {
    "device_id": "EHR-LAPTOP-15",
    "type": "laptop",
    "access_to_phi": true,
    "security_software": {
      "antivirus": "not_installed",
      "endpoint_protection": "not_installed",
      "last_scan": null
    }
  }
}
```

### Server Without Protection

```bash
# Server lacking endpoint protection
$ systemctl list-units | grep -i "antivirus\|malware\|endpoint"
# No endpoint protection services found
```

## What This Signal Does NOT Assert

- Whether network-level security controls are in place
- The quality or effectiveness of other security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific endpoint protection solution required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 17 - Endpoint Protection
- **Control Reference**: 17.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing endpoint protection that:
- Deploys anti-malware software on all endpoints
- Maintains current malware definitions
- Performs regular scans and updates
- Protects against known and emerging threats
- Includes centralized management and reporting

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ENDPOINT-NO-DETECTION-002` - Endpoint detection missing
- `CSE-HITRUST-ENDPOINT-NO-HARDENING-003` - Endpoint hardening missing
- `CSE-HITRUST-OPS-NO-MALWARE-PROTECTION-005` - Operational malware protection missing
- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001` - CMMC malware protection (if defined)

## Notes

Detection of this signal typically involves:

- Review of endpoint device inventory and configuration
- Examination of security software deployment records
- Analysis of endpoint management systems
- Verification of anti-malware installation and updates
- Assessment of endpoint protection coverage across the organization

The presence of this signal indicates a critical security gap that exposes endpoints to malware, ransomware, and other threats. This should be addressed as a high priority for HITRUST compliance and security best practices.
