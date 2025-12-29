# CSE-GDPR-TRANSFER-NO-SCC-004

**Standard Contractual Clauses Not Used**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-TRANSFER-NO-SCC-004` |
| Domain | GDPR |
| Category | TRANSFER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Transfer to third country processor or controller does not utilize European Commission approved Standard Contractual Clauses (SCCs).

Article 46.2.c allows transfers based on SCCs adopted by the Commission.

## Applicability

- Transfers to processors or controllers in third countries
- SCCs must be Commission-approved version (2021 or later)
- Cannot modify mandatory clauses
- Must conduct Transfer Impact Assessment (TIA)
- Additional safeguards may be required

## Examples (Non-Normative)

### No SCCs in Place

```yaml
scc_compliance:
  third_country_transfer: true
  processor_location: "United States"
  sccs_implemented: false
  scc_version: null
  transfer_impact_assessment: false
  supplementary_measures: null
```

### Outdated SCC Version

```
Contract Review - Cloud Provider:
  Provider: GlobalCloud Inc. (USA)
  Contract Date: 2018-06-01
  SCCs: Old version (pre-2021)
  Schrems II Assessment: Not conducted
  Supplementary Measures: None
  Update Required: Yes
```

## GDPR Context (Informative)

- **Art. 46.2.c**: Standard data protection clauses adopted by Commission
- **Art. 46.2.d**: Standard data protection clauses adopted by supervisory authority
- **Schrems II**: Transfer Impact Assessment required to assess third country laws

## Related Signals

- `CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003`
- `CSE-GDPR-TRANSFER-NO-TRANSFER-ASSESSMENT-001`
