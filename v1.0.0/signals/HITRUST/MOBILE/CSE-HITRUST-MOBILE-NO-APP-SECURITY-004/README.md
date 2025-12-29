# CSE-HITRUST-MOBILE-NO-APP-SECURITY-004

**Mobile App Security Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-MOBILE-NO-APP-SECURITY-004` |
| Domain | HITRUST |
| Category | MOBILE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mobile application security controls and secure development practices have not been implemented for mobile applications that access, process, or store protected health information (PHI) or other sensitive data.

This signal indicates the absence of security requirements, testing procedures, and technical controls specific to mobile applications. Mobile app security should address secure coding practices, data storage protection, network communication security, authentication mechanisms, authorization controls, code obfuscation, runtime protections, and vulnerability assessment specific to mobile platforms.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Organizations developing mobile health applications
- Health information exchanges (HIEs)
- Medical device manufacturers with mobile apps
- Healthcare SaaS providers with mobile clients
- Organizations deploying internal mobile applications
- Patient portal and telehealth providers
- Mobile health (mHealth) solution providers

## Examples (Non-Normative)

### Mobile App Without Security Controls

```yaml
# Mobile application lacking security implementation
mobile_app:
  name: "PatientPortal"
  platform: ["iOS", "Android"]
  security_controls:
    data_encryption_at_rest: false
    secure_communication: false
    certificate_pinning: false
    root_detection: false
    code_obfuscation: false
    security_testing: null
```

### Insecure Data Storage

```swift
// iOS app storing PHI without encryption
class PatientData {
    func savePatientRecord(record: Patient) {
        // Storing sensitive data in UserDefaults without encryption
        UserDefaults.standard.set(record.ssn, forKey: "patient_ssn")
        UserDefaults.standard.set(record.diagnosis, forKey: "diagnosis")
        // No encryption, no secure storage mechanisms
    }
}
```

### Missing Security Requirements

```json
{
  "mobile_app_requirements": {
    "functional_requirements": ["user_login", "view_records", "schedule_appointments"],
    "security_requirements": null,
    "authentication": "basic",
    "data_protection": "undefined",
    "security_testing_plan": null
  }
}
```

## What This Signal Does NOT Assert

- Whether mobile applications are currently deployed
- The specific mobile platforms in use
- Whether web-based mobile interfaces exist
- The organization's compliance status with HITRUST
- The specific security controls required for each app
- Whether third-party mobile app security tools are needed

## HITRUST Context (Informative)

- **Control Domain**: 15 - Mobile Device Security
- **Control Reference**: 15.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing mobile application security that:
- Follows secure mobile application development lifecycle practices
- Implements data encryption for sensitive information at rest
- Secures network communications with TLS/SSL and certificate pinning
- Implements secure authentication and session management
- Protects against mobile-specific threats (jailbreak/root detection, runtime tampering)
- Conducts security testing including static and dynamic analysis
- Implements secure data deletion and cache management
- Addresses mobile platform-specific vulnerabilities
- Manages third-party libraries and SDK security
- Implements mobile application firewall or runtime protection

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-MOBILE-NO-POLICY-001` - Mobile device policy missing
- `CSE-HITRUST-MOBILE-NO-MDM-002` - Mobile device management missing
- `CSE-HITRUST-MOBILE-NO-BYOD-003` - BYOD controls missing
- `CSE-HITRUST-SDLC-NO-REQUIREMENTS-001` - Security requirements in SDLC missing
- `CSE-HITRUST-SDLC-NO-INPUT-VALIDATION-002` - Input validation missing
- `CSE-HITRUST-RISK-NO-VULNERABILITY-MANAGEMENT-007` - Vulnerability management missing

## Notes

Detection of this signal typically involves:

- Review of mobile application security requirements and design documentation
- Examination of secure coding practices and development standards
- Analysis of mobile app security testing results (SAST, DAST, penetration testing)
- Verification of data encryption implementations
- Assessment of authentication and authorization mechanisms
- Review of mobile app security configurations
- Evaluation of third-party library and SDK security
- Analysis of runtime protection and anti-tampering controls
- Review of app store security compliance and release processes
- Assessment of mobile API security and backend integration

The presence of this signal indicates a critical gap in mobile application security that should be addressed with high priority, particularly for applications that handle PHI or other sensitive health information. Mobile applications face unique security challenges and require specialized security controls beyond traditional web or desktop applications.
