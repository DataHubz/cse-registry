# CSE-SOC2-CONF-NO-DATA-CLASSIFICATION-001

**No Confidential Information Identification**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CONF-NO-DATA-CLASSIFICATION-001` |
| Domain | SOC2 |
| Category | CONF |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not identify and maintain confidential information to meet the entity's objectives related to confidentiality.

## Applicability

- Data classification policies and frameworks
- Information inventory and asset register
- Data labeling and marking schemes
- Confidential data identification processes
- Sensitivity level definitions
- Data ownership and stewardship

## Examples (Non-Normative)

### Missing Classification Framework

```yaml
findings:
  - No data classification policy exists
  - Confidentiality levels not defined
  - Classification criteria not established
  - No guidance for identifying confidential data
```

### Inadequate Data Inventory

```yaml
findings:
  - Information assets not inventoried
  - Confidential data locations unknown
  - Data flows not mapped or documented
  - Data owners not identified
```

### Poor Classification Implementation

```yaml
findings:
  - Data not labeled or marked with classification
  - Users cannot determine data sensitivity
  - Classification applied inconsistently
  - No process to review and update classifications
```

## SOC 2 Context (Informative)

- **C1.1**: The entity identifies and maintains confidential information to meet the entity's objectives related to confidentiality.

## Related Signals

- `CSE-SOC2-CONF-NO-DATA-DISPOSAL-002`
- `CSE-GDPR-NO-DATA-INVENTORY` (if exists)
