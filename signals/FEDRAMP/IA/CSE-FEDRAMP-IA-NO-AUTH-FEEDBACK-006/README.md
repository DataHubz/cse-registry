# CSE-FEDRAMP-IA-NO-AUTH-FEEDBACK-006

**No Authentication Feedback Protection**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-FEDRAMP-IA-NO-AUTH-FEEDBACK-006` |
| Domain          | FEDRAMP                                  |
| Category        | IA                                       |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

Information systems do not obscure feedback during the authentication process to protect authentication information.

## Applicability

This signal applies to:

- Cloud Service Providers seeking FedRAMP authorization
- Federal agencies using cloud services
- Third-party assessment organizations (3PAOs)
- Systems processing federal information

## FedRAMP Context (Informative)

**Control Family:** Identification and Authentication (IA)
**Control:** IA-6
**Baseline:** Low, Moderate, High

**NIST 800-53 Text:** "Obscure feedback of authentication information during the authentication process to protect the information from possible exploitation/use by unauthorized individuals."

This reference is informative and does not constitute compliance guidance.

## Notes

Detection guidance: Look for password fields that display characters in clear text, systems that echo passwords to the screen or logs, authentication feedback that reveals password length or complexity, error messages that differentiate between invalid username and invalid password, and systems that display authentication credentials during transmission or storage. Check login interfaces, API authentication, and CLI tools.
