# CSE-HITRUST-MOBILE-NO-BYOD-003

**BYOD Controls Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-MOBILE-NO-BYOD-003` |
| Domain | HITRUST |
| Category | MOBILE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Bring Your Own Device (BYOD) security controls and policies have not been established for an organization or system handling protected health information (PHI) or other sensitive data that allows personal devices to access organizational resources.

This signal indicates the absence of specific controls, policies, and technical measures required to manage the unique security challenges posed by personally-owned devices accessing enterprise systems. BYOD controls should address data separation, privacy considerations, acceptable use, security requirements, and procedures for managing personal devices that access organizational resources or process sensitive information.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Organizations with BYOD programs or policies
- Organizations allowing personal device access to email or enterprise systems
- Remote workforce environments

## Examples (Non-Normative)

### BYOD Access Without Controls

```yaml
# Organization allows BYOD without defined controls
mobile_access:
  byod_allowed: true
  byod_policy: null
  containerization: false
  data_separation: false
  enrollment_requirements: []
```

### Uncontrolled Personal Device Access

```json
{
  "email_configuration": {
    "allow_personal_devices": true,
    "require_enrollment": false,
    "data_encryption": false,
    "remote_wipe_consent": null,
    "acceptable_use_agreement": null
  }
}
```

### Missing BYOD Security Framework

```markdown
# Mobile Access Configuration
- Corporate-Owned Devices: Managed via MDM
- Personal Devices: Email access allowed
  - Security Requirements: UNDEFINED
  - Data Protection: UNDEFINED
  - Privacy Controls: UNDEFINED
  - Exit Procedures: UNDEFINED
```

## What This Signal Does NOT Assert

- Whether BYOD access is currently permitted
- Whether all personal devices pose security risks
- The organization's compliance status with HITRUST
- The specific BYOD controls required
- Whether MDM is required for BYOD
- The privacy rights of device owners

## HITRUST Context (Informative)

- **Control Domain**: 15 - Mobile Device Security
- **Control Reference**: 15.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing BYOD security controls that:
- Define acceptable use of personal devices
- Establish data separation between personal and corporate data
- Implement containerization or workspace solutions
- Address privacy considerations and user consent
- Specify security requirements for BYOD enrollment
- Define procedures for device departing employee or contractor
- Establish monitoring and compliance verification processes
- Address legal and regulatory requirements for personal devices

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-MOBILE-NO-POLICY-001` - Mobile device policy missing
- `CSE-HITRUST-MOBILE-NO-MDM-002` - Mobile device management missing
- `CSE-HITRUST-MOBILE-NO-APP-SECURITY-004` - Mobile app security missing
- `CSE-HITRUST-ASSET-NO-ACCEPTABLE-USE-003` - Acceptable use policy missing
- `CSE-HITRUST-HR-NO-TERMS-002` - Terms and conditions of employment missing
- `CSE-HITRUST-PRIVACY-NO-CONSENT-001` - Consent mechanisms missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of BYOD policies and security controls documentation
- Examination of device enrollment and management processes
- Analysis of data separation and containerization implementations
- Verification of acceptable use agreements and consent forms
- Assessment of privacy protection mechanisms
- Review of device compliance monitoring and reporting
- Evaluation of employee offboarding procedures for BYOD
- Analysis of legal and regulatory compliance for personal device use

The presence of this signal indicates a significant gap in mobile security governance that should be addressed urgently, particularly for organizations where personal devices access PHI or other sensitive data. BYOD environments require specialized controls to balance security requirements with privacy considerations and user experience.
