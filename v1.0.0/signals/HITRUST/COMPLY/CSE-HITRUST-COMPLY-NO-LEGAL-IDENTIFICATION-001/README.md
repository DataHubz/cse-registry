# CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001

**Legal Requirements Not Identified**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001`  |
| Domain          | HITRUST                                           |
| Category        | COMPLY                                            |
| Control Domain  | 06 - Compliance                                   |
| Reference       | 06.a                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Applicable legal, statutory, regulatory, and contractual requirements and the organization's approach to meet these requirements have not been explicitly identified and documented for each information system.

This signal indicates that an organization has not established a formal process to identify, document, and maintain awareness of relevant legal and regulatory obligations that apply to its information systems and data processing activities.

## Applicability

This signal applies to:

- Healthcare organizations subject to HIPAA, HITECH, and state privacy laws
- Financial services organizations subject to GLBA, PCI DSS, SOX
- Organizations processing EU data subject to GDPR
- Government contractors subject to FedRAMP, FISMA, DFARS
- Organizations in regulated industries (pharmaceutical, utilities, telecommunications)
- Multi-jurisdictional operations with varying compliance requirements
- Cloud service providers with contractual compliance obligations
- Organizations handling personal health information (PHI) or personally identifiable information (PII)

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Legal Requirements Register

```yaml
# Absence of documented legal requirements inventory
# No file or system tracking:
# - Applicable laws and regulations
# - Jurisdictional requirements
# - Industry standards
# - Contractual obligations
# - Compliance deadlines
```

### Undocumented Compliance Obligations

```text
Organization lacks documentation showing:
- Which regulations apply to which systems
- Geographic scope of legal requirements
- Data classification and handling requirements
- Retention and destruction requirements
- Breach notification obligations
- Cross-border data transfer restrictions
```

### No Legal Review Process

```markdown
# Missing procedures for:
- Initial legal requirements identification during system design
- Periodic review of changing regulations
- Assessment of new legal obligations
- Assignment of compliance responsibilities
- Documentation of legal requirement applicability
```

### Absence of Compliance Mapping

```json
{
  "system": "patient-portal",
  "identified_requirements": [],
  "legal_review_date": null,
  "compliance_owner": "unassigned",
  "regulatory_framework": "not_documented"
}
```

## What This Signal Does NOT Assert

- Whether the organization is actually compliant with legal requirements
- The completeness or accuracy of any existing legal documentation
- Whether legal counsel has been consulted
- The existence of compliance controls or measures
- The quality or effectiveness of compliance programs
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.a Compliance with Legal and Contractual Requirements**: All relevant legislative, statutory, regulatory, and contractual requirements and the organization's approach to meet these requirements shall be explicitly identified, documented, and kept current for each information system

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-COMPLY-NO-PRIVACY-COMPLIANCE-004` — Privacy compliance not verified
- `CSE-HITRUST-COMPLY-NO-RECORDS-PROTECTION-003` — Records not protected
- `CSE-HITRUST-COMPLY-NO-AUDIT-006` — Compliance audit not conducted

## Notes

Detection of this signal typically involves:

- Review of compliance documentation repositories
- Examination of legal requirements registers
- Analysis of system security plans and documentation
- Review of governance and risk management procedures
- Inspection of change management processes for legal requirement updates
- Assessment of compliance tracking systems

The presence of this signal indicates a condition that warrants review in the context of legal and regulatory compliance requirements.
