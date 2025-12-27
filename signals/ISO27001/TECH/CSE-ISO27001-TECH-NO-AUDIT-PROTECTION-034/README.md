# CSE-ISO27001-TECH-NO-AUDIT-PROTECTION-034

**Unprotected Information Systems During Audit Testing**

## Signal Overview

| Field           | Value                                           |
|-----------------|-------------------------------------------------|
| Identifier      | `CSE-ISO27001-TECH-NO-AUDIT-PROTECTION-034`     |
| Domain          | ISO27001                                        |
| Category        | TECH                                            |
| Status          | Active                                          |
| Introduced In   | 1.0.0                                           |

## Description

Audit tests and activities involving assessment of operational systems are not planned and controlled.

This signal indicates that security audits, penetration testing, vulnerability assessments, or compliance testing activities are performed without proper planning, authorization, scope definition, or safeguards to prevent service disruption or data loss.

## Applicability

This signal applies to:

- Penetration testing and ethical hacking
- Vulnerability scanning and assessments
- Security audits and reviews
- Compliance audits (SOC 2, ISO 27001, PCI DSS)
- Internal and external security assessments
- Red team exercises
- Configuration reviews
- Code audits and reviews
- System performance testing

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Penetration Test Without Authorization

```text
Incident Report:
"Production database became unavailable during business hours"

Investigation:
- External penetration tester performed DoS testing
- No written authorization documented
- Scope not clearly defined
- Production systems not excluded
- Business hours not restricted
- No coordination with operations team
```

### Vulnerability Scan Without Controls

```bash
# Automated vulnerability scan
nmap -sV -p- --script vuln production-subnet/24

# No rate limiting
# No scan windows defined
# Production systems included
# No notification to operations
# No rollback plan if services fail
```

### Audit Without Rules of Engagement

```text
Security Assessment Engagement:
Tester: External consultant
Scope: "Network and applications"

Missing:
❌ Written authorization
❌ Rules of engagement
❌ Testing windows
❌ Out-of-scope systems list
❌ Emergency contacts
❌ Service disruption procedures
❌ Data handling requirements
```

### Uncontrolled Production Testing

```python
# Security testing script
def test_authentication_bypass():
    for i in range(10000):
        # Brute force test on production login
        response = requests.post(
            "https://prod-app.example.com/login",
            data={"username": f"test{i}", "password": "test"}
        )

# No rate limiting
# No test environment
# Production users affected
# No monitoring coordination
```

### Missing Audit Planning

```text
Compliance Audit Process:
1. Auditor arrives on-site
2. Requests access to systems
3. Begins testing immediately

Missing:
- Pre-audit planning meeting
- Scope agreement
- Access authorization process
- System inventory review
- Impact assessment
- Backup verification
- Communication plan
```

## What This Signal Does NOT Assert

- Whether the configuration is intentional or accidental
- Whether compensating controls exist elsewhere
- The likelihood or impact of audit-related disruptions
- Compliance or non-compliance with ISO 27001 or any framework
- Required remediation actions

## ISO 27001:2022 Context (Informative)

This signal is relevant to:

- **A.8.34**: Protection of information systems during audit testing - Audit tests and other assurance activities involving assessment of operational systems should be planned and agreed between the tester and appropriate management

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-ISO27001-TECH-NO-CHANGE-MANAGEMENT-032` — Missing change management
- `CSE-ISO27001-ORG-NO-RISK-ASSESSMENT-001` — Inadequate risk assessment
- `CSE-ISO27001-TECH-NO-SECURITY-TESTING-029` — Missing security testing

## Notes

Detection of this signal typically involves:

- Review of audit planning and authorization procedures
- Analysis of rules of engagement documentation
- Inspection of testing scope and limitations
- Assessment of coordination with operations teams
- Examination of service impact assessments
- Review of backup and recovery procedures before testing
- Evaluation of testing windows and schedules
- Assessment of emergency response procedures

Key audit protection controls include:
- Written authorization and approval
- Clear rules of engagement
- Defined scope and limitations
- Out-of-scope system identification
- Testing windows (maintenance windows, off-hours)
- Service impact assessment
- Backup verification before testing
- Coordination with operations and security teams
- Emergency contact procedures
- Real-time monitoring during tests
- Incident response readiness
- Data handling and confidentiality agreements

The presence of this signal indicates a condition that warrants review in the context of audit testing protection requirements.
