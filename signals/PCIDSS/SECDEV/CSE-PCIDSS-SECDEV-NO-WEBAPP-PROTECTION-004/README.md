# CSE-PCIDSS-SECDEV-NO-WEBAPP-PROTECTION-004

**No Web Application Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-PCIDSS-SECDEV-NO-WEBAPP-PROTECTION-004` |
| Domain          | PCIDSS                                   |
| Category        | SECDEV                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Public-facing web applications are not protected against attacks.

## Applicability

This signal applies to:

- Organizations processing, storing, or transmitting cardholder data
- Payment application developers
- E-commerce platforms and merchants
- Systems and endpoints within CDE scope
- Web applications handling payment data

## PCI DSS Context (Informative)

**Requirement:** 6.4 - Public-facing web applications are protected against attacks

**Sub-Requirement:** 6.4.1, 6.4.2, 6.4.3

**Regulatory Text:** "For public-facing web applications, an automated technical solution is deployed that continually detects and prevents web-based attacks, as follows: Is installed in front of public-facing web applications and is configured to detect and prevent web-based attacks. Actively running and up to date. Generating audit logs. Configured to either block web-based attacks or generate an alert."

These references are informative and do not constitute compliance guidance.

## Notes

Detection guidance: Identify public-facing web applications without Web Application Firewall (WAF) protection or equivalent automated security controls. Monitor for WAFs in detection-only mode without active blocking capabilities. Check for outdated WAF rulesets or missing OWASP Top 10 coverage. Review web application security testing results for vulnerabilities that should be mitigated by protective controls. Detect gaps in web application layer logging and monitoring that would prevent attack detection.
