# CSE-SOC2-CC-NO-COMPETENCE-COMMITMENT-004

**No Commitment to Competence**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-COMPETENCE-COMMITMENT-004` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not demonstrate commitment to attract, develop, and retain competent individuals in alignment with objectives.

## Applicability

- Applies when job descriptions do not specify required competencies
- Applies when hiring processes do not assess technical or professional skills
- Applies when there is no onboarding program for new employees
- Applies when training and professional development opportunities are absent
- Applies when performance evaluations do not assess competency
- Applies when there is no succession planning for key roles
- Applies when high turnover exists in critical positions

## Examples (Non-Normative)

### No Competency Requirements

```yaml
job_posting:
  title: Senior Security Engineer
  requirements:
    - bachelors_degree
    - 2_years_experience
  # No specific security competencies defined

hiring_process:
  technical_assessment: false
  skills_verification: none
  reference_checks: optional
```

### Lack of Training Programs

```yaml
employee_development:
  onboarding:
    duration_days: 1
    content: hr_paperwork_only

  ongoing_training:
    security_awareness: none
    technical_skills: none
    compliance_training: none

  professional_development:
    budget_per_employee: 0
    conference_attendance: not_supported
    certification_support: none
```

### High Turnover in Critical Roles

```yaml
security_team:
  2024_turnover:
    total_departures: 8
    team_size: 10
    turnover_rate: 80%

  succession_planning: null

  knowledge_transfer:
    documentation: minimal
    handoff_process: informal
```

## SOC 2 Context (Informative)

- **CC1.4**: The entity demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives
- **COSO Principle 4**: The organization demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives

## Related Signals

- `CSE-SOC2-CC-NO-INTEGRITY-COMMITMENT-001`
- `CSE-SOC2-CC-NO-MGMT-STRUCTURE-003`
- `CSE-SOC2-CC-NO-CONTROL-ACCOUNTABILITY-005`
