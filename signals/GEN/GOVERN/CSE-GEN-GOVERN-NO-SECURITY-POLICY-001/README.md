# CSE-GEN-GOVERN-NO-SECURITY-POLICY-001

**Information Security Policy Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-GOVERN-NO-SECURITY-POLICY-001`   |
| Domain          | GEN (General)                             |
| Category        | GOVERN                                    |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

No documented information security policies exist that define security objectives, responsibilities, and acceptable use of information systems and resources.

This signal indicates that an organization lacks formalized security policies to govern how information assets should be protected, how personnel should handle sensitive data, and what security practices are expected.

## Applicability

This signal applies to:

- Enterprise organizations of all sizes
- Cloud service providers
- Healthcare organizations handling PHI
- Financial services institutions
- Government contractors
- Organizations processing payment card data
- Any organization with regulatory compliance requirements
- Software development organizations
- Service providers handling customer data

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Missing Security Policy Document

```
# Indicators of missing security policy:
- No documented acceptable use policy for IT resources
- No written data classification and handling procedures
- No formal password and authentication requirements
- No documented access control policies
- No incident response policy
- No data retention and disposal policy
```

### Undocumented Security Requirements

```yaml
# Organization characteristics indicating missing policy:
organization:
  security_documentation:
    formal_policy: false
    acceptable_use_policy: false
    data_classification_policy: false
    access_control_policy: false
  governance:
    security_objectives_defined: false
    roles_and_responsibilities: undefined
```

### Policy Gap Assessment

```
Missing Policy Components:
- Information security objectives and scope
- Security roles and responsibilities
- Asset management requirements
- Access control principles
- Cryptographic controls requirements
- Physical security requirements
- Incident management procedures
- Business continuity requirements
- Compliance requirements
```

## What This Signal Does NOT Assert

- Whether informal security practices exist
- The quality or effectiveness of existing controls
- Whether the organization has experienced security incidents
- Compliance or non-compliance with any specific framework
- The maturity level of the security program
- Required policy content or structure
- Whether compensating controls are in place

## Related Signals

- `CSE-GEN-GOVERN-NO-RISK-ASSESSMENT-002` — Risk assessment process missing
- `CSE-GEN-GOVERN-NO-SECURITY-ROLES-003` — Security roles and responsibilities undefined
- `CSE-GEN-GOVERN-NO-COMPLIANCE-REVIEW-005` — No compliance review process
- `CSE-GEN-GOVERN-NO-TRAINING-004` — Security awareness training missing

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **HIPAA**: 164.308(a)(1)(i) — Security management process
- **HIPAA**: 164.316(b)(1) — Policies and procedures must be documented
- **SOC 2**: CC1.2 — Management establishes structures, reporting lines, and authorities
- **SOC 2**: CC2.2 — Communication of security policies
- **ISO 27001**: A.5.1.1 — Policies for information security
- **ISO 27001**: A.5.1.2 — Review of the policies for information security
- **PCI DSS**: Requirement 12.1 — Establish, publish, maintain security policy
- **CIS Controls**: 2.1 — Establish and maintain a software inventory
- **CIS Controls**: 5.1 — Establish and maintain an inventory of accounts
- **CMMC**: AC.L1-3.1.1 — Limit system access to authorized users
- **NIST CSF**: ID.GV-1 — Organizational information security policy
- **NIST CSF**: PR.IP-1 — Baseline configuration of IT/OT hardware and software

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Document review and gap analysis
- Interviews with management and security personnel
- Review of governance documentation repositories
- Assessment of security program maturity
- Audit findings and compliance reports
- Review of employee onboarding materials

The presence of this signal indicates a fundamental governance gap that affects the organization's ability to establish consistent security practices and demonstrate compliance with regulatory requirements.

Organizations should prioritize developing and documenting security policies as a foundation for their security program. Policies should be:

- Approved by management
- Communicated to all relevant personnel
- Reviewed and updated regularly
- Aligned with business objectives and risk appetite
- Mapped to applicable regulatory requirements
