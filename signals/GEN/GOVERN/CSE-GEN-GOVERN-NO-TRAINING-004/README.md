# CSE-GEN-GOVERN-NO-TRAINING-004

**Security Awareness Training Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-GOVERN-NO-TRAINING-004`          |
| Domain          | GEN (General)                             |
| Category        | GOVERN                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No security awareness training program exists to educate personnel about information security policies, threats, and their responsibilities for protecting organizational information assets.

This signal indicates that employees, contractors, and other personnel have not received formal security awareness education, leaving them unprepared to recognize and respond to security threats.

## Applicability

This signal applies to:

- All organizations with employees or contractors
- Remote and distributed workforces
- Healthcare organizations handling PHI
- Financial services institutions
- Organizations processing payment card data
- Government contractors requiring CMMC
- Organizations with regulatory compliance requirements
- Software development teams
- Third-party service providers
- Organizations with bring-your-own-device (BYOD) policies

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Training Program

```
# Indicators of missing security training:
- No documented security awareness training program
- No new hire security orientation
- No annual security refresher training
- No phishing awareness training
- No incident reporting training
- No data handling and classification training
- No acceptable use policy training
```

### Undocumented Training Process

```yaml
# Training program characteristics:
security_training:
  awareness_program: false
  new_hire_training: false
  annual_refresher: false
  role_based_training: false
  phishing_simulations: false
  training_records: false
  completion_tracking: false

content_coverage:
  acceptable_use_policy: false
  password_security: false
  phishing_recognition: false
  incident_reporting: false
  data_classification: false
  physical_security: false
  social_engineering: false
  remote_work_security: false
```

### No Training Records

```python
# Example of missing training documentation:
training_metrics = {
    "program_exists": False,
    "employees_trained": 0,
    "completion_rate": 0.0,
    "training_materials": [],
    "last_training_date": None,
    "training_tracking_system": None,
    "acknowledgment_records": []
}
```

### Missing Training Components

```
Security Training Gaps:
- Acceptable use of IT resources
- Password and authentication best practices
- Phishing and social engineering recognition
- Incident reporting procedures
- Data classification and handling
- Physical security and clean desk policies
- Mobile device and remote work security
- Privacy and data protection requirements
- Insider threat awareness
- Secure software development (for developers)
```

## What This Signal Does NOT Assert

- Whether informal security guidance has been provided
- The effectiveness of any existing training
- Whether personnel follow security practices
- Compliance or non-compliance with any framework
- The frequency or duration of required training
- Whether personnel have security knowledge from other sources
- The specific training content required
- Whether security incidents have occurred

## Related Signals

- `CSE-GEN-GOVERN-NO-SECURITY-POLICY-001` — Security policy missing
- `CSE-GEN-GOVERN-NO-SECURITY-ROLES-003` — Security roles undefined
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` — CMMC security training missing (if defined)
- `CSE-GEN-AUTH-WEAK-PASSWORDS-001` — Weak password practices (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.308(a)(5)(i) — Security awareness and training
- **HIPAA**: 164.308(a)(5)(ii)(A) — Security reminders
- **HIPAA**: 164.308(a)(5)(ii)(B) — Protection from malicious software
- **HIPAA**: 164.308(a)(5)(ii)(C) — Log-in monitoring
- **HIPAA**: 164.308(a)(5)(ii)(D) — Password management
- **CIS Controls**: 14.1 — Establish and maintain a security awareness program
- **CIS Controls**: 14.2 — Train workforce members to recognize social engineering attacks
- **CIS Controls**: 14.3 — Train workforce members on authentication best practices
- **PCI DSS**: Requirement 12.6 — Implement a formal security awareness program
- **PCI DSS**: Requirement 12.6.1 — Educate personnel upon hire and at least annually
- **PCI DSS**: Requirement 12.6.2 — Require personnel to acknowledge awareness training
- **CMMC**: AT.L2-3.2.1 — Ensure managers, systems administrators, and users are aware of security risks
- **CMMC**: AT.L2-3.2.2 — Ensure personnel are trained to carry out their assigned information security roles
- **CMMC**: AT.L2-3.2.3 — Provide security awareness training on recognizing suspicious communications

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of training program documentation
- Examination of training records and completion tracking
- Interviews with HR and security personnel
- Review of onboarding and orientation materials
- Assessment of training content and delivery methods
- Audit findings and compliance reports
- Employee surveys or assessments

The presence of this signal indicates a significant risk that personnel may:

- Fall victim to phishing and social engineering attacks
- Mishandle sensitive data
- Use weak authentication practices
- Fail to report security incidents
- Violate security policies unknowingly
- Introduce malware or other threats
- Create compliance violations

Organizations should establish a security awareness program that includes:

- Initial training for new hires
- Annual refresher training for all personnel
- Role-based training for specific functions
- Phishing simulation and testing
- Regular security communications and reminders
- Training content covering key topics:
  - Acceptable use policies
  - Password and authentication
  - Phishing and social engineering
  - Data classification and handling
  - Incident reporting
  - Physical security
  - Remote work and mobile devices
  - Privacy and compliance requirements

Training should be:
- Documented and version-controlled
- Tracked with completion records
- Acknowledged by participants
- Updated regularly to address emerging threats
- Measured for effectiveness
- Tailored to the organization's risk profile
