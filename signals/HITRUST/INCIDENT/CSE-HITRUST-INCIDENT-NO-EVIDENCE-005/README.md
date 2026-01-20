# CSE-HITRUST-INCIDENT-NO-EVIDENCE-005

**Evidence Collection Missing**

## Signal Overview

| Field           | Value                                             |
|-----------------|---------------------------------------------------|
| Identifier      | `CSE-HITRUST-INCIDENT-NO-EVIDENCE-005`            |
| Domain          | HITRUST                                           |
| Category        | INCIDENT                                          |
| Control Domain  | 11 - Information Security Incident Management     |
| Reference       | 11.e                                              |
| Status          | Active                                            |
| Introduced In   | 1.0.0                                             |

## Description

Procedures have not been established for the identification, collection, acquisition, and preservation of information that can serve as evidence during incident investigation and potential legal proceedings.

This signal indicates that an organization has not implemented forensically sound evidence handling procedures necessary for incident analysis, investigation, and potential legal or regulatory actions.

## Applicability

This signal applies to:

- Organizations subject to legal discovery requirements
- Healthcare organizations investigating PHI breaches
- Financial institutions handling fraud investigations
- Law enforcement and government agencies
- Organizations with cyber insurance requirements
- Companies facing potential litigation
- Entities cooperating with regulatory investigations
- Organizations with internal audit requirements

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Evidence Procedures

```yaml
# Absence of documented evidence handling procedures
# No procedures for:
# - Evidence identification and collection
# - Chain of custody maintenance
# - Evidence preservation and storage
# - Forensic imaging and analysis
# - Evidence documentation and labeling
```

### Undocumented Forensic Process

```text
Organization lacks documentation showing:
- How to identify relevant evidence sources
- Procedures for forensically sound collection
- Chain of custody requirements
- Evidence storage and retention policies
- Access controls for evidence
- Legal hold procedures
```

### No Evidence Collection Framework

```markdown
# Missing procedures for:
- Initial evidence preservation during incident response
- Forensic acquisition of systems and data
- Documentation of evidence handling steps
- Coordination with legal counsel
- Third-party forensic examiner engagement
- Evidence transfer to law enforcement
```

### Absence of Evidence Handling

```json
{
  "incident_id": "INC-2024-001",
  "evidence_collected": false,
  "chain_of_custody": null,
  "forensic_imaging": "not_performed",
  "evidence_location": "unknown",
  "retention_period": "not_defined",
  "legal_hold_applied": false
}
```

## What This Signal Does NOT Assert

- Whether evidence is being collected informally
- The forensic soundness of any existing practices
- Whether forensic tools are available
- The admissibility of any collected evidence
- Whether legal counsel is involved
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **11.e Collection of Evidence**: The organization shall establish procedures for the identification, collection, acquisition, and preservation of information, which can serve as evidence

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-INCIDENT-NO-RESPONSE-003` — Incident response missing
- `CSE-HITRUST-INCIDENT-NO-PROCEDURES-001` — Incident procedures missing
- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified

## Notes

Detection of this signal typically involves:

- Review of evidence collection procedures
- Examination of forensic investigation documentation
- Analysis of chain of custody processes
- Review of evidence storage and retention policies
- Inspection of forensic capability and tools
- Assessment of legal coordination procedures

The presence of this signal indicates a condition that warrants review in the context of information security incident management requirements.
