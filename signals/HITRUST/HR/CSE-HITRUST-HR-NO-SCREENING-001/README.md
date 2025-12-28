# CSE-HITRUST-HR-NO-SCREENING-001

**Background Screening Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-HR-NO-SCREENING-001` |
| Domain | HITRUST |
| Category | HR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Background checks are not performed on personnel with access to sensitive information systems or data. This creates significant risk as employees, contractors, or third-party personnel may have undisclosed backgrounds that pose security, privacy, or compliance threats.

This signal indicates that the organization lacks a formal background screening process prior to granting access to sensitive systems, protected health information (PHI), or critical infrastructure.

## Applicability

- Healthcare organizations handling PHI/ePHI
- Business associates and subcontractors
- Cloud service providers hosting sensitive data
- Pre-employment screening programs
- Contractor and vendor personnel verification
- Roles with privileged or administrative access
- Positions handling financial or regulated data
- Periodic re-verification and re-screening programs

## Examples (Non-Normative)

### No Screening Policy Defined

```yaml
hr_policy:
  recruitment:
    background_screening:
      enabled: false
      required_for: []
    onboarding_steps:
      - collect_documents
      - setup_accounts
      - assign_equipment
    # No background verification step defined
```

### Incomplete Screening for Sensitive Roles

```yaml
employee_record:
  employee_id: "EMP-2024-1234"
  role: "Healthcare IT Administrator"
  access_level: "privileged"
  phi_access: true
  screening:
    identity_verification: true
    background_check: false  # Critical gap for sensitive role
    criminal_history: false
    reference_checks: false
    ongoing_verification: never
  access_granted_date: "2024-01-15"
  screening_completion_date: null
```

### Missing Contractor Screening

```
Third-Party Assessment:
  Vendor: IT Support Services Inc.
  Personnel Count: 15
  Access to Systems: Production EHR, Database Servers
  Background Screening Required: Yes
  Background Screening Completed: 0/15
  Risk: HIGH - Unvetted personnel with production access
```

## HITRUST CSF Context (Informative)

**Control Reference:** 02.a - Human Resources Security - Screening

**Control Requirement:** Background verification checks on all candidates for employment, contractors, and third-party users shall be carried out in accordance with relevant laws, regulations, and ethics, and proportional to the business requirements, the classification of the information to be accessed, and the perceived risks.

**Key Requirements:**
- Pre-employment background verification
- Contractor and third-party screening
- Screening proportional to risk and data sensitivity
- Compliance with applicable laws and regulations
- Periodic re-verification programs

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-HR-NO-TERMS-002` - Employment terms not defining security responsibilities
- `CSE-HITRUST-HR-NO-AWARENESS-003` - Security awareness training missing
- `CSE-ISO27001-PEOPLE-NO-SCREENING-001` - ISO 27001 personnel screening control
- `CSE-CMMC-PERSONNEL-NO-SCREENING-001` - CMMC personnel screening requirement
- `CSE-HIPAA-ADMIN-NO-CLEARANCE-PROC-007` - HIPAA workforce clearance procedures

## Notes

Detection of this signal typically involves:

- Review of HR policies and procedures for background screening requirements
- Examination of employee and contractor onboarding checklists
- Analysis of personnel files for screening documentation
- Verification of third-party vendor screening processes
- Assessment of screening scope and depth for different role types
- Review of periodic re-verification programs
- Evaluation of screening timeliness before access is granted

The presence of this signal indicates that personnel with unknown backgrounds may have access to sensitive systems and data, creating insider threat risks and potential compliance violations.
