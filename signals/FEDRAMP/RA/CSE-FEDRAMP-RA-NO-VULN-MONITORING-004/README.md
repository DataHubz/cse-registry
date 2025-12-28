# CSE-FEDRAMP-RA-NO-VULN-MONITORING-004

**No Vulnerability Monitoring and Scanning**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-RA-NO-VULN-MONITORING-004` |
| Domain          | FEDRAMP                                  |
| Category        | RA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Vulnerability monitoring and scanning capabilities are not implemented to identify and track system vulnerabilities on an ongoing basis.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Risk Assessment (RA)
**Control:** RA-5
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "a. Monitor and scan for vulnerabilities in the system and hosted applications [Assignment: organization-defined frequency and/or randomly in accordance with organization-defined process] and when new vulnerabilities potentially affecting the system are identified and reported; b. Employ vulnerability monitoring tools and techniques that facilitate interoperability among tools and automate parts of the vulnerability management process by using standards for: 1. Enumerating platforms, software flaws, and improper configurations; 2. Formatting checklists and test procedures; and 3. Measuring vulnerability impact; c. Analyze vulnerability scan reports and results from vulnerability monitoring; d. Remediate legitimate vulnerabilities [Assignment: organization-defined response times] in accordance with an organizational assessment of risk; and e. Share information obtained from the vulnerability monitoring process and control assessments with [Assignment: organization-defined personnel or roles] to help eliminate similar vulnerabilities in other systems."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for absence of vulnerability scanning tools or processes, no evidence of regular vulnerability scans, missing vulnerability scan reports, lack of remediation tracking, failure to meet required scanning frequencies (monthly for operating systems and databases, monthly for web applications), and no vulnerability information sharing mechanisms.
