# CSE-ISO27001-PHYSICAL-NO-CLEAR-DESK-POLICY-007

**No Clear Desk and Clear Screen Policy**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-CLEAR-DESK-POLICY-007` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Clear desk and clear screen rules for papers and removable storage media are not defined and enforced. This indicates a lack of policies to prevent unauthorized access to sensitive information left visible on desks or computer screens when personnel are away from their workstations.

## Applicability

- Office environments with sensitive information
- Shared workspaces and open office layouts
- Areas accessible to visitors or contractors
- Facilities processing regulated data (PII, PHI, financial)
- Hot-desking and flexible workspace arrangements
- Remote work environments
- Customer service and support areas

## Examples (Non-Normative)

### No Clear Desk Policy

```yaml
workspace_policy:
  clear_desk:
    policy_defined: false
    requirements:
      secure_documents_when_unattended: null
      lock_drawers_and_cabinets: null
      remove_sensitive_materials: null
    enforcement:
      audits_conducted: false
      violations_tracked: false
```

### Missing Screen Lock Requirements

```yaml
workstation_security:
  clear_screen:
    policy_defined: false
    requirements:
      auto_lock_timeout: null
      manual_lock_when_away: null
      privacy_screens: null
    technical_controls:
      auto_lock_enabled: false
      timeout_configured: false
  training:
    provided: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.7**: Clear desk rules for papers and removable storage media and clear screen rules for information processing facilities should be defined and appropriately enforced. This helps prevent unauthorized access to information and reduces the risk of loss, damage, or compromise of information.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-MEDIA-CONTROLS-010`
- `CSE-ISO27001-PHYSICAL-NO-OFFSITE-SECURITY-009`
- `CSE-ISO27001-PHYSICAL-NO-SECURE-AREA-RULES-006`
