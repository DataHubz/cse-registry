# CSE-HITRUST-ACCESS-NO-POLICY-001

**Access Control Policy Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-POLICY-001` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal access control policy has not been established or documented for an organization or system handling protected health information (PHI) or other sensitive data.

This signal indicates the absence of a documented policy that defines rules, procedures, and responsibilities for controlling access to information systems and assets. An access control policy should establish clear guidelines for user access rights, authentication requirements, authorization processes, and accountability mechanisms.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers

## Examples (Non-Normative)

### Missing Policy Documentation

```yaml
# Organization lacks documented access control policy
governance:
  policies:
    security_awareness: "documented"
    incident_response: "documented"
    access_control: null  # No policy exists
```

### Incomplete Policy Coverage

```markdown
# Existing security documentation missing access control requirements
## Security Policies
- Data Classification Policy
- Encryption Policy
- Backup Policy
# Access Control Policy - NOT DEFINED
```

### System Configuration Without Policy Guidance

```json
{
  "iam_configuration": {
    "users": [],
    "roles": [],
    "policies_defined": true,
    "governing_policy_reference": null
  }
}
```

## What This Signal Does NOT Assert

- Whether informal access control practices are in place
- The quality or effectiveness of existing security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific content requirements for an access control policy
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for establishing and documenting access control policies that:
- Define roles and responsibilities
- Establish user access provisioning procedures
- Specify authentication and authorization requirements
- Address remote access and mobile computing
- Include review and update procedures

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-USER-REGISTRATION-002` - User registration process missing
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management not implemented
- `CSE-HIPAA-TECH-NO-ACCESS-CONTROLS-001` - HIPAA access control requirements (if defined)
- `CSE-ISO27001-TECH-NO-ACCESS-POLICY-001` - ISO 27001 access policy (if defined)

## Notes

Detection of this signal typically involves:

- Review of organizational policy repositories and documentation systems
- Examination of security governance frameworks
- Analysis of policy management processes
- Verification of policy approval and publication records
- Assessment of policy communication and training materials

The presence of this signal indicates a foundational gap in access control governance that should be addressed as a priority for HITRUST compliance and security best practices.
