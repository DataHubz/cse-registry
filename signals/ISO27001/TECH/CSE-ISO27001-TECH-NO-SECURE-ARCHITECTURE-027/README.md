# CSE-ISO27001-TECH-NO-SECURE-ARCHITECTURE-027

**Missing Secure System Architecture and Engineering Principles**

## Signal Overview

| Field           | Value                                                   |
|-----------------|---------------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-SECURE-ARCHITECTURE-027`          |
| Domain          | ISO27001                                                |
| Category        | TECH                                                    |
| Status          | Active                                                  |
| Introduced In   | 1.0.0                                                   |

## Description

Principles for engineering secure systems are not established, documented, and applied.

This signal indicates that the organization lacks documented security architecture principles, secure design patterns, defense-in-depth strategies, or architectural security controls that should guide system design and engineering decisions.

## Applicability

This signal applies to:

- Application architecture design
- Infrastructure and platform architecture
- Network architecture and topology
- Cloud architecture and services design
- Security architecture frameworks
- Data architecture and data flow design
- Integration and API architecture
- Microservices and distributed systems architecture
- Enterprise architecture

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Security Architecture Principles

```text
Architecture Documentation:
- No documented security design principles
- No defense-in-depth strategy
- No principle of least privilege in design
- No secure-by-default configurations
- No fail-secure design patterns
- No security architecture review process
```

### Architecture Without Security Controls

```yaml
# System architecture diagram
components:
  - web_tier:
      servers: 3
      load_balancer: yes
  - app_tier:
      servers: 5
  - data_tier:
      database: postgresql

# Missing:
# - Security zones and boundaries
# - Encryption requirements
# - Authentication/authorization architecture
# - Logging and monitoring architecture
# - Network segmentation
# - DDoS protection
```

### Monolithic Design Without Isolation

```python
# Application architecture
class Application:
    def __init__(self):
        self.user_service = UserService()
        self.payment_service = PaymentService()
        self.admin_service = AdminService()
        # All services run with same privileges
        # No separation of concerns
        # No security boundaries
        # Shared database access
```

### Cloud Architecture Without Security Framework

```hcl
# Cloud infrastructure
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_instance" "servers" {
  count         = 10
  ami           = "ami-12345678"
  instance_type = "t3.medium"
  # No security groups defined
  # No encryption specified
  # No network segmentation
  # No IAM roles
}
```

### Missing Threat Modeling

```text
# System Design Document
Architecture: Microservices
Components: 15 services
Database: MongoDB
Message Queue: RabbitMQ

Missing:
- Threat model
- Trust boundaries
- Attack surface analysis
- Security control mapping
- Data flow diagrams with security zones
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of architectural vulnerabilities
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.27**: Secure system architecture and engineering principles - Principles for engineering secure systems should be established, documented, maintained and applied to information systems development activities

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-SDLC-025` — Missing secure development lifecycle
- `CSE-ISO27001-TECH-NO-APP-SECURITY-REQS-026` — Missing application security requirements
- `CSE-ISO27001-TECH-NO-NETWORK-SEGREGATION-022` — Lack of network segregation

## Notes

Detection of this signal typically involves:

- Review of security architecture documentation
- Analysis of architectural principles and standards
- Inspection of architecture review processes
- Assessment of threat modeling practices
- Examination of architectural decision records
- Review of security design patterns and frameworks
- Evaluation of defense-in-depth implementation
- Assessment of separation of concerns in design

The presence of this signal indicates a condition that warrants review in the context of secure architecture and engineering requirements.
