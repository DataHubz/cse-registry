# CSE-CMMC-MAINTENANCE-TOOLS-NOT-CONTROLLED-002

**Maintenance Tools Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-MAINTENANCE-TOOLS-NOT-CONTROLLED-002` |
| Domain | CMMC |
| Category | MAINTENANCE |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Tools used for system maintenance are not approved, controlled, or monitored.

This signal indicates that unauthorized or compromised tools may be used during maintenance activities.

## Applicability

- Diagnostic software
- Hardware repair tools
- Remote support utilities
- Configuration management tools
- Vendor maintenance software

## Examples (Non-Normative)

### Unapproved Tool Usage

```yaml
maintenance_tools:
  approved_list: none
  integrity_verification: disabled
  usage_logging: not_implemented
```

### Unknown Tool Source

```
Tool Assessment:
  Name: DiagnosticTool.exe
  Source: Unknown download
  Digital Signature: Not verified
  Hash Verification: Not performed
```

## CMMC Context (Informative)

- **MA.L2-3.7.2**: Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance

## Related Signals

- `CSE-CMMC-MAINTENANCE-NOT-CONTROLLED-001`
- `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005`
