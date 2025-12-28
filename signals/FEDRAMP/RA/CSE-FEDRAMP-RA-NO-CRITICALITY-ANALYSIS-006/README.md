# CSE-FEDRAMP-RA-NO-CRITICALITY-ANALYSIS-006

**No Criticality Analysis**

## Signal Overview

| Field           | Value                                         |
|-----------------|-----------------------------------------------|
| Identifier      | `CSE-FEDRAMP-RA-NO-CRITICALITY-ANALYSIS-006` |
| Domain          | FEDRAMP                                       |
| Category        | RA                                            |
| Status          | Active                                        |
| Introduced In   | 1.0.0                                         |

## Description

Criticality analysis has not been performed to identify critical system components and functions that require special protection and contingency measures.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Risk Assessment (RA)
**Control:** RA-9
**Baseline:** Moderate, High

**NIST 800-53 Text:** "Identify critical system components and functions by performing a criticality analysis for [Assignment: organization-defined systems, system components, or system services] at [Assignment: organization-defined decision points in the system development life cycle]."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for missing criticality analysis documentation, absence of identified critical system components and functions, no classification of systems by criticality level, lack of integration with business impact analysis, and no evidence of criticality analysis at key system development life cycle decision points.
