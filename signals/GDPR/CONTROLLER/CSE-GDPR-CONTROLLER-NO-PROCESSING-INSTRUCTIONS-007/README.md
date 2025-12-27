# CSE-GDPR-CONTROLLER-NO-PROCESSING-INSTRUCTIONS-007

**Processing Instructions Not Documented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-PROCESSING-INSTRUCTIONS-007` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The processor processes personal data without documented instructions from the controller or processes data beyond the scope of documented instructions as prohibited by Article 29.

Processors must only process on documented instructions from the controller unless required by Union or Member State law.

## Applicability

- All processor engagements
- Processing activity authorization
- Scope of processing definitions
- Processor operational guidelines
- Change management for processing activities

## Examples (Non-Normative)

### Undocumented Processing Authority

```yaml
processor_instructions:
  documented: false
  scope_defined: false
  purposes_specified: false
  processing_operations: "Processor discretion"
  changes_authorized: null
  legal_basis: "Assumed from contract"
```

### Processor Exceeding Instructions

```
Processing Scenario:
  - Processor: Marketing Platform
  - Documented Instructions: "Send monthly newsletter"
  - Actual Processing:
    - Daily promotional emails
    - Customer profiling for targeting
    - Data sharing with advertising partners
  - Controller Authorization: None for additional processing
  - Notification of Excess: Not provided
```

## GDPR Context (Informative)

- **Art. 29**: Processor shall process only on documented instructions from controller
- **Art. 28.3(a)**: Contract must specify that processor processes only on instructions
- **Art. 29**: Processor must inform controller if instructions violate GDPR

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-DUE-DILIGENCE-006`
- `CSE-GDPR-PRINCIPLES-NO-LAWFULNESS-001`
