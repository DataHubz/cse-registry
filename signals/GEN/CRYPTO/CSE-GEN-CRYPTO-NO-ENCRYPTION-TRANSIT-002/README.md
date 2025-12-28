# CSE-GEN-CRYPTO-NO-ENCRYPTION-TRANSIT-002

**Encryption in Transit Missing**

## Signal Overview

| Field           | Value                                       |
|-----------------|---------------------------------------------|
| Identifier      | `CSE-GEN-CRYPTO-NO-ENCRYPTION-TRANSIT-002`  |
| Domain          | GEN (General)                               |
| Category        | CRYPTO                                      |
| Status          | Active                                      |
| Introduced In   | 1.0.0                                       |

## Description

Data is transmitted over networks without encryption (e.g., HTTP instead of HTTPS, unencrypted database connections).

This signal indicates that data in transit lacks cryptographic protection, potentially exposing confidential information to interception, eavesdropping, or man-in-the-middle attacks during transmission across networks.

## Applicability

This signal applies to:

- Web applications and APIs
- Database connections (client-to-server)
- Microservice communication
- Message queues and pub/sub systems
- Email transmission (SMTP)
- File transfer protocols (FTP, rsync)
- Remote access protocols (SSH, RDP)
- Mobile app backend communication
- Third-party API integrations

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```python
# HTTP request without TLS
import requests
response = requests.get('http://api.example.com/sensitive-data')
# Data transmitted in plaintext
```

```yaml
# Kubernetes service without TLS
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: my-app
  ports:
    - protocol: TCP
      port: 80  # Unencrypted HTTP
      targetPort: 8080
```

```java
// Database connection without SSL/TLS
String url = "jdbc:mysql://database.example.com:3306/mydb";
Connection conn = DriverManager.getConnection(url, user, password);
// No SSL parameters specified
```

```javascript
// WebSocket connection without encryption
const ws = new WebSocket('ws://api.example.com/stream');
// Using ws:// instead of wss://
```

```python
# SMTP without TLS
import smtplib
server = smtplib.SMTP('smtp.example.com', 25)
server.sendmail(from_addr, to_addr, message)
# No STARTTLS or SSL wrapper
```

```nginx
# Nginx configuration without SSL
server {
    listen 80;
    server_name api.example.com;
    location / {
        proxy_pass http://backend:8080;
    }
    # No SSL/TLS configuration
}
```

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether data has been intercepted during transmission
- Whether the communication occurs over trusted networks
- Compliance or non-compliance with any framework
- Required TLS version or cipher suite configuration
- Whether the data being transmitted is sensitive

## Related Signals

- `CSE-GEN-CRYPTO-WEAK-ALGORITHMS-004` — Weak cryptographic algorithms used
- `CSE-GEN-CRYPTO-NO-CERTIFICATE-MGMT-005` — Certificate management missing
- `CSE-GEN-AUTH-NO-SECURE-COMMS-001` — Insecure communication protocols (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 45 CFR 164.312(e)(1) (Transmission security)
- **ISO 27001**: A.13.1.1 (Network controls), A.14.1.2 (Securing application services on public networks)
- **GDPR**: Article 32 (Security of processing)
- **PCI DSS**: Requirement 4.1 (Use strong cryptography and security protocols)
- **CIS Controls**: Control 3.10 (Encrypt sensitive data in transit)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Network traffic analysis for unencrypted protocols
- Scanning application configurations for HTTP vs HTTPS endpoints
- Examining database connection strings for SSL/TLS parameters
- Reviewing API client configurations
- Analyzing service mesh or ingress controller settings
- Checking email server configurations for TLS support
- Monitoring certificate usage across services

The presence of this signal indicates a condition where data may be vulnerable to interception or tampering during network transmission.
