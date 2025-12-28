# CSE-CIS-CONFIG-NO-SECURE-PROCESS-001

**Secure Configuration Process Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CIS-CONFIG-NO-SECURE-PROCESS-001` |
| Domain          | CIS                                    |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

The organization lacks a documented, repeatable process for establishing and maintaining secure configurations across enterprise assets and software.

This signal indicates that secure configuration management may be ad-hoc, inconsistent, or not formalized as a standard organizational practice.

## Applicability

This signal applies to:

- Enterprise configuration management processes
- Security baseline development procedures
- Configuration standards documentation
- Change management workflows
- Configuration review processes
- Hardening guide development
- Compliance validation procedures

## Examples (Non-Normative)

### No Documented Process

```text
# No formal process documentation exists
- Configurations applied manually without standards
- No review or approval workflow
- Ad-hoc hardening decisions
```

### Incomplete Process Documentation

```text
# Partial process without key components
Process exists for:
- Initial configuration (documented)
- Ongoing maintenance (not documented)
- Exception handling (not documented)
- Verification procedures (not documented)
```

### Process Without Enforcement

```yaml
# Policy exists but not enforced
configuration_policy:
  status: "documented"
  enforcement: "voluntary"
  compliance_checks: "none"
  last_review: "unknown"
```

## What This Signal Does NOT Assert

- Whether existing configurations are secure
- The maturity level of the configuration process
- Whether compensating controls exist
- Compliance or non-compliance with any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to:

- **CIS Control 04**: Secure Configuration of Enterprise Assets and Software
- **Safeguard 4.1**: Establish and Maintain a Secure Configuration Process (IG1)
- **Asset Type**: Devices, Applications
- **Security Function**: Protect

## Related Signals

- `CSE-CIS-CONFIG-NO-NETWORK-SECURITY-002` — Network Infrastructure Security Configuration Missing
- `CSE-CIS-CONFIG-NO-FIREWALL-CONFIG-003` — Host-Based Firewall Configuration Missing
