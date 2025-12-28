# CSE-HITRUST-PRIVACY-NO-AMENDMENT-006

**Amendment Process Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-AMENDMENT-006` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal process to enable individuals to request amendments or corrections to their personal or protected health information (PHI) has not been established or documented.

This signal indicates the absence of procedures and systems that allow individuals to request changes to inaccurate, incomplete, or outdated information held by the organization. The right to amendment is essential for data accuracy and individual autonomy, enabling individuals to correct errors that could impact their care, coverage, or other important decisions.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Electronic health record (EHR) systems
- Patient portal platforms
- Medical billing and claims systems
- Health information exchanges (HIEs)
- Laboratory information systems

## Examples (Non-Normative)

### Patient Portal Without Amendment Feature

```yaml
# Patient portal configuration lacking amendment capabilities
patient_portal:
  view_records: enabled
  download_records: enabled
  request_amendment:
    enabled: false
    submission_form: null
    tracking_system: null
    response_process: null
```

### System Without Correction Workflow

```python
# Patient record system without amendment mechanism
class PatientRecord:
    def update_record(self, record_id, updates, requester):
        if requester.role == 'provider':
            return self.database.update(record_id, updates)
        # No process for patient-requested amendments
        raise PermissionError("Patients cannot request amendments")
```

### Database Without Amendment Tracking

```sql
-- Patient demographics table without amendment audit
CREATE TABLE patient_info (
    patient_id INT PRIMARY KEY,
    name VARCHAR(100),
    date_of_birth DATE,
    address VARCHAR(200)
    -- No amendment_requested, amendment_status columns
    -- No amendment_history table
);
```

### API Missing Amendment Endpoints

```json
{
  "patient_api": {
    "endpoints": {
      "/patient/view-record": "available",
      "/patient/request-amendment": null,
      "/patient/track-amendment": null,
      "/provider/review-amendment-request": null
    }
  }
}
```

## What This Signal Does NOT Assert

- Whether informal amendment request processes exist
- The validity of reasons for accepting or denying amendments
- Whether the organization is compliant or non-compliant with HITRUST
- The specific timeframes for processing amendment requests
- Whether data correction mechanisms exist for providers

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.f
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for amendment processes that:
- Enable individuals to request amendments to their information
- Establish procedures for reviewing and responding to requests
- Provide mechanisms for accepting or denying requests with reasons
- Maintain records of amendment requests and decisions
- Notify relevant parties when amendments are made
- Include statement of disagreement if amendment is denied

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-ACCESS-RIGHTS-004` - Individual access rights missing
- `CSE-HITRUST-PRIVACY-NO-NOTICE-001` - Privacy notice missing
- `CSE-HIPAA-PRIVACY-NO-AMENDMENT-001` - HIPAA amendment requirements (if defined)
- `CSE-GDPR-RIGHTS-NO-RECTIFICATION-001` - GDPR rectification rights (if defined)

## Notes

Detection of this signal typically involves:

- Review of patient portal amendment request features
- Examination of amendment request submission processes
- Analysis of amendment review and approval workflows
- Verification of amendment tracking and status systems
- Assessment of notification processes for amendments
- Review of amendment request documentation and logs

The presence of this signal indicates a data quality and privacy rights gap that should be addressed to ensure information accuracy and individual empowerment.
