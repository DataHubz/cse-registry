# CSE-CIS-DATA-NO-ENCRYPTION-REMOVABLE-009

**Removable Media Encryption Missing**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-ENCRYPTION-REMOVABLE-009`  |
| Domain          | CIS                                          |
| Category        | DATA                                         |
| Control         | 03 - Data Protection                         |
| Safeguard       | 3.9                                          |
| IG Level        | IG2                                          |
| Asset Type      | Data                                         |
| Security Function | Protect                                    |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                       |

## Description

Removable media devices such as USB drives, external hard drives, or portable storage are not encrypted, creating risk of data exposure if the device is lost or stolen.

This signal indicates that data stored on portable media can be accessed by anyone who physically obtains the device, without requiring authentication or decryption.

## Applicability

This signal applies to:

- USB flash drives and thumb drives
- External hard drives and SSDs
- SD cards and microSD cards
- Optical media (CDs, DVDs, Blu-ray)
- Portable backup drives
- Encrypted USB devices (not properly configured)
- Mobile device external storage
- Camera and recording device storage
- Legacy backup tapes

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unencrypted USB Drives

```bash
# USB drive mounted without encryption
$ mount | grep /dev/sdb1
/dev/sdb1 on /media/usb type vfat (rw,nosuid,nodev)

$ ls /media/usb/
customer_database_backup.sql
employee_records.xlsx
financial_statements_Q4.pdf
# Sensitive files accessible without password
```

### No BitLocker on External Drives

```powershell
# External drive without BitLocker
PS> Get-BitLockerVolume -MountPoint "E:"

MountPoint : E:
EncryptionMethod : None
VolumeStatus : FullyDecrypted
ProtectionStatus : Off
# Corporate data on unencrypted drive
```

### Backup Media Unencrypted

```yaml
# Backup configuration without encryption
backup_job:
  source: /data/customer_records
  destination: /dev/sdc1  # External USB drive
  schedule: "daily"
  encryption: disabled
  # Backups written in plaintext
  # Anyone with drive can read backups
```

### Mobile Device SD Card

```java
// Android app writing to external storage
File sdCard = Environment.getExternalStorageDirectory();
File dataFile = new File(sdCard, "app_data.db");

// Write sensitive data to SD card
FileOutputStream fos = new FileOutputStream(dataFile);
fos.write(sensitiveData.getBytes());
// SD card not encrypted
// Data readable if card removed
```

## What This Signal Does NOT Assert

- Whether removable media use is authorized
- The specific encryption method required
- Whether the device is password protected
- Whether data on the media is actually sensitive
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.9**: Encrypt Data on Removable Media

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-ENCRYPTION-AT-REST-006` — Encryption at Rest Missing
- `CSE-CMMC-MEDIA-NO-PROTECTION-002` — Media Protection Missing
- `CSE-CMMC-ACCESS-PORTABLE-CUI-UNENCRYPTED-012` — Portable CUI Unencrypted

## Notes

Detection of this signal typically involves:

- Review of removable media encryption policies
- Assessment of endpoint encryption enforcement
- Examination of USB device control settings
- Analysis of BitLocker or FileVault configurations
- Verification of encrypted USB device usage
- Review of backup media encryption
- Assessment of mobile device encryption policies
- Examination of device management platforms (MDM/UEM)
- Analysis of removable media access logs

The presence of this signal indicates a condition that warrants review in the context of data protection and physical security requirements.
