# CSE-CMMC-CONFIG-NO-BLACKLIST-008

**Software Blacklist Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-CONFIG-NO-BLACKLIST-008` |
| Domain | CMMC |
| Category | CONFIG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

A blacklist of prohibited software is not maintained or enforced.

This signal indicates that known malicious, risky, or policy-violating software may be executed without prevention.

## Applicability

- Software restriction policies
- Application blocking rules
- Prohibited software lists
- Endpoint protection blocking
- Group Policy software restrictions

## Examples (Non-Normative)

### No Blacklist Defined

```yaml
software_restrictions:
  blacklist_enabled: false
  prohibited_applications: []
  enforcement: none
```

### Missing Software Restrictions

```powershell
# Software Restriction Policy check
Get-AppLockerPolicy -Effective | Select-Object -ExpandProperty RuleCollections
# No deny rules configured
```

## CMMC Context (Informative)

- **CM.L2-3.4.8**: Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software

## Related Signals

- `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005`
- `CSE-CMMC-INTEGRITY-NO-MALWARE-PROTECTION-001`
