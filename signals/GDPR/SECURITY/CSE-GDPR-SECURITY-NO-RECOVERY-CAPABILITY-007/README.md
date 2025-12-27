# CSE-GDPR-SECURITY-NO-RECOVERY-CAPABILITY-007

**Recovery Capability Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-GDPR-SECURITY-NO-RECOVERY-CAPABILITY-007` |
| Domain | GDPR |
| Category | SECURITY |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Systems lack the ability to restore availability and access to personal data in a timely manner after a physical or technical incident.

Recovery capability includes backup procedures, disaster recovery plans, and tested restoration processes.

## Applicability

- All database systems storing personal data
- File storage and document management systems
- Backup and archive systems
- Cloud infrastructure
- Configuration management systems
- Disaster recovery environments

## Examples (Non-Normative)

### Missing Backup Strategy

```yaml
# Signal Present: No backup configuration
services:
  database:
    image: postgres:14
    volumes:
      - db-data:/var/lib/postgresql/data
    # No backup schedule, no snapshots

volumes:
  db-data:
```

### Untested Recovery

```bash
# Signal Present: Backup script with no testing
#!/bin/bash
# Last tested: Never
# RTO: Unknown
# RPO: Unknown

pg_dump customer_db > /backups/db_$(date +%Y%m%d).sql
# No verification that backup is restorable
# No documentation on recovery procedure
```

### Missing Disaster Recovery Plan

```python
# Signal Present: No documented recovery procedures
# disaster_recovery.py - File does not exist
# No runbook for data restoration
# No contact list for incidents
# No defined recovery objectives
```

### Remediation Example

```yaml
# Signal Resolved: Comprehensive backup strategy
services:
  database:
    image: postgres:14
    volumes:
      - db-data:/var/lib/postgresql/data

  backup:
    image: postgres:14
    depends_on:
      - database
    environment:
      PGHOST: database
      PGUSER: backup_user
      BACKUP_SCHEDULE: "0 */6 * * *"  # Every 6 hours
      RETENTION_DAYS: "30"
      VERIFY_BACKUP: "true"
    volumes:
      - backup-data:/backups
      - ./backup-script.sh:/backup-script.sh
    entrypoint: /backup-script.sh

  backup-monitor:
    image: monitoring:latest
    environment:
      ALERT_ON_BACKUP_FAILURE: "true"
      RPO_HOURS: "6"
      RTO_HOURS: "4"
```

```bash
# Signal Resolved: Tested backup and recovery script
#!/bin/bash
# disaster_recovery.sh
# RTO: 4 hours
# RPO: 6 hours
# Last tested: 2025-12-01
# Test schedule: Monthly

set -e

BACKUP_DIR="/backups"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/customer_db_$TIMESTAMP.sql"

echo "Starting backup at $(date)"

# Create backup
pg_dump -h database -U backup_user customer_db > "$BACKUP_FILE"

# Verify backup integrity
if [ -s "$BACKUP_FILE" ]; then
    echo "Backup created: $BACKUP_FILE ($(stat -f%z "$BACKUP_FILE") bytes)"
else
    echo "ERROR: Backup file is empty"
    exit 1
fi

# Test restoration in isolated environment
echo "Testing backup restoration..."
docker run --rm -v "$BACKUP_DIR:/backup" postgres:14 \
    psql -U test -d test_db < "$BACKUP_FILE"

if [ $? -eq 0 ]; then
    echo "Backup verification successful"
else
    echo "ERROR: Backup restoration failed"
    exit 1
fi

# Upload to offsite storage
echo "Uploading to S3..."
aws s3 cp "$BACKUP_FILE" s3://company-backups/database/ \
    --storage-class GLACIER \
    --server-side-encryption AES256

# Clean old backups (retain 30 days)
find "$BACKUP_DIR" -name "*.sql" -mtime +30 -delete

echo "Backup completed successfully at $(date)"

# Send success notification
curl -X POST https://monitoring.example.com/backup-success \
    -d "{\"service\": \"customer_db\", \"timestamp\": \"$TIMESTAMP\"}"
```

```markdown
# Disaster Recovery Runbook

## Recovery Time Objective (RTO): 4 hours
## Recovery Point Objective (RPO): 6 hours

## Recovery Procedures

### 1. Assess the Incident
- Determine scope of data loss
- Identify last known good backup
- Notify incident response team

### 2. Restore from Backup
```bash
# Restore from most recent backup
LATEST_BACKUP=$(aws s3 ls s3://company-backups/database/ | sort | tail -n 1 | awk '{print $4}')
aws s3 cp s3://company-backups/database/$LATEST_BACKUP /tmp/restore.sql

# Stop application
docker-compose stop app

# Restore database
psql -U postgres -d customer_db < /tmp/restore.sql

# Verify restoration
psql -U postgres -d customer_db -c "SELECT COUNT(*) FROM users;"

# Restart application
docker-compose start app
```

### 3. Verify Recovery
- [ ] Database accessible
- [ ] Data integrity confirmed
- [ ] Application functionality verified
- [ ] Data subject access working

### 4. Post-Recovery
- [ ] Document incident
- [ ] Update recovery procedures
- [ ] Schedule recovery drill review
```

## GDPR Context (Informative)

- **Art. 32.1(c)**: Implement measures to restore availability and access to personal data in a timely manner after an incident
- **Recital 83**: Regular testing and evaluation of security measures, including backup and recovery capabilities
- **Art. 5.1(f)**: Security includes protection against accidental loss or destruction

## Related Signals

- `CSE-GDPR-SECURITY-NO-AVAILABILITY-005`
- `CSE-GDPR-SECURITY-NO-RESILIENCE-006`
- `CSE-GDPR-SECURITY-NO-SECURITY-TESTING-008`
