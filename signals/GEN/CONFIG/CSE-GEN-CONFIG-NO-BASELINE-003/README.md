# CSE-GEN-CONFIG-NO-BASELINE-003

**Secure Configuration Baseline Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-CONFIG-NO-BASELINE-003`       |
| Domain          | GEN (General)                          |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

No defined secure configuration standards or baselines exist for systems and applications within the environment.

This signal indicates that there are no documented, approved configuration templates or standards against which system configurations can be validated, leading to inconsistent security postures and inability to detect configuration drift.

## Applicability

This signal applies to:

- Operating system configurations
- Application server configurations
- Database system settings
- Network device configurations
- Cloud infrastructure resources
- Container and Kubernetes configurations
- Mobile device configurations
- Security appliance settings
- SaaS application configurations

## Examples (Non-Normative)

### No Documented Baseline

```markdown
# Evidence of missing baseline:
- No configuration management database (CMDB)
- No documented gold images
- No approved configuration templates
- No baseline documentation repository
- No reference architectures defined
```

### Inconsistent Configurations Across Environment

```bash
# Server 1
$ cat /etc/ssh/sshd_config | grep PermitRootLogin
PermitRootLogin yes

# Server 2
$ cat /etc/ssh/sshd_config | grep PermitRootLogin
PermitRootLogin no

# Server 3
$ cat /etc/ssh/sshd_config | grep PermitRootLogin
# PermitRootLogin yes (commented out)

# No baseline - each server configured differently
```

### Cloud Resources Without Standard Configuration

```hcl
# Multiple EC2 instances with inconsistent configurations
resource "aws_instance" "web1" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
  # No reference to baseline module or template
}

resource "aws_instance" "web2" {
  ami           = "ami-87654321"  # Different AMI
  instance_type = "t3.small"     # Different instance type
  # Configurations vary without documented standards
}
```

### Container Images Without Baseline

```dockerfile
# Multiple Dockerfiles with no common baseline
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y nginx
# No reference to hardened base image

# Another Dockerfile in same organization
FROM centos:8
RUN yum install -y httpd
# Different base OS, different package manager, no consistency
```

### No Configuration Compliance Checking

```python
# No automated baseline validation
# No tools like:
# - InSpec
# - OpenSCAP
# - AWS Config Rules
# - Azure Policy
# - Chef Compliance
# - Ansible compliance playbooks

# Systems deployed without validation against standards
```

## What This Signal Does NOT Assert

- Whether current configurations are insecure
- The appropriate baseline standard for the organization
- Whether systems are compliant with any framework
- Whether compensating controls exist
- The maturity of configuration management practices
- Required remediation actions

## Related Framework Signals

This signal may be relevant to signals in various frameworks:

- `CSE-CIS-CONFIG-BENCHMARK-*` — CIS Benchmark baseline controls
- `CSE-NISTCSF-CONFIG-BASELINE-*` — NIST CSF baseline requirements
- `CSE-CMMC-CONFIG-NO-BASELINE-001` — CMMC baseline configuration
- `CSE-GEN-CONFIG-NO-HARDENING-001` — System hardening missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 4.1 (Establish and Maintain a Secure Configuration Process)
- **NIST CSF**: PR.IP-1 (A baseline configuration of information technology is created and maintained)
- **CMMC**: CM.L2-3.4.1 (Establish and maintain baseline configurations and inventories)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Reviewing for documented configuration baseline policies
- Checking for existence of approved configuration templates
- Examining configuration management tools and repositories
- Validating whether baseline compliance scanning is performed
- Assessing whether gold images or approved AMIs/images exist
- Reviewing for configuration standards documentation

The presence of this signal indicates that configuration baseline standards should be developed and implemented.
