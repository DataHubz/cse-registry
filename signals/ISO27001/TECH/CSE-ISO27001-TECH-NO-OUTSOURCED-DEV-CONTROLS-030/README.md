# CSE-ISO27001-TECH-NO-OUTSOURCED-DEV-CONTROLS-030

**Uncontrolled Outsourced Development**

## Signal Overview

| Field           | Value                                                   |
|-----------------|---------------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-OUTSOURCED-DEV-CONTROLS-030`      |
| Domain          | ISO27001                                                |
| Category        | TECH                                                    |
| Status          | Active                                                  |
| Introduced In   | 1.0.0                                                   |

## Description

Organization does not direct, monitor, and review outsourced system development activities.

This signal indicates that third-party, contractor, or vendor-led development work lacks appropriate oversight, security requirements, code review, testing verification, or contractual security obligations.

## Applicability

This signal applies to:

- Offshore development teams and contractors
- Software development agencies and consultancies
- Managed service provider development work
- Contractor and freelance developer engagements
- System integrator custom development
- Open-source contributions to organizational projects
- Vendor customizations and extensions
- Third-party plugin or module development
- Outsourced maintenance and enhancement work

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Contract Without Security Requirements

```text
Development Services Agreement

Deliverables:
- Custom web application
- API integrations
- Database schema

Terms:
- Fixed price: $100,000
- Timeline: 6 months
- Acceptance: Functional testing

Missing:
- Security requirements
- Secure coding standards
- Code review requirements
- Security testing obligations
- Vulnerability remediation SLAs
- Intellectual property protections
```

### No Code Review Process

```text
Outsourced Development Process:
1. Requirements provided to vendor
2. Vendor develops code
3. Code deployed to production

Missing:
- Internal code review
- Security assessment
- SAST/DAST scanning
- Dependency verification
- License compliance check
```

### Missing Oversight

```yaml
# Vendor development engagement
vendor: "ExternalDevCorp"
access:
  - production_codebase: full
  - production_systems: admin
  - customer_data: unrestricted

oversight:
  monitoring: none
  code_review: vendor_only
  security_testing: vendor_responsibility
  compliance_verification: none
```

### No Security Testing Requirements

```text
Acceptance Criteria:
✓ All features implemented
✓ Functional tests pass
✓ Performance benchmarks met
✗ Security testing performed
✗ Vulnerability scan results
✗ Code security review
✗ Dependency audit
```

### Unverified Third-Party Code

```bash
# Vendor deliverable
git clone https://vendor-repo.com/project.git
cd project
# No security review
# No scanning
# Direct deployment
./deploy.sh production
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of insecure outsourced code
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.30**: Outsourced development - The organization should direct, monitor and review the activities related to outsourced system development

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-ORG-NO-SUPPLIER-SECURITY-001` — Inadequate supplier security
- `CSE-ISO27001-TECH-NO-SDLC-025` — Missing secure development lifecycle
- `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029` — Missing security testing

## Notes

Detection of this signal typically involves:

- Review of outsourced development contracts and agreements
- Analysis of vendor management and oversight procedures
- Inspection of code acceptance and validation processes
- Assessment of security requirements in vendor engagements
- Examination of code review and testing procedures
- Review of intellectual property and code ownership clauses
- Evaluation of vendor security assessment processes
- Assessment of ongoing monitoring and audit rights

Key controls for outsourced development:
- Contractual security requirements
- Secure coding standards enforcement
- Code review and security testing
- Access control and least privilege
- Intellectual property protection
- Vulnerability remediation obligations
- Audit and monitoring rights
- Data protection requirements
- Incident response procedures

The presence of this signal indicates a condition that warrants review in the context of outsourced development control requirements.
