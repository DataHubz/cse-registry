# CSE-CIS-APPSEC-NO-WAF-010

**Web Application Firewall Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-APPSEC-NO-WAF-010`              |
| Domain          | CIS                                      |
| Category        | APPSEC                                   |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not deployed a Web Application Firewall (WAF) to protect web applications from common attacks.

This signal indicates the absence of a security layer that filters, monitors, and blocks malicious HTTP/HTTPS traffic between web applications and the internet, protecting against attacks such as SQL injection, cross-site scripting (XSS), and other OWASP Top 10 vulnerabilities.

## Applicability

This signal applies to:

- Web application hosting environments
- Cloud infrastructure teams
- Security operations teams
- DevOps and DevSecOps teams
- Network security teams
- Application security teams
- API platform teams
- Organizations with internet-facing applications

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### No WAF Deployment

```text
Web application architecture without WAF protection:
- Internet traffic → Load Balancer → Web Servers
- No application-layer filtering
- No OWASP Top 10 protection
- No bot mitigation
- No rate limiting at application layer
- No geo-blocking capability
- No virtual patching
```

### Direct Internet Exposure

```yaml
# Load balancer configuration without WAF
load_balancer:
  type: application
  listeners:
    - port: 443
      protocol: HTTPS
      default_action:
        type: forward
        target_group: web-servers
  # Missing:
  waf_configuration:
    enabled: false
    # rule_sets: []
    # owasp_protection: not_configured
    # rate_limiting: not_configured
    # ip_reputation: not_configured
```

### Cloud Deployment Without WAF

```terraform
# AWS ALB without WAF association
resource "aws_lb" "web" {
  name               = "web-alb"
  internal           = false
  load_balancer_type = "application"
  subnets            = var.public_subnets
}

# Missing WAF:
# resource "aws_wafv2_web_acl" "main" {
#   name  = "web-acl"
#   scope = "REGIONAL"
#   default_action {
#     allow {}
#   }
#   rule {
#     name     = "AWSManagedRulesCommonRuleSet"
#     priority = 1
#     override_action {
#       none {}
#     }
#     statement {
#       managed_rule_group_statement {
#         name        = "AWSManagedRulesCommonRuleSet"
#         vendor_name = "AWS"
#       }
#     }
#   }
# }
```

### No OWASP Protection Rules

```json
{
  "security_controls": {
    "tls": "enabled",
    "ddos_protection": "enabled",
    "network_firewall": "enabled"
  }
}
```

### Missing Bot Protection

```nginx
# Nginx configuration without bot mitigation
server {
    listen 443 ssl;
    server_name example.com;

    location / {
        proxy_pass http://backend;
        # Missing:
        # - Bot detection
        # - Rate limiting
        # - CAPTCHA challenges
        # - Known bad bot blocking
        # - Credential stuffing prevention
    }
}
```

### Lack of Rate Limiting

```python
# API without application-layer rate limiting
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/login', methods=['POST'])
def login():
    # No rate limiting at WAF or application level
    # Vulnerable to:
    # - Brute force attacks
    # - Credential stuffing
    # - Account enumeration
    # - DoS attacks

    username = request.json.get('username')
    password = request.json.get('password')
    return authenticate(username, password)
```

### No Virtual Patching

```text
Vulnerability management without WAF:
- CVE-2024-1234 discovered in application
- Fix requires code change and deployment
- Deployment delayed by change approval process
- Application vulnerable for days/weeks

Missing WAF virtual patching:
- Immediate protection via WAF rule
- Block exploit attempts while fix is developed
- Temporary mitigation during patch deployment
- Zero-day protection capability
```

### Missing Custom Security Rules

```javascript
// Application-specific threats without WAF rules
app.post('/api/transfer-funds', (req, res) => {
    const { fromAccount, toAccount, amount } = req.body;

    // Missing WAF rules for:
    // - Maximum transaction amount
    // - Transaction velocity limits
    // - Suspicious pattern detection
    // - Geographic restrictions
    // - Known fraud indicators

    processTransfer(fromAccount, toAccount, amount);
});
```

### No Logging and Monitoring Integration

```yaml
# Infrastructure without WAF logging
monitoring:
  application_logs: enabled
  access_logs: enabled
  error_logs: enabled
  # Missing:
  waf_logs: not_available
  # blocked_requests: not_logged
  # attack_patterns: not_detected
  # threat_intelligence: not_integrated
  # security_incidents: not_correlated
```

## What This Signal Does NOT Assert

- Whether applications are secure
- Whether network firewalls are in place
- Whether DDoS protection exists
- The specific WAF solution to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required WAF rules or configurations

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 16:

- **Control 16**: Application Software Security
- **Safeguard 16.10**: Apply Secure Design Principles in Application Architectures
- **Implementation Group**: IG3
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Apply secure design principles in application architectures. Secure design principles include the concept of least privilege and enforcing mediation to validate every operation that the user makes, promoting the concept of 'never trust user input.' Examples include ensuring that explicit error checking is performed and documented for all input, including for size, data type, and acceptable ranges or formats. Secure design also means minimizing the application infrastructure attack surface, such as turning off unprotected ports and services, removing unnecessary programs and files, and renaming or removing default accounts."

Note: A Web Application Firewall is a critical architectural component that implements defense-in-depth, enforces input validation at the perimeter, and provides mediation between users and applications - core secure design principles emphasized in this safeguard.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-APPSEC-NO-SDLC-001` — Secure SDLC missing
- `CSE-CIS-APPSEC-NO-DAST-006` — Dynamic application security testing missing
- `CSE-CIS-NETWORK-NO-BOUNDARY-PROTECTION-001` — Network boundary protection missing (if defined)
- `CSE-CIS-MONITOR-NO-LOGGING-001` — Logging missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of application architecture and network topology
- Assessment of web application protection mechanisms
- Evaluation of WAF deployment and configuration
- Examination of security rule sets and policies
- Review of attack mitigation capabilities
- Assessment of logging and monitoring integration
- Analysis of virtual patching processes

WAF capabilities typically include:

**OWASP Top 10 protection:**
- SQL injection prevention
- Cross-site scripting (XSS) blocking
- Cross-site request forgery (CSRF) protection
- XML external entity (XXE) prevention
- Server-side request forgery (SSRF) blocking
- Insecure deserialization detection
- Security misconfiguration detection

**Attack mitigation:**
- DDoS protection (application layer)
- Bot management and mitigation
- Brute force attack prevention
- Credential stuffing protection
- Account takeover prevention
- API abuse protection

**Traffic management:**
- Rate limiting and throttling
- Geographic blocking/allowing
- IP reputation filtering
- User agent filtering
- Request size limiting
- Protocol validation

**Advanced features:**
- Virtual patching for vulnerabilities
- Custom security rules
- Threat intelligence integration
- Machine learning-based detection
- API security (OpenAPI/Swagger validation)
- JWT validation
- Session management

Common WAF deployment models:
- **Cloud WAF**: AWS WAF, Cloudflare, Akamai, Azure WAF
- **Reverse proxy WAF**: ModSecurity, NAXSI
- **Appliance WAF**: F5, Imperva, Barracuda
- **CDN-integrated**: Cloudflare, Fastly, Akamai

WAF deployment patterns:
- Edge deployment (CDN/cloud)
- Inline deployment (network appliance)
- Reverse proxy mode
- Transparent bridge mode
- Out-of-band monitoring mode

WAF management best practices:
- Regular rule updates
- Tuning to reduce false positives
- Custom rules for application-specific threats
- Integration with SIEM and logging
- Automated blocking of malicious IPs
- Regular security rule testing
- Incident response integration

The presence of this signal indicates a condition that warrants review in the context of web application firewall requirements.
