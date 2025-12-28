# CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004

**Compliance Certification Missing (§1798.140(ag)(2)(E))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004` |
| Domain | CCPA |
| Category | CONTRACTS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal is raised when a service provider or contractor contract fails to include a provision requiring the service provider/contractor to certify their understanding of and compliance with CCPA restrictions. The certification requirement ensures that service providers and contractors acknowledge their obligations and understand they cannot retain, use, or disclose personal information except as permitted by law.

## Applicability

- Service provider contracts lacking compliance certification provisions
- Contractor agreements without CCPA acknowledgment clauses
- Contract templates that need CPRA compliance updates
- Third-party vendor onboarding processes

## Examples (Non-Normative)

### No Certification Clause

```yaml
# Example: Service provider contract without compliance certification requirement
contract_type: "service_provider"
compliance_certification_required: false
ccpa_obligations_acknowledged: false
understanding_certified: false
signal: "CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004"
```

### Missing Understanding Provision

```yaml
# Example: Contractor agreement lacks certification of understanding
contract_type: "contractor"
ccpa_restrictions_listed: true
certification_clause_exists: false
service_provider_certifies_understanding: false
signal: "CSE-CCPA-CONTRACTS-NO-COMPLIANCE-CERT-004"
```

## CCPA Context (Informative)

- **Section**: §1798.140(ag)(2)(E)
- **Requirement**: Service provider contracts must include a provision requiring the service provider to "certify that it understands the restrictions in subparagraph (A)" (regarding retention, use, and disclosure limitations). Similar requirements apply to contractors under §1798.140(j).
- **Added by**: CCPA (2018), extended to contractors by CPRA (2020)

## Related Signals

- `CSE-CCPA-CONTRACTS-NO-SP-CONTRACT-001`
- `CSE-CCPA-CONTRACTS-NO-PURPOSE-LIMIT-003`
- `CSE-CCPA-CONTRACTS-NO-AUDIT-RIGHTS-006`
