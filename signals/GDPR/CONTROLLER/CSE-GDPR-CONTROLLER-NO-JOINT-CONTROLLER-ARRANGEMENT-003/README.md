# CSE-GDPR-CONTROLLER-NO-JOINT-CONTROLLER-ARRANGEMENT-003

**Joint Controller Arrangement Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-JOINT-CONTROLLER-ARRANGEMENT-003` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Where two or more controllers jointly determine purposes and means of processing, no arrangement exists defining their respective responsibilities for GDPR compliance as required by Article 26.

This includes failure to transparently communicate the arrangement to data subjects.

## Applicability

- Multi-party data processing
- Partnership arrangements
- Collaborative platforms
- Shared databases
- Co-branded services

## Examples (Non-Normative)

### Undefined Joint Processing

```yaml
joint_processing:
  parties:
    - Company A
    - Company B
  arrangement_documented: false
  responsibilities_defined: false
  essence_available_to_subjects: false
  contact_point: null
```

### Missing Responsibility Assignment

```
Joint Marketing Campaign:
  - Controllers: Retailer and Brand Manufacturer
  - Processing: Shared customer database
  - Purposes: Jointly determined
  - Documented Arrangement: None
  - GDPR Responsibilities: Unclear
  - Data Subject Rights: No clear contact point
```

## GDPR Context (Informative)

- **Art. 26.1**: Joint controllers shall determine responsibilities by transparent arrangement
- **Art. 26.2**: Essence of arrangement must be made available to data subjects
- **Art. 26.3**: Data subjects may exercise rights against each controller

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-CONTROLLER-NO-POLICY-DOCUMENTATION-002`
- `CSE-GDPR-RIGHTS-NO-TRANSPARENT-COMMUNICATION-001`
