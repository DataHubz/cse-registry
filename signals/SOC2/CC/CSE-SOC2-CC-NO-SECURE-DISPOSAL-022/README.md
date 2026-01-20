# CSE-SOC2-CC-NO-SECURE-DISPOSAL-022

**No Secure Asset Disposal**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-SECURE-DISPOSAL-022` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not discontinue logical and physical protections over physical assets only after the ability to read or recover data and software from those assets has been diminished.

## Applicability

- Hardware disposal and decommissioning processes
- Media sanitization procedures
- Hard drive and storage device disposal
- End-of-life asset management

## Examples (Non-Normative)

### Improper Hard Drive Disposal

```yaml
finding:
  type: CSE-SOC2-CC-NO-SECURE-DISPOSAL-022
  severity: high
  description: Decommissioned servers disposed without data sanitization
  evidence:
    - Hard drives not wiped before disposal
    - No certificate of destruction obtained
    - Customer data recoverable from discarded drives
  remediation: Implement secure media sanitization process
```

### Missing Sanitization Procedures

```yaml
finding:
  type: CSE-SOC2-CC-NO-SECURE-DISPOSAL-022
  severity: high
  description: No documented media sanitization policy
  evidence:
    - Assets disposed without data destruction
    - No tracking of disposed equipment
    - Absence of sanitization tools or processes
  remediation: Develop and implement asset disposal procedures
```

## SOC 2 Context (Informative)

- **CC6.5**: The entity discontinues logical and physical protections over physical assets only after the ability to read or recover data and software from those assets has been diminished and is no longer required to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-CC-NO-PHYSICAL-ACCESS-021`
- `CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024`
