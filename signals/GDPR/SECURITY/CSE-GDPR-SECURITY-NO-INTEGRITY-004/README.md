# CSE-GDPR-SECURITY-NO-INTEGRITY-004

**Integrity Measures Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-INTEGRITY-004` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack adequate measures to ensure ongoing integrity of personal data.

Integrity ensures that data remains accurate, complete, and unaltered except by authorized processes, protecting against unauthorized modification or corruption.

## Applicability

- Database systems and data stores
- Data processing pipelines
- User input forms and APIs
- File upload and storage systems
- Audit and logging systems
- Data synchronization processes

## Examples (Non-Normative)

### Missing Input Validation

```python
# Signal Present: No validation of user input
@app.route('/update-profile', methods=['POST'])
def update_profile():
    user_id = request.form['user_id']
    email = request.form['email']
    # No validation - could be SQL injection, invalid email, etc.
    db.execute(f"UPDATE users SET email='{email}' WHERE id={user_id}")
```

### No Audit Trail

```javascript
// Signal Present: Modifications without logging
async function updateUserData(userId, newData) {
    await db.users.updateOne(
        { _id: userId },
        { $set: newData }
    );
    // No audit log of who changed what and when
}
```

### Missing Data Validation

```python
# Signal Present: No integrity checks on critical data
class User:
    def __init__(self, email, age):
        self.email = email  # No email format validation
        self.age = age      # No age range validation
```

### Remediation Example

```python
# Signal Resolved: Proper input validation and audit logging
from datetime import datetime
import re

def validate_email(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if not re.match(pattern, email):
        raise ValueError("Invalid email format")
    return email

def validate_age(age):
    if not isinstance(age, int) or age < 0 or age > 150:
        raise ValueError("Invalid age")
    return age

@app.route('/update-profile', methods=['POST'])
def update_profile():
    user_id = session.get('user_id')
    try:
        email = validate_email(request.form['email'])
        age = validate_age(int(request.form['age']))

        # Use parameterized query to prevent injection
        db.execute(
            "UPDATE users SET email=?, age=? WHERE id=?",
            (email, age, user_id)
        )

        # Audit trail
        audit_log.record({
            'timestamp': datetime.utcnow(),
            'user_id': user_id,
            'action': 'profile_update',
            'changes': {'email': email, 'age': age},
            'actor': session.get('user_id')
        })

    except ValueError as e:
        return jsonify({'error': str(e)}), 400
```

## GDPR Context (Informative)

- **Art. 32.1(b)**: Ability to ensure ongoing integrity of processing systems and services
- **Art. 5.1(d)**: Personal data must be accurate and kept up to date
- **Art. 5.1(f)**: Processing must ensure appropriate security including protection against unauthorized alteration

## Related Signals

- `CSE-GDPR-SECURITY-NO-CONFIDENTIALITY-003`
- `CSE-GDPR-PRINCIPLES-NO-ACCURACY-006`
- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
