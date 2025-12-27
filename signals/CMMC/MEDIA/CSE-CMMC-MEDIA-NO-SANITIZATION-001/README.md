# CSE-CMMC-MEDIA-NO-SANITIZATION-001

**Media Sanitization Not Performed**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-CMMC-MEDIA-NO-SANITIZATION-001`   |
| Domain          | CMMC                                   |
| Category        | MEDIA                                  |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Storage media is disposed of or repurposed without proper sanitization to remove sensitive data.

This signal indicates that data may remain recoverable from media after its intended lifecycle.

## Applicability

This signal applies to:

- Hard disk drives (HDD)
- Solid state drives (SSD)
- USB and removable storage
- Backup tapes
- Optical media (CD/DVD)
- Mobile device storage
- Cloud storage decommissioning

## Examples (Non-Normative)

### No Sanitization Procedure

```
Media Disposal Process:
1. Remove drive from system
2. Place in recycling bin
# No sanitization step
```

### Insufficient Sanitization

```bash
# Simple delete is not sanitization
rm -rf /data/*
# Data remains recoverable
```

### No Disposal Records

```
Media Disposal Log: Not maintained
Certificate of Destruction: Not obtained
```

## What This Signal Does NOT Assert

- Whether data has been recovered
- The sensitivity of data on media
- Whether physical security compensates
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **MP.L2-3.8.3**: Sanitize or destroy system media containing CUI before disposal or release for reuse

## Related Signals

- `CSE-CMMC-MEDIA-NO-PROTECTION-002` — Media Protection Not Implemented
- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` — Data Not Encrypted at Rest
