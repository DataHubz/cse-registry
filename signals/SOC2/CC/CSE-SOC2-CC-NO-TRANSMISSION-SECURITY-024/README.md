# CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024

**No Information Transmission Security**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not restrict the transmission, movement, and removal of information to authorized internal and external users and processes and does not protect it during transmission, movement, or removal.

## Applicability

- Data transfer processes and mechanisms
- Encryption in transit (TLS/SSL)
- Data movement between systems and environments
- File transfer and sharing systems

## Examples (Non-Normative)

### Unencrypted Data Transmission

```yaml
finding:
  type: CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024
  severity: high
  description: Customer data transmitted without encryption
  evidence:
    - API endpoints use HTTP instead of HTTPS
    - Database connections not encrypted
    - Email attachments sent in cleartext
  remediation: Implement encryption for all data in transit
```

### Unrestricted Data Movement

```yaml
finding:
  type: CSE-SOC2-CC-NO-TRANSMISSION-SECURITY-024
  severity: high
  description: No controls over data transfer and removal
  evidence:
    - Users can email sensitive data externally
    - No data loss prevention controls
    - Unrestricted USB device usage
  remediation: Implement data transfer restrictions and DLP controls
```

## SOC 2 Context (Informative)

- **CC6.7**: The entity restricts the transmission, movement, and removal of information to authorized internal and external users and processes, and protects it during transmission, movement, or removal to meet the entity's objectives.

## Related Signals

- `CSE-SOC2-CC-NO-BOUNDARY-PROTECTION-023`
- `CSE-SOC2-CC-NO-SECURE-DISPOSAL-022`
