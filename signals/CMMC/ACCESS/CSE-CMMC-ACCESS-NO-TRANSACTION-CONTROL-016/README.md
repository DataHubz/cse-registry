# CSE-CMMC-ACCESS-NO-TRANSACTION-CONTROL-016

**Transaction and Function Access Not Controlled**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-CMMC-ACCESS-NO-TRANSACTION-CONTROL-016` |
| Domain | CMMC |
| Category | ACCESS |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Access to security-relevant transactions and system functions is not restricted based on user roles or authorization levels.

This signal indicates that users may execute sensitive operations without appropriate access controls.

## Applicability

- Administrative interfaces
- Security configuration functions
- Financial transaction systems
- User management operations
- System configuration tools

## Examples (Non-Normative)

### No Function-Level Authorization

```python
# Missing authorization check
@app.route('/admin/delete-user/<user_id>', methods=['POST'])
def delete_user(user_id):
    # No role verification
    User.delete(user_id)
    return jsonify({'status': 'deleted'})
```

### Unrestricted Transaction Access

```xml
<SecurityFunctions>
  <Function name="SystemConfiguration">
    <RequiredRole>none</RequiredRole>
    <AuthorizationCheck>disabled</AuthorizationCheck>
  </Function>
</SecurityFunctions>
```

## CMMC Context (Informative)

- **AC.L2-3.1.5**: Employ the principle of least privilege, including for specific security functions and privileged accounts

## Related Signals

- `CSE-CMMC-ACCESS-UNRESTRICTED-ADMIN-001`
- `CSE-CMMC-ACCESS-NO-SEPARATION-DUTIES-006`
