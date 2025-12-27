# CSE-GDPR-CONTROLLER-NO-PROCESSOR-DUE-DILIGENCE-006

**Processor Due Diligence Not Performed**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-PROCESSOR-DUE-DILIGENCE-006` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller has not conducted due diligence to ensure the processor provides sufficient guarantees to implement appropriate technical and organizational measures as required by Article 28.1.

This includes failure to assess processor capabilities before engagement.

## Applicability

- Vendor selection and procurement
- Third-party risk assessments
- Processor security evaluations
- Ongoing vendor monitoring
- Service provider reviews

## Examples (Non-Normative)

### No Pre-Engagement Assessment

```yaml
processor_selection:
  vendor: "New Cloud Storage Provider"
  due_diligence_performed: false
  security_assessment: null
  compliance_verification: null
  certifications_reviewed: false
  references_checked: false
  contract_signed: true
```

### Inadequate Evaluation

```
Vendor Onboarding:
  - Processor: Customer Support Platform
  - Selection Criteria: "Lowest price"
  - Security Review: Not conducted
  - GDPR Compliance: Not verified
  - SOC 2 Report: Not requested
  - Data Location: Unknown
  - Encryption: Not assessed
```

## GDPR Context (Informative)

- **Art. 28.1**: Controller shall only use processors providing sufficient guarantees
- **Art. 32**: Processor must implement appropriate security measures
- **Art. 28.5**: Processor obligations must be similar to those in Article 28

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-CONTROLLER-NO-SUB-PROCESSOR-CONTROLS-011`
- `CSE-GDPR-CONTROLLER-NO-COMPLIANCE-MEASURES-001`
