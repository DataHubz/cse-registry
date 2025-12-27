# CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005

**Processor Contract Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTRACT-005` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Processing by a processor is not governed by a contract or legal act binding the processor to the controller as required by Article 28.3.

The contract must specify subject matter, duration, nature, purpose of processing, type of personal data, categories of data subjects, and controller/processor obligations.

## Applicability

- Cloud service providers
- SaaS vendors
- Data analytics services
- Marketing platforms
- Any third-party processing personal data on behalf of controller

## Examples (Non-Normative)

### Missing Processor Agreement

```yaml
processor_relationship:
  vendor: "Cloud Analytics Platform"
  processing_activity: "Customer behavior analysis"
  personal_data_types: ["email", "browsing_history", "purchases"]
  contract:
    exists: false
    gdpr_clauses: null
    data_processing_addendum: "Not signed"
```

### Inadequate Contract Terms

```
Vendor Agreement:
  - Service: Email Marketing Platform
  - Contract Type: Standard ToS only
  - Missing Clauses:
    - Processing instructions
    - Data security obligations
    - Sub-processor provisions
    - Data subject rights assistance
    - Deletion/return of data
    - Audit rights
```

## GDPR Context (Informative)

- **Art. 28.3**: Processing must be governed by contract or legal act
- **Art. 28.9**: Contract must be in writing, including electronic format
- **Art. 28.3(a-h)**: Specifies mandatory contractual clauses

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-DUE-DILIGENCE-006`
- `CSE-GDPR-CONTROLLER-NO-SUB-PROCESSOR-CONTROLS-011`
- `CSE-GDPR-CONTROLLER-NO-DATA-RETURN-PROCESS-012`
