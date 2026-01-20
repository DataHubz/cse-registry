# CSE-HITRUST-HR-NO-TERMS-002

**Employment Terms Not Defined**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-HR-NO-TERMS-002` |
| Domain | HITRUST |
| Category | HR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Security roles, responsibilities, and expectations are not formally defined or documented in employment terms and conditions. This creates ambiguity around workforce member obligations regarding information security, confidentiality, and acceptable use of organizational systems and data.

This signal indicates that employment agreements, contracts, or onboarding documentation lack explicit security-related terms, leaving personnel unclear about their security duties and potential consequences of non-compliance.

## Applicability

- Employment contracts and offer letters
- Contractor and vendor agreements
- Third-party service provider contracts
- Non-disclosure agreements (NDAs)
- Acceptable use policies (AUPs)
- Code of conduct documentation
- Job descriptions for security-sensitive roles
- Terms of service for system access

## Examples (Non-Normative)

### Employment Agreement Without Security Terms

```yaml
employment_contract:
  employee_name: "Jane Smith"
  position: "Nurse Practitioner"
  start_date: "2024-01-15"
  terms:
    - compensation
    - benefits
    - work_hours
    - vacation_policy
  # Missing security-related terms:
  security_responsibilities: null
  confidentiality_clause: null
  acceptable_use_acknowledgment: null
  data_protection_obligations: null
  sanction_policy_reference: null
```

### Contractor Agreement Lacking Security Provisions

```yaml
contractor_agreement:
  vendor: "Medical Billing Services LLC"
  service: "Revenue Cycle Management"
  access_required:
    - patient_demographics
    - billing_information
    - insurance_data
  phi_access: true
  contract_terms:
    scope_of_work: defined
    payment_terms: defined
    liability_insurance: required
    # Critical gaps:
    security_responsibilities: not_defined
    data_handling_requirements: not_specified
    incident_reporting_obligations: missing
    termination_access_revocation: not_addressed
```

### Job Description Without Security Role Definition

```
Job Posting: Database Administrator

Responsibilities:
  - Manage and maintain database systems
  - Perform backup and recovery operations
  - Monitor database performance
  - Troubleshoot database issues

Missing Security Responsibilities:
  - No mention of data protection duties
  - No reference to access control responsibilities
  - No confidentiality expectations stated
  - No incident reporting requirements
  - No security training obligations
```

## HITRUST CSF Context (Informative)

**Control Reference:** 02.b - Human Resources Security - Terms and Conditions of Employment

**Control Requirement:** The employment contractual agreements shall state the employees', contractors', and third-party users' responsibilities for information security. These contractual agreements shall include, but not be limited to, organizational security policy, acceptable use of organizational assets, and intellectual property rights protection.

**Key Requirements:**
- Security responsibilities explicitly stated in employment terms
- Reference to organizational security policies
- Acceptable use of assets and information
- Confidentiality and data protection obligations
- Intellectual property rights and ownership
- Consequences of security policy violations
- Post-employment obligations (e.g., returning assets, ongoing confidentiality)

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-HR-NO-SCREENING-001` - Background screening not conducted
- `CSE-HITRUST-HR-NO-DISCIPLINARY-004` - Disciplinary process not defined
- `CSE-HITRUST-HR-NO-TERMINATION-005` - Termination process not implemented
- `CSE-ISO27001-PEOPLE-NO-EMPLOYMENT-TERMS-002` - ISO 27001 employment terms control
- `CSE-HIPAA-ADMIN-NO-SANCTION-POLICY-003` - HIPAA sanction policy requirement

## Notes

Detection of this signal typically involves:

- Review of employment contract templates and standard agreements
- Examination of contractor and vendor contract language
- Analysis of job descriptions and role definitions
- Verification of security policy acknowledgment processes
- Assessment of onboarding documentation completeness
- Review of acceptable use policy distribution and acknowledgment
- Evaluation of confidentiality agreement coverage

The presence of this signal indicates that workforce members may not understand their security obligations, reducing accountability and increasing the risk of inadvertent or intentional security violations.
