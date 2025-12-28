# CSE-CCPA-TRAINING-NO-ANNUAL-REFRESH-003

**Annual Training Refresh Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-TRAINING-NO-ANNUAL-REFRESH-003` |
| Domain | CCPA |
| Category | TRAINING |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A business subject to CCPA requirements does not provide annual refresher training to employees who handle consumer personal information or process consumer rights requests. This signal indicates that initial training was provided but no recurring training program exists to update employees on regulatory changes, new business practices, or evolving privacy requirements.

Given the CPRA amendments and ongoing CPPA regulatory developments, annual training updates are necessary to ensure employees remain current on CCPA obligations, new consumer rights, and updated enforcement guidance.

## Applicability

This signal applies to:

- Existing employees who completed initial CCPA training more than 12 months ago
- Privacy teams responsible for ongoing CCPA compliance
- Customer service departments handling consumer requests
- IT and engineering teams maintaining data systems
- Management overseeing privacy program implementation
- Compliance personnel monitoring regulatory changes
- Third-party service providers with multi-year contracts

## Examples (Non-Normative)

### Outdated Training Records

```yaml
# Employee training record showing no recent updates
employee_training:
  employee_id: "E12345"
  department: "Customer Service"
  ccpa_training:
    initial_completion_date: "2020-03-15"
    last_refresher_date: null
    days_since_training: 1380
    # Over 3 years without refresher training
```

### Missing CPRA Update Training

```json
{
  "training_programs": [
    {
      "course": "CCPA Fundamentals",
      "version": "1.0",
      "last_updated": "2019-12-01",
      "covers_cpra_amendments": false,
      "covers_sensitive_pi": false,
      "covers_automated_decision_rights": false
    }
  ]
}
```

### No Scheduled Refresher Training

```python
# Training management system
training_schedule = {
    "department": "Privacy Team",
    "upcoming_training": [
        "Security Awareness - Q1 2024",
        "Harassment Prevention - Annual",
        "Ethics Training - Annual"
    ]
    # No CCPA refresher training scheduled
}
```

## What This Signal Does NOT Assert

- Whether the business is actually subject to CCPA
- The quality or comprehensiveness of initial training provided
- Whether employees stay current through other means (conferences, self-study)
- Compliance or non-compliance with CCPA or other privacy laws
- The business's intent or good faith efforts
- Required frequency beyond annual updates
- Specific training delivery methods or duration
- Whether informal updates through team meetings are sufficient

## CCPA Context (Informative)

- **Section**: CPPA Regulations (California Privacy Protection Agency guidance)
- **Requirement**: While the CCPA statute does not explicitly mandate annual training, the CPPA has issued guidance recommending regular training updates to ensure ongoing compliance, particularly given CPRA amendments effective January 1, 2023
- **Added by**: CPRA regulatory guidance and best practices

The California Privacy Protection Agency (CPPA) emphasizes that businesses should implement ongoing training programs to address:

- CPRA amendments including new rights (correction, limitation of use)
- New categories of sensitive personal information
- Enhanced opt-out requirements for sharing and automated decision-making
- Updated enforcement priorities and regulatory guidance
- Changes in business data collection or processing practices
- New technologies or third-party relationships affecting privacy

Annual refresher training helps ensure compliance with evolving privacy obligations and maintains organizational awareness of consumer rights.

## Related Signals

- `CSE-CCPA-TRAINING-NO-PRIVACY-TRAINING-001` — Privacy Training Missing
- `CSE-CCPA-TRAINING-NO-REQUEST-HANDLING-002` — Request Handling Training Missing
- `CSE-CCPA-NOTICE-OUTDATED-POLICY-008` — Privacy Policy Not Updated

## Notes

Detection of this signal typically involves:

- Analyzing employee training records for completion dates
- Checking learning management system schedules for recurring training
- Reviewing training materials for CPRA updates and current regulatory guidance
- Comparing training content versions against regulatory amendment dates
- Examining HR policies for mandatory annual training requirements
- Verifying training attendance records for calendar year compliance
- Checking for automated training reminders or scheduling systems
- Reviewing training curricula for coverage of CPRA amendments (effective 2023)

The presence of this signal indicates that employee knowledge of CCPA requirements may be outdated, particularly regarding CPRA amendments and evolving CPPA enforcement priorities.
