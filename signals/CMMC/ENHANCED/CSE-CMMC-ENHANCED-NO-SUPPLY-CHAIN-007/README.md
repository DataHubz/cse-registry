# CSE-CMMC-ENHANCED-NO-SUPPLY-CHAIN-007

**Supply Chain Risk Management Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-SUPPLY-CHAIN-007` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

Supply chain risk management for critical components is not implemented.

This signal indicates that compromised or counterfeit components may enter the environment.

## Applicability

- Vendor risk assessment
- Component authenticity verification
- Software supply chain security
- Hardware provenance
- Third-party security requirements

## Examples (Non-Normative)

### No Supply Chain Program

```yaml
supply_chain_security:
  risk_program: not_established
  vendor_assessment: none
  component_verification: disabled
```

### Unverified Components

```
Supply Chain Assessment:
  Vendor Security Reviews: None
  Component Authenticity: Not verified
  SBOM: Not maintained
```

## CMMC Level 3 Context (Informative)

- **L3-SR.3.1.1e**: Implement supply chain risk management processes

## Related Signals

- `CSE-CMMC-CONFIG-NO-AUTHORIZED-SOFTWARE-005`
- `CSE-CMMC-MAINTENANCE-TOOLS-NOT-CONTROLLED-002`
