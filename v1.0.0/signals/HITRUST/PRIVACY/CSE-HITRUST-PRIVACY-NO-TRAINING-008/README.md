# CSE-HITRUST-PRIVACY-NO-TRAINING-008

**Privacy Training Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-TRAINING-008` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal privacy training and awareness program for workforce members who handle personal or protected health information (PHI) has not been established or implemented.

This signal indicates the absence of training programs that educate employees, contractors, and other workforce members about privacy policies, individual privacy rights, regulatory requirements, and their responsibilities for protecting personal information. Privacy training is fundamental to creating a privacy-aware culture and ensuring consistent privacy practices across the organization.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Healthcare workforce development programs
- New employee onboarding processes
- Continuing education and compliance programs
- Privacy and security office operations
- Healthcare SaaS and technology providers

## Examples (Non-Normative)

### Training Program Without Privacy Module

```yaml
# Training configuration lacking privacy content
employee_training:
  required_courses:
    - security_awareness: mandatory
    - hipaa_security: mandatory
    - incident_response: mandatory
    - privacy_practices: null  # No privacy training
  completion_tracking: enabled
  annual_refresh: required
```

### Onboarding Process Missing Privacy Training

```python
# Employee onboarding workflow without privacy training
class EmployeeOnboarding:
    def complete_onboarding(self, employee_id):
        self.assign_training('security_basics', employee_id)
        self.assign_training('systems_access', employee_id)
        self.assign_training('code_of_conduct', employee_id)
        # No privacy training assignment
        return self.activate_account(employee_id)
```

### Learning Management System Configuration

```json
{
  "lms_courses": {
    "security_training": {
      "status": "active",
      "required": true
    },
    "compliance_basics": {
      "status": "active",
      "required": true
    },
    "privacy_practices": {
      "status": "not_configured",
      "required": null
    }
  }
}
```

### Role-Based Training Without Privacy Component

```markdown
# Training matrix by role
## Clinical Staff
- HIPAA Security Rule: Required
- Patient Safety: Required
- Privacy Practices: NOT DEFINED

## Administrative Staff
- Data Security: Required
- Compliance Overview: Required
- Privacy Rights: NOT DEFINED
```

## What This Signal Does NOT Assert

- Whether informal privacy guidance is provided
- The quality or effectiveness of existing training
- Whether the organization is compliant or non-compliant with HITRUST
- The specific content requirements for privacy training
- Whether workforce members understand privacy concepts

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.h
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for privacy training that:
- Provides privacy training to all workforce members
- Covers individual privacy rights and organizational obligations
- Addresses proper handling of personal information
- Includes role-specific privacy responsibilities
- Requires completion for new hires and periodic refreshers
- Maintains records of training completion
- Updates training to reflect policy and regulatory changes

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-NOTICE-001` - Privacy notice missing
- `CSE-HITRUST-HR-NO-AWARENESS-003` - Security awareness training missing
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` - Security training requirements (if defined)
- `CSE-HIPAA-ADMIN-NO-TRAINING-001` - HIPAA training requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of learning management system (LMS) course catalogs
- Examination of training curriculum and content
- Analysis of training completion records and tracking
- Verification of onboarding and ongoing training requirements
- Assessment of role-based training assignments
- Review of training materials and documentation

The presence of this signal indicates a workforce readiness and privacy culture gap that should be addressed to ensure consistent privacy practices and regulatory compliance.
