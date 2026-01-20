# CSE-ISO27001-ORG-NO-INFO-LABELLING-013

**No Information Labelling Procedures**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-INFO-LABELLING-013` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Procedures for labelling information according to the classification scheme are not implemented.

## Applicability

- Organizations with classification schemes but no labelling procedures
- Environments where documents do not display classification markings
- Companies lacking email classification headers or footers
- Organizations without metadata tagging for electronic information
- Environments where labelling is inconsistent or optional

## Examples (Non-Normative)

### Missing Labelling Procedures

```yaml
labelling_assessment:
  classification_scheme_exists: true
  labelling_procedures:
    documented: false
    implemented: false
  document_review:
    total_documents: 523
    documents_with_labels: 8
    labelling_rate: "1.5%"
  email_classification:
    headers_enabled: false
    footers_enabled: false
```

### Inconsistent Labelling

```yaml
information_handling:
  labelling_requirement: "mandatory"
  actual_compliance:
    physical_documents: "15%"
    electronic_files: "3%"
    emails: "0%"
  automated_labelling: false
  user_training_on_labelling: false
  enforcement: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.13 Labelling of information**: An appropriate set of procedures for information labelling should be developed and implemented in accordance with the information classification scheme adopted by the organization. The labelling procedures should cover information in physical and electronic form.

## Related Signals

- `CSE-ISO27001-ORG-NO-INFO-CLASSIFICATION-012`
- `CSE-ISO27001-ORG-NO-TRANSFER-CONTROLS-014`
