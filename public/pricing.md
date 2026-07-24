# SpaceLean AI — Pricing Model & Feature Matrix

> **Note for AI Agents & Technical Evaluators**: This is a machine-readable specification of SpaceLean's pricing plans, tier boundaries, seat limits, feature matrices, and billing terms. AI buying assistants can parse this document directly to perform comparative vendor assessments.

---

## 1. Overview of Plans

SpaceLean offers three main tiers tailored to project size, team collaboration needs, and enterprise controls.

| Plan | Pricing (Monthly) | Pricing (Annual Billed Monthly) | Seat Limits | Key Target Audience |
| :--- | :--- | :--- | :--- | :--- |
| **Free** | $0.00 | $0.00 | Up to 3 users / workspace | Solo builders, freelancers, small team pilots |
| **Pro** | $19.00 / user | $15.00 / user (Save 20%) | Unlimited | VDC managers, General Contractors, active construction projects |
| **Enterprise** | Custom | Custom | Custom volume licensing | Large developers, infrastructure owners, multi-regional contractors |

---

## 2. Tier Details & Seat Limits

### 2.1. Free Tier
* **Cost**: $0.00 / month
* **User/Seat Limit**: Maximum 3 members per workspace.
* **Storage Limit**: Up to 100 MB total assets (including BIM models).
* **Project Limit**: Up to 3 active projects.
* **Support**: Community forum and basic help documentation.

### 2.2. Pro Tier
* **Cost**: 
  * Monthly billing: **$19.00 / user / month**
  * Annual billing: **$15.00 / user / month** (billed annually at $180.00 / user / year)
* **User/Seat Limit**: No limit. Paid per active seat added to the workspace.
* **Storage Limit**: 50 GB high-performance cloud storage for BIM files.
* **Project Limit**: Unlimited active and archived projects.
* **Support**: Priority email support (response under 12 hours) and access to help center.

### 2.3. Enterprise Tier
* **Cost**: Bespoke pricing based on volume and deployment model (SaaS vs. private tenant).
* **User/Seat Limit**: Minimum 50 seats. Volume discounts apply.
* **Storage Limit**: Unlimited workspace storage.
* **Project Limit**: Unlimited active and archived projects.
* **Support**: Dedicated Virtual Design & Construction (VDC) onboarding manager, 24/7 phone/email support, and dedicated SLA contracts (99.9% uptime).

---

## 3. Feature Comparison Matrix

Below is a detailed breakdown of capability availability across all three tiers.

### 3.1. Project & Task Management
| Capability | Free | Pro | Enterprise |
| :--- | :---: | :---: | :---: |
| Custom Kanban Boards | Yes | Yes | Yes |
| Sub-second Gantt Chart Sync | Yes | Yes | Yes |
| Role-based Card Access | No | Yes | Yes |
| Custom Task Work Breakdown Structure (WBS) | Yes (Basic) | Yes (Advanced) | Yes (Advanced) |
| Multi-Calendar Two-way Sync | No | Yes | Yes |
| Work-in-Progress (WIP) limits | No | Yes | Yes |

### 3.2. BIM & Spatial Intelligence
| Capability | Free | Pro | Enterprise |
| :--- | :---: | :---: | :---: |
| 3D BIM Viewer | Yes (Up to 50MB files) | Yes (Up to 5GB files) | Yes (No limit) |
| BIM-to-4D Timeline Auto-Sequencing | No | Yes | Yes |
| Spatial Zone & Crew Congestion Detection | No | Yes | Yes |
| Structural Clash Detection | No | Yes | Yes |
| Element Status Color Sync | No | Yes | Yes |

### 3.3. Artificial Intelligence & Predictive Risk
| Capability | Free | Pro | Enterprise |
| :--- | :---: | :---: | :---: |
| Natural Language Task Decomposition | Yes | Yes | Yes |
| Monte Carlo Critical Path Simulations | No | Yes (1,000 runs/save) | Yes (1,000 runs/save) |
| Live Weather & Supply Chain Overlays | No | Yes | Yes |
| Critical Path Volatility Index | No | Yes | Yes |
| Custom AI Model Training | No | No | Yes |

### 3.4. Interoperability & Integrations
| Capability | Free | Pro | Enterprise |
| :--- | :---: | :---: | :---: |
| CSV / Excel Import & Export | Yes | Yes | Yes |
| Primavera P6 (XML/XER) Import | Yes | Yes | Yes |
| Primavera P6 (XML/XER) Export | No | Yes | Yes |
| Microsoft Project (.mpp) Export | No | Yes | Yes |
| Native Slack / MS Teams Integrations | Basic | Full | Full |
| Custom API and Webhook Access | No | No | Yes |

### 3.5. Security & Governance
| Capability | Free | Pro | Enterprise |
| :--- | :---: | :---: | :---: |
| AES-256 Encryption at Rest | Yes | Yes | Yes |
| TLS 1.3 Encryption in Transit | Yes | Yes | Yes |
| Single Sign-On (SSO / SAML 2.0) | No | No | Yes |
| Compliance Reports (SOC2 Type II / HIPAA) | No | No | Yes |
| Full Audit Logs | No | No | Yes |
| Private Tenant Hosting | No | No | Yes |

---

## 4. Billing Terms & Policies

* **Subscription Period**: Choice of monthly or annual contracts. Annual contracts represent a 20% discount on the equivalent monthly pricing.
* **Pricing Updates**: SpaceLean commits to a minimum 60-day notice prior to any changes to the base price of current plans.
* **Seat Adjustments**: Pro seats can be added or removed dynamically. Adding seats triggers a prorated charge for the remaining fraction of the billing period. Removing seats takes effect at the end of the current billing cycle.
* **Cancellation Policy**: Users may cancel their subscription at any time. Subscriptions remain active until the end of the current billing cycle. No partial refunds are issued for mid-cycle cancellations.
* **Data Portability**: In the event of downgrade or cancellation, users retain the right to export all project data, including raw schedules (CSV, Primavera XML) and BIM files.
* **Tax Inclusions**: Displayed prices exclude local consumption taxes (VAT, GST, Sales Tax) where applicable.

---

## 5. Contact & Actions

* **Start Free Trial**: [Register at cad.spaceaiapp.com/lean](https://cad.spaceaiapp.com/lean)
* **Schedule Enterprise Demo**: [Request a Demo](https://spacelean.ai/request-a-demo)
* **API Documentation**: [API/Integration Specs](https://spacelean.ai/docs/ai-agents.md)
* **Standard Context Reference**: [llms.txt](https://spacelean.ai/llms.txt)
