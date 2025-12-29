# CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005

**Subcontractor Obligations Not Flowed Down (§1798.140(ag)(2)(D))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor contract fails to require that the same CCPA restrictions and obligations be imposed on any subcontractors. CCPA/CPRA requires that when service providers or contractors engage subcontractors to process personal information, they must flow down the same contractual protections to ensure end-to-end compliance throughout the processing chain.

## Applicability

- Service provider contracts that permit subcontracting but lack flow-down provisions
- Contractor agreements allowing delegation without subcontractor obligations
- Multi-tier vendor relationships and supply chain data processing
- Contracts with cloud providers that use sub-processors

## Examples (Non-Normative)

### Subcontracting Allowed Without Obligations

```yaml
# Example: Contract allows subcontractors but doesn't require same restrictions
contract_type: "service_provider"
subcontracting_permitted: true
subcontractor_obligations_required: false
same_restrictions_imposed: false
signal: "CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005"
```

### Missing Flow-Down Clause

```yaml
# Example: Cloud service provider can use sub-processors without contractual flow-down
vendor_type: "cloud_infrastructure_provider"
sub_processors_used: true
written_contract_exists: true
subcontractor_flow_down_clause: false
ccpa_restrictions_on_subcontractors: false
signal: "CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005"
```

## CCPA Context (Informative)

- **Section**: §1798.140(ag)(2)(D)
- **Requirement**: Service provider contracts must grant the business the right to take reasonable and appropriate steps to ensure that the service provider uses personal information in a manner consistent with the business's obligations under CCPA, including requiring the service provider to impose the same restrictions on subcontractors.
- **Added by**: CCPA (2018), expanded by CPRA (2020)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003`
- `CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006`
