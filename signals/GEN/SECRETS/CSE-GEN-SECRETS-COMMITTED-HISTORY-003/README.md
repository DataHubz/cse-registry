# CSE-GEN-SECRETS-COMMITTED-HISTORY-003

**Secret in Version Control History**

## Signal Overview

| Field           | Value                                     |
|-----------------|-------------------------------------------|
| Identifier      | `CSE-GEN-SECRETS-COMMITTED-HISTORY-003`   |
| Domain          | GEN (General)                             |
| Category        | SECRETS                                   |
| Status          | Active                                    |
| Introduced In   | 1.0.0                                     |

## Description

A secret was committed to version control and remains in the repository's commit history, even if later removed from the current codebase.

This signal indicates that sensitive credential material exists in the historical record of a version control system. Removing a secret from the current working tree does not eliminate it from the repository's history, making it accessible to anyone with repository access or in the event of a repository leak.

## Applicability

This signal applies to:

- Git repositories (local and remote)
- Other version control systems (Mercurial, SVN, Perforce, etc.)
- Public and private repositories
- Forked repositories and mirrors
- Archived branches and tags
- Pull request history and review comments
- CI/CD logs that capture repository state
- Repository backups and snapshots

## Examples (Non-Normative)

The following are illustrative examples of patterns that may trigger this signal:

```bash
# Git history containing removed secret
$ git log -p --all | grep -i "api_key"
commit a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
Author: developer@example.com
Date:   Mon Jun 15 14:23:45 2023 -0700

    Remove hardcoded API key

-   API_KEY = "sk_live_abc123def456ghi789"
+   API_KEY = os.environ.get("API_KEY")
```

```yaml
# Secret visible in commit history despite removal
# Commit abc123 (6 months ago)
database:
  host: db.example.com
  username: admin
  password: "P@ssw0rd123!"  # Later removed but still in history
```

```javascript
// OAuth token in historical commit
// Found in commit def456 (2023-08-22)
const config = {
  clientId: "app_12345",
  clientSecret: "oauth_secret_ABCDEFGHIJKLMNOP",  // Removed in later commit
  redirectUri: "https://example.com/callback"
};
```

```python
# AWS credentials in repository history
# Detected in commit ghi789, removed in commit jkl012
AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
```

## What This Signal Does NOT Assert

- Whether the secret has been revoked or rotated since exposure
- The number of commits or duration the secret was present
- Whether the repository is public or private
- Whether unauthorized access has occurred
- Compliance or non-compliance with any framework
- Required remediation actions (e.g., whether history rewriting is necessary)
- The scope of exposure or number of potential viewers

## Related Signals

- `CSE-GEN-SECRETS-PLAINTEXT-001` — Plaintext secret in source code
- `CSE-GEN-SECRETS-NO-ROTATION-002` — Secret rotation missing
- `CSE-GEN-VCS-PUBLIC-EXPOSURE-001` — Repository inadvertently made public (if defined)

## Cross-References (Informative)

This signal may be relevant to controls in various frameworks:

- **CMMC**: AC.L2-3.1.19 (Encrypt CUI on mobile devices and platforms)
- **ISO 27001**: A.9.4.3 (Password management system), A.12.3.1 (Information backup)
- **SOC 2**: CC6.1 (Logical and physical access controls), CC7.2 (System operations)
- **NIST CSF**: PR.AC-1 (Identities and credentials are managed), PR.DS-1 (Data-at-rest is protected)
- **PCI DSS**: Requirement 8.2.1 (Render authentication credentials unreadable during storage)
- **GDPR**: Article 32 (Security of processing)
- **CIS Controls**: Control 3.11 (Encrypt sensitive data at rest)

These mappings are informative and do not constitute compliance guidance.

## Notes

Detection of this signal typically involves:

- Scanning entire repository history (all branches, tags, and commits)
- Using tools like git-secrets, truffleHog, or Gitleaks
- Pattern matching against known secret formats in historical diffs
- Analyzing commit messages and metadata for credential references
- Monitoring for secrets in orphaned commits and reflog entries

Remediation typically requires:

- Immediate revocation and rotation of the exposed credential
- Assessment of whether history rewriting is feasible and appropriate
- Use of tools like BFG Repo-Cleaner or git filter-branch (with understanding of implications)
- Notification to all repository collaborators after history rewriting
- Force-pushing changes and invalidating existing clones
- Monitoring for use of the compromised credential

The presence of this signal represents a critical security concern, as secrets in version control history can be discovered by attackers, automated scanners, or through repository leaks. Even in private repositories, this represents a significant risk as access controls may change over time.
