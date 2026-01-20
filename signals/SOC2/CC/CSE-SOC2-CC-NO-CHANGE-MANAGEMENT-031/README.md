# CSE-SOC2-CC-NO-CHANGE-MANAGEMENT-031

**No Infrastructure and Software Change Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-CHANGE-MANAGEMENT-031` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not authorize, design, develop or acquire, configure, document, test, approve, and implement changes to infrastructure, data, software, and procedures to meet its objectives.

## Applicability

- Change control and management processes
- Software development lifecycle (SDLC)
- Infrastructure change procedures
- Configuration management systems

## Examples (Non-Normative)

### Missing Change Control Process

```yaml
finding:
  type: CSE-SOC2-CC-NO-CHANGE-MANAGEMENT-031
  severity: high
  description: No formal change management process exists
  evidence:
    - Changes deployed without approval
    - No change request documentation
    - Missing change advisory board
  remediation: Implement formal change management process
```

### Inadequate Testing and Approval

```yaml
finding:
  type: CSE-SOC2-CC-NO-CHANGE-MANAGEMENT-031
  severity: high
  description: Changes not properly tested before deployment
  evidence:
    - No testing requirements for changes
    - Production changes lack approval
    - Absence of rollback procedures
  remediation: Establish testing and approval requirements for changes
```

## SOC 2 Context (Informative)

- **CC8.1**: The entity authorizes, designs, develops or acquires, configures, documents, tests, approves, and implements changes to infrastructure, data, software, and procedures to meet its objectives.

## Related Signals

- `CSE-SOC2-CC-NO-VULN-DETECTION-026`
- `CSE-SOC2-CC-NO-RISK-MITIGATION-032`
