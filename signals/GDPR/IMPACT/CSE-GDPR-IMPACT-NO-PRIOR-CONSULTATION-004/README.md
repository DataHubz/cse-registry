# CSE-GDPR-IMPACT-NO-PRIOR-CONSULTATION-004

**Prior Consultation Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-IMPACT-NO-PRIOR-CONSULTATION-004` |
| Domain | GDPR |
| Category | IMPACT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Controller has not consulted the supervisory authority prior to processing when DPIA indicates high risk that cannot be mitigated.

Article 36 requires prior consultation when DPIA shows residual high risk.

## Applicability

- DPIA indicates high risk remains after mitigation measures
- Processing involves new technology or innovative approaches
- Controller intends to proceed despite high residual risk
- No alternative processing method available

## Examples (Non-Normative)

### No Prior Consultation Despite High Risk

```yaml
prior_consultation:
  dpia_completed: true
  residual_risk_level: "high"
  mitigation_sufficient: false
  supervisory_authority_consulted: false
  processing_commenced: true
```

### High Risk Processing Without Consultation

```
DPIA Results - Biometric Authentication System:
  Initial Risk: Critical
  Mitigation Measures: Implemented
  Residual Risk: High
  Supervisory Authority Consultation: No
  Processing Status: Live in production
  Consultation Required: Yes
```

## GDPR Context (Informative)

- **Art. 36.1**: Controller shall consult supervisory authority prior to processing where DPIA indicates high risk in absence of mitigation
- **Art. 36.2**: Controller shall provide supervisory authority with DPIA, purposes, safeguards, and other relevant information
- **Art. 36.3**: Supervisory authority shall provide written advice within 8 weeks (extendable to 14 weeks)

## Related Signals

- `CSE-GDPR-IMPACT-NO-DPIA-DOCUMENTATION-002`
- `CSE-GDPR-IMPACT-NO-DPIA-REVIEW-003`
