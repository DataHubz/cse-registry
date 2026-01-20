# CSE-GEN-IDENTITY-NO-ACCESS-REVIEW-004

**Access Review Missing**

## Signal Overview

| Field           | Value                                   |
|-----------------|-----------------------------------------|
| Identifier      | `CSE-GEN-IDENTITY-NO-ACCESS-REVIEW-004` |
| Domain          | GEN (General)                           |
| Category        | IDENTITY                                |
| Status          | Active                                  |
| Introduced In   | 1.0.0                                   |

## Description

No periodic review of user access rights is conducted to ensure permissions remain appropriate for current job responsibilities and business needs.

This signal indicates that user permissions are not regularly validated, allowing privilege creep, orphaned access, and inappropriate permissions to persist undetected.

## Applicability

This signal applies to:

- User account access reviews
- Privileged account recertification
- Cloud platform permissions (AWS, Azure, GCP)
- Application access reviews
- Database user permissions
- Network resource access
- Administrative and elevated privileges
- Service account access validation
- Third-party and vendor access reviews

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Documented Review Process

```
Access review gaps:
- No policy requiring periodic access reviews
- No defined review frequency (quarterly, annual, etc.)
- No assigned ownership for conducting reviews
- No documentation of review outcomes
- No remediation process for identified issues
```

### Evidence of Access Review Absence

```
Indicators such as:
- Users with permissions from multiple previous roles
- Privileged accounts never recertified
- No attestation records from managers
- Access rights unchanged for years
- No audit trail of access reviews
```

### Privilege Creep Without Detection

```json
// Example: User accumulated permissions over time
{
  "username": "jane.doe",
  "groups": [
    "finance_analysts",      // Current role
    "marketing_team",        // Previous role (2021)
    "hr_staff",             // Previous role (2019)
    "developers",           // Initial role (2017)
    "database_admins"       // Temporary project (2020)
  ],
  "last_access_review": null
}
```

### No Manager Attestation Process

```
Missing review elements:
- Managers not required to validate team member access
- No periodic certification of user permissions
- Access grants never expire or require renewal
- No validation that permissions align with current duties
```

## What This Signal Does NOT Assert

- Whether specific users have inappropriate access
- The current accuracy of permission assignments
- Whether unauthorized access has occurred
- Compliance or non-compliance with any framework
- Required remediation actions
- The frequency at which reviews should occur

## Related Framework Signals

This signal may be relevant to controls in various frameworks:

- **ISO 27001**: A.9.2.5 (Review of user access rights), A.9.2.6 (Removal or adjustment of access rights)
- **SOC 2**: CC6.2 (Logical and physical access controls - user access reviews)
- **PCI DSS**: 7.1 (Limit access to system components and cardholder data), 8.1.4 (Review user accounts and access privileges)

## Related Signals

- `CSE-GEN-IDENTITY-NO-LIFECYCLE-001` — Identity Lifecycle Management Missing
- `CSE-GEN-IDENTITY-NO-PROVISIONING-002` — Access Provisioning Process Missing
- `CSE-GEN-IDENTITY-NO-DEPROVISIONING-003` — Access Deprovisioning Missing
- `CSE-CMMC-ACCESS-NO-LEAST-PRIVILEGE-002` — Least Privilege Not Enforced (if defined)

## Cross-References (Informative)

This signal supports access governance objectives including:

- Detecting and removing excessive permissions
- Ensuring access aligns with current job responsibilities
- Identifying orphaned or unused accounts
- Supporting compliance audit requirements
- Maintaining principle of least privilege
- Preventing privilege creep over time
- Establishing accountability for access decisions

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Review of access review policies and procedures
- Assessment of access certification records
- Examination of manager attestation documentation
- Analysis of access review frequency and coverage
- Review of remediation tracking for review findings
- Interviews with access management teams
- Examination of tooling used for access reviews
- Analysis of permission changes following reviews

An effective access review process should include:

- Defined review frequency and scope
- Clear ownership and accountability
- Manager or data owner attestation
- Documentation of review results
- Remediation workflow for identified issues
- Metrics and reporting on review completion
- Integration with identity lifecycle management

The presence of this signal indicates a need for implementing periodic access reviews to ensure ongoing appropriateness of user permissions and detect security gaps.
