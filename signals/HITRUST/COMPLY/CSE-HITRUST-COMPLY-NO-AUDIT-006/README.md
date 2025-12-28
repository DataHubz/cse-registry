# CSE-HITRUST-COMPLY-NO-AUDIT-006

**Compliance Audit Not Conducted**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-HITRUST-COMPLY-NO-AUDIT-006`       |
| Domain          | HITRUST                                 |
| Category        | COMPLY                                  |
| Control Domain  | 06 - Compliance                         |
| Reference       | 06.f                                    |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

Operating procedures and controls have not been regularly reviewed for compliance with the organization's security policies and standards.

This signal indicates that an organization lacks a systematic process to audit, assess, and verify that operational security controls and procedures are being followed in accordance with documented policies, standards, and compliance requirements.

## Applicability

This signal applies to:

- Security operations and incident response procedures
- Access control and identity management processes
- Change management and configuration control procedures
- Backup and recovery operations
- Patch management and vulnerability remediation processes
- Security monitoring and log management activities
- Physical security and facility access procedures
- Vendor and third-party security management
- Data handling and classification procedures

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Compliance Audit Program

```yaml
# Absence of regular compliance audits
audit_program:
  compliance_audits:
    scheduled: false
    frequency: "not_defined"
    scope: "not_documented"
    last_audit_date: null
    findings_tracked: false
    remediation_verified: false
```

### No Operational Control Review

```json
{
  "security_control": "access_management",
  "documented_procedure": "exists",
  "compliance_review": {
    "conducted": false,
    "last_review_date": null,
    "reviewer": "not_assigned",
    "findings": [],
    "corrective_actions": "none"
  }
}
```

### Unverified Policy Adherence

```markdown
# Missing evidence of compliance verification:
- Access control policy adherence testing
- Incident response procedure drills
- Backup and recovery verification tests
- Security awareness training completion
- Vendor security assessment reviews
- Physical security control inspections
- Data handling procedure compliance checks
- Change management process audits
```

### No Audit Trail of Reviews

```python
# Security procedure without compliance verification
class IncidentResponse:
    def handle_incident(self, incident):
        # Procedure exists but no audit of:
        # - Whether procedure is followed
        # - Timeliness of response
        # - Documentation completeness
        # - Escalation path adherence
        # - Post-incident review completion
        self.execute_response(incident)
```

## What This Signal Does NOT Assert

- Whether security policies and procedures exist
- The quality or completeness of documentation
- Whether controls are effective when used
- Compliance or non-compliance with specific standards
- The existence of internal audit functions
- Required remediation actions

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **06.f Compliance Audit**: Operating procedures and controls shall be regularly reviewed for compliance with the organization's security policies and standards

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-COMPLY-NO-TECHNICAL-COMPLIANCE-005` — Technical compliance not checked
- `CSE-CMMC-ASSESSMENT-NO-PERIODIC-REVIEW-002` — Periodic security reviews not conducted (if defined)
- `CSE-CMMC-AUDIT-NO-REVIEW-004` — Audit logs not reviewed (if defined)
- `CSE-HITRUST-COMPLY-NO-LEGAL-IDENTIFICATION-001` — Legal requirements not identified

## Notes

Detection of this signal typically involves:

- Review of internal audit schedules and reports
- Analysis of compliance assessment documentation
- Examination of control testing and validation records
- Assessment of audit finding tracking and remediation
- Review of management attestations and certifications
- Inspection of independent assessment reports
- Evaluation of continuous compliance monitoring programs
- Assessment of audit committee or governance oversight

The presence of this signal indicates a condition that warrants review in the context of compliance audit and operational control verification requirements.
