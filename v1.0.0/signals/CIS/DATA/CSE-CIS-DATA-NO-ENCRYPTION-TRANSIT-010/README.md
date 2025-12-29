# CSE-CIS-DATA-NO-ENCRYPTION-TRANSIT-010

**Encryption in Transit Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|--------------------------------------------|
| Identifier      | `CSE-CIS-DATA-NO-ENCRYPTION-TRANSIT-010`  |
| Domain          | CIS                                        |
| Category        | DATA                                       |
| Control         | 03 - Data Protection                       |
| Safeguard       | 3.10                                       |
| IG Level        | IG2                                        |
| Asset Type      | Data                                       |
| Security Function | Protect                                  |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                     |

## Description

Sensitive data transmitted over networks is not encrypted, exposing it to interception, eavesdropping, or man-in-the-middle attacks.

This signal indicates that data communications use unencrypted protocols (HTTP, FTP, Telnet, etc.) or do not enforce encryption, allowing network traffic to be captured and read in plaintext.

## Applicability

This signal applies to:

- Web applications and APIs
- Database connections
- Email transmission (SMTP, IMAP, POP3)
- File transfers (FTP, SMB, NFS)
- Remote access and administration
- Internal network communications
- Cloud service connections
- Mobile application communications
- IoT device communications

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### HTTP Without TLS

```nginx
# Web server configuration without TLS
server {
    listen 80;
    server_name app.example.com;

    location / {
        proxy_pass http://backend:8080;
    }
    # No TLS/SSL configuration
    # All traffic in plaintext
}
```

### Unencrypted Database Connection

```python
# Application connecting to database without TLS
import pymysql

connection = pymysql.connect(
    host='db.example.com',
    user='app_user',
    password='secret123',
    database='customer_db'
    # No ssl parameter
    # Connection unencrypted
)
```

### FTP File Transfer

```bash
# Automated file transfer using FTP
#!/bin/bash
ftp -n ftp.example.com <<EOF
user username password
binary
put customer_data.csv /incoming/
quit
EOF
# Credentials and data sent in plaintext
```

### Unencrypted API Communication

```javascript
// Mobile app communicating with API
const fetchUserData = async (userId) => {
  const response = await fetch(
    `http://api.example.com/users/${userId}`,
    {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  );
  // HTTP instead of HTTPS
  // Token and data exposed in transit
  return response.json();
};
```

## What This Signal Does NOT Assert

- Whether the network is otherwise secured
- The specific encryption protocol required
- The strength of encryption if present
- Whether VPN or network segmentation exists
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Context (Informative)

This signal is relevant to CIS Control 3:

- **Safeguard 3.10**: Encrypt Sensitive Data in Transit

This reference is informative and does not constitute compliance guidance.

## Related Signals

- `CSE-CIS-DATA-NO-ENCRYPTION-AT-REST-006` — Encryption at Rest Missing
- `CSE-CMMC-COMMS-NO-ENCRYPTION-TRANSIT-001` — Encryption in Transit Missing (CMMC)
- `CSE-CMMC-COMMS-WEAK-CRYPTO-004` — Weak Cryptography

## Notes

Detection of this signal typically involves:

- Analysis of network traffic captures
- Review of application and service configurations
- Examination of TLS/SSL certificate usage
- Assessment of protocol enforcement policies
- Verification of encrypted protocol adoption (HTTPS, SFTP, SSH)
- Review of database connection encryption
- Analysis of API security configurations
- Examination of email security (STARTTLS, TLS)
- Assessment of VPN and tunnel configurations
- Review of cloud service connection settings

The presence of this signal indicates a condition that warrants review in the context of data confidentiality and network security requirements.
