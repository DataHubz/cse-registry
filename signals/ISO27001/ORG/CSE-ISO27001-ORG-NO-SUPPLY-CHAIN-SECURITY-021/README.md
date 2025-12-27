# CSE-ISO27001-ORG-NO-SUPPLY-CHAIN-SECURITY-021

**No ICT Supply Chain Security Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SUPPLY-CHAIN-SECURITY-021` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Processes for managing ICT supply chain security risks are not defined and implemented. Organizations must establish and maintain processes to identify, assess, and mitigate information security risks associated with ICT products and services throughout the entire supply chain lifecycle.

## Applicability

- Organizations procuring ICT hardware, software, or services
- Environments with complex multi-tier supply chains
- Organizations using third-party components in critical systems
- Software development using open-source or third-party libraries
- Hardware procurement and deployment processes
- Cloud and SaaS service acquisitions

## Examples (Non-Normative)

### No Supply Chain Security Process

```yaml
procurement_process:
  vendor_selection:
    criteria:
      - cost
      - features
      - delivery_time

  security_assessment: null  # Signal: No security evaluation in procurement

  supply_chain_controls:
    component_verification: false     # Signal: No verification of component integrity
    supplier_security_review: false   # Signal: No supplier security assessment
    vulnerability_tracking: false     # Signal: No tracking of supply chain vulnerabilities
    transparency_requirements: null   # Signal: No supply chain transparency
```

### Missing Supply Chain Risk Management

```yaml
ict_supply_chain:
  risk_management:
    supplier_vetting: null             # Signal: No security vetting process
    component_provenance: "unknown"    # Signal: Cannot verify component origin
    security_testing: null             # Signal: No security testing of ICT products

  vulnerabilities:
    tracking_process: null             # Signal: No tracking of supply chain CVEs
    patch_notification: null           # Signal: No supplier security update process

  incidents:
    supply_chain_breach_plan: null     # Signal: No plan for supply chain compromises
```

## ISO 27001:2022 Context (Informative)

- **A.5.21 Managing information security in the ICT supply chain**: Requires processes to manage information security risks associated with ICT products and services supply chains. This includes supplier assessment, security requirements definition, monitoring of supplier security practices, and managing supply chain transparency.

## Related Signals

- `CSE-ISO27001-ORG-NO-SUPPLIER-AGREEMENTS-020` (Information security in supplier agreements)
- `CSE-ISO27001-ORG-NO-SUPPLIER-MONITORING-022` (Supplier service monitoring)
- `CSE-ISO27001-TECH-NO-SECURE-DEVELOPMENT` (If applicable in TECH category)
