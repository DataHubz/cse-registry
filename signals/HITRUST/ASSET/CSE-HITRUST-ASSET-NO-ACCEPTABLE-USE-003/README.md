# CSE-HITRUST-ASSET-NO-ACCEPTABLE-USE-003

**Acceptable Use Policy Missing**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-HITRUST-ASSET-NO-ACCEPTABLE-USE-003`   |
| Domain          | HITRUST                                     |
| Category        | ASSET                                       |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

An organization lacks documented and enforceable rules for the acceptable use of information assets, systems, and services.

This signal indicates that users may not have clear guidance on appropriate and inappropriate uses of organizational resources, potentially leading to security risks, policy violations, and misuse of assets.

## Applicability

This signal applies to:

- Corporate workstations and laptops
- Mobile devices and tablets
- Email and messaging systems
- Internet and network access
- Cloud services and applications
- Remote access systems
- Corporate data and intellectual property
- Software and licensed applications
- Personal device use (BYOD scenarios)

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Acceptable Use Policy Document

```text
# Organization lacks formal AUP covering:
- Permitted and prohibited uses of systems
- Personal use restrictions
- Data handling requirements
- Software installation rules
- Internet browsing policies
- Email and communication guidelines
- Social media usage
- Remote work expectations
```

### No User Acknowledgment Process

```yaml
# Employee onboarding checklist
onboarding_tasks:
  - create_user_account: true
  - assign_hardware: true
  - provide_system_access: true
  - security_awareness_training: true
  # acceptable_use_acknowledgment: missing
  # policy_review_and_sign: missing
```

### Unenforced Usage Guidelines

```python
# Technical controls not aligned with policy
class SystemAccess:
    def __init__(self):
        self.internet_filtering = None  # No web filtering
        self.software_restrictions = None  # No application control
        self.usb_blocking = None  # No removable media restrictions
        self.monitoring = None  # No usage monitoring
        # No technical enforcement of acceptable use
```

### No Contractor Usage Rules

```text
# Third-party access without acceptable use terms
Contractor Portal Access:
  - VPN credentials issued
  - System access granted
  - Data access provided
  - Acceptable Use Policy: Not required
  - Usage restrictions: Undefined
  - Monitoring disclosure: None
```

## What This Signal Does NOT Assert

- Whether informal usage expectations are communicated
- The effectiveness of existing policies if present
- Whether users understand appropriate system use
- Compliance or non-compliance with HITRUST or any framework
- Required policy content or enforcement mechanisms

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **07.c - Acceptable Use of Assets**: Rules for the acceptable use of information and assets associated with information processing facilities should be identified, documented, and implemented

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ASSET-NO-OWNERSHIP-002` — Asset ownership not assigned
- `CSE-CMMC-AWARENESS-NO-SECURITY-TRAINING-001` — Security awareness training missing (if defined)
- `CSE-HITRUST-ASSET-NO-HANDLING-006` — Asset handling procedures missing

## Notes

Detection of this signal typically involves:

- Review of information security policy documentation
- Assessment of employee handbook and acceptable use sections
- Analysis of user account provisioning procedures
- Verification of policy acknowledgment tracking
- Evaluation of technical enforcement controls
- Review of contractor and third-party usage agreements

The presence of this signal indicates a condition that warrants review in the context of acceptable use policy requirements.
