# CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006

**Audit Rights Not Included (CPPA Regulations)**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor contract fails to include provisions granting the business audit rights or the ability to monitor the service provider's/contractor's compliance with CCPA obligations. While not explicitly required by statute, CPPA regulations and best practices emphasize the business's responsibility to ensure service provider compliance, which necessitates audit and monitoring rights.

## Applicability

- Service provider and contractor contracts lacking audit provisions
- High-risk processing relationships requiring compliance verification
- Contracts with third parties processing sensitive personal information
- Businesses implementing vendor risk management programs

## Examples (Non-Normative)

### No Audit Rights Provision

```yaml
# Example: Service provider contract lacks audit or inspection rights
contract_type: "service_provider"
audit_rights_granted: false
monitoring_rights_included: false
compliance_verification_mechanism: "none"
signal: "CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006"
```

### Missing Compliance Verification

```yaml
# Example: Contractor agreement for sensitive data without audit provisions
contract_type: "contractor"
data_sensitivity: "high"
audit_clause_exists: false
right_to_inspect: false
compliance_assessment_rights: false
signal: "CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006"
```

## CCPA Context (Informative)

- **Section**: CPPA Regulations (Cal. Code Regs. tit. 11, § 7051) and §1798.140(ag)(2)(D)
- **Requirement**: While not explicitly mandated by statute, businesses must take "reasonable and appropriate steps" to ensure service providers use personal information consistent with CCPA obligations. CPPA regulations emphasize businesses' responsibility to monitor and verify compliance, typically through audit rights.
- **Added by**: CPPA Regulations (2023)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-SUBCONTRACTOR-FLOW-005`
- `CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004`
