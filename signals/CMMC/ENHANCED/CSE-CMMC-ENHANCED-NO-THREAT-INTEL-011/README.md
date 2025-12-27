# CSE-CMMC-ENHANCED-NO-THREAT-INTEL-011

**Threat Intelligence Program Not Established**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ENHANCED-NO-THREAT-INTEL-011` |
| Domain | CMMC |
| Category | ENHANCED |
| Status | Active |
| Introduced In | 1.0.0 |
| CMMC Level | 3 |

## Description

A threat intelligence program for gathering and analyzing threat data is not established.

This signal indicates that emerging threats may not be identified or addressed proactively.

## Applicability

- Threat intelligence feeds
- Intelligence analysis
- Information sharing (ISACs)
- IOC management
- Threat briefings

## Examples (Non-Normative)

### No Threat Intel Program

```yaml
threat_intelligence:
  program_established: false
  intel_feeds: none
  information_sharing: not_participating
```

### No Intel Integration

```
Threat Intel Assessment:
  Commercial Feeds: None
  ISAC Membership: None
  IOC Integration: Not implemented
```

## CMMC Level 3 Context (Informative)

- **L3-SI.3.14.4e**: Establish a threat intelligence program

## Related Signals

- `CSE-CMMC-ENHANCED-NO-APT-PROTECTION-003`
- `CSE-CMMC-ENHANCED-NO-THREAT-HUNTING-004`
