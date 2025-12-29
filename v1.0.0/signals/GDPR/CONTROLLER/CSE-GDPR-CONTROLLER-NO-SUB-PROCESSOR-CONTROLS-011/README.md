# CSE-GDPR-CONTROLLER-NO-SUB-PROCESSOR-CONTROLS-011

**Sub-Processor Controls Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-SUB-PROCESSOR-CONTROLS-011` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The processor has engaged sub-processors without prior authorization from the controller, or the controller lacks mechanisms to authorize and oversee sub-processors as required by Articles 28.2 and 28.4.

This includes failure to impose equivalent data protection obligations on sub-processors.

## Applicability

- Processor sub-contracting arrangements
- Cloud service provider chains
- Multi-tier processing relationships
- Vendor supply chain management
- Processing service delegation

## Examples (Non-Normative)

### Unauthorized Sub-Processing

```yaml
sub_processor_management:
  processor: "Primary Cloud Provider"
  sub_processors:
    - name: "Backup Service Inc"
      authorization: "Not obtained"
      notification: false
      contract_terms: null
    - name: "Analytics Platform"
      authorization: "General consent only"
      specific_approval: false
```

### Missing Sub-Processor Obligations

```
Processing Chain:
  - Controller: E-commerce Company
  - Processor: Payment Platform
  - Sub-Processor: Fraud Detection Service
  - Authorization: General approval only
  - Contract with Sub-Processor: Missing GDPR clauses
  - Liability: Unclear
  - Monitoring: None
```

## GDPR Context (Informative)

- **Art. 28.2**: Processor shall not engage sub-processor without prior authorization
- **Art. 28.4**: Same data protection obligations must apply to sub-processor
- **Art. 28.2**: Controller may object to changes in sub-processors

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005`
- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-DUE-DILIGENCE-006`
- `CSE-GDPR-CONTROLLER-NO-JOINT-CONTROLLER-ARRANGEMENT-003`
