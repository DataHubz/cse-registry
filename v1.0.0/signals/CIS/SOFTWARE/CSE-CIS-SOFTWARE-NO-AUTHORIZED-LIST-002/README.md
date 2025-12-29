# CSE-CIS-SOFTWARE-NO-AUTHORIZED-LIST-002

**Authorized Software List Missing**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-CIS-SOFTWARE-NO-AUTHORIZED-LIST-002` |
| Domain          | CIS                                       |
| Category        | SOFTWARE                                  |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

An organization does not maintain a list of authorized software that is approved for use on enterprise assets.

This signal indicates that there is no documented or enforced policy defining which software applications are permitted, making it impossible to distinguish between authorized and unauthorized software installations.

## Applicability

This signal applies to:

- Enterprise workstations and laptops
- Servers (physical and virtual)
- Cloud instances and containers
- Mobile devices managed by the organization
- Network devices with installable software
- Development and testing environments
- Contractor and temporary worker devices

## Examples (Non-Normative)

### No Software Approval Process

```yaml
# No documented authorized software list
# policies/authorized-software.yaml does not exist
```

### Missing Whitelist Configuration

```json
{
  "software_policy": {
    "mode": "detect_only",
    "authorized_software": []
  }
}
```

### No Application Control Policy

```bash
# No AppLocker or application control policies
$ Get-AppLockerPolicy -Effective
# No policies configured

# No software restrictions defined
$ ls /etc/security/software-policy.conf
ls: cannot access '/etc/security/software-policy.conf': No such file or directory
```

## What This Signal Does NOT Assert

- Whether unauthorized software is installed
- The format or storage mechanism for the authorized list
- Compliance or non-compliance with any framework
- The approval process for new software
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to:

- **CIS Control 2 - Inventory and Control of Software Assets**
- **Safeguard 2.2**: Ensure that only currently supported software is designated as authorized in the software inventory for enterprise assets. If software is unsupported, yet necessary for the fulfillment of the enterprise's mission, document an exception detailing mitigating controls and residual risk acceptance. For any unsupported software without an exception documentation, designate as unauthorized. Review the software list to verify software support at least monthly, or more frequently.
- **Implementation Group**: IG1
- **Asset Type**: Applications
- **Security Function**: Identify

## Related Signals

- `CSE-CIS-SOFTWARE-NO-INVENTORY-001` — Software Inventory Missing
- `CSE-CIS-SOFTWARE-NO-UNAUTHORIZED-DETECTION-003` — Unauthorized Software Detection Missing
- `CSE-CIS-SOFTWARE-NO-ALLOWLISTING-005` — Software Allowlisting Not Implemented
