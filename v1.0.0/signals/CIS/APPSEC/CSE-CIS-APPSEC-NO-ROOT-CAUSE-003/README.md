# CSE-CIS-APPSEC-NO-ROOT-CAUSE-003

**Vulnerability Root Cause Analysis Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-ROOT-CAUSE-003`       |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented a process for performing root cause analysis of application security vulnerabilities.

This signal indicates the absence of a systematic approach to investigating why vulnerabilities occur, identifying underlying causes, and implementing preventive measures to avoid similar issues in the future.

## Applicability

This signal applies to:

- Application security teams
- Software development teams
- Security engineering teams
- DevSecOps teams
- Quality assurance teams
- Incident response teams
- Security operations centers
- Engineering leadership

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No RCA Process for Security Issues

```text
Vulnerability remediation without root cause analysis:
1. Vulnerability discovered
2. Patch applied
3. Ticket closed

Missing:
- Why did the vulnerability occur?
- What process failed to prevent it?
- Are similar vulnerabilities present elsewhere?
- What training is needed?
- What tools could have detected it earlier?
```

### Patch-and-Move-On Approach

```yaml
# Vulnerability tracking without RCA
vulnerability_workflow:
  discovery: logged
  severity_assessment: completed
  patch_deployment: completed
  verification: completed
  closure: completed
  # Missing:
  root_cause_analysis: not_performed
  preventive_actions: not_identified
  training_updates: not_conducted
  process_improvements: not_implemented
```

### No Pattern Analysis

```python
# Vulnerability database without trend analysis
class VulnerabilityTracker:
    def close_vulnerability(self, vuln_id):
        vuln = self.get_vulnerability(vuln_id)
        vuln.status = 'closed'
        vuln.remediation_date = datetime.now()
        self.save(vuln)

        # Missing:
        # self.analyze_root_cause(vuln)
        # self.identify_similar_patterns(vuln)
        # self.update_prevention_measures(vuln)
        # self.track_recurring_issues(vuln)
```

### Missing 5 Whys Analysis

```text
SQL Injection vulnerability found:
- Fixed by using parameterized queries

Missing root cause investigation:
- Why was SQL injection possible?
  - Developer used string concatenation
- Why did developer use string concatenation?
  - Not aware of parameterized queries
- Why wasn't developer aware?
  - No secure coding training provided
- Why no training?
  - No security training program exists
- Why no program?
  - Security not integrated into SDLC
```

### No Systemic Issue Identification

```json
{
  "vulnerability": "CVE-2024-1234",
  "type": "XSS",
  "affected_component": "user-profile-page",
  "fix": "Added output encoding",
  "status": "closed"
}
```

### Lack of Preventive Action Tracking

```sql
-- Vulnerability remediation without prevention measures
CREATE TABLE vulnerabilities (
    id INT PRIMARY KEY,
    cve_id VARCHAR(50),
    severity VARCHAR(20),
    status VARCHAR(20),
    remediation_date DATE
    -- Missing columns:
    -- root_cause TEXT
    -- contributing_factors TEXT
    -- preventive_actions TEXT
    -- process_improvements TEXT
    -- training_required TEXT
);
```

### No Feedback Loop to Development

```text
Missing continuous improvement cycle:
- Vulnerabilities remediated in isolation
- No communication to development teams
- No updates to secure coding standards
- No revision of code review checklists
- No enhancement of security testing
- No improvement to security training
```

## What This Signal Does NOT Assert

- Whether vulnerabilities are being remediated
- The speed of vulnerability remediation
- Whether vulnerabilities are tracked
- The specific RCA methodology to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required investigation depth or format

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.3**: Perform Root Cause Analysis on Security Vulnerabilities
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Perform root cause analysis on security vulnerabilities. When reviewing vulnerabilities, root cause analysis is the task of evaluating the underlying causes of the vulnerability."

This safeguard emphasizes understanding why vulnerabilities occur to prevent recurrence and improve overall security posture through continuous learning and process improvement.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-STANDARDS-002` — Secure coding standards missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing (if defined)
- `CSE-CIS-TRAINING-NO-ROLE-TRAINING-002` — Role-based training missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of vulnerability management processes
- Assessment of RCA documentation and templates
- Evaluation of post-remediation analysis procedures
- Examination of preventive action tracking
- Review of pattern analysis and trending
- Assessment of feedback loops to development teams
- Analysis of process improvement initiatives

Root cause analysis for vulnerabilities typically includes:

- **Immediate cause**: What allowed the vulnerability to exist?
- **Contributing factors**: What processes or controls failed?
- **Systemic issues**: Are there broader organizational gaps?
- **Similar vulnerabilities**: Where else might this occur?
- **Preventive measures**: How can recurrence be prevented?
- **Process improvements**: What changes are needed?
- **Training needs**: What knowledge gaps exist?

Common RCA methodologies:
- 5 Whys analysis
- Fishbone (Ishikawa) diagrams
- Fault tree analysis
- Timeline analysis
- Change analysis

The presence of this signal indicates a condition that warrants review in the context of vulnerability root cause analysis requirements.
