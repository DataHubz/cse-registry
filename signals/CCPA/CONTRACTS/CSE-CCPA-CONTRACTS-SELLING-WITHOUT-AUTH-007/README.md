# CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007

**SP/Contractor Selling PI Without Authorization (§1798.140(ag)(1)(A))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor sells, shares, or retains personal information outside the scope of the direct business relationship with the business, without proper authorization or contractual permission. CCPA prohibits service providers and contractors from selling or sharing personal information unless explicitly authorized, and even then, consumers must be notified and given opt-out rights.

## Applicability

- Service providers or contractors engaging in unauthorized data monetization
- Third parties selling personal information received for business purposes
- Detection of contractual violations and unauthorized data transfers
- Privacy incident investigation and breach response

## Examples (Non-Normative)

### Unauthorized Data Sale

```yaml
# Example: Service provider sells customer data to data brokers
entity_type: "service_provider"
personal_information_source: "business_client"
selling_activity_detected: true
authorization_in_contract: false
business_purpose_only: false
signal: "CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007"
```

### Sharing Data Without Permission

```yaml
# Example: Contractor shares employee data with third party for own purposes
entity_type: "contractor"
data_subjects: "employees"
sharing_activity_detected: true
purpose: "contractor_own_business"
contract_authorization: false
direct_business_relationship: false
signal: "CSE-CCPA-CONTRACTS-SELLING-WITHOUT-AUTH-007"
```

## CCPA Context (Informative)

- **Section**: §1798.140(ag)(1)(A) and §1798.115
- **Requirement**: Service providers and contractors are prohibited from "retaining, using, or disclosing the personal information for any purpose other than for the specific purpose of performing the services specified in the contract." Selling or sharing personal information received as a service provider/contractor is prohibited unless specifically authorized, and consumers must be notified.
- **Added by**: CCPA (2018), strengthened by CPRA (2020)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003`
- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004`
