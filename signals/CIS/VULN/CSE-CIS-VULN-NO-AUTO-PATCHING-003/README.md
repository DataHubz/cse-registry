# CSE-CIS-VULN-NO-AUTO-PATCHING-003

**Automated OS Patching Missing**

## Signal Overview

| Field           | Value                                |
|-----------------|--------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-AUTO-PATCHING-003`  |
| Domain          | CIS                                  |
| Category        | VULN                                 |
| Status          | Active                               |
| Introduced In   | 1.0.0                                |

## Description

An organization has not implemented automated operating system patch management.

This signal indicates the absence of automated mechanisms to deploy security patches and updates to operating systems across enterprise assets, potentially leaving systems vulnerable to known exploits.

## Applicability

This signal applies to:

- Windows, Linux, and macOS workstations
- Windows and Linux servers (physical and virtual)
- Cloud-based virtual machines and instances
- Container host operating systems
- Network appliance operating systems
- Mobile device operating systems
- IoT and embedded device operating systems

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Manual Patching Only

```text
Operating system patches are applied through:
- Manual administrator intervention
- Ad-hoc update processes
- No scheduled update windows
- Inconsistent patch deployment
```

### No Patch Management Tool

```yaml
# Missing automated patching infrastructure
patch_management:
  tool: null
  automation: false
  scheduling: null
  reporting: null
  compliance_monitoring: null
```

### Disabled Automatic Updates

```powershell
# Windows Update disabled or set to manual
Set-ItemProperty -Path "HKLM:\SOFTWARE\Policies\Microsoft\Windows\WindowsUpdate\AU" `
  -Name "NoAutoUpdate" -Value 1

# Linux systems without automatic updates
# unattended-upgrades package not installed or disabled
```

### Cloud Instances Without Patch Automation

```hcl
# AWS EC2 instances without Systems Manager patch automation
resource "aws_instance" "server" {
  ami           = "ami-12345678"
  instance_type = "t3.medium"
  # No SSM patch baseline association
  # No automated patch maintenance window
}
```

### Container Hosts Without Update Automation

```dockerfile
# Docker host without automated OS updates
# No patch management agent
# No automated restart scheduling
```

## What This Signal Does NOT Assert

- Whether systems are currently patched or unpatched
- Whether manual patching processes are effective
- Whether compensating controls exist
- The specific patch management tool to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.3**: Perform Automated Operating System Patch Management
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Perform operating system updates on enterprise assets through automated patch management on a monthly, or more frequent, basis."

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-AUTO-APP-PATCHING-004` — Automated application patching missing
- `CSE-CIS-VULN-NO-REMEDIATION-002` — Vulnerability remediation process missing
- `CSE-CIS-CONFIG-NO-BASELINE-001` — Configuration baseline missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of patch management tooling and configuration
- Assessment of automatic update settings across asset inventory
- Analysis of patch deployment schedules and automation
- Examination of patch compliance reporting
- Review of Systems Manager, WSUS, SCCM, or equivalent configurations

The presence of this signal indicates a condition that warrants review in the context of operating system patch management requirements.
