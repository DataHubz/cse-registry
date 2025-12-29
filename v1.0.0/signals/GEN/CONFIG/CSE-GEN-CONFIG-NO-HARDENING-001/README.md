# CSE-GEN-CONFIG-NO-HARDENING-001

**System Hardening Missing**

## Signal Overview

| Field           | Value                                  |
|-----------------|----------------------------------------|
| Identifier      | `CSE-GEN-CONFIG-NO-HARDENING-001`      |
| Domain          | GEN (General)                          |
| Category        | CONFIG                                 |
| Status          | Active                                 |
| Introduced In   | 1.0.0                                  |

## Description

Systems are not configured according to security hardening baselines; default or insecure configurations remain in place.

This signal indicates that systems may be running with vendor defaults, unnecessary services enabled, or without security hardening measures applied, increasing the attack surface and potential for compromise.

## Applicability

This signal applies to:

- Server operating systems (Linux, Windows, Unix)
- Network devices (routers, switches, firewalls)
- Database management systems
- Web servers and application servers
- Cloud virtual machines and instances
- Container images and runtime environments
- IoT and embedded devices
- Mobile device management configurations

## Examples (Non-Normative)

### SSH Server with Insecure Defaults

```bash
# /etc/ssh/sshd_config with default settings
PermitRootLogin yes
PasswordAuthentication yes
PermitEmptyPasswords yes
X11Forwarding yes
```

### Web Server Without Security Headers

```apache
# Apache configuration missing security hardening
<VirtualHost *:80>
    ServerName example.com
    # No security headers configured
    # X-Frame-Options, X-Content-Type-Options missing
</VirtualHost>
```

### Windows Server Default Configuration

```powershell
# Windows Server with default firewall rules
Get-NetFirewallRule | Where-Object {$_.Enabled -eq 'True' -and $_.Direction -eq 'Inbound'}
# Shows numerous default inbound rules enabled
# SMBv1 enabled, LLMNR/NetBIOS enabled
```

### Container Running as Root

```dockerfile
FROM node:latest
COPY . /app
WORKDIR /app
# No USER directive - runs as root
CMD ["node", "server.js"]
```

### Database with Default Settings

```sql
-- MySQL with default configuration
SELECT user, host FROM mysql.user WHERE user='root' AND host='%';
-- Root accessible from any host
SHOW VARIABLES LIKE 'local_infile';
-- local_infile enabled by default
```

## What This Signal Does NOT Assert

- Whether the system has been compromised
- The specific hardening standard that should be applied
- Whether compensating controls are in place
- Compliance or non-compliance with any framework
- The business justification for configuration choices
- Required remediation actions or timelines

## Related Framework Signals

This signal may be relevant to signals in various frameworks:

- `CSE-PCIDSS-CONFIG-NO-HARDENING-*` — PCI DSS hardening requirements
- `CSE-CIS-CONFIG-BENCHMARK-*` — CIS Benchmark compliance signals
- `CSE-CMMC-CONFIG-NO-BASELINE-001` — CMMC baseline configuration
- `CSE-NISTCSF-CONFIG-HARDENING-*` — NIST CSF hardening controls

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **PCI DSS**: Requirement 2.2 (Develop configuration standards for all system components)
- **CIS Controls**: Control 4.1 (Establish and Maintain a Secure Configuration Process)
- **CMMC**: CM.L2-3.4.2 (Establish and enforce security configuration settings)
- **NIST CSF**: PR.IP-1 (A baseline configuration of information technology is created and maintained)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Comparing current configurations against hardening benchmarks (CIS, DISA STIGs)
- Scanning for known insecure default settings
- Identifying unnecessary services and features enabled
- Checking for missing security-relevant configurations
- Validating against organization-specific baseline standards

The presence of this signal indicates that a review of system hardening practices is warranted.
