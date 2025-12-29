# CSE-HITRUST-PRIVACY-NO-COMPLAINTS-007

**Complaints Process Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-PRIVACY-NO-COMPLAINTS-007` |
| Domain | HITRUST |
| Category | PRIVACY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A formal process to receive, investigate, and respond to privacy complaints from individuals has not been established or documented.

This signal indicates the absence of mechanisms that enable individuals to file complaints about privacy practices, potential privacy violations, or concerns about how their personal or protected health information (PHI) is being handled. A complaints process is essential for accountability, continuous improvement, and demonstrating responsiveness to individual privacy concerns.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Patient advocacy programs
- Health information exchanges (HIEs)
- Healthcare customer service operations
- Privacy and compliance offices
- Healthcare SaaS providers

## Examples (Non-Normative)

### Website Without Privacy Complaint Information

```html
<!-- Privacy policy without complaints process -->
<div class="privacy-policy">
  <h2>Privacy Policy</h2>
  <p>We protect your information...</p>
  <p>Contact us: info@example.com</p>
  <!-- No privacy complaint submission process described -->
</div>
```

### Privacy Office Configuration Missing Complaints

```yaml
# Privacy office operations lacking complaints management
privacy_office:
  staff_roles: ["privacy_officer", "compliance_analyst"]
  responsibilities: ["policy_development", "training", "audits"]
  complaints_management:
    enabled: false
    submission_channels: []
    tracking_system: null
    investigation_process: null
```

### Incident Response Without Privacy Complaints

```python
# Incident management system without privacy complaint handling
class IncidentManagement:
    def create_incident(self, incident_type, details):
        if incident_type in ['security_breach', 'system_outage']:
            return self.log_incident(details)
        # No handling for privacy complaints
        return None
```

### Patient Portal Without Complaint Feature

```json
{
  "patient_portal_features": {
    "contact_options": {
      "general_inquiry": "available",
      "billing_question": "available",
      "privacy_complaint": null,
      "complaint_tracking": null
    }
  }
}
```

## What This Signal Does NOT Assert

- Whether informal complaint channels exist
- The volume or frequency of privacy complaints
- Whether the organization is compliant or non-compliant with HITRUST
- The effectiveness of complaint investigation processes
- Whether complaints are actually occurring

## HITRUST Context (Informative)

- **Control Domain**: 13 - Privacy Practices
- **Control Reference**: 13.g
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for complaints processes that:
- Establish clear channels for submitting privacy complaints
- Provide multiple methods for complaint submission
- Implement complaint tracking and case management
- Define investigation and resolution procedures
- Ensure timely responses to complainants
- Prohibit retaliation against individuals who file complaints
- Maintain records of complaints and resolutions

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-PRIVACY-NO-NOTICE-001` - Privacy notice missing
- `CSE-HITRUST-INCIDENT-NO-REPORTING-001` - Incident reporting missing (if defined)
- `CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004` - Privacy compliance controls missing
- `CSE-HIPAA-PRIVACY-NO-COMPLAINTS-001` - HIPAA complaints requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of privacy policy and notice documents
- Examination of complaint submission channels and forms
- Analysis of complaint tracking and case management systems
- Verification of investigation and resolution procedures
- Assessment of complaint response timeframes and documentation
- Review of privacy office roles and responsibilities

The presence of this signal indicates a privacy accountability and responsiveness gap that should be addressed to ensure individual rights protection and organizational transparency.
