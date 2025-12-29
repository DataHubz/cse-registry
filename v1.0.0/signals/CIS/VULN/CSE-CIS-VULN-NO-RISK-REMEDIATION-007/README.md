# CSE-CIS-VULN-NO-RISK-REMEDIATION-007

**Risk-Based Remediation Missing**

## Signal Overview

| Field           | Value                                    |
|-----------------|------------------------------------------|
| Identifier      | `CSE-CIS-VULN-NO-RISK-REMEDIATION-007`   |
| Domain          | CIS                                      |
| Category        | VULN                                     |
| Status          | Active                                   |
| Introduced In   | 1.0.0                                    |

## Description

An organization has not implemented a risk-based approach to vulnerability remediation strategy.

This signal indicates the absence of a systematic process for prioritizing vulnerability remediation based on risk factors such as asset criticality, threat intelligence, exploitability, and business impact rather than solely on vulnerability severity scores.

## Applicability

This signal applies to:

- Enterprise vulnerability management programs
- Security operations centers (SOCs)
- IT operations and system administration teams
- Application security teams
- Cloud security teams
- Risk management functions
- Asset owners across all domains

## Examples (Non-Normative)

The following are illustrative examples of conditions that may trigger this signal:

### CVSS-Only Prioritization

```yaml
# Remediation based solely on CVSS scores
remediation_priority:
  criteria: cvss_score_only
  critical: CVSS >= 9.0
  high: CVSS >= 7.0
  medium: CVSS >= 4.0
  # Missing risk factors:
  asset_criticality: not_considered
  threat_intelligence: not_considered
  exploitability: not_considered
  business_impact: not_considered
```

### No Risk Scoring Model

```text
Missing risk-based prioritization factors:
- Asset criticality and business value
- Exposure (internal vs. external)
- Active exploitation in the wild
- Availability of exploit code
- Compensating controls
- Data sensitivity
- Regulatory requirements
```

### Lack of Threat Intelligence Integration

```python
# Vulnerability remediation without threat context
def prioritize_vulnerabilities(vulns):
    # Only sorting by CVSS score
    return sorted(vulns, key=lambda v: v['cvss_score'], reverse=True)

    # Missing:
    # - CISA KEV catalog integration
    # - Exploit prediction scoring (EPSS)
    # - Threat actor TTPs
    # - Industry-specific threat intelligence
```

### No Asset Criticality Weighting

```json
{
  "vulnerability": "CVE-2024-1234",
  "cvss_score": 7.5,
  "affected_assets": [
    {"name": "dev-server", "criticality": "unknown"},
    {"name": "prod-db", "criticality": "unknown"}
  ],
  "remediation_priority": "medium"
}
```

### Missing Compensating Controls Assessment

```text
Remediation decisions made without considering:
- Existing security controls (WAF, IPS, etc.)
- Network segmentation
- Access restrictions
- Monitoring and detection capabilities
- Temporary mitigations
```

### No EPSS Integration

```yaml
# Missing Exploit Prediction Scoring System (EPSS) data
vulnerability_assessment:
  cve: CVE-2024-5678
  cvss: 9.8
  epss_score: null  # Exploit likelihood not considered
  epss_percentile: null
  in_cisa_kev: null  # Known exploited vulnerabilities catalog
```

### Lack of Business Context

```sql
-- Vulnerability tracking without business impact
SELECT
  vulnerability_id,
  cvss_score,
  affected_systems
FROM vulnerabilities
-- Missing columns:
-- business_criticality
-- data_classification
-- compliance_requirement
-- outage_impact
-- revenue_impact
```

## What This Signal Does NOT Assert

- Whether vulnerabilities are being remediated
- The effectiveness of current prioritization methods
- Whether compensating controls are adequate
- The specific risk model to be used
- Compliance or non-compliance with CIS Controls or any framework
- Required remediation actions

## CIS Controls Context (Informative)

This signal is relevant to CIS Control 7:

- **Control 07**: Continuous Vulnerability Management
- **Safeguard 7.7**: Remediate Detected Vulnerabilities
- **Implementation Group**: IG2
- **Asset Type**: Applications
- **Security Function**: Protect

**Safeguard Description:** "Remediate detected vulnerabilities in software through processes and tooling on a monthly, or more frequent, basis, based on the remediation process."

This safeguard emphasizes risk-based remediation aligned with the organization's documented remediation process (Safeguard 7.2), incorporating factors beyond simple severity scoring.

These references are informative and do not constitute compliance guidance.

## Related Signals

- `CSE-CIS-VULN-NO-REMEDIATION-002` — Vulnerability remediation process missing
- `CSE-CIS-VULN-NO-PROCESS-001` — Vulnerability management process missing
- `CSE-CIS-ASSET-NO-CRITICALITY-001` — Asset criticality classification missing (if defined)

## Notes

Detection of this signal typically involves:

- Review of vulnerability prioritization methodologies
- Assessment of risk scoring models and criteria
- Analysis of threat intelligence integration
- Examination of asset criticality classifications
- Review of compensating controls assessment processes
- Evaluation of EPSS and CISA KEV catalog usage
- Assessment of remediation decision documentation

Risk-based remediation typically incorporates:
- **CVSS scores**: Baseline severity assessment
- **EPSS**: Exploit prediction likelihood
- **CISA KEV**: Known exploited vulnerabilities
- **Asset criticality**: Business value and impact
- **Threat intelligence**: Active exploitation data
- **Compensating controls**: Existing mitigations
- **Business context**: Compliance and regulatory drivers

The presence of this signal indicates a condition that warrants review in the context of risk-based vulnerability remediation requirements.
