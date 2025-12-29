# CSE-GDPR-SECURITY-NO-RESILIENCE-006

**Resilience Measures Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-RESILIENCE-006` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack resilience to withstand and recover from incidents affecting personal data processing.

Resilience encompasses the ability to maintain operations during disruptions, adapt to changing conditions, and recover quickly from failures or attacks.

## Applicability

- Mission-critical processing systems
- High-volume data processing pipelines
- Customer-facing applications
- Data subject rights management systems
- Third-party integrations
- Authentication and authorization systems

## Examples (Non-Normative)

### No Error Handling

```python
# Signal Present: System crashes on any error
def process_user_request(user_id):
    user = db.get_user(user_id)  # Crashes if DB is down
    profile = api.get_profile(user.email)  # Crashes if API fails
    return combine_data(user, profile)
```

### Missing Circuit Breaker

```javascript
// Signal Present: Continuous failing requests to unavailable service
async function getUserPreferences(userId) {
    // No circuit breaker - keeps hammering failed service
    return await externalAPI.getPreferences(userId);
}
```

### No Graceful Degradation

```python
# Signal Present: All-or-nothing functionality
@app.route('/dashboard')
def dashboard():
    user_data = get_user_data()  # Required
    recommendations = get_recommendations()  # Required
    analytics = get_analytics()  # Required
    # If any service fails, entire dashboard fails
    return render_template('dashboard.html',
                          user=user_data,
                          recommendations=recommendations,
                          analytics=analytics)
```

### Remediation Example

```python
# Signal Resolved: Resilient error handling
import logging
from functools import wraps
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)

class CircuitBreaker:
    def __init__(self, failure_threshold=5, timeout=60):
        self.failure_count = 0
        self.failure_threshold = failure_threshold
        self.timeout = timeout
        self.last_failure_time = None
        self.state = 'closed'  # closed, open, half-open

    def call(self, func, *args, **kwargs):
        if self.state == 'open':
            if datetime.now() - self.last_failure_time > timedelta(seconds=self.timeout):
                self.state = 'half-open'
            else:
                raise Exception("Circuit breaker is open")

        try:
            result = func(*args, **kwargs)
            if self.state == 'half-open':
                self.state = 'closed'
                self.failure_count = 0
            return result
        except Exception as e:
            self.failure_count += 1
            self.last_failure_time = datetime.now()
            if self.failure_count >= self.failure_threshold:
                self.state = 'open'
                logger.error(f"Circuit breaker opened for {func.__name__}")
            raise

circuit_breaker = CircuitBreaker()

def resilient_call(fallback_value=None):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            try:
                return circuit_breaker.call(func, *args, **kwargs)
            except Exception as e:
                logger.warning(f"{func.__name__} failed: {e}")
                return fallback_value
        return wrapper
    return decorator

@resilient_call(fallback_value={})
def get_recommendations():
    return api.get_recommendations()

@resilient_call(fallback_value={})
def get_analytics():
    return analytics_service.get_data()

@app.route('/dashboard')
def dashboard():
    try:
        user_data = get_user_data()  # Critical - must succeed
    except Exception as e:
        logger.error(f"Failed to load user data: {e}")
        return render_template('error.html'), 503

    # Non-critical features degrade gracefully
    recommendations = get_recommendations()
    analytics = get_analytics()

    return render_template('dashboard.html',
                          user=user_data,
                          recommendations=recommendations or {},
                          analytics=analytics or {})
```

## GDPR Context (Informative)

- **Art. 32.1(b)**: Ability to ensure resilience of processing systems and services
- **Art. 32.1(c)**: Ability to restore availability and access in a timely manner after an incident
- **Recital 83**: Security measures should ensure resilience against accidental or unlawful destruction

## Related Signals

- `CSE-GDPR-SECURITY-NO-AVAILABILITY-005`
- `CSE-GDPR-SECURITY-NO-RECOVERY-CAPABILITY-007`
- `CSE-GDPR-SECURITY-NO-BREACH-DETECTION-011`
