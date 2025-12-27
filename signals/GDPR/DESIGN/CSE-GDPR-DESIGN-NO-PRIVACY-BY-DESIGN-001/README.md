# CSE-GDPR-DESIGN-NO-PRIVACY-BY-DESIGN-001

**Privacy by Design Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-DESIGN-NO-PRIVACY-BY-DESIGN-001` |
| Domain | GDPR |
| Category | DESIGN |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller has not implemented data protection by design as required by Article 25.1.

Systems and processes lack appropriate technical and organizational measures such as pseudonymization integrated at the design stage to meet GDPR requirements and protect data subject rights.

## Applicability

- System architecture and design
- Software development lifecycle
- Infrastructure planning
- Product development
- Service design

## Examples (Non-Normative)

### No Privacy in System Design

```yaml
system_design:
  privacy_requirements: null
  pseudonymization: false
  encryption_at_rest: false
  access_controls: "Basic authentication only"
  privacy_review: "Not conducted"
  threat_model: null
```

### Retrofitted Privacy Controls

```
Development Process:
  - Requirements: No privacy requirements defined
  - Design Phase: Privacy not considered
  - Implementation: Personal data stored in plain text
  - Post-Launch: Privacy controls added after complaints
  - Result: Costly remediation, privacy violations
```

## GDPR Context (Informative)

- **Art. 25.1**: Controller shall implement appropriate technical and organizational measures designed to implement data protection principles effectively
- **Art. 5.1(f)**: Personal data must be processed in a manner that ensures appropriate security

## Related Signals

- `CSE-GDPR-DESIGN-NO-PRIVACY-BY-DEFAULT-002`
- `CSE-GDPR-CONTROLLER-NO-COMPLIANCE-MEASURES-001`
- `CSE-GDPR-PRINCIPLES-NO-INTEGRITY-CONFIDENTIALITY-008`
