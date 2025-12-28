# CSE-HITRUST-PRIVACY-NO-ACCESS-RIGHTS-004

**Individual Access Rights Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-ACCESS-RIGHTS-004` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Mechanisms to enable individuals to access, review, and obtain copies of their personal or protected health information (PHI) have not been established or implemented.

This signal indicates the absence of processes and systems that allow individuals to exercise their right to access their own information held by the organization. Individual access rights are fundamental to privacy regulations and enable individuals to verify the accuracy of their information, understand how it is being used, and maintain control over their personal data.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Patient portals and health record systems
- Health information exchanges (HIEs)
- Medical billing and claims processing
- Laboratory and diagnostic services
- Pharmacy management systems

## Examples (Non-Normative)

### Patient Portal Without Access Features

```yaml
# Patient portal configuration lacking access rights
patient_portal:
  authentication: enabled
  appointment_scheduling: enabled
  billing_view: enabled
  medical_records_access:
    enabled: false  # No access to own records
    download_capability: false
    request_process: null
```

### System Without Data Export Capability

```python
# Patient record system without export functionality
class PatientRecordSystem:
    def get_record(self, patient_id, requester):
        if requester.role == 'provider':
            return self.database.get_record(patient_id)
        # No mechanism for patient to access own records
        return None
```

### API Missing Patient Access Endpoints

```json
{
  "api_endpoints": {
    "/provider/patient-records": "enabled",
    "/admin/patient-data": "enabled",
    "/patient/my-records": null,
    "/patient/download-records": null
  }
}
```

### Request Process Not Implemented

```markdown
# Privacy documentation without access request process
## Privacy Rights
- Right to privacy notice: Provided
- Right to consent management: Implemented
- Right to access personal information: NOT IMPLEMENTED
- Request submission method: None
- Response timeframe: Undefined
```

## What This Signal Does NOT Assert

- Whether informal access request processes exist
- The timeliness or completeness of access provided
- Whether the organization is compliant or non-compliant with HITRUST
- The specific format or delivery method for access
- Whether access restrictions for specific situations are appropriate

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for individual access rights that:
- Enable individuals to access their personal information
- Provide mechanisms for reviewing and obtaining copies
- Establish reasonable timeframes for responding to requests
- Implement processes for verifying identity before access
- Support multiple formats for information delivery
- Document and track access requests

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-NOTICE-001` - Privacy notice missing
- `CSE-HITRUST-PRIVACY-NO-AMENDMENT-006` - Amendment process missing
- `CSE-HIPAA-PRIVACY-NO-ACCESS-RIGHTS-001` - HIPAA access requirements (if defined)
- `CSE-GDPR-RIGHTS-NO-ACCESS-001` - GDPR access rights requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of patient portal and self-service capabilities
- Examination of access request submission processes
- Analysis of identity verification mechanisms
- Verification of record retrieval and delivery systems
- Assessment of request tracking and response procedures
- Review of access request documentation and logs

The presence of this signal indicates a fundamental privacy rights gap that should be addressed to ensure individual empowerment and regulatory compliance.
