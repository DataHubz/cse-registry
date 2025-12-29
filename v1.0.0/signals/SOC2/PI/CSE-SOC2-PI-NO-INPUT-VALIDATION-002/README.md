# CSE-SOC2-PI-NO-INPUT-VALIDATION-002

**No Input Completeness and Accuracy Controls**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-PI-NO-INPUT-VALIDATION-002` |
| Domain | SOC2 |
| Category | PI |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not implement policies and procedures over system inputs, including controls over completeness and accuracy.

## Applicability

- Input validation controls and rules
- Data quality checks at ingestion
- Form validation and user input controls
- API input validation
- File upload validation
- Completeness and accuracy checks

## Examples (Non-Normative)

### Missing Input Validation

```yaml
findings:
  - No validation of user input fields
  - API endpoints accept unvalidated data
  - Required fields not enforced
  - Data type validation not implemented
```

### Inadequate Completeness Checks

```yaml
findings:
  - Mandatory fields can be bypassed
  - Partial records accepted without validation
  - No checks for missing critical data elements
  - Incomplete transactions processed
```

### Poor Accuracy Controls

```yaml
findings:
  - Format validation not implemented (e.g., email, phone)
  - Range checks missing for numeric inputs
  - No validation against reference data
  - Invalid characters accepted in text fields
```

## SOC 2 Context (Informative)

- **PI1.2**: The entity implements policies and procedures over system inputs, including controls over completeness and accuracy, to result in products, services, and reporting to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-PI-NO-PROCESSING-SPECS-001`
- `CSE-SOC2-PI-NO-OUTPUT-VALIDATION-004`
