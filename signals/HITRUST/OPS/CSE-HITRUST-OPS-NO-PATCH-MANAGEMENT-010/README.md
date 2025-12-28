# CSE-HITRUST-OPS-NO-PATCH-MANAGEMENT-010

**Patch Management Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-PATCH-MANAGEMENT-010`  |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.j                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Technical vulnerabilities are not identified and evaluated in a timely manner, and appropriate software updates or patches are not applied to address identified vulnerabilities.

This signal indicates that an organization lacks a systematic approach to patch management, which may leave systems exposed to known vulnerabilities and increase the risk of exploitation.

## Applicability

This signal applies to:

- Operating system security updates
- Application and middleware patches
- Third-party library and dependency updates
- Firmware and BIOS updates
- Container base image updates
- Cloud service agent and extension updates
- Database management system patches
- Network device and security appliance updates

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Outdated Operating Systems

```bash
# Ubuntu system with critical security updates available
$ apt list --upgradable 2>/dev/null | grep -i security
linux-image-generic/focal-security 5.4.0.150.148 amd64 [upgradable from: 5.4.0.100.103]
openssl/focal-security 1.1.1f-1ubuntu2.19 amd64 [upgradable from: 1.1.1f-1ubuntu2.10]

# Critical patches not applied for months
```

### Dependencies With Known Vulnerabilities

```json
// package.json with vulnerable dependencies
{
  "dependencies": {
    "lodash": "4.17.15",  // Known CVE-2020-8203
    "axios": "0.18.0",     // Known CVE-2019-10742
    "express": "4.16.0"    // Multiple known vulnerabilities
  }
  // No dependency update process
  // No vulnerability scanning
}
```

### Container Images Without Updates

```dockerfile
# Container using outdated base image
FROM node:12.18.0  # End of life, multiple CVEs

COPY package.json .
RUN npm install
# No image scanning
# No base image update process
# No vulnerability patching
```

### Infrastructure Without Patch Management

```terraform
# EC2 instances without patch management
resource "aws_instance" "app_server" {
  ami           = "ami-12345678"  # Old AMI from 2 years ago
  instance_type = "t3.medium"

  # No SSM Patch Manager configuration
  # No automated patching
  # No vulnerability scanning
}
```

## What This Signal Does NOT Assert

- Whether systems have been compromised
- The specific patching cadence required
- Whether patches are tested before deployment
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.j - Technical Vulnerability Management**: Information about technical vulnerabilities of information systems being used shall be obtained in a timely fashion, the organization's exposure to such vulnerabilities evaluated, and appropriate measures taken to address the associated risk

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-MALWARE-PROTECTION-005` - Malware Protection Missing
- `CSE-CMMC-INTEGRITY-NO-PATCHING-002` - Patch Management Missing (if defined)
- `CSE-HITRUST-OPS-NO-CHANGE-MANAGEMENT-002` - Change Management Missing

## Notes

Detection of this signal typically involves:

- Review of patch management policies and procedures
- Assessment of vulnerability scanning frequency
- Examination of patch deployment timelines
- Verification of security update testing processes
- Review of patch compliance reporting
- Analysis of dependency update automation
- Inspection of emergency patch procedures
- Verification of patch rollback capabilities

The presence of this signal indicates a condition that warrants review in the context of vulnerability management and security hygiene requirements.
