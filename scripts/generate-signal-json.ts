/**
 * Generate signal.json files from README.md
 *
 * This script parses README.md files for signals that don't have a signal.json
 * and generates consistent signal.json files to ensure 100% coverage.
 */

import * as fs from "fs";
import * as path from "path";

const SIGNALS_PATH = path.join(__dirname, "..", "signals");

interface SignalMetadata {
  suggested_severity: string;
  risk_domains: string[];
  related_controls: string[];
  detection_notes: string;
}

interface SignalJson {
  id: string;
  canonical_name: string;
  description: string;
  domain: string;
  category: string;
  applicability: string;
  introduced_in: string;
  status: string;
  metadata: SignalMetadata;
}

// Domain-specific risk domain mappings
const DOMAIN_RISK_MAPPINGS: Record<string, Record<string, string[]>> = {
  HIPAA: {
    ADMIN: ["access-control", "governance", "compliance"],
    PHYSICAL: ["physical-security", "asset-protection", "compliance"],
    TECH: ["technical-security", "data-protection", "compliance"],
  },
  FEDRAMP: {
    AC: ["access-control", "identity", "authorization"],
    AU: ["audit-logging", "monitoring", "accountability"],
    CM: ["configuration-management", "change-control", "baseline"],
    IA: ["identity", "authentication", "credential-management"],
    SC: ["system-communications", "encryption", "network-security"],
    AT: ["awareness-training", "security-awareness", "personnel"],
    CA: ["security-assessment", "authorization", "compliance"],
    CP: ["contingency-planning", "disaster-recovery", "resilience"],
    IR: ["incident-response", "security-operations", "threat-management"],
    MA: ["maintenance", "system-integrity", "operational-security"],
    MP: ["media-protection", "data-handling", "asset-control"],
    PE: ["physical-security", "environmental-protection", "facility-security"],
    PL: ["security-planning", "governance", "risk-management"],
    PS: ["personnel-security", "background-screening", "access-control"],
    RA: ["risk-assessment", "vulnerability-management", "threat-analysis"],
    SA: ["system-acquisition", "development-security", "supply-chain"],
    SI: ["system-integrity", "vulnerability-management", "malware-protection"],
    PM: ["program-management", "governance", "policy"],
    PT: ["pii-processing", "privacy", "data-protection"],
    SR: ["supply-chain", "third-party-risk", "vendor-management"],
  },
  HITRUST: {
    ACCESS: ["access-control", "identity", "authorization"],
    AUDIT: ["audit-logging", "monitoring", "accountability"],
    CONFIG: ["configuration-management", "baseline", "hardening"],
    CRYPTO: ["cryptography", "key-management", "encryption"],
    DATA: ["data-protection", "classification", "handling"],
    INCIDENT: ["incident-response", "threat-management", "recovery"],
    NETWORK: ["network-security", "segmentation", "perimeter"],
    PHYSICAL: ["physical-security", "facility-protection", "access-control"],
    RISK: ["risk-management", "assessment", "governance"],
    VENDOR: ["vendor-management", "third-party-risk", "supply-chain"],
  },
  CIS: {
    ASSET: ["asset-management", "inventory", "visibility"],
    DATA: ["data-protection", "classification", "encryption"],
    ACCESS: ["access-control", "identity", "privilege-management"],
    ACCOUNT: ["account-management", "identity", "credential-security"],
    VULN: ["vulnerability-management", "patching", "remediation"],
    AUDIT: ["audit-logging", "monitoring", "detection"],
    CONFIG: ["configuration-management", "hardening", "baseline"],
    MALWARE: ["malware-defense", "endpoint-protection", "threat-prevention"],
    NETWORK: ["network-security", "segmentation", "monitoring"],
    INCIDENT: ["incident-response", "recovery", "threat-management"],
    AWARE: ["security-awareness", "training", "phishing-defense"],
    SERVICE: ["service-provider", "cloud-security", "third-party"],
    APP: ["application-security", "secure-development", "code-review"],
    PENETRATION: ["penetration-testing", "security-assessment", "red-team"],
  },
  NISTCSF: {
    IDENTIFY: ["asset-management", "risk-assessment", "governance"],
    PROTECT: ["access-control", "data-protection", "security-architecture"],
    DETECT: ["monitoring", "detection", "security-operations"],
    RESPOND: ["incident-response", "communications", "mitigation"],
    RECOVER: ["recovery-planning", "resilience", "continuity"],
    GOVERN: ["governance", "risk-management", "compliance"],
  },
  CCPA: {
    CONSENT: ["consent-management", "privacy", "data-subject-rights"],
    DATA: ["data-protection", "privacy", "data-handling"],
    PRIVACY: ["privacy", "data-protection", "transparency"],
    RIGHTS: ["data-subject-rights", "privacy", "access-control"],
    NOTICE: ["transparency", "privacy-notice", "disclosure"],
    SALE: ["data-sharing", "privacy", "third-party"],
    BUSINESS: ["business-purpose", "data-minimization", "processing"],
  },
  PCIDSS: {
    NETWORK: ["network-security", "firewall", "segmentation"],
    STORE: ["data-storage", "encryption", "cardholder-data"],
    ACCESS: ["access-control", "authentication", "authorization"],
    MONITOR: ["monitoring", "logging", "audit-trail"],
    VULN: ["vulnerability-management", "patching", "scanning"],
    POLICY: ["security-policy", "governance", "compliance"],
    ENCRYPT: ["encryption", "cryptography", "key-management"],
    SECURE: ["secure-systems", "hardening", "configuration"],
    PHYSICAL: ["physical-security", "media-protection", "access-control"],
    TEST: ["security-testing", "penetration-testing", "assessment"],
    MAINTAIN: ["maintenance", "patch-management", "updates"],
    AUTH: ["authentication", "credential-security", "identity"],
  },
  GEN: {
    AUTH: ["authentication", "identity", "access-control"],
    CRYPTO: ["cryptography", "encryption", "key-management"],
    CONFIG: ["configuration-management", "hardening", "baseline"],
    DATA: ["data-protection", "privacy", "encryption"],
    NETWORK: ["network-security", "firewall", "segmentation"],
    LOGGING: ["audit-logging", "monitoring", "detection"],
  },
};

// Default risk domains by category pattern
function getDefaultRiskDomains(domain: string, category: string): string[] {
  const domainMappings = DOMAIN_RISK_MAPPINGS[domain];
  if (domainMappings && domainMappings[category]) {
    return domainMappings[category];
  }

  // Fallback based on category name patterns
  const categoryLower = category.toLowerCase();
  if (categoryLower.includes("access") || categoryLower.includes("auth")) {
    return ["access-control", "identity", "authorization"];
  }
  if (categoryLower.includes("audit") || categoryLower.includes("log")) {
    return ["audit-logging", "monitoring", "accountability"];
  }
  if (categoryLower.includes("config")) {
    return ["configuration-management", "hardening", "compliance"];
  }
  if (categoryLower.includes("crypto") || categoryLower.includes("encrypt")) {
    return ["cryptography", "encryption", "key-management"];
  }
  if (categoryLower.includes("data") || categoryLower.includes("privacy")) {
    return ["data-protection", "privacy", "compliance"];
  }
  if (categoryLower.includes("network")) {
    return ["network-security", "segmentation", "perimeter"];
  }
  if (categoryLower.includes("physical")) {
    return ["physical-security", "facility-protection", "access-control"];
  }
  if (categoryLower.includes("incident") || categoryLower.includes("respond")) {
    return ["incident-response", "recovery", "threat-management"];
  }

  // Generic fallback
  return ["security", "compliance", "governance"];
}

// Map requirement type to severity
function mapRequirementTypeToSeverity(requirementType: string | undefined): string {
  if (!requirementType) return "medium";

  const typeLower = requirementType.toLowerCase();
  if (typeLower === "required" || typeLower === "mandatory" || typeLower === "shall") {
    return "high";
  }
  if (typeLower === "addressable" || typeLower === "should") {
    return "medium";
  }
  if (typeLower === "recommended" || typeLower === "optional" || typeLower === "may") {
    return "low";
  }
  if (typeLower === "critical") {
    return "critical";
  }
  return "medium";
}

// Extract canonical name from markdown
function extractCanonicalName(content: string): string | undefined {
  // Look for bold text after h1 (e.g., "**No Access Authorization**")
  const match = content.match(/^\*\*(.+?)\*\*$/m);
  return match ? match[1].trim() : undefined;
}

// Extract section content from markdown
function extractSection(content: string, sectionName: string): string | undefined {
  const regex = new RegExp(`## ${sectionName}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`, "i");
  const match = content.match(regex);

  if (match) {
    const sectionContent = match[1].trim();
    // Clean up the content
    const lines = sectionContent
      .split("\n")
      .filter((line) => !line.startsWith("|") && !line.startsWith("|-"))
      .map((line) => {
        if (line.startsWith("- ")) {
          return line.substring(2).trim();
        }
        return line.trim();
      })
      .filter((line) => line.length > 0);

    return lines.join(" ").trim();
  }
  return undefined;
}

// Extract description (first paragraph from Description section)
function extractDescription(content: string): string | undefined {
  const section = extractSection(content, "Description");
  if (!section) return undefined;

  // Take first paragraph (up to double newline or reasonable length)
  const firstParagraph = section.split(/\n\n/)[0];
  return firstParagraph.substring(0, 500).trim();
}

// Extract applicability
function extractApplicability(content: string): string | undefined {
  const section = extractSection(content, "Applicability");
  if (!section) return undefined;
  return section.substring(0, 500).trim();
}

// Extract control reference from context sections
function extractControlReference(content: string): string | undefined {
  // Look for various context patterns
  const contextPatterns = [
    /\*\*CFR Reference:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Control:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Control Reference:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Requirement:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Requirement Reference:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Article:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*Section:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*CIS Control:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*NIST Reference:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*PCI DSS Reference:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*FedRAMP Control:\*\*\s*(.+?)(?:\n|$)/i,
    /\*\*HITRUST Control:\*\*\s*(.+?)(?:\n|$)/i,
  ];

  for (const pattern of contextPatterns) {
    const match = content.match(pattern);
    if (match) {
      return match[1].trim();
    }
  }
  return undefined;
}

// Extract requirement type
function extractRequirementType(content: string): string | undefined {
  const match = content.match(/\*\*Requirement Type:\*\*\s*(.+?)(?:\n|$)/i);
  return match ? match[1].trim() : undefined;
}

// Extract detection notes from Notes section
function extractDetectionNotes(content: string): string | undefined {
  const section = extractSection(content, "Notes");
  if (!section) return undefined;
  return section.substring(0, 800).trim();
}

// Extract signal overview metadata from table
function extractOverviewTable(content: string): Record<string, string> {
  const result: Record<string, string> = {};
  const tableMatch = content.match(/## Signal Overview[\s\S]*?\|([^\|]+)\|([^\|]+)\|[\s\S]*?(?=\n## |$)/);

  if (tableMatch) {
    const tableContent = tableMatch[0];
    const rows = tableContent.split("\n").filter((line) => line.includes("|") && !line.includes("---"));

    for (const row of rows) {
      const cells = row.split("|").map((c) => c.trim());
      if (cells.length >= 3) {
        const key = cells[1].toLowerCase();
        const value = cells[2].replace(/`/g, "");
        if (key && value && key !== "field" && key !== "-") {
          result[key] = value;
        }
      }
    }
  }
  return result;
}

// Parse README.md and generate signal.json content
function parseReadmeToSignalJson(readmePath: string): SignalJson | null {
  try {
    const content = fs.readFileSync(readmePath, "utf-8");
    const dirPath = path.dirname(readmePath);
    const signalId = path.basename(dirPath);

    // Extract from overview table
    const overview = extractOverviewTable(content);

    // Get basic fields
    const domain = overview["domain"] || "";
    const category = overview["category"] || "";
    const status = (overview["status"] || "active").toLowerCase();
    const introducedIn = overview["introduced in"] || "1.0.0";

    // Extract other fields
    const canonicalName = extractCanonicalName(content);
    const description = extractDescription(content);
    const applicability = extractApplicability(content);
    const controlReference = extractControlReference(content);
    const requirementType = extractRequirementType(content);
    const detectionNotes = extractDetectionNotes(content);

    // Generate metadata
    const suggestedSeverity = mapRequirementTypeToSeverity(requirementType);
    const riskDomains = getDefaultRiskDomains(domain, category);
    const relatedControls = controlReference ? [controlReference] : [];

    // Validate required fields
    if (!signalId || !domain || !category) {
      console.warn(`  ⚠ Missing required fields in ${readmePath}`);
      return null;
    }

    // Build signal.json
    const signalJson: SignalJson = {
      id: signalId,
      canonical_name: canonicalName || signalId.split("-").slice(-2).join(" "),
      description: description || `Signal ${signalId} requires attention.`,
      domain,
      category,
      applicability: applicability || `Applicable to ${domain} compliance requirements.`,
      introduced_in: introducedIn,
      status,
      metadata: {
        suggested_severity: suggestedSeverity,
        risk_domains: riskDomains,
        related_controls: relatedControls,
        detection_notes:
          detectionNotes ||
          `Review ${domain} compliance documentation and controls for ${category} requirements.`,
      },
    };

    return signalJson;
  } catch (error) {
    console.error(`  ✗ Error parsing ${readmePath}:`, error);
    return null;
  }
}

// Find all signal directories that need signal.json
function findSignalsWithoutJson(signalsPath: string): string[] {
  const results: string[] = [];

  const domains = fs.readdirSync(signalsPath).filter((d) => {
    const stat = fs.statSync(path.join(signalsPath, d));
    return stat.isDirectory() && !d.startsWith(".");
  });

  for (const domain of domains) {
    const domainPath = path.join(signalsPath, domain);
    const categories = fs.readdirSync(domainPath).filter((c) => {
      const stat = fs.statSync(path.join(domainPath, c));
      return stat.isDirectory() && !c.startsWith(".");
    });

    for (const category of categories) {
      const categoryPath = path.join(domainPath, category);
      const signals = fs.readdirSync(categoryPath).filter((s) => {
        const stat = fs.statSync(path.join(categoryPath, s));
        return stat.isDirectory() && s.startsWith("CSE-");
      });

      for (const signal of signals) {
        const signalPath = path.join(categoryPath, signal);
        const signalJsonPath = path.join(signalPath, "signal.json");
        const readmePath = path.join(signalPath, "README.md");

        // Check if signal.json is missing but README.md exists
        if (!fs.existsSync(signalJsonPath) && fs.existsSync(readmePath)) {
          results.push(signalPath);
        }
      }
    }
  }

  return results;
}

// Main function
async function generateSignalJsonFiles(): Promise<void> {
  console.log("🔄 Generating signal.json files from README.md...\n");

  const signalsWithoutJson = findSignalsWithoutJson(SIGNALS_PATH);
  console.log(`📊 Found ${signalsWithoutJson.length} signals without signal.json\n`);

  // Group by domain for reporting
  const byDomain: Record<string, number> = {};
  let generated = 0;
  let failed = 0;

  for (const signalPath of signalsWithoutJson) {
    const readmePath = path.join(signalPath, "README.md");
    const signalJsonPath = path.join(signalPath, "signal.json");

    const signalJson = parseReadmeToSignalJson(readmePath);

    if (signalJson) {
      fs.writeFileSync(signalJsonPath, JSON.stringify(signalJson, null, 2) + "\n");
      generated++;
      byDomain[signalJson.domain] = (byDomain[signalJson.domain] || 0) + 1;

      if (generated % 50 === 0) {
        console.log(`  ✓ Generated ${generated} signal.json files...`);
      }
    } else {
      failed++;
    }
  }

  console.log(`\n✅ Generation complete!\n`);
  console.log(`📈 Summary:`);
  console.log(`   Generated: ${generated}`);
  console.log(`   Failed: ${failed}`);
  console.log(`\n📂 By domain:`);

  for (const [domain, count] of Object.entries(byDomain).sort()) {
    console.log(`   ${domain}: ${count} signals`);
  }
}

// Run the script
generateSignalJsonFiles().catch((error) => {
  console.error("❌ Generation failed:", error);
  process.exit(1);
});
