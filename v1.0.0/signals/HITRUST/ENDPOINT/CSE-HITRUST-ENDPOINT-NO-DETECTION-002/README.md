# CSE-HITRUST-ENDPOINT-NO-DETECTION-002

**Endpoint Detection Missing**

## Signal Overview

| Field | Value |
|-------|-------|
| Identifier | `CSE-HITRUST-ENDPOINT-NO-DETECTION-002` |
| Domain | HITRUST |
| Category | ENDPOINT |
| Status | Active |
| Introduced In | 1.0.0 |

## Description

Endpoint detection and response (EDR) capabilities have not been implemented on devices accessing or storing protected health information (PHI) or other sensitive data.

This signal indicates the absence of advanced threat detection mechanisms on endpoints such as endpoint detection and response (EDR), behavioral analysis, or anomaly detection systems. EDR solutions provide real-time monitoring, threat detection, and incident response capabilities that go beyond traditional antivirus protection.

## Applicability

- Healthcare organizations subject to HIPAA
- Business associates handling PHI
- Organizations pursuing HITRUST certification
- Systems processing sensitive health information
- Health information exchanges (HIEs)
- Medical device manufacturers
- Healthcare SaaS providers

## Examples (Non-Normative)

### Endpoint Without EDR

```yaml
# Endpoint lacking detection capabilities
endpoint_security:
  device: "physician-laptop-42"
  antivirus: "installed"
  edr_solution: null
  behavioral_monitoring: false
  threat_detection: "signature_only"
```

### Missing Detection Agent

```json
{
  "security_monitoring": {
    "endpoint_id": "WORKSTATION-HR-03",
    "traditional_av": true,
    "edr_agent": false,
    "threat_hunting": false,
    "real_time_monitoring": false,
    "incident_response_capability": "none"
  }
}
```

### No Behavioral Analysis

```bash
# Checking for EDR/detection agents
$ ps aux | grep -i "edr\|crowdstrike\|carbon\|sentinelone\|defender_atp"
# No advanced detection agents running
```

## What This Signal Does NOT Assert

- Whether basic antivirus protection is in place
- The quality or effectiveness of network security controls
- Whether the organization is compliant or non-compliant with HITRUST
- The specific EDR solution required
- Whether compensating controls exist

## HITRUST Context (Informative)

- **Control Domain**: 17 - Endpoint Protection
- **Control Reference**: 17.b
- **Assessment Types**: e1, i1, r2
- **Maturity Levels**: 1-5

This signal is relevant to HITRUST CSF v11 requirements for implementing endpoint detection capabilities that:
- Provide real-time threat detection and monitoring
- Enable behavioral analysis and anomaly detection
- Support incident response and forensic investigation
- Identify advanced persistent threats (APTs)
- Integrate with security information and event management (SIEM) systems

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-HITRUST-ENDPOINT-NO-PROTECTION-001` - Endpoint protection missing
- `CSE-HITRUST-ENDPOINT-NO-HARDENING-003` - Endpoint hardening missing
- `CSE-HITRUST-OPS-NO-LOGGING-007` - Operational logging missing
- `CSE-HITRUST-INCIDENT-NO-DETECTION-002` - Incident detection missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of endpoint security architecture and capabilities
- Examination of EDR solution deployment and coverage
- Analysis of threat detection and monitoring systems
- Verification of behavioral analysis capabilities
- Assessment of incident response and forensic readiness

The presence of this signal indicates a gap in advanced threat detection capabilities that may leave endpoints vulnerable to sophisticated attacks and APTs. This should be addressed as a priority for HITRUST compliance and enhanced security posture.
