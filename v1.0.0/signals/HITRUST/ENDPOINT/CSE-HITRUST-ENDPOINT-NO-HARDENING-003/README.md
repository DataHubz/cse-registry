# CSE-HITRUST-ENDPOINT-NO-HARDENING-003

**Endpoint Hardening Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ENDPOINT-NO-HARDENING-003` |
| Domain | HITRUST |
| Category | ENDPOINT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Endpoint hardening configurations have not been applied to devices accessing or storing protected health information (PHI) or other sensitive data.

This signal indicates the absence of security hardening measures on endpoints such as workstations, laptops, mobile devices, or servers. Endpoint hardening includes disabling unnecessary services, configuring secure settings, applying security baselines, removing unnecessary software, and implementing least-privilege access controls at the device level.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers

## Examples (Non-Normative)

### Unhardened Workstation

```yaml
# Endpoint without hardening applied
endpoint_config:
  device: "nurse-station-08"
  security_baseline: "not_applied"
  unnecessary_services:
    - "telnet"
    - "ftp"
    - "remote_desktop"
  local_admin_rights: "all_users"
  auto_updates: false
```

### Missing Security Baseline

```json
{
  "device_hardening": {
    "hostname": "EHR-DESKTOP-22",
    "os_hardening": false,
    "cis_benchmark": "not_applied",
    "stig_compliance": false,
    "unnecessary_software": ["games", "media_players", "unverified_tools"],
    "firewall_enabled": false
  }
}
```

### Default Configuration

```powershell
# Windows endpoint with default settings
Get-Service | Where-Object {$_.Status -eq "Running"}
# Shows numerous unnecessary services running

Get-LocalUser | Where-Object {$_.Enabled -eq $true}
# Multiple users with administrative privileges
```

## What This Signal Does NOT Assert

- Whether endpoint protection software is installed
- The quality or effectiveness of network security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific hardening standard required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 17 - Endpoint Protection
- **Control Reference**: 17.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing endpoint hardening that:
- Applies industry-standard security baselines (CIS, STIG, etc.)
- Disables unnecessary services and protocols
- Removes or restricts unnecessary software
- Implements least-privilege access controls
- Configures secure system settings and parameters

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ENDPOINT-NO-PROTECTION-001` - Endpoint protection missing
- `CSE-HITRUST-ENDPOINT-NO-DETECTION-002` - Endpoint detection missing
- `CSE-CMMC-CONFIG-NO-BASELINE-001` - CMMC configuration baseline missing (if defined)
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management missing

## Notes

Detection of this signal typically involves:

- Review of endpoint configuration standards and baselines
- Examination of system hardening procedures and implementation
- Analysis of endpoint security settings and configurations
- Verification of compliance with hardening benchmarks (CIS, STIG)
- Assessment of unnecessary services, software, and privileges

The presence of this signal indicates a security gap that may expose endpoints to unnecessary attack surface and vulnerabilities. This should be addressed as a priority for HITRUST compliance and security best practices.
