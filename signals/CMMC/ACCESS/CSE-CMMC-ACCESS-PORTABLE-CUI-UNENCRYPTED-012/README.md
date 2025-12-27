# CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012

**CUI on Portable Storage Not Encrypted**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Controlled Unclassified Information stored on portable storage devices is not encrypted.

This signal indicates that CUI may be exposed if portable storage devices are lost, stolen, or improperly accessed.

## Applicability

- USB flash drives
- External hard drives
- SD cards and memory cards
- Removable SSDs
- Any portable media containing CUI

## Examples (Non-Normative)

### Unencrypted USB Drive

```
Device: USB Flash Drive
Encryption: None
Contents: CUI documents
```

### No Encryption Policy Enforced

```xml
<RemovableStoragePolicy>
  <RequireEncryption>false</RequireEncryption>
  <AllowUnencryptedMedia>true</AllowUnencryptedMedia>
</RemovableStoragePolicy>
```

## CMMC Context (Informative)

- **AC.L2-3.1.19**: Encrypt CUI on mobile devices and mobile computing platforms

## Related Signals

- `CSE-CMMC-ACCESS-MOBILE-UNCONTROLLED-011`
- `CSE-CMMC-MEDIA-NOT-ENCRYPTED-002`
