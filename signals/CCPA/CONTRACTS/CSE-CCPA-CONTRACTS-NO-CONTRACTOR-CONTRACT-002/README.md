# CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002

**Contractor Contract Missing (§1798.140(j), CPRA)**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a business shares personal information with a contractor (as defined by CPRA) without a written contract containing required provisions. CPRA introduced the "contractor" category to cover persons who process personal information on behalf of a business in contexts beyond traditional service provider relationships, particularly for HR and employment data.

## Applicability

- Natural persons or entities processing personal information on behalf of a business for employment-related purposes
- HR service providers, payroll processors, and benefits administrators
- Contractors handling employee or job applicant personal information
- Businesses subject to CPRA that engage contractors as defined in §1798.140(j)

## Examples (Non-Normative)

### Missing HR Contractor Contract

```yaml
# Example: Payroll processor handling employee data without written contract
business: "technology-startup"
third_party: "payroll-processor"
relationship_type: "contractor"
data_context: "employment"
written_contract_exists: false
personal_information_shared: true
signal: "CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002"
```

### Benefits Administrator Without Contract

```yaml
# Example: Benefits provider receives employee data with no written agreement
business: "manufacturing-company"
third_party: "benefits-administrator"
relationship_type: "contractor"
data_subjects: "employees"
written_contract_exists: false
signal: "CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002"
```

## CCPA Context (Informative)

- **Section**: §1798.140(j)
- **Requirement**: "Contractor" means a person to whom the business makes available a consumer's personal information for a business purpose, pursuant to a written contract with the business, provided that the contract includes provisions similar to those required for service providers under §1798.140(ag)(2).
- **Added by**: CPRA (2020, effective 2023)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003`
- `CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004`
