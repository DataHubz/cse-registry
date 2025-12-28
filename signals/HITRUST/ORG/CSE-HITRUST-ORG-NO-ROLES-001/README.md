# CSE-HITRUST-ORG-NO-ROLES-001

**Security Roles Not Defined**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-HITRUST-ORG-NO-ROLES-001`      |
| Domain          | HITRUST                             |
| Category        | ORG                                 |
| Control Domain  | 05 - Organization of Information Security |
| Control Ref     | 05.a                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

Security roles and responsibilities are not formally defined within the organization.

This signal indicates that the organization has not established or documented specific roles responsible for information security activities, including defining security objectives, implementing controls, managing incidents, and maintaining compliance.

## Applicability

This signal applies to:

- Organizational security documentation and policies
- Role definitions and job descriptions
- Responsibility assignment matrices (RACI)
- Security governance frameworks
- Organizational charts and reporting structures
- Human resources documentation
- Security program charters
- Vendor and third-party contracts

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Security Role Documentation

```yaml
# organization.yaml - No security roles defined
departments:
  - name: IT
    roles:
      - System Administrator
      - Network Administrator
  - name: Operations
    roles:
      - Operations Manager
# No CISO, Security Officer, or security-specific roles
```

### Job Description Without Security Responsibilities

```markdown
## IT Manager Job Description

### Responsibilities:
- Manage IT infrastructure
- Oversee system deployments
- Budget management
- Team supervision

<!-- No mention of security responsibilities -->
```

### RACI Matrix Missing Security Functions

```csv
Activity,IT Manager,Operations Manager,Compliance Officer
System Deployment,R,A,I
Budget Approval,I,A,R
# Security activities not included in RACI matrix
```

### Policy Without Role Assignment

```markdown
# Information Security Policy

## 1. Purpose
This policy establishes security requirements...

## 2. Scope
Applies to all systems and data...

<!-- No section defining who is responsible for implementation -->
```

## What This Signal Does NOT Assert

- Whether the organization has security activities in place
- Whether individuals are performing security functions informally
- The quality or effectiveness of security operations
- Compliance or non-compliance with HITRUST CSF or any framework
- Required organizational structure or staffing levels

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control:

- **05.a - Allocation of Information Security Responsibilities**: Management should ensure that security roles and responsibilities are defined and allocated

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ORG-NO-AUTHORITY-003` — No designated authority for security decisions
- `CSE-HITRUST-ORG-NO-SEGREGATION-002` — No segregation between security and operational functions

## Notes

Detection of this signal typically involves:

- Review of organizational policies and procedures
- Analysis of job descriptions and role definitions
- Examination of RACI or responsibility matrices
- Assessment of organizational charts
- Review of security program documentation
- Inspection of governance frameworks

The presence of this signal indicates a condition that warrants review in the context of organizational security governance requirements.
