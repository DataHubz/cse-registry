# CSE-CMMC-MEDIA-NO-PROTECTION-002

**Media Protection Not Implemented**

## Signal Overview

| Field           | Value                                 |
|-----------------|---------------------------------------|
| Identifier      | `CSE-CMMC-MEDIA-NO-PROTECTION-002`    |
| Domain          | CMMC                                  |
| Category        | MEDIA                                 |
| Status          | Active                                |
| Introduced In   | 1.0.0                                 |

## Description

Physical and digital storage media containing sensitive information is not protected from unauthorized access.

This signal indicates that media may be accessed, copied, or removed without appropriate controls.

## Applicability

This signal applies to:

- Removable storage devices
- Backup tapes and media
- Portable hard drives
- USB flash drives
- Printed documents
- Optical media
- Mobile devices

## Examples (Non-Normative)

### Uncontrolled Removable Media

```
USB Policy: Not enforced
Removable Media: Unrestricted
Encryption: Not required
```

### Unsecured Backup Media

```
Backup tape storage: Unlocked cabinet
Access control: None
Inventory: Not maintained
```

### No Media Tracking

```
Media Inventory: Not maintained
Chain of custody: Not documented
```

## What This Signal Does NOT Assert

- Whether media has been accessed inappropriately
- Whether data has been exfiltrated
- The sensitivity of data on media
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **MP.L2-3.8.1**: Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital
- **MP.L2-3.8.2**: Limit access to CUI on system media to authorized users

## Related Signals

- `CSE-CMMC-MEDIA-NO-SANITIZATION-001` — Media Sanitization Not Performed
- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` — Data Not Encrypted at Rest
