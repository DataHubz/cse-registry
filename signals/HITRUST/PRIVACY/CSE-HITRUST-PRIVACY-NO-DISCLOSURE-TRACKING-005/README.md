# CSE-HITRUST-PRIVACY-NO-DISCLOSURE-TRACKING-005

**Disclosure Tracking Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-DISCLOSURE-TRACKING-005` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems and processes to track and record disclosures of personal or protected health information (PHI) to third parties have not been established or maintained.

This signal indicates the absence of disclosure tracking mechanisms that record when, to whom, and for what purpose personal information is shared outside the organization. Disclosure tracking is essential for accountability, enabling organizations to provide individuals with an accounting of disclosures and ensuring compliance with privacy regulations.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Health information exchanges (HIEs)
- Research institutions sharing health data
- Third-party service providers
- Insurance claims processors
- Public health reporting entities

## Examples (Non-Normative)

### Data Sharing Without Logging

```python
# API sharing patient data without disclosure tracking
def share_with_partner(patient_data, partner_id):
    response = partner_api.send_data(patient_data)
    # No logging of disclosure
    return response.status
```

### Integration Without Audit Trail

```yaml
# Third-party integration configuration lacking disclosure tracking
integrations:
  - name: "laboratory_system"
    data_shared: ["demographics", "orders", "results"]
    disclosure_logging:
      enabled: false
      retention: null
      accounting_available: false
```

### Data Export Without Recording

```sql
-- Data export query without disclosure tracking
SELECT patient_id, name, diagnosis, treatment
FROM patient_records
WHERE condition = 'research_eligible'
-- No INSERT into disclosure_log table
```

### External API Calls Untracked

```json
{
  "external_services": {
    "billing_vendor": {
      "endpoint": "https://billing.example.com/api",
      "data_sent": ["patient_info", "charges"],
      "disclosure_tracking": null,
      "audit_log": false
    }
  }
}
```

## What This Signal Does NOT Assert

- Whether disclosures are legally prohibited or improper
- The frequency or volume of information sharing
- Whether the organization is compliant or non-compliant with HITRUST
- The specific retention period for disclosure records
- Whether manual disclosure logs exist

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.e
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for disclosure tracking that:
- Records all disclosures of personal information
- Captures recipient, date, and purpose of disclosure
- Maintains disclosure records for required retention periods
- Enables accounting of disclosures to individuals upon request
- Supports disclosure reporting and analysis
- Integrates with data sharing and transfer systems

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-USE-LIMITATION-003` - Use limitation missing
- `CSE-HITRUST-OPS-NO-LOGGING-007` - Logging and monitoring controls missing
- `CSE-HITRUST-PRIVACY-NO-ACCESS-RIGHTS-004` - Individual access rights missing
- `CSE-HIPAA-PRIVACY-NO-ACCOUNTING-001` - HIPAA accounting of disclosures (if defined)

## Notes

Detection of this signal typically involves:

- Review of data sharing and integration architectures
- Examination of disclosure logging mechanisms
- Analysis of audit trails for external data transfers
- Verification of disclosure record retention
- Assessment of accounting of disclosures capabilities
- Review of API and data export monitoring

The presence of this signal indicates a privacy accountability gap that should be addressed to ensure transparency and regulatory compliance.
