# CSE-CMMC-CONFIG-NO-BASELINE-001

**Security Configuration Baseline Not Defined**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CMMC-CONFIG-NO-BASELINE-001`      |
| Domain          | CMMC                                   |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Systems do not have documented security configuration baselines or are not configured according to established hardening standards.

This signal indicates that system configurations may be inconsistent, ad-hoc, or not aligned with security best practices.

## Applicability

This signal applies to:

- Server operating systems
- Workstation and endpoint configurations
- Network device configurations
- Cloud resource configurations
- Container images and orchestration
- Application security settings
- Database configurations

## Examples (Non-Normative)

### No Hardening Applied

```bash
# Default installation without security hardening
$ cat /etc/ssh/sshd_config
# Default settings, no hardening applied
PermitRootLogin yes
PasswordAuthentication yes
```

### Cloud Resources Without Standards

```hcl
# EC2 instance without reference to baseline AMI
resource "aws_instance" "web" {
  ami           = "ami-random"  # No baseline reference
  instance_type = "t3.micro"
}
```

### Container Without Hardening

```dockerfile
FROM ubuntu:latest
# No security hardening steps
RUN apt-get update && apt-get install -y apache2
```

## What This Signal Does NOT Assert

- Whether the configuration is insecure
- The appropriate baseline for the environment
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **CM.L2-3.4.1**: Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles
- **CM.L2-3.4.2**: Establish and enforce security configuration settings for information technology products employed in organizational systems

## Related Signals

- `CSE-CMMC-CONFIG-INSECURE-DEFAULTS-003` — Insecure Default Configuration
- `CSE-CMMC-CONFIG-NO-CHANGE-CONTROL-002` — Configuration Change Control Not Implemented
