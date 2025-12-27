# CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008

**Controller Processing Records Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller has not maintained records of processing activities under its responsibility as required by Article 30.1.

Records must include controller and representative details, processing purposes, data subject and personal data categories, recipients, transfers, retention periods, and security measures.

## Applicability

- All processing activities by controllers
- Record of Processing Activities (ROPA)
- Data inventory and mapping
- Compliance documentation
- Supervisory authority requests

## Examples (Non-Normative)

### Missing Processing Records

```yaml
processing_records:
  exists: false
  last_updated: null
  activities_documented: 0
  controller_details: "Not recorded"
  purposes: []
  data_categories: "Not inventoried"
  recipients: "Unknown"
  retention_periods: "Not specified"
```

### Incomplete ROPA

```
Record of Processing Activities:
  - Activity: Customer Database
    - Purposes: Documented
    - Data Categories: Listed
    - Recipients: Missing
    - Transfers: Not documented
    - Retention: "As long as needed" (not specific)
    - Security Measures: Not described
  - Activity: Marketing Analytics
    - Status: Not documented at all
```

## GDPR Context (Informative)

- **Art. 30.1**: Each controller shall maintain record of processing activities
- **Art. 30.1(a-g)**: Specifies mandatory record contents
- **Art. 30.4**: Records shall be in writing, including electronic format
- **Art. 30.5**: Records must be available to supervisory authority

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-POLICY-DOCUMENTATION-002`
- `CSE-GDPR-CONTROLLER-NO-COMPLIANCE-MEASURES-001`
- `CSE-GDPR-PRINCIPLES-NO-ACCOUNTABILITY-009`
