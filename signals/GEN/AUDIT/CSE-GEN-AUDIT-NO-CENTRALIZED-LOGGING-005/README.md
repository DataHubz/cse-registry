# CSE-GEN-AUDIT-NO-CENTRALIZED-LOGGING-005

**Centralized Logging Missing**

## Signal Overview

| Field           | Value                                        |
|-----------------|----------------------------------------------|
| Identifier      | `CSE-GEN-AUDIT-NO-CENTRALIZED-LOGGING-005`   |
| Domain          | GEN (General)                                |
| Category        | AUDIT                                        |
| Status          | Active                                       |
| Introduced In   | 1.0.0                                        |

## Description

Logs from multiple systems are not aggregated to a central location for correlation and analysis.

This signal indicates that audit logs remain dispersed across individual systems, applications, or devices, making it difficult to correlate events, detect distributed attacks, perform comprehensive security analysis, or conduct efficient incident investigations.

## Applicability

This signal applies to:

- Multi-system environments (servers, workstations, devices)
- Distributed applications and microservices
- Cloud and hybrid infrastructure
- Network devices and security appliances
- Container and orchestration platforms
- Multi-tenant and multi-region deployments
- Development, staging, and production environments
- Security information and event management (SIEM) implementations
- Log aggregation and analytics platforms

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

### Local Logging Only

```bash
# Each server logs locally with no forwarding
$ tail /var/log/auth.log
Dec 27 12:00:00 server1 sshd[1234]: Failed password for admin
$ ssh server2
$ tail /var/log/auth.log
Dec 27 12:01:00 server2 sshd[5678]: Failed password for admin
# Related attack pattern not visible from either system alone
```

### Application Logs on Individual Containers

```yaml
# Docker Compose without centralized logging
version: '3'
services:
  web:
    image: nginx
    # Default json-file driver - logs stay on container
  app:
    image: myapp
    # No log aggregation configured
  db:
    image: postgres
    # Each container maintains separate logs
```

### Cloud Resources Without Log Forwarding

```json
{
  "EC2Instances": [
    {
      "InstanceId": "i-1234567890abcdef0",
      "CloudWatchLogAgent": "Not Installed"
    },
    {
      "InstanceId": "i-0987654321fedcba0",
      "CloudWatchLogAgent": "Not Installed"
    }
  ]
}
```

### Microservices Without Log Aggregation

```python
# Each microservice logs independently
# auth-service
logging.basicConfig(filename='/var/log/auth-service.log')

# payment-service
logging.basicConfig(filename='/var/log/payment-service.log')

# order-service
logging.basicConfig(filename='/var/log/order-service.log')

# No correlation possible across services
```

### Network Devices Logging Locally

```conf
# Cisco router without syslog forwarding
Router(config)# logging buffered 51200
Router(config)# logging console
# No 'logging host' configured - logs stay on device
```

### Kubernetes Without Centralized Logging

```yaml
# Kubernetes cluster with default logging
apiVersion: v1
kind: Pod
metadata:
  name: app-pod
spec:
  containers:
  - name: app
    image: myapp:latest
    # No log aggregation sidecar
    # No cluster-level logging solution (EFK, Loki, etc.)
```

### Multiple Cloud Platforms Unintegrated

```text
Environment:
- AWS CloudTrail → S3 bucket (not exported)
- Azure Monitor → Log Analytics workspace (isolated)
- GCP Cloud Logging → Cloud Storage (separate)
- On-premises servers → Local syslog (not forwarded)

No central SIEM or log aggregation platform
```

## What This Signal Does NOT Assert

- Whether logs from individual systems are adequate for local troubleshooting
- The specific centralized logging solution required
- Whether manual log collection procedures are in place
- The volume or velocity of logs that need aggregation
- Compliance or non-compliance with any specific framework
- Required remediation actions or implementation architecture
- Whether correlation is being performed through other means

## Related Framework Signals

This signal may be related to framework-specific centralized logging signals:

- `CSE-CMMC-AUDIT-NO-CENTRAL-MANAGEMENT-006` — CMMC central log management requirements
- `CSE-CIS-AUDIT-NO-CENTRALIZED-*` — CIS centralized logging requirements (if defined)
- `CSE-NISTCSF-AUDIT-NO-CENTRALIZED-*` — NIST CSF centralized logging requirements (if defined)
- `CSE-ISO27001-AUDIT-NO-CENTRALIZED-*` — ISO 27001 centralized logging requirements (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CIS Controls**: Control 8.9 (Centralize audit logs), Control 8.11 (Conduct audit log reviews)
- **NIST CSF**: DE.AE-3 (Event data are collected and correlated from multiple sources)
- **ISO 27001**: A.12.4.1 (Event logging), A.16.1.7 (Collection of evidence)
- **CMMC**: AU.L2-3.3.7 (Provide audit record reduction and report generation)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Inventorying log sources across the environment
- Checking for log forwarding configurations (syslog, agents, etc.)
- Reviewing SIEM or log aggregation platform integrations
- Testing whether logs from multiple systems are searchable in one location
- Examining network flow for log transmission to central servers
- Verifying cloud platform log export configurations
- Assessing container and orchestration logging architectures

Benefits of centralized logging:

- Cross-system correlation and pattern detection
- Unified security event analysis and alerting
- Simplified compliance reporting and audit
- Efficient incident investigation and forensics
- Protection against local log tampering or deletion
- Scalable storage and retention management
- Advanced analytics and machine learning capabilities
- Single pane of glass for security monitoring

Common centralized logging solutions:

- SIEM platforms (Splunk, QRadar, ArcSight, Sentinel)
- Open-source stacks (ELK/EFK, Graylog, Loki)
- Cloud-native services (CloudWatch Logs, Azure Monitor, GCP Cloud Logging)
- Syslog aggregation servers
- Security data lakes and analytics platforms

The presence of this signal indicates a significant gap in security visibility and incident detection capabilities, particularly for distributed attacks or multi-stage compromises that span multiple systems.
