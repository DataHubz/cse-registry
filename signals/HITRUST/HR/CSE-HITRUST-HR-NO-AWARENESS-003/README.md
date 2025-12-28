# CSE-HITRUST-HR-NO-AWARENESS-003

**Security Awareness Training Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-HR-NO-AWARENESS-003` |
| Domain | HITRUST |
| Category | HR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No security awareness training program exists for workforce members, or existing training is inadequate, incomplete, or not regularly updated. This creates significant risk as personnel may lack the knowledge to identify and respond to security threats, comply with policies, or protect sensitive information.

This signal indicates that employees, contractors, and third-party users do not receive appropriate education on security risks, organizational policies, regulatory requirements, and their individual responsibilities for protecting information assets.

## Applicability

- New employee onboarding programs
- Annual security awareness refresher training
- Role-based security training (e.g., privileged users, developers)
- Contractor and vendor personnel training
- Phishing and social engineering awareness campaigns
- Incident response and reporting training
- Privacy and data protection education
- Regulatory compliance training (HIPAA, GDPR, etc.)
- Security policy acknowledgment and training
- Specialized training for high-risk roles

## Examples (Non-Normative)

### No Training Program Established

```yaml
security_training:
  program_exists: false
  training_platform: null
  courses_available: []
  completion_tracking: none
  annual_refresher: false
  onboarding_training: false
  role_based_training: false
```

### Inadequate Training Coverage

```yaml
training_management:
  security_awareness_course:
    deployed: true
    last_updated: "2019-06-15"  # Severely outdated
    completion_rate: "23%"  # Very low adoption
    topics_covered:
      - password_management
      # Missing critical topics:
      # - phishing/social engineering
      # - data handling/classification
      # - incident reporting
      # - mobile device security
      # - remote work security
  training_requirements:
    new_hire_training: not_enforced
    annual_refresher: not_required
    role_based_training: not_available
    completion_verification: none
```

### Missing Training Records

```
Workforce Training Audit Results:

Total Workforce: 250 employees
Security Awareness Training Completion:
  - 2024: 0 employees (0%)
  - 2023: 12 employees (5%)
  - 2022: 0 employees (0%)

New Hires in 2024: 45
Security Training Completed: 0 (0%)

High-Risk Roles (Admins, Developers): 18
Specialized Security Training: 0 (0%)

Finding: No effective security awareness program
```

### Contractor Training Gap

```yaml
vendor_management:
  contractor: "IT Support Services Inc."
  personnel_count: 8
  access_level: "privileged"
  phi_access: true
  training_requirements:
    security_awareness: required
    hipaa_privacy: required
    incident_reporting: required
  training_status:
    documentation_received: false
    internal_training_provided: false
    completion_verified: false
    last_training_date: null
  # Unvetted personnel with privileged access to PHI
```

## HITRUST CSF Context (Informative)

**Control Reference:** 02.c - Human Resources Security - Information Security Awareness, Education, and Training

**Control Requirement:** All employees of the organization and, where relevant, contractors and third-party users shall receive appropriate awareness training and regular updates in organizational policies and procedures, as relevant for their job function.

**Key Requirements:**
- Comprehensive security awareness program for all workforce members
- Regular training updates to address evolving threats
- Role-based training appropriate to job functions and access levels
- Training on organizational policies and procedures
- Coverage of applicable regulatory requirements
- Training effectiveness measurement and verification
- New hire onboarding training
- Periodic refresher training
- Specialized training for privileged or high-risk roles

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-HR-NO-TERMS-002` - Employment terms not defining security responsibilities
- `CSE-HITRUST-HR-NO-DISCIPLINARY-004` - Disciplinary process not defined
- `CSE-ISO27001-PEOPLE-NO-SECURITY-TRAINING-003` - ISO 27001 security training control
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` - CMMC security awareness requirement
- `CSE-HIPAA-ADMIN-NO-SECURITY-REMINDERS-011` - HIPAA security awareness requirement

## Notes

Detection of this signal typically involves:

- Review of security awareness program documentation
- Examination of training content, curriculum, and materials
- Analysis of training completion rates and tracking records
- Verification of training frequency and update cycles
- Assessment of training relevance to current threat landscape
- Review of role-based training programs for specialized roles
- Evaluation of new hire onboarding training processes
- Analysis of training effectiveness metrics and testing
- Verification of contractor and third-party training requirements

The presence of this signal indicates that workforce members may be vulnerable to social engineering, phishing, and other attacks, and may inadvertently violate security policies or regulatory requirements due to lack of knowledge.
