# CSE-HITRUST-SDLC-NO-REQUIREMENTS-001

**Security Requirements Not Specified**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-SDLC-NO-REQUIREMENTS-001` |
| Domain | HITRUST |
| Category | SDLC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security requirements have not been defined, documented, or incorporated into the systems acquisition, development, and maintenance lifecycle for information systems processing protected health information (PHI) or other sensitive data.

This signal indicates the absence of formal security requirements that should guide the design, development, and implementation of information systems. Security requirements should address confidentiality, integrity, availability, authentication, authorization, audit logging, and other security controls specific to the organization's risk profile and regulatory obligations.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Organizations developing custom healthcare applications

## Examples (Non-Normative)

### Missing Requirements Documentation

```yaml
# Project specification lacks security requirements
project:
  name: "Patient Portal"
  requirements:
    functional:
      - "User can view lab results"
      - "User can schedule appointments"
    non_functional:
      - "System must support 10,000 concurrent users"
    security: null  # No security requirements defined
```

### Development Without Security Specifications

```markdown
# System Requirements Document
## Functional Requirements
1. Patient data entry and retrieval
2. Appointment scheduling
3. Billing integration

## Performance Requirements
- Response time < 2 seconds
- 99.9% uptime

# Security Requirements - NOT SPECIFIED
```

### Procurement Without Security Criteria

```json
{
  "vendor_selection": {
    "criteria": [
      "Cost",
      "Feature completeness",
      "User experience"
    ],
    "security_requirements": []
  }
}
```

## What This Signal Does NOT Assert

- Whether informal security considerations exist
- The quality of existing security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific security requirements needed for a particular system
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 10 - Information Systems Acquisition, Development, and Maintenance
- **Control Reference**: 10.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for establishing security requirements that:
- Address functional and non-functional security needs
- Include authentication and authorization requirements
- Define data protection and privacy controls
- Specify audit and logging capabilities
- Address secure configuration and hardening
- Include incident response and business continuity considerations

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-SDLC-NO-SECURE-DEVELOPMENT-007` - Secure development practices missing
- `CSE-HITRUST-SDLC-NO-TESTING-009` - Security testing missing
- `CSE-HITRUST-RISK-NO-ASSESSMENT-001` - Risk assessment not conducted
- `CSE-HITRUST-POLICY-NO-DOCUMENT-001` - Policy documentation missing

## Notes

Detection of this signal typically involves:

- Review of system requirements documentation
- Examination of procurement and vendor selection criteria
- Analysis of project specifications and design documents
- Verification of security architecture documentation
- Assessment of development lifecycle processes
- Review of change request and enhancement procedures

The presence of this signal indicates a foundational gap in the secure development lifecycle that should be addressed early in system planning to ensure security is built into systems from inception rather than added as an afterthought.
