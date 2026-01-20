# CSE-GDPR-DPO-NO-TASK-RESOURCES-004

**DPO Task Resources Not Provided**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DPO-NO-TASK-RESOURCES-004` |
| Domain | GDPR |
| Category | DPO |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Data Protection Officer has not been provided with necessary resources, support, or access to perform required tasks effectively.

Article 38.2 requires controllers to support DPO in performing tasks.

## Applicability

- All organizations with designated DPO
- Resources must be proportionate to processing activities
- Access to personal data and processing operations required
- Support staff, budget, and tools must be adequate

## Examples (Non-Normative)

### Inadequate DPO Resources

```yaml
dpo_resources:
  dedicated_budget: false
  support_staff: 0
  access_to_data: "Limited"
  training_budget: 0
  time_allocation: "10% of full-time role"
  system_access: "Read-only to limited systems"
```

### Insufficient Support

```
DPO Resource Assessment:
  Organization Size: 5,000 employees
  DPO Time Allocation: 1 day per week
  Support Staff: None
  Budget: No dedicated budget
  System Access: Must request per incident
  Training: Not funded
  Effectiveness: Severely constrained
```

## GDPR Context (Informative)

- **Art. 38.2**: Controller and processor shall support DPO in performing tasks by providing resources, access to data, and maintaining expert knowledge
- **Art. 38.1**: DPO shall be involved in all issues relating to protection of personal data
- **Recital 97**: Necessary resources should be provided to DPO

## Related Signals

- `CSE-GDPR-DPO-NO-DESIGNATION-001`
- `CSE-GDPR-DPO-NO-INDEPENDENCE-003`
