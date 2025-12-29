# CSE-HITRUST-MOBILE-NO-POLICY-001

**Mobile Device Policy Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-MOBILE-NO-POLICY-001` |
| Domain | HITRUST |
| Category | MOBILE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal mobile device security policy has not been established or documented for an organization or system handling protected health information (PHI) or other sensitive data.

This signal indicates the absence of a documented policy that defines rules, procedures, and requirements for mobile device usage within the organization. A mobile device policy should establish clear guidelines for device enrollment, acceptable use, security requirements, data handling, and incident response procedures related to mobile devices accessing organizational resources or processing sensitive information.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Organizations with mobile workforce or BYOD programs

## Examples (Non-Normative)

### Missing Policy Documentation

```yaml
# Organization lacks documented mobile device policy
governance:
  policies:
    access_control: "documented"
    data_protection: "documented"
    mobile_device: null  # No policy exists
```

### Incomplete Policy Coverage

```markdown
# Existing security documentation missing mobile device requirements
## Security Policies
- Access Control Policy
- Password Policy
- Remote Access Policy
# Mobile Device Policy - NOT DEFINED
```

### System Configuration Without Policy Guidance

```json
{
  "mdm_configuration": {
    "enrolled_devices": 47,
    "compliance_rules": [],
    "governing_policy_reference": null
  }
}
```

## What This Signal Does NOT Assert

- Whether informal mobile device practices are in place
- The quality or effectiveness of existing mobile security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific content requirements for a mobile device policy
- Whether compensating controls exist
- The specific mobile platforms or devices in use

## HITRUST Context (Informative)

- **Control Domain**: 15 - Mobile Device Security
- **Control Reference**: 15.a
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for establishing and documenting mobile device security policies that:
- Define acceptable use of mobile devices
- Specify security requirements for device enrollment
- Establish data protection requirements on mobile devices
- Address lost or stolen device procedures
- Include remote wipe and device management capabilities
- Define responsibilities for device owners and administrators

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-MOBILE-NO-MDM-002` - Mobile device management not implemented
- `CSE-HITRUST-MOBILE-NO-BYOD-003` - BYOD controls missing
- `CSE-HITRUST-MOBILE-NO-APP-SECURITY-004` - Mobile app security missing
- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HITRUST-ASSET-NO-ACCEPTABLE-USE-003` - Acceptable use policy missing

## Notes

Detection of this signal typically involves:

- Review of organizational policy repositories and documentation systems
- Examination of security governance frameworks
- Analysis of policy management processes
- Verification of policy approval and publication records
- Assessment of mobile device management documentation
- Review of employee handbooks and security awareness materials

The presence of this signal indicates a foundational gap in mobile device governance that should be addressed as a priority for HITRUST compliance and security best practices, especially in organizations with mobile workforce or BYOD programs.
