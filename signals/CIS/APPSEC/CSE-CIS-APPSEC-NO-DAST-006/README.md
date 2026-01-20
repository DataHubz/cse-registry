# CSE-CIS-APPSEC-NO-DAST-006

**Dynamic Application Security Testing Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-DAST-006`             |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented dynamic application security testing (DAST) in the software development lifecycle.

This signal indicates the absence of automated security testing of running applications to identify vulnerabilities that are only detectable during runtime, such as authentication issues, server configuration errors, and injection flaws.

## Applicability

This signal applies to:

- Application security teams
- DevOps and DevSecOps teams
- Security engineering teams
- Quality assurance teams
- Web application development teams
- API development teams
- CI/CD pipeline administrators
- Penetration testing teams

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No DAST Tools Implemented

```text
Missing dynamic security testing capabilities:
- Web application scanning
- API security testing
- Authentication testing
- Session management testing
- Input validation testing
- Server configuration analysis
- SSL/TLS testing
- Runtime vulnerability detection
```

### CI/CD Pipeline Without DAST

```yaml
# Deployment pipeline missing dynamic security testing
pipeline:
  stages:
    - build:
        - compile_application
        - run_unit_tests
    - deploy_staging:
        - deploy_to_staging_environment
    # Missing:
    # - dast_scan:
    #     - deploy_to_test_environment
    #     - run_zap_scan
    #     - run_burp_scan
    #     - test_authentication
    #     - test_authorization
    #     - scan_for_owasp_top_10
    - deploy_production:
        - deploy_to_production
```

### No Pre-Production Security Scanning

```bash
# Deployment script without security validation
#!/bin/bash

# Deploy to staging
kubectl apply -f staging-deployment.yaml

# Run smoke tests
./run-smoke-tests.sh

# Missing DAST:
# ./run-dast-scan.sh https://staging.example.com
# ./check-security-headers.sh https://staging.example.com
# ./test-authentication.sh https://staging.example.com

# Deploy to production
kubectl apply -f production-deployment.yaml
```

### Missing API Security Testing

```python
# API testing without security validation
class APITests(unittest.TestCase):
    def test_get_users(self):
        response = requests.get('https://api.example.com/users')
        self.assertEqual(response.status_code, 200)

    # Missing security tests:
    # def test_authentication_required(self):
    #     # Test unauthenticated access is blocked
    # def test_authorization_enforced(self):
    #     # Test users can only access their own data
    # def test_sql_injection_prevented(self):
    #     # Test injection attacks are blocked
    # def test_rate_limiting(self):
    #     # Test API rate limits are enforced
    # def test_input_validation(self):
    #     # Test malicious input is rejected
```

### No OWASP ZAP or Similar Tools

```json
{
  "testing_tools": {
    "unit_tests": "jest",
    "integration_tests": "pytest",
    "performance_tests": "jmeter"
  }
}
```

### Lack of Security Headers Testing

```javascript
// Health check without security validation
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Missing security header verification:
// - Content-Security-Policy
// - X-Frame-Options
// - X-Content-Type-Options
// - Strict-Transport-Security
// - X-XSS-Protection
```

### No Authenticated Scanning

```text
DAST scanning limitations:
- Only scanning public pages
- Not testing authenticated functionality
- Not testing privileged access controls
- Not testing multi-step workflows
- Not testing different user roles
- Not testing API endpoints requiring authentication
```

### Missing Continuous Security Monitoring

```yaml
# Scheduled jobs without security scanning
scheduled_jobs:
  - name: daily-backup
    schedule: "0 2 * * *"
  - name: log-rotation
    schedule: "0 3 * * *"
  # Missing:
  # - name: weekly-dast-scan
  #   schedule: "0 1 * * 0"
  #   command: "run-dast-full-scan.sh"
```

## What This Signal Does NOT Assert

- Whether applications are secure
- Whether penetration testing is performed
- Whether static analysis is conducted
- The specific DAST tools to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required scanning frequency or coverage

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.6**: Establish and Maintain a Severity Rating System and Process for Application Vulnerabilities
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Establish and maintain a severity rating system and process for application vulnerabilities that facilitates prioritizing the order in which discovered vulnerabilities are fixed. This process includes setting a minimum level of security acceptability for releasing code or applications. Severity ratings bring a systematic way of triaging vulnerabilities that improves risk management and helps ensure the most severe bugs are fixed first. Review and update the system and process annually."

Note: DAST is a critical tool for discovering runtime vulnerabilities that feed into this severity rating and prioritization process, helping organizations identify and fix security issues before production deployment.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-SAST-005` — Static application security testing missing
- `CSE-CIS-APPSEC-NO-WAF-010` — Web application firewall missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of security testing processes
- Assessment of DAST tool deployment and usage
- Evaluation of CI/CD pipeline security integration
- Examination of pre-production security validation
- Review of API security testing practices
- Assessment of authenticated scanning capabilities
- Analysis of vulnerability findings management

DAST implementation typically includes:

- **Tool selection**: Web scanners, API scanners, commercial or open-source
- **Scan types**: Passive scanning, active scanning, authenticated scanning
- **Test environments**: Staging, QA, pre-production
- **Coverage**: Web applications, APIs, mobile backends
- **Authentication**: Credential management, session handling
- **Integration**: CI/CD pipelines, scheduled scans
- **Findings management**: Triage, remediation tracking, reporting

Common DAST capabilities:
- OWASP Top 10 detection
- SQL injection testing
- Cross-site scripting (XSS) detection
- Authentication bypass testing
- Authorization flaw identification
- Session management testing
- Server misconfiguration detection
- SSL/TLS configuration analysis
- Security headers validation
- Input validation testing

Common DAST tools:
- Open source: OWASP ZAP, Nikto, w3af
- Commercial: Burp Suite Professional, Acunetix, Qualys WAS, Rapid7 AppSpider

DAST vs SAST:
- DAST tests running applications (black-box)
- SAST analyzes source code (white-box)
- Both are complementary and recommended

The presence of this signal indicates a condition that warrants review in the context of dynamic application security testing requirements.
