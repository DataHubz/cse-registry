# CSE-HITRUST-ACCESS-NO-USER-REVIEW-004

**User Access Review Not Conducted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ACCESS-NO-USER-REVIEW-004` |
| Domain | HITRUST |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Regular reviews of user access rights and privileges are not being conducted to verify that access remains appropriate and necessary.

This signal indicates the absence of periodic access reviews (also known as access recertification or attestation) for systems containing protected health information (PHI) or other sensitive data. Regular access reviews help identify and remove unnecessary access, detect privilege creep, and ensure compliance with the principle of least privilege.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Identity and access management (IAM) systems
- Enterprise resource planning (ERP) systems
- Electronic health record (EHR) systems
- Cloud infrastructure and SaaS applications

## Examples (Non-Normative)

### No Review Process Defined

```yaml
# User access without periodic review
access_governance:
  periodic_reviews:
    enabled: false
    frequency: null
    last_review_date: null
    next_review_date: null
  review_process:
    defined: false
    owner: null
```

### Outdated Access Permissions

```json
{
  "users": [
    {
      "username": "former_manager",
      "role": "department_admin",
      "granted_date": "2020-01-15",
      "last_review_date": null,
      "current_role": "individual_contributor",
      "access_appropriate": false
    }
  ]
}
```

### Missing Review Metadata

```hcl
# IAM roles without review tracking
resource "aws_iam_role_policy_attachment" "admin_access" {
  role       = aws_iam_role.admin.name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess"
  # No review date tracking
  # No attestation records
  # No expiration mechanism
}
```

### Unreviewed Group Memberships

```powershell
# Active Directory groups without access reviews
# No process to verify membership is still required
Get-ADGroupMember -Identity "PHI-Access-Full" | Where-Object {
    # Users may have been here for years without review
    $_.LastReviewDate -eq $null
}
```

## What This Signal Does NOT Assert

- Whether user access is inappropriate
- The specific review frequency required
- Whether users are performing unauthorized actions
- Compliance or non-compliance with HITRUST
- The effectiveness of initial access grants
- Whether automated access reviews are necessary

## HITRUST Context (Informative)

- **Control Domain**: 01 - Access Control
- **Control Reference**: 01.d
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for user access reviews including:
- Regular review of user access rights at defined intervals
- Verification that access remains appropriate for current job functions
- Management review and approval of access rights
- Documentation of review activities and results
- Removal or adjustment of access rights as needed
- More frequent reviews for privileged access
- Risk-based determination of review frequency

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ACCESS-NO-USER-REGISTRATION-002` - User registration process missing
- `CSE-HITRUST-ACCESS-NO-PRIVILEGE-MANAGEMENT-003` - Privilege management not implemented
- `CSE-HITRUST-ACCESS-NO-POLICY-001` - Access control policy missing
- `CSE-HIPAA-TECH-NO-ACCESS-REVIEW-001` - HIPAA access review requirements (if defined)

## Notes

Detection of this signal typically involves:

- Review of access governance procedures and schedules
- Examination of access review completion records
- Analysis of access certification campaign data
- Assessment of review tool configurations
- Verification of manager attestation records
- Review of access remediation tracking

The presence of this signal indicates a significant gap in access governance that can lead to unauthorized access, regulatory non-compliance, and increased security risk from privilege creep.
