# CSE Finding Format Specification
**Version 1.0**

**Status:** Stable
**Date:** 2025
**Canonical URL:** https://cse-registry.org/spec/finding-format-v1.0

---

## 1. Introduction

This specification defines the format for **CSE Findings** — machine-readable records of specific observations where CSE signals are detected in concrete contexts.

While findings are **not stored in the CSE Registry**, this specification provides a standardized format for tools and platforms that produce or consume signal observations. Standardization enables:

- Cross-tool finding correlation and aggregation
- Consistent import/export between compliance platforms
- Unified audit trails across multiple tools
- Framework-neutral evidence collection
- Automated compliance reporting workflows

> **Note:** CSE defines what signals mean; implementations determine where and when they occur. This specification standardizes *how* to record those occurrences.

---

## 2. Scope

This specification covers:
- Finding data model and required fields
- Artifact reference format
- Evidence and context model
- Severity and risk context
- Status and lifecycle management
- Remediation tracking

This specification does **not** cover:
- Signal definitions (see `signal-format-v1.0.md`)
- Signal-to-control mappings (see `mapping-format-v1.0.md`)
- How tools detect signals (implementation-specific)
- Storage or transmission protocols

---

## 3. Normative Language

The key words **MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** in this document are to be interpreted as described in RFC 2119.

---

## 4. Core Concepts

### 4.1 Finding

A **Finding** is a concrete, timestamped observation that a specific CSE signal was detected in a specific artifact or resource. A finding answers:
- *What* was observed? (the CSE signal)
- *Where* was it observed? (the artifact/resource)
- *When* was it observed? (the timestamp)
- *How* was it detected? (the tool/method)

### 4.2 Artifact

An **Artifact** is a technical object where signals may be observed. Artifacts include:
- Source code files
- Configuration files (YAML, JSON, HCL, etc.)
- Infrastructure-as-code templates
- Container images
- Cloud resource configurations
- API specifications
- Audit logs
- Runtime metadata

### 4.3 Evidence

**Evidence** is supporting data that substantiates the finding, such as:
- Code snippets
- Configuration excerpts
- Log entries
- Screenshots
- API responses

### 4.4 Context

**Context** provides environmental and situational information about the finding:
- Environment (production, staging, development)
- Scan type (scheduled, on-demand, CI/CD)
- Tool configuration
- Organizational metadata

---

## 5. Finding Data Model

### 5.1 Finding Object

A finding object MUST contain the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | Unique finding identifier |
| `signal` | object | MUST | Reference to the observed CSE signal |
| `artifact` | object | MUST | Reference to the artifact where signal was observed |
| `observed_at` | string | MUST | ISO 8601 timestamp of observation |
| `status` | string | MUST | Current finding status |

A finding object MAY contain the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `severity` | object | MAY | Severity assessment |
| `evidence` | array | MAY | Supporting evidence |
| `context` | object | MAY | Environmental context |
| `remediation` | object | MAY | Remediation tracking |
| `related_findings` | array | MAY | Related finding references |
| `metadata` | object | MAY | Additional metadata |

### 5.2 Finding Identifier Format

Finding identifiers MUST be unique within the producing system. Implementations SHOULD use one of the following patterns:

**UUID-based:**
```
FND-<UUID>
```

**Structured:**
```
FND-<SYSTEM>-<TIMESTAMP>-<SEQUENCE>
```

Examples:
```
FND-550e8400-e29b-41d4-a716-446655440000
FND-SCANNER01-20250115-00042
FND-CICD-PR1234-003
```

### 5.3 Signal Reference Object

The signal object MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | CSE signal identifier |
| `version` | string | MAY | CSE registry version |

Example:
```json
{
  "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
  "version": "1.0.0"
}
```

---

## 6. Artifact Reference Model

### 6.1 Artifact Object

The artifact object MUST contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | MUST | Artifact type category |
| `id` | string | MUST | Unique artifact identifier or path |

The artifact object MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | MAY | Human-readable artifact name |
| `location` | object | MAY | Precise location within artifact |
| `provider` | string | MAY | Cloud/platform provider |
| `account` | string | MAY | Account or project identifier |
| `region` | string | MAY | Geographic region |
| `tags` | object | MAY | Resource tags/labels |
| `metadata` | object | MAY | Additional artifact metadata |

### 6.2 Artifact Types

Implementations MUST use one of the following artifact types:

| Type | Description | Example ID Format |
|------|-------------|-------------------|
| `source-file` | Source code file | `src/auth/login.py` |
| `config-file` | Configuration file | `config/database.yml` |
| `iac-template` | Infrastructure-as-code | `terraform/main.tf` |
| `container-image` | Container image | `registry/app:v1.2.3` |
| `cloud-resource` | Cloud provider resource | `arn:aws:s3:::bucket-name` |
| `k8s-resource` | Kubernetes resource | `deployment/api-server` |
| `api-endpoint` | API endpoint | `POST /api/v1/users` |
| `secret` | Secret or credential | `vault:secret/database` |
| `log-entry` | Audit log entry | `cloudtrail:event-id` |
| `network-config` | Network configuration | `sg-0123456789abcdef0` |
| `identity` | Identity/principal | `arn:aws:iam::123456789:user/admin` |
| `database` | Database resource | `rds:production-db` |
| `storage` | Storage resource | `s3:patient-records` |
| `compute` | Compute resource | `ec2:i-0123456789abcdef0` |
| `other` | Other artifact type | Implementation-defined |

### 6.3 Location Object

For artifacts that support precise location (files, code):

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `line_start` | integer | MAY | Starting line number (1-indexed) |
| `line_end` | integer | MAY | Ending line number |
| `column_start` | integer | MAY | Starting column (1-indexed) |
| `column_end` | integer | MAY | Ending column |
| `path` | string | MAY | Path within artifact (for nested structures) |
| `hash` | string | MAY | Content hash at location |

Example:
```json
{
  "type": "source-file",
  "id": "src/database/connection.py",
  "name": "Database Connection Module",
  "location": {
    "line_start": 42,
    "line_end": 45,
    "path": "connect_db.credentials"
  }
}
```

---

## 7. Severity Model

### 7.1 Severity Object

The severity object MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `level` | string | SHOULD | Severity level |
| `score` | number | MAY | Numeric severity score (0.0–10.0) |
| `source` | string | MAY | Source of severity assessment |
| `justification` | string | MAY | Rationale for severity |

### 7.2 Severity Levels

| Level | Score Range | Description |
|-------|-------------|-------------|
| `critical` | 9.0–10.0 | Immediate action required, severe impact |
| `high` | 7.0–8.9 | High risk, prompt attention needed |
| `medium` | 4.0–6.9 | Moderate risk, should be addressed |
| `low` | 1.0–3.9 | Low risk, address when convenient |
| `info` | 0.0–0.9 | Informational, no immediate risk |

### 7.3 Severity Source Types

| Source | Description |
|--------|-------------|
| `signal-default` | Default severity from signal definition |
| `tool` | Tool-determined severity |
| `policy` | Organization policy override |
| `manual` | Manual assessment |
| `cvss` | CVSS-based score |

Example:
```json
{
  "level": "high",
  "score": 8.5,
  "source": "policy",
  "justification": "PHI data exposure in production environment"
}
```

---

## 8. Evidence Model

### 8.1 Evidence Array

The evidence field is an array of evidence objects, each containing:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `type` | string | MUST | Evidence type |
| `content` | string | MUST | Evidence content or reference |

Evidence objects MAY contain:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `format` | string | MAY | Content format (text, json, base64) |
| `hash` | string | MAY | Content hash for integrity |
| `collected_at` | string | MAY | Timestamp of collection |
| `description` | string | MAY | Human-readable description |

### 8.2 Evidence Types

| Type | Description |
|------|-------------|
| `code-snippet` | Relevant source code excerpt |
| `config-excerpt` | Configuration file excerpt |
| `log-entry` | Log or audit entry |
| `api-response` | API response data |
| `screenshot` | Visual evidence (base64 or URL) |
| `command-output` | CLI command output |
| `policy-document` | Policy or configuration document |
| `network-capture` | Network traffic data |
| `runtime-state` | Runtime state information |

Example:
```json
{
  "type": "code-snippet",
  "content": "password = config['DB_PASSWORD']  # Hardcoded in plaintext",
  "format": "text",
  "description": "Plaintext credential storage in database module"
}
```

---

## 9. Context Model

### 9.1 Context Object

The context object captures environmental information:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `environment` | string | MAY | Environment identifier |
| `scan` | object | MAY | Scan execution details |
| `organization` | object | MAY | Organizational context |

### 9.2 Environment Values

| Value | Description |
|-------|-------------|
| `production` | Production environment |
| `staging` | Staging/pre-production |
| `development` | Development environment |
| `testing` | Testing/QA environment |
| `ci-cd` | CI/CD pipeline |
| `unknown` | Environment not determined |

### 9.3 Scan Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MAY | Unique scan identifier |
| `type` | string | MAY | Scan type |
| `tool` | object | MAY | Tool information |
| `started_at` | string | MAY | Scan start timestamp |
| `completed_at` | string | MAY | Scan completion timestamp |

### 9.4 Scan Types

| Type | Description |
|------|-------------|
| `scheduled` | Recurring scheduled scan |
| `on-demand` | Manual/on-demand scan |
| `ci-cd` | CI/CD pipeline integration |
| `real-time` | Continuous/real-time monitoring |
| `audit` | Formal audit scan |

### 9.5 Tool Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | SHOULD | Tool name |
| `version` | string | MAY | Tool version |
| `vendor` | string | MAY | Tool vendor |

Example:
```json
{
  "environment": "production",
  "scan": {
    "id": "scan-20250115-001",
    "type": "scheduled",
    "tool": {
      "name": "ComplianceScanner",
      "version": "3.2.1",
      "vendor": "SecurityCorp"
    },
    "started_at": "2025-01-15T10:00:00Z",
    "completed_at": "2025-01-15T10:45:00Z"
  },
  "organization": {
    "id": "org-healthcare-123",
    "name": "HealthCare Corp",
    "business_unit": "Cloud Infrastructure"
  }
}
```

---

## 10. Status and Lifecycle

### 10.1 Status Values

| Status | Description |
|--------|-------------|
| `open` | Finding is active and unresolved |
| `in_progress` | Remediation is underway |
| `resolved` | Finding has been remediated |
| `accepted` | Risk accepted, no remediation planned |
| `false_positive` | Finding determined to be incorrect |
| `duplicate` | Duplicate of another finding |
| `suppressed` | Temporarily suppressed |

### 10.2 Status Transitions

Valid status transitions:

```
open → in_progress → resolved
open → accepted
open → false_positive
open → duplicate
open → suppressed → open
in_progress → open (reopened)
resolved → open (regression)
```

### 10.3 Status History

Implementations SHOULD maintain status history:

```json
{
  "status": "resolved",
  "status_history": [
    {
      "status": "open",
      "changed_at": "2025-01-15T10:30:00Z",
      "changed_by": "scanner-bot"
    },
    {
      "status": "in_progress",
      "changed_at": "2025-01-16T09:00:00Z",
      "changed_by": "alice@example.com",
      "comment": "Assigned to DevSecOps team"
    },
    {
      "status": "resolved",
      "changed_at": "2025-01-17T14:30:00Z",
      "changed_by": "bob@example.com",
      "comment": "Fixed in PR #1234"
    }
  ]
}
```

---

## 11. Remediation Tracking

### 11.1 Remediation Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | MAY | Remediation status |
| `owner` | string | MAY | Assigned owner |
| `due_date` | string | MAY | Target remediation date |
| `completed_at` | string | MAY | Actual completion timestamp |
| `method` | string | MAY | How the finding was remediated |
| `verification` | object | MAY | Verification details |
| `notes` | string | MAY | Remediation notes |

### 11.2 Remediation Status Values

| Status | Description |
|--------|-------------|
| `pending` | Not yet started |
| `planned` | Remediation planned |
| `in_progress` | Actively being remediated |
| `completed` | Remediation complete |
| `verified` | Remediation verified |
| `blocked` | Remediation blocked |
| `deferred` | Remediation deferred |

### 11.3 Remediation Methods

| Method | Description |
|--------|-------------|
| `code-fix` | Code change or patch |
| `config-change` | Configuration update |
| `infrastructure-change` | Infrastructure modification |
| `policy-update` | Policy or procedure change |
| `compensating-control` | Compensating control implemented |
| `risk-acceptance` | Formal risk acceptance |
| `decommission` | Resource removed/decommissioned |

Example:
```json
{
  "status": "verified",
  "owner": "security-team@example.com",
  "due_date": "2025-01-20",
  "completed_at": "2025-01-18T16:00:00Z",
  "method": "code-fix",
  "verification": {
    "verified_at": "2025-01-19T10:00:00Z",
    "verified_by": "auditor@example.com",
    "scan_id": "scan-20250119-verify"
  },
  "notes": "Implemented encryption for PHI data at rest using AES-256"
}
```

---

## 12. Related Findings

### 12.1 Related Finding Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | MUST | Related finding ID |
| `relationship` | string | MUST | Relationship type |
| `description` | string | MAY | Relationship description |

### 12.2 Relationship Types

| Type | Description |
|------|-------------|
| `duplicate` | This finding duplicates another |
| `related` | Findings are related but distinct |
| `caused_by` | This finding was caused by another |
| `causes` | This finding causes another |
| `supersedes` | This finding supersedes another |
| `superseded_by` | This finding is superseded by another |

---

## 13. Metadata Model

### 13.1 Metadata Object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `created_at` | string | SHOULD | Finding creation timestamp |
| `updated_at` | string | MAY | Last update timestamp |
| `created_by` | string | MAY | Finding creator |
| `source_system` | string | MAY | Originating system |
| `external_refs` | array | MAY | External reference links |
| `tags` | array | MAY | Classification tags |
| `custom` | object | MAY | Implementation-specific data |

Example:
```json
{
  "created_at": "2025-01-15T10:30:00Z",
  "updated_at": "2025-01-17T14:30:00Z",
  "created_by": "compliance-scanner",
  "source_system": "aws-security-hub",
  "external_refs": [
    {
      "type": "jira",
      "id": "SEC-1234",
      "url": "https://jira.example.com/browse/SEC-1234"
    },
    {
      "type": "github-issue",
      "id": "456",
      "url": "https://github.com/org/repo/issues/456"
    }
  ],
  "tags": ["hipaa", "phi", "encryption", "priority-1"]
}
```

---

## 14. Complete Finding Example

```json
{
  "id": "FND-550e8400-e29b-41d4-a716-446655440000",
  "signal": {
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004",
    "version": "1.0.0"
  },
  "artifact": {
    "type": "cloud-resource",
    "id": "arn:aws:s3:::patient-records",
    "name": "Patient Records Bucket",
    "provider": "aws",
    "account": "123456789012",
    "region": "us-east-1",
    "tags": {
      "Environment": "production",
      "DataClassification": "PHI"
    }
  },
  "observed_at": "2025-01-15T10:30:00Z",
  "status": "resolved",
  "severity": {
    "level": "critical",
    "score": 9.5,
    "source": "policy",
    "justification": "Unencrypted PHI in production S3 bucket"
  },
  "evidence": [
    {
      "type": "api-response",
      "content": "{\"ServerSideEncryptionConfiguration\": null}",
      "format": "json",
      "description": "S3 bucket encryption configuration shows no encryption"
    }
  ],
  "context": {
    "environment": "production",
    "scan": {
      "id": "scan-20250115-daily",
      "type": "scheduled",
      "tool": {
        "name": "AWS Config",
        "version": "2.0"
      }
    },
    "organization": {
      "id": "healthcare-corp",
      "business_unit": "Cloud Infrastructure"
    }
  },
  "remediation": {
    "status": "verified",
    "owner": "cloud-security@example.com",
    "due_date": "2025-01-17",
    "completed_at": "2025-01-16T14:00:00Z",
    "method": "config-change",
    "verification": {
      "verified_at": "2025-01-16T15:00:00Z",
      "verified_by": "compliance-team",
      "scan_id": "scan-20250116-verify"
    },
    "notes": "Enabled AES-256 server-side encryption with AWS KMS"
  },
  "metadata": {
    "created_at": "2025-01-15T10:30:00Z",
    "updated_at": "2025-01-16T15:00:00Z",
    "source_system": "aws-config",
    "external_refs": [
      {
        "type": "jira",
        "id": "SEC-5678",
        "url": "https://jira.example.com/browse/SEC-5678"
      }
    ],
    "tags": ["hipaa", "phi", "s3", "encryption"]
  }
}
```

---

## 15. Minimal Finding Example

For lightweight integrations, a minimal valid finding:

```json
{
  "id": "FND-12345",
  "signal": {
    "id": "CSE-HIPAA-TECH-NO-ENCRYPTION-004"
  },
  "artifact": {
    "type": "cloud-resource",
    "id": "arn:aws:s3:::patient-records"
  },
  "observed_at": "2025-01-15T10:30:00Z",
  "status": "open"
}
```

---

## 16. Finding Collections

### 16.1 Finding Set Object

For bulk export/import, findings SHOULD be wrapped:

```json
{
  "finding_set": {
    "id": "set-20250115-daily-scan",
    "created_at": "2025-01-15T11:00:00Z",
    "source": {
      "system": "compliance-scanner",
      "scan_id": "scan-20250115-001"
    },
    "cse_version": "1.0.0",
    "statistics": {
      "total": 42,
      "by_status": {
        "open": 35,
        "resolved": 5,
        "false_positive": 2
      },
      "by_severity": {
        "critical": 3,
        "high": 12,
        "medium": 20,
        "low": 5,
        "info": 2
      }
    }
  },
  "findings": [
    { "...finding1..." },
    { "...finding2..." }
  ]
}
```

---

## 17. Interoperability Guidelines

### 17.1 Import/Export

- Systems SHOULD support JSON format for finding exchange
- Systems MAY support NDJSON for streaming large finding sets
- Systems SHOULD validate findings against the JSON schema

### 17.2 Identifier Mapping

When importing findings from external systems:
- Preserve original finding ID in `metadata.external_refs`
- Generate conformant `id` for internal use
- Maintain bidirectional mapping

### 17.3 Deduplication

Systems SHOULD deduplicate findings based on:
1. Same signal ID
2. Same artifact ID
3. Same or overlapping location
4. Observation within deduplication window (implementation-defined)

---

## 18. Security Considerations

- Findings MAY contain sensitive information (paths, credentials in evidence)
- Evidence content SHOULD be sanitized before storage/transmission
- Access to finding data SHOULD be controlled by role-based access
- Finding transmission SHOULD use encrypted channels
- PII in findings SHOULD be handled per applicable regulations

---

## 19. References

- RFC 2119: Key words for use in RFCs
- RFC 3339: Date and Time on the Internet (Timestamps)
- ISO 8601: Date and time format
- CSE Specification v1.0
- CSE Signal Format Specification v1.0
- SARIF 2.1.0 (Static Analysis Results Interchange Format)
- OCSF (Open Cybersecurity Schema Framework)

---

**End of CSE Finding Format Specification v1.0**
