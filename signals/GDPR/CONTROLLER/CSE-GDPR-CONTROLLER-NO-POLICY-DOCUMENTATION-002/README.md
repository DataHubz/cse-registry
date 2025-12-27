# CSE-GDPR-CONTROLLER-NO-POLICY-DOCUMENTATION-002

**Policy Documentation Not Maintained**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-CONTROLLER-NO-POLICY-DOCUMENTATION-002` |
| Domain | GDPR |
| Category | CONTROLLER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The controller has not adhered to approved codes of conduct or certification mechanisms, or lacks documented data protection policies as required by Article 24.2.

Controllers must maintain evidence of compliance measures and policy adherence to demonstrate accountability.

## Applicability

- Data protection policy frameworks
- Codes of conduct adherence
- Certification mechanisms
- Compliance documentation
- Policy implementation evidence

## Examples (Non-Normative)

### Missing Policy Documentation

```yaml
controller_policies:
  data_protection_policy: null
  retention_policy: "Not documented"
  incident_response_policy: null
  certification: "None"
  code_of_conduct: "Not followed"
```

### Unenforced Policies

```
Documentation Status:
  - Privacy Policy: Exists but outdated (2 years old)
  - Data Retention Policy: Documented but not implemented
  - Security Policy: Missing
  - Certification: Claimed but expired
  - Audit Trail: No evidence of policy enforcement
```

## GDPR Context (Informative)

- **Art. 24.2**: Adherence to approved codes of conduct or certification may demonstrate compliance
- **Art. 24.3**: Controller shall implement measures to ensure compliance and demonstrate it

## Related Signals

- `CSE-GDPR-CONTROLLER-NO-COMPLIANCE-MEASURES-001`
- `CSE-GDPR-CONTROLLER-NO-PROCESSING-RECORDS-008`
- `CSE-GDPR-PRINCIPLES-NO-ACCOUNTABILITY-009`
