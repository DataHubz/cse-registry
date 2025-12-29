# CSE-ISO27001-ORG-NO-INFO-CLASSIFICATION-012

**No Information Classification Scheme**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INFO-CLASSIFICATION-012` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Information is not classified according to confidentiality, integrity, and availability requirements.

## Applicability

- Organizations without a defined classification scheme
- Environments where all data is treated with the same security level
- Companies unable to identify their most sensitive information
- Organizations lacking classification criteria based on legal or business requirements
- Environments where personnel do not know how to classify information

## Examples (Non-Normative)

### No Classification Scheme

```yaml
data_governance:
  classification_scheme:
    defined: false
    levels: null
  information_assets:
    total: 156
    classified: 0
  classification_criteria:
    confidentiality: "undefined"
    integrity: "undefined"
    availability: "undefined"
```

### Inconsistent Classification

```yaml
classification_review:
  scheme_exists: true
  levels:
    - "Public"
    - "Internal"
    - "Confidential"
    - "Restricted"
  application:
    documented_guidance: false
    personnel_training: false
    assets_classified: "12%"
    classification_consistency: "low"
```

## ISO 27001:2022 Context (Informative)

- **A.5.12 Classification of information**: Information should be classified according to the information security needs of the organization based on confidentiality, integrity, availability and relevant interested party requirements. The classification scheme should include criteria for classifying information and the controls to be applied for each level.

## Related Signals

- `CSE-ISO27001-ORG-NO-INFO-LABELLING-013`
- `CSE-ISO27001-ORG-NO-ASSET-INVENTORY-009`
