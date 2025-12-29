# CSE-FEDRAMP-RA-NO-RISK-ASSESSMENT-003

**No Risk Assessment**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-RA-NO-RISK-ASSESSMENT-003` |
| Domain          | FEDRAMP                                  |
| Category        | RA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Risk assessments are not conducted to identify threats, vulnerabilities, likelihood, impact, and risk to organizational operations and assets.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Risk Assessment (RA)
**Control:** RA-3
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "a. Conduct a risk assessment, including: 1. Identifying threats to and vulnerabilities in the system; 2. Determining the likelihood and magnitude of harm from unauthorized access, use, disclosure, disruption, modification, or destruction of the system, the information it processes, stores, or transmits, and any related information; and 3. Determining the likelihood and impact of adverse effects on individuals arising from the processing of personally identifiable information; b. Integrate risk assessment results and risk management decisions from the organization and mission or business process perspectives with system-level risk assessments; c. Document risk assessment results in [Selection: security and privacy plans; risk assessment report; [Assignment: organization-defined document]]; d. Review risk assessment results [Assignment: organization-defined frequency]; e. Disseminate risk assessment results to [Assignment: organization-defined personnel or roles]; and f. Update the risk assessment [Assignment: organization-defined frequency] or when there are significant changes to the system, the facilities where the system resides, or other conditions that may impact the security or privacy state of the system."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing risk assessment reports, absence of threat and vulnerability identification, no documentation of likelihood and impact analysis, lack of regular risk assessment reviews, and no evidence of risk assessment updates when significant changes occur to the system.
