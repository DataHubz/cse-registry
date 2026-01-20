# CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018

**No Logical Access Security Software**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not implement logical access security software, infrastructure, and architectures over protected information assets to protect them from security events.

## Applicability

- All systems processing, storing, or transmitting protected data
- Information security infrastructure
- Access control systems and authentication mechanisms
- Security monitoring and detection platforms

## Examples (Non-Normative)

### Missing Authentication System

```yaml
finding:
  type: CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018
  severity: critical
  description: Production database lacks authentication controls
  evidence:
    - Database server accessible without credentials
    - No access control lists configured
    - Missing identity management integration
  remediation: Implement authentication system and access controls
```

### Inadequate Security Architecture

```yaml
finding:
  type: CSE-SOC2-CC-NO-LOGICAL-ACCESS-CONTROLS-018
  severity: critical
  description: Application lacks logical access security infrastructure
  evidence:
    - No user authentication mechanism
    - Missing authorization framework
    - Absence of security logging
  remediation: Deploy comprehensive logical access security solution
```

## SOC 2 Context (Informative)

- **CC6.1**: The entity implements logical access security software, infrastructure, and architectures over protected information assets to protect them from security events to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-CC-NO-USER-REGISTRATION-019`
- `CSE-SOC2-CC-NO-RBAC-CONTROLS-020`
- `CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023`
