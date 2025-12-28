# CSE-HITRUST-HR-NO-TERMINATION-005

**Termination Process Not Implemented**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-HR-NO-TERMINATION-005` |
| Domain | HITRUST |
| Category | HR |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

No secure process exists for workforce termination, including timely access revocation, asset return, and removal of credentials when employment or contractual relationships end. This creates significant security risks as former employees, contractors, or third-party users may retain inappropriate access to systems, data, and facilities.

This signal indicates the absence of documented and enforced procedures to ensure that all access rights, physical assets, and credentials are promptly recovered or disabled when workforce members leave the organization or change roles.

## Applicability

- Employee termination and offboarding processes
- Contractor and vendor relationship termination
- Role changes and transfers requiring access modification
- Emergency termination procedures (immediate revocation)
- Planned departure workflows
- Access revocation for all system types (cloud, on-premises, third-party)
- Physical security badge and key return
- Mobile device and equipment recovery
- Email and communication system deactivation
- Remote access and VPN credential removal

## Examples (Non-Normative)

### No Termination Checklist

```yaml
hr_process:
  offboarding:
    exit_interview: true
    final_paycheck: true
    benefits_termination: true
    # Critical security gaps:
    access_revocation_checklist: null
    asset_return_verification: null
    credential_deactivation: null
    system_access_review: null
    timeline_requirements: undefined
```

### Delayed Access Revocation

```yaml
termination_event:
  employee_id: "EMP-2024-5678"
  employee_name: "Sarah Johnson"
  position: "System Administrator"
  access_level: "privileged"
  phi_access: true
  termination_details:
    last_day: "2024-03-15"
    notification_date: "2024-03-01"
    reason: "resignation"
  access_revocation:
    active_directory: "2024-03-22"  # 7 days after termination
    email_account: "2024-03-29"  # 14 days after termination
    vpn_access: still_active  # Never disabled
    database_access: still_active  # Never disabled
    building_access: "2024-03-16"  # 1 day delay
  assets:
    laptop: not_returned
    mobile_device: not_returned
    security_badge: returned
    encryption_keys: not_revoked
  # Former admin retained system access for weeks
```

### Incomplete Termination Process

```
Terminated Employee Audit (Q1 2024):

Total Terminations: 23 employees

Access Revocation Status:
  - Same day termination: 4 (17%)
  - Within 24 hours: 7 (30%)
  - 2-7 days after: 8 (35%)
  - More than 7 days: 4 (17%)

Asset Recovery:
  - Laptops returned: 15/23 (65%)
  - Mobile devices returned: 12/23 (52%)
  - Security badges returned: 19/23 (83%)
  - Outstanding equipment value: $47,000

Active Accounts After Termination:
  - Email accounts: 11 still active
  - VPN access: 8 still active
  - Application access: 16 still active

Finding: No effective termination process enforcement
```

### No Contractor Offboarding

```yaml
vendor_termination:
  contractor: "Medical Transcription Services"
  contract_end_date: "2024-02-29"
  personnel_count: 12
  access_provided:
    - ehr_system
    - patient_portal
    - document_management
    - vpn_access
  termination_process:
    contract_closure: completed
    final_invoice: paid
    # Security gaps:
    access_revocation_performed: false
    credentials_disabled: false
    access_verification: not_performed
    ongoing_access_detected: true  # 30 days post-contract
  risk: "Terminated vendor personnel retain PHI access"
```

## HITRUST CSF Context (Informative)

**Control Reference:** 02.e - Human Resources Security - Termination and Change of Employment

**Control Requirement:** Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, communicated to the employee or contractor, and enforced. When workforce members leave the organization or change positions, access rights to information and information assets shall be removed or adjusted, physical assets shall be returned, and appropriate continuity measures shall be implemented.

**Key Requirements:**
- Documented termination and role change procedures
- Timely access revocation across all systems and applications
- Physical and logical asset recovery and verification
- Credential deactivation and password changes for shared accounts
- Security badge, key, and facility access removal
- Email, communication, and collaboration tool deactivation
- Cloud service and third-party application access removal
- Remote access and VPN credential termination
- Exit interviews including security reminders (ongoing confidentiality)
- Notification to relevant teams (IT, security, facilities, managers)
- Different procedures for voluntary vs. involuntary termination
- Emergency termination procedures for immediate revocation

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-HR-NO-SCREENING-001` - Background screening not conducted
- `CSE-HITRUST-HR-NO-TERMS-002` - Employment terms not defining post-employment obligations
- `CSE-HITRUST-HR-NO-DISCIPLINARY-004` - Disciplinary process not defined
- `CSE-ISO27001-PEOPLE-NO-TERMINATION-PROCESS-005` - ISO 27001 termination control
- `CSE-HIPAA-ADMIN-NO-TERMINATION-PROC-008` - HIPAA termination procedures
- `CSE-CMMC-PERSONNEL-NO-TERMINATION-PROCESS-002` - CMMC termination requirement

## Notes

Detection of this signal typically involves:

- Review of HR offboarding procedures and checklists
- Examination of access revocation workflows and timelines
- Analysis of integration between HR systems and access management platforms
- Verification of termination procedure execution and documentation
- Assessment of access removal completeness across all systems
- Review of asset recovery tracking and verification processes
- Evaluation of automated vs. manual termination steps
- Analysis of termination timeliness (same-day vs. delayed)
- Audit of former employee accounts and access rights
- Review of contractor and third-party termination procedures
- Testing of emergency termination procedures

The presence of this signal indicates that former workforce members may retain inappropriate access to sensitive systems and data, creating significant insider threat risks, data breach potential, and regulatory compliance violations. Delayed or incomplete terminations are a common attack vector in security incidents.
