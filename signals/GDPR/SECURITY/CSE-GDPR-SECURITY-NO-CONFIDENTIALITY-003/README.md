# CSE-GDPR-SECURITY-NO-CONFIDENTIALITY-003

**Confidentiality Measures Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-CONFIDENTIALITY-003` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack adequate measures to ensure ongoing confidentiality of personal data.

Confidentiality ensures that personal data is accessible only to authorized individuals, systems, and processes, preventing unauthorized disclosure.

## Applicability

- User authentication and authorization systems
- Database access controls
- API endpoints exposing personal data
- Employee access to customer data
- Third-party integrations
- Administrative interfaces

## Examples (Non-Normative)

### Missing Authentication

```javascript
// Signal Present: API endpoint without authentication
app.get('/api/users/:id', (req, res) => {
    const user = db.getUserById(req.params.id);
    res.json(user);  // Anyone can access any user's data
});
```

### Overly Permissive Access

```sql
-- Signal Present: Database user with excessive privileges
GRANT ALL PRIVILEGES ON customer_data.* TO 'app_user'@'%';
-- All application users can read/write/delete all customer data
```

### Missing Authorization Checks

```python
# Signal Present: No authorization check
@app.route('/user/<user_id>/profile')
def get_profile(user_id):
    profile = User.query.get(user_id)
    # Missing check: Is current user authorized to view this profile?
    return jsonify(profile.to_dict())
```

### Remediation Example

```python
# Signal Resolved: Proper authentication and authorization
from functools import wraps
from flask import abort, session

def require_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'user_id' not in session:
            abort(401)  # Unauthorized
        return f(*args, **kwargs)
    return decorated

def require_ownership(f):
    @wraps(f)
    def decorated(user_id, *args, **kwargs):
        if session.get('user_id') != user_id:
            abort(403)  # Forbidden
        return f(user_id, *args, **kwargs)
    return decorated

@app.route('/user/<user_id>/profile')
@require_auth
@require_ownership
def get_profile(user_id):
    profile = User.query.get(user_id)
    return jsonify(profile.to_dict())
```

## GDPR Context (Informative)

- **Art. 32.1(b)**: Ability to ensure ongoing confidentiality of processing systems and services
- **Art. 5.1(f)**: Personal data must be processed in a manner that ensures appropriate security, including protection against unauthorized processing
- **Recital 39**: Access should be limited to those who need it for their tasks

## Related Signals

- `CSE-GDPR-SECURITY-NO-ACCESS-CONTROL-010`
- `CSE-GDPR-SECURITY-NO-ENCRYPTION-002`
- `CSE-GDPR-SECURITY-NO-INTEGRITY-004`
