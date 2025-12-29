# CSE-SOC2-CC-NO-PHYSICAL-ACCESS-021

**No Physical Access Restrictions**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-PHYSICAL-ACCESS-021` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not restrict physical access to facilities and protected information assets to authorized personnel.

## Applicability

- Data centers and server rooms
- Office facilities housing IT infrastructure
- Areas containing protected information assets
- Third-party hosting facilities

## Examples (Non-Normative)

### Unrestricted Server Room Access

```yaml
finding:
  type: CSE-SOC2-CC-NO-PHYSICAL-ACCESS-021
  severity: high
  description: Server room lacks physical access controls
  evidence:
    - No badge reader on server room entrance
    - Door left propped open
    - No access logs maintained
  remediation: Install physical access control system and monitoring
```

### Missing Data Center Security

```yaml
finding:
  type: CSE-SOC2-CC-NO-PHYSICAL-ACCESS-021
  severity: high
  description: Data center accessible to unauthorized personnel
  evidence:
    - No visitor management system
    - Lack of security escort policy
    - Missing surveillance cameras
  remediation: Implement comprehensive physical security controls
```

## SOC 2 Context (Informative)

- **CC6.4**: The entity restricts physical access to facilities and protected information assets (for example, data center facilities, backup media storage, and other sensitive locations) to authorized personnel to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018`
- `CSE-SOC2-CC-NO-SECURE-DISPOSAL-022`
