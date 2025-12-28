# CSE-HITRUST-ORG-NO-EXTERNAL-CONTACT-005

**External Contact Process Missing**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-HITRUST-ORG-NO-EXTERNAL-CONTACT-005` |
| Domain          | HITRUST                             |
| Category        | ORG                                 |
| Control Domain  | 05 - Organization of Information Security |
| Control Ref     | 05.e                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

No documented process exists for engaging with external authorities or special interest groups on security matters.

This signal indicates that the organization has not established formal procedures for maintaining relationships with, reporting to, or coordinating with external entities such as law enforcement, regulatory authorities, industry groups, information sharing organizations, or security response teams (e.g., CERT/CC, ISACs).

## Applicability

This signal applies to:

- Incident response procedures
- Breach notification processes
- Regulatory compliance programs
- Information sharing agreements
- Law enforcement coordination
- Industry partnership documentation
- Security operations procedures
- Crisis management plans

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Incident Response Without External Notification

```yaml
# incident_response_procedure.yaml
phases:
  - detection:
      actions:
        - Monitor security alerts
        - Identify incidents
  - containment:
      actions:
        - Isolate affected systems
        - Preserve evidence
  - recovery:
      actions:
        - Restore systems
        - Validate security
  # No phase for external authority notification
```

### Breach Response Without Regulatory Contact

```python
# breach_response.py
class BreachResponsePlan:
    def handle_data_breach(self, breach_details):
        """Handle data breach incident"""
        self.assess_scope(breach_details)
        self.contain_breach(breach_details)
        self.notify_management(breach_details)
        # No process for:
        # - Notifying regulatory authorities
        # - Coordinating with law enforcement
        # - Engaging with ISACs or industry groups
        # - Reporting to CERT/CC if applicable
```

### Security Policy Without External Coordination

```markdown
# Security Incident Management Policy

## 5. Incident Response Process

### 5.1 Detection and Analysis
Security team monitors and analyzes security events.

### 5.2 Containment and Eradication
Security team contains and removes threats.

### 5.3 Recovery
Systems are restored to normal operations.

<!-- No section on external authority engagement -->
```

### No Regulatory Contact Documentation

```json
{
  "security_contacts": {
    "internal": {
      "security_team": "security@example.com",
      "legal_team": "legal@example.com",
      "executive_team": "exec@example.com"
    },
    "external": {
      "regulatory_authorities": [],
      "law_enforcement": [],
      "isacs": [],
      "cert_teams": []
    }
  }
}
```

### Missing Information Sharing Process

```hcl
# security_operations.tf
resource "null_resource" "threat_intelligence" {
  provisioner "local-exec" {
    command = <<-EOT
      # Threat intelligence sources
      echo "Internal logs: Enabled"
      echo "Vendor feeds: Enabled"
      echo "ISAC participation: None"
      echo "Information sharing: Not configured"
    EOT
  }
}
```

## What This Signal Does NOT Assert

- Whether external contacts have been made informally
- The organization's regulatory obligations
- Whether breach notification requirements apply
- The likelihood of needing external coordination
- Compliance or non-compliance with HITRUST CSF or any framework
- Required relationships with specific authorities

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control:

- **05.e - Independent Review of Information Security**: The organization's approach to managing information security and its implementation should be reviewed independently at planned intervals or when significant changes occur

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ORG-NO-SPECIALIST-004` — No access to security specialists
- `CSE-CMMC-INCIDENT-NO-REPORTING-003` — No incident reporting process
- `CSE-HITRUST-ORG-NO-AUTHORITY-003` — No designated authority for security decisions

## Notes

Detection of this signal typically involves:

- Review of incident response procedures
- Analysis of breach notification processes
- Examination of regulatory compliance documentation
- Assessment of information sharing agreements
- Review of law enforcement coordination procedures
- Inspection of industry partnership documentation
- Analysis of crisis management plans
- Evaluation of external contact lists

The presence of this signal indicates a condition that warrants review in the context of external stakeholder engagement and regulatory coordination requirements.
