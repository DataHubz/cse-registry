# CSE-HITRUST-OPS-NO-LOGGING-007

**Operational Logging Missing**

## Signal Overview

| Field           | Value                                      |
|-----------------|------------------------------------------- |
| Identifier      | `CSE-HITRUST-OPS-NO-LOGGING-007`           |
| Domain          | HITRUST                                    |
| Category        | OPS                                        |
| Control Domain  | 09 - Communications and Operations Management |
| Control Ref     | 09.g                                       |
| Status          | Active                                     |
| Introduced In   | 1.0.0                                      |

## Description

Audit logs recording user activities, exceptions, and information security events are not produced, kept, and regularly reviewed.

This signal indicates that systems lack adequate logging capabilities, which may prevent detection of security incidents, hinder troubleshooting, and limit forensic investigation capabilities.

## Applicability

This signal applies to:

- Authentication and authorization events
- System and application access logs
- Administrative and privileged operations
- Security-relevant events and exceptions
- Data access and modification logs
- Network traffic and connection logs
- Cloud service and API activity logs
- Database query and transaction logs

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### Application Without Logging

```python
# Application without audit logging
class UserService:
    def update_user(self, user_id, data):
        # No logging of who made the change
        # No logging of what was changed
        # No logging of when the change occurred
        self.db.update(user_id, data)
        return True
```

### Cloud Resources Without CloudTrail/Logging

```terraform
# AWS account without CloudTrail enabled
# No audit logging of:
# - API calls
# - Console sign-in events
# - Resource changes
# - IAM modifications
```

### Database Without Audit Logging

```sql
-- Database without audit logging enabled
-- No tracking of:
-- - User connections
-- - Query execution
-- - Data modifications
-- - Schema changes
-- - Privilege escalations
```

### Infrastructure Without Operational Logs

```yaml
# Kubernetes cluster without logging
apiVersion: v1
kind: Pod
metadata:
  name: application
spec:
  containers:
  - name: app
    image: myapp:latest
    # No log aggregation configured
    # No audit logging enabled
    # No security event logging
```

## What This Signal Does NOT Assert

- Whether logs are being generated but not retained
- Whether logging is enabled but not comprehensive
- The specific log retention period required
- Compliance or non-compliance with HITRUST CSF or any framework
- Required remediation actions

## HITRUST CSF Context (Informative)

This signal is relevant to HITRUST CSF control domain:

- **09.g - Audit Logging**: Audit logs recording user activities, exceptions, and information security events shall be produced and kept for an agreed period to assist in future investigations and access control monitoring

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-OPS-NO-LOG-PROTECTION-008` - Log Protection Missing
- `CSE-CMMC-AUDIT-NO-LOGGING-001` - Audit Logging Missing (if defined)
- `CSE-HITRUST-OPS-NO-CLOCK-SYNC-009` - Clock Synchronization Missing

## Notes

Detection of this signal typically involves:

- Review of logging configurations across systems
- Assessment of log collection and aggregation
- Examination of security event logging coverage
- Verification of audit trail completeness
- Review of log retention policies
- Analysis of log monitoring and alerting
- Inspection of logging for privileged operations
- Verification of log format and content standards

The presence of this signal indicates a condition that warrants review in the context of security monitoring and compliance requirements.
