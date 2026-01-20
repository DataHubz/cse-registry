# CSE-HITRUST-ORG-NO-SPECIALIST-004

**Security Specialist Contact Missing**

## Signal Overview

| Field           | Value                               |
|-----------------|-------------------------------------|
| Identifier      | `CSE-HITRUST-ORG-NO-SPECIALIST-004` |
| Domain          | HITRUST                             |
| Category        | ORG                                 |
| Control Domain  | 05 - Organization of Information Security |
| Control Ref     | 05.d                                |
| Status          | Active                              |
| Introduced In   | 1.0.0                               |

## Description

The organization has no documented access to security specialists or professional security groups.

This signal indicates that the organization has not established or documented relationships with information security specialists, consultants, professional organizations, or special interest groups that can provide expertise, guidance, and support for security matters.

## Applicability

This signal applies to:

- Security program documentation
- Vendor and consultant relationships
- Professional membership records
- Incident response plans
- Security training and awareness programs
- Third-party service agreements
- Knowledge management systems
- Emergency contact lists

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Incident Response Plan Without External Contacts

```yaml
# incident_response_plan.yaml
contacts:
  internal:
    - name: IT Manager
      role: Incident Commander
      phone: "+1-555-0100"
    - name: Operations Lead
      role: Technical Lead
      phone: "+1-555-0101"
  external: []  # No security specialists, forensics firms, or consultants
```

### No Professional Memberships

```json
{
  "organization_profile": {
    "name": "Example Corp",
    "security_team": {
      "staff_count": 2,
      "certifications": ["None"],
      "professional_memberships": [],
      "security_consultants": [],
      "retainer_agreements": []
    }
  }
}
```

### Security Policy Without Expert Resources

```markdown
# Information Security Policy

## 8. Support and Resources

### Internal Resources:
- IT Help Desk: helpdesk@example.com
- System Administrators: sysadmin@example.com

### External Resources:
<!-- No security consultants, forensics providers, or expert contacts -->
```

### Training Program Without External Expertise

```python
# security_training.py
class SecurityTrainingProgram:
    def __init__(self):
        self.trainers = [
            {"name": "Internal IT Staff", "expertise": "General IT"},
        ]
        # No external security specialists or training providers

    def deliver_security_awareness(self):
        """Deliver security training using only internal resources"""
        return self.internal_training_only()
```

### Vendor Management Without Security Consultants

```hcl
# vendor_relationships.tf
locals {
  vendors = {
    cloud_provider     = "AWS"
    backup_service     = "Backup Co"
    managed_services   = "MSP Inc"
    # No security consultants, pen testers, or security auditors
  }
}
```

## What This Signal Does NOT Assert

- The competency of internal security staff
- Whether external expertise is required
- The organization's security maturity level
- Whether informal relationships with specialists exist
- Compliance or non-compliance with HITRUST CSF or any framework
- Required security staffing or budget levels

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control:

- **05.d - Contact with Special Interest Groups**: The organization should maintain contact with special interest groups or other specialist security forums and professional associations

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ORG-NO-EXTERNAL-CONTACT-005` — No process for engaging with external authorities
- `CSE-HITRUST-ORG-NO-ROLES-001` — Security roles not formally defined
- `CSE-CMMC-AWARENESS-NO-ROLE-BASED-TRAINING-003` — No role-based security training

## Notes

Detection of this signal typically involves:

- Review of security program documentation
- Analysis of vendor and consultant contracts
- Examination of professional membership records
- Assessment of incident response procedures
- Review of training and development programs
- Inspection of emergency contact lists
- Analysis of knowledge management resources
- Evaluation of third-party service agreements

The presence of this signal indicates a condition that warrants review in the context of access to specialized security expertise and professional resources.
