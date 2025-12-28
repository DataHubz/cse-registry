# CSE-CCPA-CONTRACTS-NO-DELETION-COOPERATION-008

**Contract Lacks Deletion Cooperation Requirement (§1798.105(c))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-DELETION-COOPERATION-008` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor contract fails to include provisions requiring cooperation with consumer deletion requests. CCPA grants consumers the right to request deletion of their personal information, and businesses must direct service providers and contractors who received the data to also delete it unless an exception applies.

## Applicability

- Service provider and contractor contracts lacking deletion cooperation clauses
- Vendor agreements that need to support consumer rights fulfillment
- Data processing chains where deletion requests must be propagated
- Consumer privacy rights management systems

## Examples (Non-Normative)

### Missing Deletion Obligation

```yaml
# Example: Service provider contract doesn't require deletion cooperation
contract_type: "service_provider"
deletion_cooperation_clause: false
deletion_request_process_defined: false
obligation_to_delete_upon_direction: false
signal: "CSE-CCPA-CONTRACTS-NO-DELETION-COOPERATION-008"
```

### No Deletion Process

```yaml
# Example: Contractor agreement lacks mechanism for deletion request handling
contract_type: "contractor"
consumer_rights_provisions: false
deletion_procedure_documented: false
business_direction_to_delete: false
signal: "CSE-CCPA-CONTRACTS-NO-DELETION-COOPERATION-008"
```

## CCPA Context (Informative)

- **Section**: §1798.105(c) and §1798.140(ag)(2)(C)
- **Requirement**: When a business receives a verified consumer deletion request, the business must "direct any service providers or contractors to delete the consumer's personal information from their records" unless an exception applies. Service provider contracts must enable the business to fulfill this obligation.
- **Added by**: CCPA (2018), expanded by CPRA (2020)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-CONTRACTOR-CONTRACT-002`
- `CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005`
