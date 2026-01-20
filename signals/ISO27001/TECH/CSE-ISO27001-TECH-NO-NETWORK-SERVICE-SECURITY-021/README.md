# CSE-ISO27001-TECH-NO-NETWORK-SERVICE-SECURITY-021

**Insecure Network Services**

## Signal Overview

| Field           | Value                                                   |
|-----------------|---------------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-NETWORK-SERVICE-SECURITY-021`     |
| Domain          | ISO27001                                                |
| Category        | TECH                                                    |
| Status          | Active                                                  |
| Introduced In   | 1.0.0                                                   |

## Description

Security mechanisms, service levels, and requirements of network services are not identified and implemented.

This signal indicates that network services lack documented security requirements, service level agreements, authentication mechanisms, encryption, or appropriate security controls.

## Applicability

This signal applies to:

- Managed network services and ISP connections
- Cloud network services (VPN, direct connect, peering)
- Internal network services (DNS, DHCP, NTP, LDAP)
- File sharing and storage services
- Messaging and communication services
- API gateways and service meshes
- Third-party network service providers
- Content delivery networks (CDNs)
- Remote access services (VPN, bastion hosts)

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Unencrypted DNS Service

```yaml
# DNS configuration without DNS-over-TLS or DNSSEC
dns_servers:
  - 8.8.8.8
  - 8.8.4.4
dnssec_validation: no
dns_encryption: none
# No security requirements documented
```

### Network Service Without SLA

```text
# Third-party network service agreement
Service: MPLS WAN Connection
Security Requirements: Not Specified
Encryption: Not Specified
Availability SLA: Not Defined
Incident Response: Not Defined
Security Monitoring: Not Specified
```

### Unsecured Internal Services

```bash
# NTP server without authentication
server ntp.internal.example.com
# No symmetric key authentication
# No access controls

# LDAP without encryption
ldap://directory.example.com:389
# Should use ldaps:// on port 636
```

### API Without Security Controls

```yaml
# API gateway with minimal security
apiVersion: v1
kind: Service
metadata:
  name: api-gateway
spec:
  # No authentication requirement
  # No rate limiting
  # No TLS enforcement
  # No API key validation
  ports:
  - port: 80
    protocol: TCP
```

### VPN Without Strong Authentication

```text
# VPN configuration
Authentication: Password only
Encryption: PPTP (weak)
MFA: Disabled
Certificate Validation: Disabled
# No documented security requirements
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of service compromise
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.21**: Security of network services - Security mechanisms, service levels and requirements of network services should be identified, implemented and monitored

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-NETWORK-SECURITY-020` — Inadequate network security
- `CSE-ISO27001-TECH-NO-CRYPTOGRAPHY-024` — Missing cryptography controls
- `CSE-ISO27001-ORG-NO-SUPPLIER-SECURITY-001` — Inadequate supplier security

## Notes

Detection of this signal typically involves:

- Review of network service agreements and SLAs
- Analysis of service security requirements documentation
- Inspection of authentication and authorization mechanisms
- Assessment of encryption and protocol security
- Examination of service monitoring and logging
- Review of third-party service provider security controls
- Evaluation of service availability and resilience measures

The presence of this signal indicates a condition that warrants review in the context of network service security requirements.
