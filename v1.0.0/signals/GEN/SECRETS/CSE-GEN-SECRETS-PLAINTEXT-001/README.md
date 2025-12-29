# CSE-GEN-SECRETS-PLAINTEXT-001

**Plaintext Secret in Source Code**

## Signal Overview

| Field           | Value                              |
|-----------------|------------------------------------|
| Identifier      | `CSE-GEN-SECRETS-PLAINTEXT-001`    |
| Domain          | GEN (General)                      |
| Category        | SECRETS                            |
| Status          | Active                             |
| Introduced In   | 1.0.0                              |

## Description

A secret value (such as an API key, password, token, or private key) is present in plaintext within source code or version-controlled files.

This signal indicates that sensitive credential material is embedded directly in code artifacts rather than being externalized to secure storage or runtime injection mechanisms.

## Applicability

This signal applies to:

- Source code repositories (any language)
- Version control systems (Git, SVN, etc.)
- Configuration files committed to repositories
- Infrastructure-as-code templates (Terraform, CloudFormation, etc.)
- CI/CD pipeline definitions
- Scripts and automation code
- Jupyter notebooks and data science artifacts

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```python
# Hardcoded API key
API_KEY = "sk_live_abc123def456ghi789"
```

```yaml
# Secret in configuration file
database:
  password: "super_secret_password"
```

```javascript
// Token embedded in code
const authToken = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
```

```terraform
# AWS credentials in IaC
provider "aws" {
  access_key = "AKIAIOSFODNN7EXAMPLE"
  secret_key = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
}
```

## What This Signal Does NOT Assert

- Severity or exploitability in a specific context
- Whether the secret is valid, revoked, or expired
- Whether the exposure has been exploited
- Compliance or non-compliance with any framework
- Required remediation actions

## Related Signals

- `CSE-GEN-SECRETS-COMMITTED-HISTORY-001` — Secret present in version control history (if defined)
- `CSE-GEN-CONFIG-SENSITIVE-EXPOSURE-001` — Sensitive configuration values exposed (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AC.L2-3.1.19 (Encrypt CUI on mobile devices and platforms)
- **ISO 27001**: A.9.4.3 (Password management system)
- **SOC 2**: CC6.1 (Logical and physical access controls)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Pattern matching against known secret formats
- Entropy analysis to identify high-randomness strings
- Scanning commit history for secrets introduced at any point
- Vendor-specific credential format detection

The presence of this signal in a repository does not automatically indicate a security breach, but it does indicate a condition that warrants review.
