# CSE-GDPR-TRANSFER-NO-BCR-005

**Binding Corporate Rules Not Approved**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-TRANSFER-NO-BCR-005` |
| Domain | GDPR |
| Category | TRANSFER |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Multinational organization relies on Binding Corporate Rules (BCRs) for intra-group transfers but BCRs have not been approved by competent supervisory authority.

Article 47 requires BCR approval.

## Applicability

- Multinational groups with intra-group transfers
- BCRs for controllers (Art. 47) or processors
- Must be legally binding and enforced
- Requires supervisory authority approval
- Must include all Article 47.2 elements

## Examples (Non-Normative)

### Unapproved BCRs

```yaml
bcr_status:
  intra_group_transfers: true
  bcr_drafted: true
  supervisory_authority_submitted: false
  bcr_approved: false
  approval_date: null
  current_transfer_mechanism: "Unapproved BCRs"
```

### BCR Non-Compliance

```
Corporate Group Transfer Mechanism:
  Group Entities: 45 companies across 20 countries
  Intra-Group Transfers: Daily
  BCR Status: Draft only
  Supervisory Authority: Not consulted
  Alternative Safeguards: None
  Transfers: Ongoing without approved mechanism
```

## GDPR Context (Informative)

- **Art. 47.1**: BCRs subject to approval by competent supervisory authority
- **Art. 47.2**: BCRs must be legally binding, enforced, include data subject rights, and other requirements
- **Art. 47.3**: Commission may specify format and procedures for BCRs

## Related Signals

- `CSE-GDPR-TRANSFER-NO-SAFEGUARDS-003`
- `CSE-GDPR-TRANSFER-NO-TRANSFER-ASSESSMENT-001`
