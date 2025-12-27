# CSE-ISO27001-ORG-NO-SUPPLIER-SECURITY-019

**No Supplier Security Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SUPPLIER-SECURITY-019` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Processes for managing security risks associated with supplier access to organizational assets are not defined.

## Applicability

- Organizations without third-party risk management programs
- Environments where suppliers access systems without security assessments
- Companies lacking security requirements in vendor contracts
- Organizations not monitoring supplier security posture
- Environments without supplier incident notification requirements

## Examples (Non-Normative)

### No Supplier Security Program

```yaml
supplier_management:
  third_party_risk_program: false
  supplier_security_assessments:
    pre_engagement: false
    periodic_reviews: false
  contract_requirements:
    security_clauses: false
    audit_rights: false
    incident_notification: false
    data_protection_terms: false
  supplier_inventory:
    with_system_access: "unknown"
    risk_classification: false
```

### Unassessed Supplier Risk

```yaml
vendor_security:
  active_suppliers: 78
  suppliers_assessed: 0
  critical_suppliers:
    - name: "CloudProvider_A"
      data_access: "customer_data"
      security_assessment: null
      contract_security_terms: false
    - name: "PaymentProcessor_B"
      data_access: "financial_data"
      security_assessment: null
      pci_dss_validation: "not_verified"
  ongoing_monitoring: false
```

## ISO 27001:2022 Context (Informative)

- **A.5.19 Information security in supplier relationships**: Processes and procedures should be defined and implemented to manage the information security risks associated with the use of supplier's products or services. This includes identifying security risks related to the supply chain and agreeing with suppliers on how these risks will be addressed.

## Related Signals

- `CSE-ISO27001-ORG-NO-TRANSFER-CONTROLS-014`
- `CSE-ISO27001-ORG-NO-ACCESS-CONTROL-POLICY-015`
