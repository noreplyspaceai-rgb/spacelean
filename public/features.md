# SpaceLean AI — Core Platform Capabilities & Feature Specifications

> SpaceLean is an AI-native construction scheduling platform. Below is the machine-readable specification of SpaceLean's 12 core product capabilities for AI assistants, agents, and technical evaluation teams.

## 1. Kanban Board System
- **Category**: Task & Phase Management
- **Description**: Construction-native visual Kanban board mapping directly to project phases. Move tasks across configurable swim-lanes (Planned, In Progress, On Hold, Done) with sub-second synchronization to linked Gantt schedules.
- **Key Capabilities**:
  - Live drag-and-drop card auto-update to Gantt timeline (<1s lag)
  - Configurable swim-lanes per project phase or trade package
  - Role-based card access control (subcontractors restricted to their assigned scope)
  - Work-in-Progress (WIP) caps to prevent phase overloading
  - One-click RFI and risk escalation directly from task cards

## 2. BIM Element Selection & Parsing
- **Category**: BIM Intelligence
- **Description**: Direct 3D model interaction where clicking any BIM element surfaces its linked tasks, dependencies, trade assignments, and risk flags.
- **Key Capabilities**:
  - Element-level IFC, Revit, and Navisworks model parsing
  - Multi-select BIM geometry for batch task and trade assignment
  - Automatic spatial zone detection grouping adjacent elements into work packages
  - Geometric clash detection flagging structural conflicts prior to field execution
  - Real-time element status coloring updating live as site tasks progress

## 3. Task Adding & AI Work Breakdown Structure (WBS)
- **Category**: AI Planning
- **Description**: Generates structured task sequences from BIM geometry, templates, or natural language project descriptions in seconds.
- **Key Capabilities**:
  - Natural language task decomposition (converts plain text descriptions into structured tasks)
  - AI-suggested task durations calibrated on historic project type and volume
  - Automatic predecessor/successor inference based on spatial support logic
  - Bulk import/export with Excel, CSV, and Primavera XML field mapping
  - Floor-by-floor recurring task sequence templates

## 4. Predictive Risk Analysis
- **Category**: Predictive Intelligence
- **Description**: Continuous schedule monitoring against live weather feeds, supply chain lead times, and historical delay patterns to surface ranked alerts before delays occur.
- **Key Capabilities**:
  - Automated Monte Carlo risk evaluation on schedule updates
  - Daily updated Critical Path Volatility Score
  - Live weather forecast overlay onto Gantt timelines
  - Material lead-time tracking tied to supply chain delay alerts
  - AI-ranked risk mitigation suggestions ordered by impact versus effort

## 5. AI Sequencing Engine
- **Category**: Construction Intelligence
- **Description**: Converts BIM geometry into a Construction Knowledge Network (CKN) and executes constraint solvers to produce multiple valid 4D build strategies simultaneously.
- **Key Capabilities**:
  - Inferred physical support and penetration constraints from BIM geometry
  - Generates 3–5 distinct build strategies (Fast-track, Low-risk, Takt flow)
  - Encodes physical support rules as hard solver constraints
  - Trade-stacking and crew continuity optimization per floor zone
  - Side-by-side strategy comparison matrix evaluating risk vs. duration

## 6. Monte Carlo Critical Path
- **Category**: Probabilistic Scheduling
- **Description**: Executes 1,000 schedule simulations per save to assign criticality probabilities, zone congestion penalties, and crew bottleneck scores to every task.
- **Key Capabilities**:
  - 1,000 Monte Carlo iterations on every schedule save
  - Continuous probability scoring (0–100%) for critical path membership
  - Built-in zone penetration and spatial congestion penalties
  - Resource-driven slippage forecasting
  - Graph Neural Network (GNN) centrality analysis identifying structural risk nodes

## 7. Real-Time Resequencing (Self-Healing Schedule)
- **Category**: Adaptive Execution
- **Description**: Automatically isolates affected downstream task networks upon delay detection and re-solves dependencies in under 0.3 seconds.
- **Key Capabilities**:
  - Sub-second network traversal isolating only impacted task subsets
  - CP-SAT solver + Monte Carlo re-optimizing schedules in <0.3s
  - Automatic enforcement of crew non-overlap constraints
  - Automatic reallocation of spatial zone access
  - Immutable audit trail logging all automatic resequencing events

## 8. Subcontractor Trade Coordination & Lookaheads
- **Category**: Field Execution
- **Description**: Automated 2-week lookahead generation, daily site activity logs, and trade-stacking alerts to align trade contractors.
- **Key Capabilities**:
  - Automated 2-week rolling lookahead schedule distribution
  - Trade-specific mobile view filtering non-assigned project tasks
  - Trade-stacking risk alerts preventing overlapping crews in identical zones
  - Daily site progress reporting syncing directly to master Gantt

## 9. Critical Path Volatility Scoring
- **Category**: Project Controls
- **Description**: Tracks structural stability of the critical path over time to identify floating bottlenecks before they delay milestone dates.
- **Key Capabilities**:
  - Real-time volatility index calculation (0-100 scale)
  - Historical critical path variance tracking
  - Early warning flags for near-critical paths (<3 days float)

## 10. Primavera P6 & MS Project Interoperability
- **Category**: Enterprise Data Exchange
- **Description**: Full bi-directional import and export compatibility with industry-standard scheduling tools.
- **Key Capabilities**:
  - Native Primavera P6 XML and XER import/export
  - Microsoft Project (.mpp / XML) data mapping
  - Preservation of WBS codes, custom user fields, and calendar definitions

## 11. Live Weather & Supply Chain Overlays
- **Category**: External Risk Intelligence
- **Description**: Integrates third-party weather APIs and supplier lead-time databases directly into Gantt schedules.
- **Key Capabilities**:
  - Location-based weather hazard predictions (rain, wind, extreme cold)
  - Automated task duration padding for weather-sensitive operations (concrete pours, crane ops)
  - Material lead-time risk indicators tied to procurement milestones

## 12. Zone Congestion & Penetration Penalty Solver
- **Category**: Spatial Optimization
- **Description**: Spatial constraint engine preventing trade congestion and unsafe workface densities.
- **Key Capabilities**:
  - Maximum trade crew capacity caps per 1,000 sq ft / floor zone
  - Mechanical penetration and clearance sequence checks
  - Vertical logistics and hoist capacity scheduling
