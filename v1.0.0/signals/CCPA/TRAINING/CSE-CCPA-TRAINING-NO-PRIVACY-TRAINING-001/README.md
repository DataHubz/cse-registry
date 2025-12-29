# CSE-CCPA-TRAINING-NO-PRIVACY-TRAINING-001

**Privacy Training Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-TRAINING-NO-PRIVACY-TRAINING-001` |
| Domain | CCPA |
| Category | TRAINING |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business subject to CCPA requirements does not provide privacy training to employees who handle consumer personal information or process consumer rights requests. This signal indicates the absence of documented privacy training programs, training materials, or evidence of employee privacy education.

Employees who collect, process, or maintain personal information must understand CCPA requirements, consumer rights, and proper data handling procedures to ensure organizational compliance.

## Applicability

This signal applies to:

- Customer service departments handling consumer data requests
- Sales and marketing teams collecting personal information
- IT and engineering teams building data collection systems
- Human resources departments managing employee data
- Legal and compliance teams responsible for CCPA implementation
- Management personnel overseeing data processing activities
- Third-party service providers processing data on behalf of the business

## Examples (Non-Normative)

### Missing Training Documentation

```yaml
# Employee onboarding checklist lacking privacy training
onboarding:
  - name: "New Hire Orientation"
    tasks:
      - complete_hr_forms
      - setup_workstation
      - review_security_policy
      # No privacy or CCPA training requirement
```

### Untrained Customer Service Team

```json
{
  "department": "Customer Service",
  "team_size": 25,
  "training_completed": {
    "customer_support_basics": true,
    "product_knowledge": true,
    "crm_system_usage": true,
    "ccpa_privacy_training": false
  }
}
```

### No Training Records

```python
# Employee training tracking system
employee_training = {
    "employee_id": "12345",
    "completed_courses": [
        "Safety Training",
        "Anti-Harassment Policy",
        "Data Security Basics"
    ]
    # No CCPA or privacy-specific training recorded
}
```

## What This Signal Does NOT Assert

- Whether the business is actually subject to CCPA
- The quality or effectiveness of existing training programs (if informal training exists)
- Whether employees have learned CCPA requirements through other means
- Compliance or non-compliance with CCPA or other privacy laws
- The business's intent or good faith efforts
- Required training frequency or format
- Whether third-party training resources are acceptable

## CCPA Context (Informative)

- **Section**: §1798.130(a)(6)
- **Requirement**: Businesses must train individuals responsible for handling consumer inquiries about the business's privacy practices and CCPA compliance
- **Added by**: CCPA (original 2018 statute), enhanced by CPRA

While the CCPA does not explicitly mandate comprehensive privacy training for all employees, training is an implicit requirement for businesses to effectively implement CCPA obligations. Employees who handle consumer rights requests must understand the nature of these rights and how to properly process them within required timeframes.

## Related Signals

- `CSE-CCPA-TRAINING-NO-REQUEST-HANDLING-002` — Request Handling Training Missing
- `CSE-CCPA-TRAINING-NO-ANNUAL-REFRESH-003` — Annual Training Refresh Missing
- `CSE-CCPA-RIGHTS-NO-REQUEST-PROCESS-001` — Consumer Rights Request Process Missing

## Notes

Detection of this signal typically involves:

- Reviewing employee training records and learning management systems
- Examining onboarding documentation for privacy training requirements
- Checking for CCPA-specific training materials or courses
- Verifying training completion rates for data-handling personnel
- Reviewing HR policies for mandatory privacy training requirements
- Checking for third-party training certifications or vendor documentation
- Interviewing employees about privacy awareness and CCPA knowledge

The presence of this signal indicates a significant gap in organizational readiness to comply with CCPA requirements and properly handle consumer personal information.
