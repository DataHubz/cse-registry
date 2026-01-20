# CSE-HITRUST-POLICY-NO-COMMUNICATION-003

**Policy Not Communicated**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-HITRUST-POLICY-NO-COMMUNICATION-003` |
| Domain          | HITRUST                                  |
| Category        | POLICY                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Policies have not been communicated to the workforce and relevant external parties. Organizations must ensure that security policies are effectively published, distributed, and communicated to all employees, contractors, and relevant third parties who need to understand and comply with security requirements.

This signal indicates the failure to communicate security policies to affected parties.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA
- Organizations handling protected health information (PHI)
- Covered entities and business associates
- Health information technology vendors
- Organizations seeking HITRUST certification
- Any entity managing sensitive healthcare data

## HITRUST CSF Context (Informative)

**Control Reference:** 04.b Security Policy - Policy Communication

**Control Domain:** 04 - Security Policy

**Requirement:** The information security policy shall be communicated to all employees and relevant external parties in a form that is relevant, accessible, and understandable.

**HITRUST Requirement:** Organizations must establish and implement processes to communicate security policies to the workforce, contractors, business associates, and other relevant parties. Communication must ensure that individuals understand their security responsibilities and obligations. Policies must be accessible and presented in formats appropriate for the intended audience.

These references are informative and do not constitute compliance guidance.

## Examples (Non-Normative)

### No Policy Communication

```yaml
policy_communication:
  information_security_policy:
    documented: true
    approved: true
    published: false                         # Signal: Not published

  distribution:
    communicated_to_employees: false         # Signal: Not communicated
    communication_method: null               # Signal: No method defined
    communication_date: null                 # Signal: Never communicated
    acknowledgment_required: false           # Signal: No acknowledgment

  audience:
    workforce_notified: false                # Signal: Workforce not notified
    contractors_notified: false              # Signal: Contractors not notified
    business_associates_notified: false      # Signal: Partners not notified
```

### Incomplete Communication Process

```yaml
security_awareness:
  policy_distribution:
    communication_method: "email"
    distribution_status: "partial"           # Signal: Incomplete distribution

  workforce_coverage:
    employees_reached: 45                    # Signal: Only partial coverage
    total_workforce: 200                     # Signal: 155 not reached
    contractors_included: false              # Signal: Contractors excluded
    remote_workers_included: false           # Signal: Remote workers excluded

  communication_tracking:
    acknowledgment_tracking: null            # Signal: No tracking system
    receipt_confirmation: null               # Signal: No confirmation
    understanding_verification: null         # Signal: No verification

  accessibility:
    policy_repository: "not_established"     # Signal: No central repository
    policy_availability: "restricted"        # Signal: Not accessible
    language_translations: null              # Signal: No translations
    accessible_formats: []                   # Signal: No accessible formats
```

## Related Signals

- `CSE-HITRUST-POLICY-NO-DOCUMENT-001` (Security policy not documented)
- `CSE-HITRUST-POLICY-NO-APPROVAL-002` (Policy approval not obtained)
- `CSE-HITRUST-POLICY-NO-REVIEW-004` (Policy review not conducted)
- `CSE-HIPAA-PRIVACY-NO-PRIVACY-TRAINING-020` (HIPAA privacy training)
- `CSE-ISO27001-ORG-NO-SECURITY-POLICY-001` (ISO 27001 security policy)

## Notes

Detection of this signal typically involves:

- Review of policy distribution records and communication logs
- Examination of workforce acknowledgment and training records
- Analysis of policy accessibility and availability mechanisms
- Verification of communication methods and effectiveness
- Assessment of coverage across employee populations and third parties

The presence of this signal indicates that workforce members and relevant parties may be unaware of security requirements and responsibilities, creating significant compliance and security risks. Effective policy communication is essential for HITRUST CSF compliance and overall security program effectiveness.
