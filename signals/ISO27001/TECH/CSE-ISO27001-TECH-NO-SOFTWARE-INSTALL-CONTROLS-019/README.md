# CSE-ISO27001-TECH-NO-SOFTWARE-INSTALL-CONTROLS-019

**Uncontrolled Software Installation on Operational Systems**

## Signal Overview

| Field           | Value                                                   |
|-----------------|---------------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-SOFTWARE-INSTALL-CONTROLS-019`    |
| Domain          | ISO27001                                                |
| Category        | TECH                                                    |
| Status          | Active                                                  |
| Introduced In   | 1.0.0                                                   |

## Description

Procedures and measures are not implemented to securely manage software installation on operational systems.

This signal indicates that software can be installed on production systems without appropriate authorization, validation, testing, or security review processes.

## Applicability

This signal applies to:

- Production servers and workstations
- Cloud compute instances and virtual machines
- Container images and runtime environments
- Network devices and appliances
- Embedded systems and IoT devices
- Mobile devices and endpoints
- Database systems and middleware
- Operating system package installations
- Third-party application deployments

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Users Can Install Software Freely

```bash
# Linux system allowing package installation without sudo
# or with unrestricted sudo access
$ sudo apt install random-package
# No approval workflow or software whitelist
```

### No Application Control Policy

```powershell
# Windows system without AppLocker or WDAC
Get-AppLockerPolicy -Effective
# Returns: No policies defined
# Users can install any executable
```

### Container Images Without Approval

```yaml
# Kubernetes allowing any container image
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: app
    image: untrusted-registry/random-image:latest
    # No image signing verification
    # No admission controller blocking unapproved images
```

### Cloud Instances Without Image Controls

```hcl
# Terraform allowing any AMI to be used
resource "aws_instance" "server" {
  ami           = var.ami_id  # No validation
  instance_type = "t3.medium"
  # No requirement for approved AMIs only
}
```

### Unrestricted Package Manager

```json
{
  "name": "production-app",
  "scripts": {
    "postinstall": "npm install -g random-cli-tool"
  },
  "dependencies": {
    "any-package": "*"
  }
}
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of malicious software installation
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.19**: Installation of software on operational systems - Procedures and measures should be implemented to securely manage software installation on operational systems

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-CHANGE-MANAGEMENT-032` — Missing change management
- `CSE-ISO27001-TECH-NO-ENV-SEPARATION-031` — Lack of environment separation
- `CSE-ISO27001-ORG-NO-ASSET-MANAGEMENT-001` — Missing asset management

## Notes

Detection of this signal typically involves:

- Review of application control policies (AppLocker, WDAC, SELinux)
- Analysis of package manager configurations and restrictions
- Inspection of container admission controllers and image signing policies
- Examination of change management procedures for software deployment
- Assessment of user privilege levels and software installation rights
- Review of software whitelisting and approval workflows

The presence of this signal indicates a condition that warrants review in the context of software installation control requirements.
