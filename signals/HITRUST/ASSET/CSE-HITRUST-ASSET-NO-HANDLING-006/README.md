# CSE-HITRUST-ASSET-NO-HANDLING-006

**Asset Handling Procedures Missing**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-HITRUST-ASSET-NO-HANDLING-006`   |
| Domain          | HITRUST                               |
| Category        | ASSET                                 |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

An organization lacks documented procedures for the secure handling, storage, transmission, and disposal of information assets according to their classification and sensitivity.

This signal indicates that there are no standardized guidelines for how different types of information should be processed, shared, stored, or destroyed throughout their lifecycle.

## Applicability

This signal applies to:

- Document creation and sharing
- Email and electronic communications
- Data transmission and transfer
- Physical document handling
- Media storage and transportation
- Information disposal and destruction
- Backup and archival processes
- Cloud data operations
- Print and copy procedures

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No Handling Procedures Documented

```text
# Organization lacks documented procedures for:

Storage:
  - How to store confidential documents
  - Where to save sensitive files
  - Encryption requirements by classification
  - Physical storage requirements

Transmission:
  - How to email sensitive information
  - When to use secure file transfer
  - Encryption requirements for data in transit
  - Approved transmission methods by classification

Disposal:
  - How to destroy confidential documents
  - Media sanitization procedures
  - When shredding is required
  - Electronic data deletion standards
```

### Data Transfer Without Guidelines

```python
# No established procedure for secure data transfer
def share_customer_data(recipient_email):
    # Should this use encryption?
    # Should this require approval?
    # Should this be logged?
    # No documented guidance exists

    df = pd.read_csv('customer_pii.csv')  # Contains SSNs, addresses
    df.to_csv('export.csv')

    # Sent via regular email with no encryption
    send_email(recipient_email, attachment='export.csv')
```

### Print Environment Without Controls

```yaml
# Printing configuration without handling procedures
printer_policy:
  default_printer: "Open floor printer"
  confidential_documents:
    separate_printer: false
    user_authentication: false
    automatic_deletion: false
    retrieval_monitoring: false
  # No procedures for:
  #   - Follow-me printing for sensitive docs
  #   - Secure printer locations
  #   - Document retrieval requirements
  #   - Abandoned print handling
```

### No Media Handling Standards

```text
# Removable media and backup handling undefined

USB Drives:
  - No encryption requirement
  - No approval process
  - No tracking system
  - No acceptable use guidance

Backup Tapes:
  - Storage location: undefined
  - Transportation method: undefined
  - Encryption requirement: undefined
  - Chain of custody: undefined
  - Destruction procedure: undefined
```

### Cloud Data Operations Without Procedures

```hcl
# Cloud storage configuration without handling procedures
resource "aws_s3_bucket" "sensitive_data" {
  bucket = "corporate-confidential-data"

  # No documented procedures for:
  # - How to upload data securely
  # - When to use bucket encryption
  # - How to share data externally
  # - When to delete/archive data
  # - How to handle data exports

  versioning {
    enabled = false  # No retention guidance
  }

  lifecycle_rule {
    enabled = false  # No lifecycle management procedures
  }
}
```

### No Disposal Procedures

```bash
#!/bin/bash
# Decommissioning script without proper handling procedures

# Should drives be degaussed or physically destroyed?
# Should data be securely wiped? How many passes?
# Should disposal be documented and verified?
# Should certificates of destruction be retained?

# Current process: undefined
rm -rf /data/*  # Simple deletion, no verification
```

## What This Signal Does NOT Assert

- Whether informal handling practices exist
- Whether users handle data securely without documented procedures
- Whether technical controls compensate for missing procedures
- Compliance or non-compliance with HITRUST or any framework
- Required handling procedures or standards

## HITRUST Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **07.f - Handling of Assets**: Procedures for handling assets should be developed and implemented in accordance with the information classification scheme adopted by the organization

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ASSET-NO-CLASSIFICATION-004` — Information classification missing
- `CSE-HITRUST-ASSET-NO-LABELING-005` — Information labeling missing
- `CSE-CMMC-MEDIA-NO-SANITIZATION-001` — Media sanitization procedures missing (if defined)
- `CSE-HITRUST-ASSET-NO-ACCEPTABLE-USE-003` — Acceptable use policy missing

## Notes

Detection of this signal typically involves:

- Review of information security policies and procedures
- Assessment of data handling guidelines documentation
- Evaluation of secure transmission procedures
- Analysis of media disposal and sanitization standards
- Review of physical document handling requirements
- Verification of cloud data operations procedures
- Assessment of print and copy handling controls

The presence of this signal indicates a condition that warrants review in the context of asset handling procedure requirements.
