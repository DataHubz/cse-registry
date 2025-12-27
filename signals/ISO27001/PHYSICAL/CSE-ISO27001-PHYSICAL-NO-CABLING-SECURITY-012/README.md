# CSE-ISO27001-PHYSICAL-NO-CABLING-SECURITY-012

**No Cabling Security**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-PHYSICAL-NO-CABLING-SECURITY-012` |
| Domain | ISO27001 |
| Category | PHYSICAL |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Cables carrying power and data are not protected from interception, interference, or damage. This indicates inadequate protection of cabling infrastructure against physical tampering, electromagnetic interference, and unauthorized access to data transmission.

## Applicability

- Network cabling infrastructure
- Telecommunications cables
- Power distribution systems
- Fiber optic installations
- Server room and data center cabling
- Building-wide network infrastructure
- External cable runs
- Sensitive data transmission cables

## Examples (Non-Normative)

### Unprotected Network Cabling

```yaml
cabling_infrastructure:
  network_cables:
    protected_conduits: false
    shielding: false
    separation_from_power: false
    access_control: false
  cable_management:
    documented: false
    labeled: false
    inspected: false
  interception_protection:
    encrypted_transmission: false
    tamper_evident_seals: false
    monitoring: false
```

### Exposed Data Cables

```yaml
data_cabling:
  installation:
    location: "Accessible areas"
    protection:
      conduit: false
      cable_trays: false
      raised_floor: false
      secured_pathways: false
  vulnerability_assessment:
    interception_risk: high
    interference_risk: high
    damage_risk: high
  maintenance:
    regular_inspection: false
    integrity_testing: false
```

## ISO 27001:2022 Context (Informative)

- **A.7.12**: Cables carrying power, data or supporting information services should be protected from interception, interference or damage. This includes proper routing, shielding, and physical protection to prevent unauthorized access or disruption.

## Related Signals

- `CSE-ISO27001-PHYSICAL-NO-EQUIPMENT-PROTECTION-008`
- `CSE-ISO27001-PHYSICAL-NO-UTILITY-PROTECTION-011`
- `CSE-ISO27001-PHYSICAL-NO-SECURITY-PERIMETER-001`
