# CSE-HITRUST-NETWORK-NO-ENCRYPTION-003

**Network Encryption Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-NETWORK-NO-ENCRYPTION-003` |
| Domain | HITRUST |
| Category | NETWORK |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Network communications encryption has not been implemented to protect protected health information (PHI) or other sensitive data transmitted across networks.

This signal indicates the absence of encryption for data in transit over networks, including internal networks, external connections, wireless networks, and internet communications. Network encryption is essential for protecting PHI from interception, eavesdropping, and unauthorized disclosure during transmission.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers
- Telemedicine and remote health monitoring platforms

## Examples (Non-Normative)

### Unencrypted Database Connections

```yaml
# Application connecting to database without TLS
database:
  host: "db.internal.example.com"
  port: 5432
  ssl_mode: "disable"
  encryption: false
  connection_string: "postgresql://user:pass@db.internal.example.com/phi_database"
```

### HTTP Instead of HTTPS

```json
{
  "web_application": {
    "url": "http://portal.healthcare.example",
    "protocol": "HTTP",
    "tls_enabled": false,
    "patient_data_transmitted": true
  }
}
```

### Unencrypted Wireless Network

```yaml
# Wireless network without encryption
wireless:
  ssid: "Hospital-Staff-WiFi"
  security: "Open"
  encryption: null
  authentication: "none"
  phi_accessible: true
```

### Missing VPN for Remote Access

```json
{
  "remote_access": {
    "method": "direct_rdp",
    "vpn_required": false,
    "encryption": "none",
    "phi_systems_accessible": true
  }
}
```

## What This Signal Does NOT Assert

- Whether data at rest encryption is implemented
- The quality or strength of encryption algorithms used
- Whether the organization is compliant or non-compliant with HITRUST
- The specific encryption protocols or standards required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 18 - Network Security
- **Control Reference**: 18.c
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing network encryption that:
- Protects PHI during transmission across all network types
- Implements strong cryptographic protocols (TLS 1.2+, IPsec)
- Encrypts wireless communications (WPA3 or equivalent)
- Secures remote access connections (VPN, SSH tunneling)
- Implements end-to-end encryption for sensitive communications

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-NETWORK-NO-PERIMETER-002` - Network perimeter controls missing
- `CSE-HITRUST-SDLC-NO-CRYPTOGRAPHY-005` - Cryptography controls missing
- `CSE-HITRUST-SDLC-NO-KEY-MANAGEMENT-006` - Key management missing
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` - CMMC encryption requirements (if defined)
- `CSE-HIPAA-TECH-NO-TRANSMISSION-SECURITY-001` - HIPAA transmission security (if defined)

## Notes

Detection of this signal typically involves:

- Review of network protocol configurations
- Analysis of TLS/SSL certificate deployments
- Examination of VPN and remote access configurations
- Assessment of wireless network security settings
- Verification of database connection encryption
- Analysis of application communication protocols
- Testing for unencrypted data transmission

The presence of this signal indicates a critical gap in data protection that exposes PHI to interception and unauthorized disclosure, and should be addressed immediately for HITRUST compliance.
