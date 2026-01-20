# CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001

**Data Not Encrypted in Transit**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001`   |
| Domain          | CMMC                                         |
| Category        | COMMS                                        |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

Data transmitted between systems, services, or networks is not encrypted.

This signal indicates that sensitive information may be exposed to interception or eavesdropping during transmission over network connections.

## Applicability

This signal applies to:

- Web traffic (HTTP without TLS)
- API communications
- Database connections
- Email transmission (SMTP without TLS)
- File transfer protocols (FTP, unencrypted SMB)
- Internal microservice communication
- Remote access connections
- Backup and replication traffic

## Examples (Non-Normative)

### HTTP Without TLS

```nginx
server {
    listen 80;
    # No TLS configuration
}
```

### Unencrypted Database Connection

```python
connection = psycopg2.connect(
    host="db.example.com",
    sslmode="disable"
)
```

### FTP Instead of SFTP

```bash
ftp://server.example.com/files
# Instead of sftp://server.example.com/files
```

### Internal Service Without TLS

```yaml
# Kubernetes service without TLS
apiVersion: v1
kind: Service
metadata:
  name: backend
spec:
  ports:
    - port: 8080  # No TLS termination
```

## What This Signal Does NOT Assert

- Whether sensitive data is actually transmitted
- Whether network isolation provides compensation
- The likelihood of interception
- Compliance or non-compliance with any framework
- Required remediation actions

## CMMC Context (Informative)

This signal is relevant to:

- **SC.L2-3.13.8**: Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards

## Related Signals

- `CSE-CMMC-COMMS-NO-ENCRYPTION-REST-002` — Data Not Encrypted at Rest
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004` — Weak Cryptographic Configuration
