# CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003

**Contract Lacks Purpose Limitation (§1798.140(ag)(1)(A))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor contract exists but fails to include a provision prohibiting the retention, use, or disclosure of personal information for any purpose other than the specific business purpose set forth in the contract. This purpose limitation clause is a mandatory element of valid service provider and contractor contracts under CCPA/CPRA.

## Applicability

- Existing service provider contracts that lack purpose limitation clauses
- Contractor agreements missing specific purpose restrictions
- Contracts with overly broad data use provisions
- Contract review and compliance assessment processes

## Examples (Non-Normative)

### Broad Use Clause

```yaml
# Example: Contract allows service provider to use data for "any lawful purpose"
contract_type: "service_provider"
purpose_limitation_clause_exists: false
data_use_provision: "may use data for any lawful business purpose"
specific_purpose_defined: false
signal: "CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003"
```

### Missing Prohibition Language

```yaml
# Example: Contract describes services but doesn't prohibit other uses
contract_type: "contractor"
services_described: true
prohibition_on_other_uses: false
retention_limitations: false
purpose_limitation_clause_exists: false
signal: "CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003"
```

## CCPA Context (Informative)

- **Section**: §1798.140(ag)(1)(A) and §1798.140(j)
- **Requirement**: Service provider and contractor contracts must prohibit the service provider/contractor from "retaining, using, or disclosing the personal information for any purpose other than for the specific purpose of performing the services specified in the contract for the business."
- **Added by**: CCPA (2018), expanded by CPRA (2020)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002`
- `CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007`
