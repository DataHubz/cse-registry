# CSE-CIS-TRAINING-NO-SKILLS-ASSESSMENT-005

**Security Skills Assessment Missing**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-CIS-TRAINING-NO-SKILLS-ASSESSMENT-005` |
| Domain          | CIS                                |
| Category        | TRAINING                           |
| Control         | 14 - Security Awareness and Skills Training |
| Safeguard       | 14.5                               |
| IG Level        | IG2                                |
| Asset Type      | Users                              |
| Security Function | Protect                          |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

The organization lacks a program to assess security skills and knowledge of personnel with security responsibilities.

This signal indicates that there is no formal process to regularly evaluate the technical security competencies and knowledge of staff members who have security-related job functions, identify skill gaps, and provide targeted training to address deficiencies.

## Applicability

This signal applies to:

- Security team professional development programs
- IT staff competency assessment initiatives
- Technical training needs analysis
- Security role qualification requirements
- Professional certification tracking
- Skills gap analysis and remediation
- Security operations center (SOC) capability development

## Examples (Non-Normative)

### Missing Skills Assessment Program

```
No documented program exists defining:
- Security skills assessment methodology
- Assessment frequency and scope
- Roles requiring skills evaluation
- Competency frameworks and standards
- Skills gap remediation requirements
- Professional development tracking
```

### Undefined Assessment Requirements

```yaml
# No skills assessment program for security personnel
skills_assessment:
  security_team:
    assessment: undefined
    frequency: null
    competency_framework: null
    gap_analysis: false
  remediation:
    training: undefined
    certification: undefined
    tracking: false
```

### No Competency Validation

```
Organization employs security personnel but:
- No formal assessment of security skills
- No competency framework or standards
- No identification of knowledge gaps
- No targeted training based on assessments
- No tracking of professional development
- No validation of security capabilities
```

### Missing Assessment Infrastructure

```
No capability exists to:
- Conduct technical skills assessments
- Evaluate security knowledge and expertise
- Identify individual and team skill gaps
- Develop personalized training plans
- Track professional certifications
- Measure improvement over time
- Validate security team capabilities
```

## What This Signal Does NOT Assert

- Whether security personnel are competent or qualified
- Whether general security training exists
- The effectiveness of the security team
- Compliance or non-compliance with any framework
- Required remediation actions
- Professional certification requirements

## CIS Control Context (Informative)

This signal is relevant to:

- **CIS Control 14: Security Awareness and Skills Training**
- **Safeguard 14.5**: Train the workforce on how to identify and report security incidents

## Related Signals

- `CSE-CIS-TRAINING-NO-ROLE-SPECIFIC-002` — Role-Specific Training Missing
- `CSE-CIS-TRAINING-NO-PROGRAM-001` — Security Awareness Program Missing
- `CSE-CIS-TRAINING-NO-SECURE-CODING-006` — Secure Coding Training Missing
