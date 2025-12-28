# CSE-SOC2-CC-NO-VENDOR-RISK-MGMT-033

**No Vendor and Partner Risk Management**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-SOC2-CC-NO-VENDOR-RISK-MGMT-033` |
| Domain | SOC2 |
| Category | CC |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

The entity does not assess and manage risks associated with vendors and business partners.

## Applicability

- Third-party risk management programs
- Vendor security assessments and due diligence
- Supply chain security management
- Business partner risk evaluation

## Examples (Non-Normative)

### Missing Vendor Risk Assessment

```yaml
finding:
  type: CSE-SOC2-CC-NO-VENDOR-RISK-MGMT-033
  severity: high
  description: Third-party vendors not assessed for security risks
  evidence:
    - No vendor security questionnaires
    - Missing due diligence process
    - Contracts lack security requirements
  remediation: Implement vendor risk assessment program
```

### Inadequate Third-Party Monitoring

```yaml
finding:
  type: CSE-SOC2-CC-NO-VENDOR-RISK-MGMT-033
  severity: high
  description: Vendor security posture not monitored
  evidence:
    - No ongoing vendor assessments
    - Missing vendor SOC 2 reports review
    - Third-party access not controlled
  remediation: Establish continuous vendor monitoring and management
```

## SOC 2 Context (Informative)

- **CC9.2**: The entity assesses and manages risks associated with vendors and business partners.

## Related Signals

- `CSE-SOC2-CC-NO-RISK-MITIGATION-032`
- `CSE-SOC2-CC-NO-USER-REGISTRATION-019`
