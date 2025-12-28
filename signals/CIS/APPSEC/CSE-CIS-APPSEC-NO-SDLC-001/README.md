# CSE-CIS-APPSEC-NO-SDLC-001

**Secure SDLC Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-SDLC-001`             |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not established a secure software development lifecycle (SDLC) process.

This signal indicates the absence of a documented and implemented secure SDLC that integrates security practices throughout all phases of software development, from requirements gathering through deployment and maintenance.

## Applicability

This signal applies to:

- Software development organizations
- Application development teams
- DevOps and DevSecOps teams
- Product management teams
- Engineering management
- Quality assurance teams
- Organizations developing custom applications
- Third-party software vendors

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Documented SDLC Process

```text
Missing secure SDLC documentation:
- Security requirements phase
- Threat modeling phase
- Secure design principles
- Secure coding practices
- Security testing phase
- Security review gates
- Deployment security checks
- Post-deployment security monitoring
```

### Ad-Hoc Development Without Security Gates

```yaml
# Development process without security integration
development_process:
  requirements: no_security_review
  design: no_threat_modeling
  coding: no_secure_coding_standards
  testing: no_security_testing
  deployment: no_security_validation
  maintenance: no_security_patching_process
```

### Missing Security Requirements Phase

```python
# Project requirements without security considerations
class ProjectRequirements:
    def __init__(self):
        self.functional_requirements = []
        self.performance_requirements = []
        # Missing:
        # self.security_requirements = []
        # self.compliance_requirements = []
        # self.privacy_requirements = []
        # self.data_protection_requirements = []
```

### No Security Training for Developers

```text
Developer onboarding checklist:
- IDE setup
- Code repository access
- Build system training
- Deployment procedures

Missing security training:
- Secure coding practices
- OWASP Top 10
- Threat modeling
- Security testing tools
- Incident response procedures
```

### Lack of Security Review Gates

```json
{
  "deployment_pipeline": {
    "stages": [
      "code_commit",
      "unit_tests",
      "integration_tests",
      "deployment"
    ]
  }
}
```

### Missing Security Champions Program

```text
Development team structure without security integration:
- Product Manager
- Engineering Lead
- Senior Developers
- QA Engineers

Missing:
- Security Champion
- AppSec liaison
- Security training coordinator
```

## What This Signal Does NOT Assert

- Whether the organization develops software
- The quality of existing development practices
- Whether individual security activities occur
- The specific SDLC methodology to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required security tools or technologies

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.1**: Establish and Maintain a Secure Application Development Process
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Establish and maintain a secure application development process. In the process, address such items as: secure application design standards, secure coding practices, developer training, vulnerability management, security of third-party code, and application security testing procedures. Review and update documentation annually, or when significant enterprise changes occur that could impact this Safeguard."

This safeguard emphasizes the need for a comprehensive, documented secure development process that is regularly reviewed and updated.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-STANDARDS-002` — Secure coding standards missing
- `CSE-CIS-APPSEC-NO-THREAT-MODELING-007` — Threat modeling missing
- `CSE-CIS-APPSEC-NO-SAST-005` — Static application security testing missing
- `CSE-CIS-TRAINING-NO-ROLE-TRAINING-002` — Role-based training missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of development process documentation
- Assessment of security integration in SDLC phases
- Evaluation of security requirements gathering processes
- Examination of security review gates and checkpoints
- Review of developer security training programs
- Assessment of secure design and coding standards
- Analysis of security testing integration

A secure SDLC typically includes:
- **Requirements phase**: Security and compliance requirements identification
- **Design phase**: Threat modeling and secure architecture design
- **Development phase**: Secure coding practices and code review
- **Testing phase**: Security testing (SAST, DAST, penetration testing)
- **Deployment phase**: Security configuration and deployment validation
- **Maintenance phase**: Vulnerability management and security patching

The presence of this signal indicates a condition that warrants review in the context of secure software development lifecycle requirements.
