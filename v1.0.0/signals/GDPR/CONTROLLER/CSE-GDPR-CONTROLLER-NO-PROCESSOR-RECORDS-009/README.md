# CSE-GDPR-CONTROLLER-NO-PROCESSOR-RECORDS-009

**Processor Processing Records Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-PROCESSOR-RECORDS-009` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The processor has not maintained records of all categories of processing activities carried out on behalf of controllers as required by Article 30.2.

Records must include processor and representative details, categories of processing, transfers, and security measures.

## Applicability

- Processors acting on behalf of controllers
- Service provider record-keeping obligations
- Multi-client processor operations
- Audit and oversight requirements
- Supervisory authority compliance

## Examples (Non-Normative)

### No Processor Records

```yaml
processor_records:
  maintained: false
  controllers_list: "Not documented"
  processing_categories: []
  transfers: "Not tracked"
  security_measures: "Not specified in records"
  sub_processors: "Not listed"
  last_updated: null
```

### Inadequate Processor Documentation

```
Processor: Cloud Hosting Provider
Records Status:
  - Controller A: No record maintained
  - Controller B: Basic service agreement only
  - Controller C: Processing activities not documented
  - Processing Categories: Not categorized
  - International Transfers: Not tracked
  - Security Measures: Generic policy, not specific
  - Available to Supervisory Authority: No
```

## GDPR Context (Informative)

- **Art. 30.2**: Each processor shall maintain record of categories of processing
- **Art. 30.2(a-d)**: Specifies mandatory record contents for processors
- **Art. 28.3(f)**: Processor must assist controller in ensuring compliance with Article 30
- **Art. 30.4-5**: Records must be in writing and available to supervisory authority

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008`
- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-CONTROLLER-NO-PROCESSING-INSTRUCTIONS-007`
