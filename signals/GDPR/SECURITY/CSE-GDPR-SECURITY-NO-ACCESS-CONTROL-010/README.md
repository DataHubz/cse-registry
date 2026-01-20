# CSE-GDPR-SECURITY-NO-ACCESS-CONTROL-010

**Access Control Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-ACCESS-CONTROL-010` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack appropriate access control measures to ensure that only authorized personnel can access personal data.

Access control includes authentication, authorization, least privilege, separation of duties, and access monitoring.

## Applicability

- User authentication systems
- Database access management
- API authorization
- Administrative interfaces
- Cloud infrastructure access
- Processor personnel access
- Third-party system integrations

## Examples (Non-Normative)

### Missing Authentication

```python
# Signal Present: No authentication required
@app.route('/admin/users')
def list_users():
    # Anyone can access this endpoint
    users = db.query("SELECT * FROM users")
    return jsonify([u.to_dict() for u in users])
```

### Overly Permissive Access

```sql
-- Signal Present: All users have full access
CREATE USER app_user WITH PASSWORD 'password123';
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO app_user;
-- No separation of read vs. write access
```

### Shared Credentials

```bash
# Signal Present: Shared database credentials
# .env file committed to git
DB_USER=admin
DB_PASSWORD=shared_password_2025
# All developers use same credentials
# No individual accountability
```

### Missing Authorization Checks

```javascript
// Signal Present: No ownership verification
app.delete('/api/user/:id/data', async (req, res) => {
    const userId = req.params.id;
    // Missing: Is the current user authorized to delete this data?
    await database.deleteUser(userId);
    res.json({ success: true });
});
```

### Remediation Example

```python
# Signal Resolved: Comprehensive access control
from functools import wraps
from flask import request, abort, g
import jwt
from enum import Enum

class Permission(Enum):
    READ_OWN_DATA = 'read:own'
    READ_ALL_DATA = 'read:all'
    WRITE_OWN_DATA = 'write:own'
    WRITE_ALL_DATA = 'write:all'
    DELETE_OWN_DATA = 'delete:own'
    DELETE_ALL_DATA = 'delete:all'
    ADMIN = 'admin'

class Role(Enum):
    USER = [Permission.READ_OWN_DATA, Permission.WRITE_OWN_DATA, Permission.DELETE_OWN_DATA]
    SUPPORT = [Permission.READ_ALL_DATA]
    DATA_CONTROLLER = [Permission.READ_ALL_DATA, Permission.WRITE_ALL_DATA]
    ADMIN = [Permission.ADMIN, Permission.READ_ALL_DATA, Permission.WRITE_ALL_DATA, Permission.DELETE_ALL_DATA]

def require_auth(f):
    """Require valid authentication"""
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization', '').replace('Bearer ', '')
        if not token:
            abort(401, 'Authentication required')

        try:
            payload = jwt.decode(token, app.config['JWT_SECRET'], algorithms=['HS256'])
            g.user_id = payload['user_id']
            g.user_role = Role[payload['role']]
        except jwt.InvalidTokenError:
            abort(401, 'Invalid token')

        # Log access attempt
        access_log.record({
            'timestamp': datetime.utcnow(),
            'user_id': g.user_id,
            'endpoint': request.endpoint,
            'method': request.method,
            'ip_address': request.remote_addr
        })

        return f(*args, **kwargs)
    return decorated

def require_permission(permission: Permission):
    """Require specific permission"""
    def decorator(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            if permission not in g.user_role.value and Permission.ADMIN not in g.user_role.value:
                abort(403, 'Insufficient permissions')
            return f(*args, **kwargs)
        return decorated
    return decorator

def require_ownership(resource_type: str):
    """Require user owns the resource or has admin privileges"""
    def decorator(f):
        @wraps(f)
        def decorated(resource_id, *args, **kwargs):
            if Permission.ADMIN in g.user_role.value:
                return f(resource_id, *args, **kwargs)

            # Verify ownership
            owner_id = get_resource_owner(resource_type, resource_id)
            if owner_id != g.user_id:
                abort(403, 'Access denied')

            return f(resource_id, *args, **kwargs)
        return decorated
    return decorator

# Apply access controls
@app.route('/api/user/<user_id>/data', methods=['GET'])
@require_auth
@require_ownership('user')
def get_user_data(user_id):
    """Users can read their own data"""
    return jsonify(User.query.get(user_id).to_dict())

@app.route('/api/admin/users', methods=['GET'])
@require_auth
@require_permission(Permission.READ_ALL_DATA)
def list_all_users():
    """Only authorized roles can list all users"""
    return jsonify([u.to_dict() for u in User.query.all()])

@app.route('/api/user/<user_id>/data', methods=['DELETE'])
@require_auth
@require_ownership('user')
@require_permission(Permission.DELETE_OWN_DATA)
def delete_user_data(user_id):
    """Users can delete their own data"""
    User.query.filter_by(id=user_id).delete()
    db.session.commit()

    # Audit log
    audit_log.record({
        'timestamp': datetime.utcnow(),
        'user_id': g.user_id,
        'action': 'delete_user_data',
        'target_user_id': user_id,
        'ip_address': request.remote_addr
    })

    return jsonify({'success': True})
```

```python
# Signal Resolved: Database access with least privilege
# migrations/add_db_roles.sql

-- Create read-only role for analytics
CREATE ROLE analytics_readonly;
GRANT CONNECT ON DATABASE customer_db TO analytics_readonly;
GRANT USAGE ON SCHEMA public TO analytics_readonly;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO analytics_readonly;

-- Create app role with limited write access
CREATE ROLE app_readwrite;
GRANT CONNECT ON DATABASE customer_db TO app_readwrite;
GRANT USAGE ON SCHEMA public TO app_readwrite;
GRANT SELECT, INSERT, UPDATE ON customers, orders TO app_readwrite;
-- No DELETE or TRUNCATE permissions

-- Create individual users (no shared credentials)
CREATE USER analytics_user_john WITH PASSWORD 'unique_strong_password_1';
CREATE USER app_user_service WITH PASSWORD 'unique_strong_password_2';

GRANT analytics_readonly TO analytics_user_john;
GRANT app_readwrite TO app_user_service;

-- Enable access logging
ALTER DATABASE customer_db SET log_connections = on;
ALTER DATABASE customer_db SET log_disconnections = on;
ALTER DATABASE customer_db SET log_statement = 'mod';  -- Log modifications
```

```python
# Signal Resolved: Access provisioning process
# access_management.py

class AccessRequest:
    def __init__(self, requester, target_user, role, justification):
        self.requester = requester
        self.target_user = target_user
        self.role = role
        self.justification = justification
        self.status = 'pending'
        self.approved_by = None

    def approve(self, approver):
        """Approve access request"""
        if not approver.has_permission(Permission.ADMIN):
            raise PermissionError("Only admins can approve access")

        self.approved_by = approver
        self.status = 'approved'

        # Grant access
        grant_access(self.target_user, self.role)

        # Audit log
        audit_log.record({
            'action': 'access_granted',
            'requester': self.requester,
            'target_user': self.target_user,
            'role': self.role,
            'approver': approver,
            'timestamp': datetime.utcnow()
        })

def revoke_access(user_id, reason):
    """Revoke user access"""
    user = User.query.get(user_id)
    user.active = False
    user.access_revoked_at = datetime.utcnow()
    db.session.commit()

    # Invalidate sessions
    Session.query.filter_by(user_id=user_id).delete()

    # Audit log
    audit_log.record({
        'action': 'access_revoked',
        'user_id': user_id,
        'reason': reason,
        'timestamp': datetime.utcnow()
    })

def review_access():
    """Quarterly access review"""
    users = User.query.filter_by(active=True).all()
    for user in users:
        # Check last activity
        last_login = Session.query.filter_by(user_id=user.id).order_by(Session.created_at.desc()).first()
        if not last_login or (datetime.utcnow() - last_login.created_at).days > 90:
            # Flag for review
            notify_admin(f"User {user.id} inactive for 90+ days")
```

## GDPR Context (Informative)

- **Art. 32.4**: Controllers and processors must ensure personnel accessing personal data act only on instructions
- **Art. 29**: Processors must ensure personnel accessing personal data are bound by confidentiality
- **Art. 32.1(b)**: Access control supports confidentiality of processing systems
- **Recital 39**: Personal data should be accessible only to those who need it for processing

## Related Signals

- `CSE-GDPR-SECURITY-NO-CONFIDENTIALITY-003`
- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
- `CSE-GDPR-CONTROLLER-NO-PROCESSOR-CONTROLS-001` (if exists)
