# CSE-ISO27001-ORG-NO-SUPPLIER-AGREEMENTS-020

**No Information Security in Supplier Agreements**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-ISO27001-ORG-NO-SUPPLIER-AGREEMENTS-020` |
| Domain | ISO27001 |
| Category | ORG |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Supplier agreements do not establish relevant information security requirements based on supply relationship type. Organizations must ensure that agreements with suppliers include appropriate security requirements, terms, and conditions that address the risks associated with supplier access to organizational information and assets.

## Applicability

- Organizations that engage third-party suppliers or service providers
- Contracts that involve access to organizational information assets
- Agreements where suppliers process, store, or transmit organizational data
- Outsourcing arrangements and managed service relationships
- Cloud service provider agreements
- Software and hardware vendor contracts

## Examples (Non-Normative)

### Missing Security Requirements in Supplier Contract

```yaml
contract:
  parties:
    - organization: "ACME Corp"
    - supplier: "Third Party Services Inc"

  scope: "IT support services"

  terms:
    - service_description: "Desktop support and maintenance"
    - pricing: "$50,000 annually"
    - term: "12 months"

  security_requirements: null  # Signal: No security requirements defined
  data_protection: null        # Signal: No data protection terms
  incident_notification: null  # Signal: No breach notification clause
  audit_rights: null          # Signal: No audit or inspection rights
```

### Inadequate Security Clauses

```yaml
supplier_agreement:
  security_section:
    generic_clause: "Supplier agrees to maintain reasonable security measures"

  # Signal: Lacks specific requirements such as:
  # - Information classification handling
  # - Access control requirements
  # - Encryption standards
  # - Incident response procedures
  # - Security monitoring obligations
  # - Right to audit
  # - Data return/destruction upon termination
  # - Subcontractor security requirements
```

## ISO 27001:2022 Context (Informative)

- **A.5.20 Addressing information security within supplier agreements**: Requires that relevant information security requirements be established and agreed with each supplier based on the type of supplier relationship. Agreements should address security roles and responsibilities, asset protection, access controls, incident management, and termination procedures.

## Related Signals

- `CSE-ISO27001-ORG-NO-SUPPLY-CHAIN-SECURITY-021` (Managing ICT supply chain security)
- `CSE-ISO27001-ORG-NO-SUPPLIER-MONITORING-022` (Supplier service monitoring and review)
- `CSE-ISO27001-ORG-NO-CLOUD-SECURITY-023` (Cloud services security)
