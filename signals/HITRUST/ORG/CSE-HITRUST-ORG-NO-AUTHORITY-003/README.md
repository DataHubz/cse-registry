# CSE-HITRUST-ORG-NO-AUTHORITY-003

**Security Authority Not Established**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-HITRUST-ORG-NO-AUTHORITY-003`  |
| Domain          | HITRUST                             |
| Category        | ORG                                 |
| Control Domain  | 05 - Organization of Information Security |
| Control Ref     | 05.c                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

No designated authority has been established for making security decisions within the organization.

This signal indicates that the organization lacks a formally assigned individual or group with the authority to make binding decisions regarding information security matters, including policy interpretation, risk acceptance, security exceptions, and incident response actions.

## Applicability

This signal applies to:

- Security governance structures
- Decision-making frameworks and processes
- Security policy documentation
- Risk management programs
- Exception and waiver processes
- Incident response procedures
- Change advisory boards
- Executive leadership documentation

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Security Policy Without Decision Authority

```markdown
# Information Security Policy v1.0

## 1. Purpose
This policy establishes security requirements for all systems.

## 2. Scope
All employees, contractors, and systems.

## 3. Requirements
- Systems must use encryption
- Access must be logged
- Passwords must be complex

<!-- No designation of who has authority to interpret or grant exceptions -->
```

### Risk Register Without Acceptance Authority

```yaml
# risk_register.yaml
risks:
  - id: RISK-001
    description: Legacy system cannot support MFA
    likelihood: Medium
    impact: High
    mitigation: Implement compensating controls
    status: Open
    # No field for who can accept this risk
```

### Exception Request Without Approver

```json
{
  "exception_request": {
    "id": "EXC-2024-001",
    "requested_by": "dev-team@example.com",
    "requirement": "Encryption for database X",
    "justification": "Performance impact",
    "requested_date": "2024-01-15",
    "approver": null,
    "approval_status": "pending"
  }
}
```

### Incident Response Plan Without Decision Chain

```python
# incident_response.py
class IncidentResponse:
    def handle_incident(self, incident):
        """Handle security incident"""
        self.detect_incident(incident)
        self.analyze_impact(incident)
        self.contain_threat(incident)
        # No defined authority for critical decisions:
        # - Who authorizes system shutdown?
        # - Who decides to notify customers?
        # - Who approves recovery actions?
```

### Change Control Without Security Authority

```hcl
# change_management.tf
resource "null_resource" "change_process" {
  provisioner "local-exec" {
    command = <<-EOT
      # Change approval process
      echo "Technical review: Required"
      echo "Manager approval: Required"
      echo "Security authority: Not defined"
    EOT
  }
}
```

## What This Signal Does NOT Assert

- Whether security decisions are being made
- The quality or appropriateness of security decisions
- Whether delegation of authority exists
- The organizational level of decision-making authority
- Compliance or non-compliance with HITRUST CSF or any framework
- Required governance structure or hierarchy

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control:

- **05.c - Contact with Authorities**: Appropriate contacts with relevant authorities should be maintained

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ORG-NO-ROLES-001` — Security roles not formally defined
- `CSE-HITRUST-ORG-NO-SEGREGATION-002` — No segregation between security and operational functions
- `CSE-CMMC-RISK-NO-ASSESSMENT-001` — No risk assessment process

## Notes

Detection of this signal typically involves:

- Review of security governance documentation
- Analysis of policy and procedure documents
- Examination of decision-making frameworks
- Assessment of exception and waiver processes
- Review of incident response procedures
- Inspection of change management processes
- Analysis of risk management documentation

The presence of this signal indicates a condition that warrants review in the context of security governance and decision-making authority requirements.
