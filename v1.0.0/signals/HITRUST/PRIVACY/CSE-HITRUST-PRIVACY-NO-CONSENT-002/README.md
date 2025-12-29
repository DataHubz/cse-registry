# CSE-HITRUST-PRIVACY-NO-CONSENT-002

**Consent Management Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-CONSENT-002` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal consent management process has not been established for obtaining, recording, and managing individual consent for the collection, use, and disclosure of personal or protected health information (PHI).

This signal indicates the absence of mechanisms to obtain explicit consent from individuals before collecting or using their information for purposes beyond treatment, payment, and healthcare operations. Consent management includes capturing consent decisions, maintaining records of consent, enabling consent withdrawal, and ensuring consent is informed and voluntary.

## Applicability

- Healthcare organizations subject to HIPAA
- Research institutions conducting health studies
- Organizations pursuing HITRUST certification
- Digital health and wellness applications
- Genetic testing and personalized medicine providers
- Healthcare marketing and analytics platforms
- Third-party health information processors
- Telehealth and remote monitoring services

## Examples (Non-Normative)

### Patient Registration Without Consent Capture

```yaml
# Patient registration system lacking consent management
patient_registration:
  demographics: required
  insurance: required
  emergency_contact: required
  consent_management:
    enabled: false
    consent_types: []
    withdrawal_process: null
```

### Research Platform Without Consent Tracking

```json
{
  "study_enrollment": {
    "participant_id": "P12345",
    "enrollment_date": "2024-01-15",
    "consent_obtained": null,
    "consent_document_version": null,
    "consent_signature": null
  }
}
```

### Marketing Communication Without Opt-In

```python
# Email marketing without consent verification
def send_health_tips(patient_email):
    # No consent check before sending marketing
    send_email(
        to=patient_email,
        subject="Health Tips",
        content=wellness_content
    )
```

### Data Sharing Configuration Missing Consent

```hcl
# Data sharing with third parties without consent verification
resource "data_sharing_agreement" "analytics" {
  partner = "analytics_vendor"
  data_types = ["demographics", "diagnosis", "treatments"]
  consent_required = false  # No consent check
  opt_out_available = false
}
```

## What This Signal Does NOT Assert

- Whether consent is obtained through other informal means
- The legal basis for processing under applicable regulations
- Whether the organization is compliant or non-compliant with HITRUST
- The specific consent requirements for particular use cases
- Whether implied consent or authorization exists

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for consent management that:
- Obtains explicit consent for information collection and use
- Records and maintains consent decisions
- Provides mechanisms for consent withdrawal
- Ensures consent is informed, specific, and freely given
- Respects individual choices about information use
- Maintains audit trails of consent activities

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-NOTICE-001` - Privacy notice missing
- `CSE-HITRUST-PRIVACY-NO-ACCESS-RIGHTS-004` - Individual access rights missing
- `CSE-HIPAA-PRIVACY-NO-AUTHORIZATION-001` - HIPAA authorization requirements (if defined)
- `CSE-GDPR-CONSENT-NO-MANAGEMENT-001` - GDPR consent requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of patient registration and enrollment systems
- Examination of consent capture workflows and forms
- Analysis of consent storage and retrieval mechanisms
- Verification of consent withdrawal processes
- Assessment of consent granularity and specificity
- Review of consent audit trails and documentation

The presence of this signal indicates a significant gap in privacy controls that should be addressed to ensure individual autonomy and regulatory compliance.
