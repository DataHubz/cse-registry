# CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001

**Reasonable Security Measures Missing (§1798.150(a))**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001` |
| Domain | CCPA |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

This signal indicates that a business has failed to implement and maintain reasonable security procedures and practices appropriate to the nature of the personal information to protect it from unauthorized access, destruction, use, modification, or disclosure. The absence of reasonable security measures exposes the business to liability under CCPA's private right of action for data breaches.

## Applicability

- Businesses subject to CCPA that collect, store, or process personal information of California consumers
- Organizations that have experienced or are at risk of a data breach involving nonencrypted and nonredacted personal information
- Service providers and contractors handling personal information on behalf of CCPA-covered businesses

## Examples (Non-Normative)

### Missing Security Controls

```yaml
security_assessment:
  encryption_at_rest: false
  encryption_in_transit: false
  access_controls: "none"
  authentication: "basic"
  security_monitoring: false
  incident_response_plan: false
  vulnerability_scanning: false
  signal: CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001
  risk_level: critical
```

### Inadequate Security Practices

```yaml
security_posture:
  data_classification: "not implemented"
  security_policies: []
  employee_training: false
  third_party_assessments: false
  patch_management: "ad-hoc"
  backup_procedures: "none"
  signal: CSE-CCPA-SECURITY-NO-REASONABLE-MEASURES-001
  compliance_status: non-compliant
```

## CCPA Context (Informative)

- **Section**: §1798.150(a)
- **Requirement**: "Any consumer whose nonencrypted and nonredacted personal information... is subject to an unauthorized access and exfiltration, theft, or disclosure as a result of the business's violation of the duty to implement and maintain reasonable security procedures and practices appropriate to the nature of the information..."
- **Added by**: CCPA

## Related Signals

- `CSE-CCPA-SECURITY-NO-ENCRYPTION-002`
- `CSE-CCPA-SECURITY-NO-BREACH-PROCEDURES-003`
- `CSE-CCPA-SECURITY-UNREDACTED-EXPOSURE-004`
- `CSE-CCPA-SECURITY-NO-RISK-ASSESSMENT-005`
