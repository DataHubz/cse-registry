# CSE-GDPR-PRINCIPLES-NO-LAWFUL-BASIS-DOCUMENTED-010

**Lawful Basis Not Documented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-PRINCIPLES-NO-LAWFUL-BASIS-DOCUMENTED-010` |
| Domain | GDPR |
| Category | PRINCIPLES |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The lawful basis for processing personal data is not documented for each processing activity.

Controllers must identify and record the appropriate lawful basis before processing begins.

## Applicability

- Records of processing activities
- Privacy impact assessments
- Data processing inventories
- Consent management records
- Legitimate interest assessments

## Examples (Non-Normative)

### Undocumented Processing

```yaml
processing_activity:
  name: "Customer Analytics"
  lawful_basis: null
  documented: false
  assessment_date: null
```

### Incomplete Records

```
Processing Record:
  Activity: Marketing emails
  Purpose: Documented
  Lawful Basis: Not specified
  Data Categories: Listed
```

## GDPR Context (Informative)

- **Art. 6**: Specifies six lawful bases for processing
- **Art. 30.1(c)**: Records must include the purposes of the processing

## Related Signals

- `CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001`
- `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008`
