# CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001

**Service Provider Contract Missing (§1798.140(ag))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a business shares personal information with a third party that processes data on the business's behalf, but no written service provider contract exists. CCPA requires businesses to have written contracts with service providers that include specific mandatory provisions to ensure the service provider complies with CCPA obligations.

## Applicability

- Third parties that process personal information on behalf of a business
- Cloud service providers, data processors, or vendors acting as service providers
- Businesses subject to CCPA that engage third parties for data processing activities

## Examples (Non-Normative)

### Missing Service Provider Contract

```yaml
# Example: Business shares customer data with email service provider without written contract
business: "retail-company"
third_party: "email-service-provider"
relationship_type: "service_provider"
written_contract_exists: false
personal_information_shared: true
signal: "CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001"
```

### Verbal Agreement Only

```yaml
# Example: Verbal agreement with analytics vendor but no written contract
business: "e-commerce-platform"
third_party: "analytics-vendor"
relationship_type: "service_provider"
agreement_type: "verbal"
written_contract_exists: false
signal: "CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001"
```

## CCPA Context (Informative)

- **Section**: §1798.140(ag)
- **Requirement**: "Service provider" means a person that processes personal information on behalf of a business and that receives personal information for a business purpose pursuant to a written contract, provided that the contract prohibits the service provider from retaining, using, or disclosing the personal information for any purpose other than for the specific purpose of performing the services specified in the contract.
- **Added by**: CCPA (2018)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003`
- `CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005`
- `CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007`
