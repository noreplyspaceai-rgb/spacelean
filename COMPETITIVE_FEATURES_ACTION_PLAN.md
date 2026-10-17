# SpaceLean Competitive Features Action Plan

An actionable, task-oriented checklist to design, build, and integrate key features that will bridge the gap between SpaceLean and its major competitors (Procore, Autodesk, Primavera, VisiLean, Touchplan, Sablono, ALICE, nPlan, and OpenSpace).

---

## 🛠️ Phase 1: High-Fidelity Enterprise & PMIS Integrations (vs. Primavera P6, MS Project, Procore)
Rather than rebuilding a massive ERP, SpaceLean will build secure, two-way sync integrations to act as the "AI brain" layer for existing project databases.

### [ ] Task 1.1: Two-Way Primavera P6 XER Parser & Syncer
* [ ] **Sub-task 1.1.1**: Build a robust, client-side `.xer` parser in JavaScript to ingest complex Primavera schedules without data corruption.
* [ ] **Sub-task 1.1.2**: Implement field-mapping models to link Primavera Activities (`TASK`) and Activity Relationships (`ACTVREL`) to SpaceLean's database nodes.
* [ ] **Sub-task 1.1.3**: Build an exporter that packages optimized SpaceLean schedules back into standard Primavera `.xer` files with intact logic, constraint types, and calendar definitions.
* [ ] **Sub-task 1.1.4**: Add a visual "Diff Viewer" showing what changed (added/modified dependencies, updated float) before exporting to P6.

### [ ] Task 1.2: Procore App Marketplace Integration (Standard PMIS Connector)
* [ ] **Sub-task 1.2.1**: Implement OAuth2 authentication with Procore's API to sync directory users and permissions.
* [ ] **Sub-task 1.2.2**: Build a background synchronization worker to fetch active project tasks from Procore's schedule tool.
* [ ] **Sub-task 1.2.3**: Enable automatic syncing of SpaceLean's Lookahead schedules to Procore's scheduling dashboard.

### [ ] Task 1.3: Document & Contractual Report Generator
* [ ] **Sub-task 1.3.1**: Design executive PDF report templates matching Primavera's standard layout for claims defense.
* [ ] **Sub-task 1.3.2**: Create automated "Schedule Health Audit" reports checking for missing logic links, negative lags, high floats, and critical path constraints.

---

## 📋 Phase 2: Field-Level Lean & Last Planner Workflows (vs. VisiLean, Touchplan, Sablono)
Close the loop on site execution by introducing Lean pull-planning mechanics and key performance indicators.

### [ ] Task 2.1: AI-Powered Vision Pull-Planning Board
* [ ] **Sub-task 2.1.1**: Build a client upload portal for field supervisors to snap a photo of physical sticky notes on a jobsite whiteboard.
* [ ] **Sub-task 2.1.2**: Integrate an optical character recognition (OCR) and object detection pipeline (using Google Vision API or Gemini Multimodal API) to scan text, colors, and coordinates of the physical notes.
* [ ] **Sub-task 2.1.3**: Map the recognized tasks to SpaceLean WBS nodes and present a visual "Matching Interface" for confirmation.

### [ ] Task 2.2: Last Planner PPC & Variance Analyzer
* [ ] **Sub-task 2.2.1**: Create a weekly commitment workflow where subcontractors commit to specific weekly tasks.
* [ ] **Sub-task 2.2.2**: Implement **Percent Plan Complete (PPC)** mathematical formulas:
  $$\text{PPC} = \left( \frac{\text{Completed Commitments}}{\text{Total Commitments}} \right) \times 100$$
* [ ] **Sub-task 2.2.3**: Build a dropdown selector for **Reasons for Variance (RFV)** when a task is marked incomplete (e.g., Weather, Design Clash, Crew Delay, Material Shortage).
* [ ] **Sub-task 2.2.4**: Renders weekly PPC charts and parent category Pareto charts showing the top root-cause reasons for delays.

### [ ] Task 2.3: Room-Level QA & Workface Handover Checklists
* [ ] **Sub-task 2.3.1**: Create a hierarchical layout tree supporting locations down to specific room or apartment levels (e.g., Building A → Floor 3 → Unit 302).
* [ ] **Sub-task 2.3.2**: Add mandatory QA checklist gates. A trade contractor cannot mark their task "Complete" unless the attached checklists are checked off.
* [ ] **Sub-task 2.3.3**: Enable automatic notification triggers informing downstream trades (e.g., Drywallers) that the preceding trade (e.g., MEP rough-in) has completed their room-level work.

---

## 🤖 Phase 3: Advanced Parametric AI & Risk Simulation (vs. ALICE, nPlan)
Supercharge the schedule engine with multi-variable constraints and delay risk simulations.

### [ ] Task 3.1: Parametric Resource-Constraint Sliders
* [ ] **Sub-task 3.1.1**: Design a "Scenario Sandbox" UI featuring sliders to edit active constraints:
  * Number of available crews per trade
  * Equipment constraints (e.g., number of tower cranes)
  * Shift rules (e.g., 5-day work week vs. 6-day, overtime percentage)
* [ ] **Sub-task 3.1.2**: Update the scheduling solver to compute resource-constrained schedules using priority-rule heuristics.
* [ ] **Sub-task 3.1.3**: Render comparative Gantt charts side-by-side (Scenario A vs. Scenario B) showing impact on total cost and overall duration.

### [ ] Task 3.2: AI-Powered Weather & Historical Delay Predictor
* [ ] **Sub-task 3.2.1**: Build a geocoding integration to fetch local historical weather databases and seasonal patterns based on project zip codes.
* [ ] **Sub-task 3.2.2**: Calculate statistical weather delay factors and feed them automatically into Monte Carlo simulations.
* [ ] **Sub-task 3.2.3**: Analyze historical task duration offsets on SpaceLean to dynamically raise warnings when new task durations are set too optimistically compared to historical team velocity.

---

## 📷 Phase 4: Automated Reality Progress Loop (vs. OpenSpace)
Verify site progress using computer-vision capture data without requiring manual status reports.

### [ ] Task 4.1: Reality Capture Sync API Webhooks
* [ ] **Sub-task 4.1.1**: Build public API webhook endpoints to receive camera progression updates from platforms like OpenSpace or HoloBuilder.
* [ ] **Sub-task 4.1.2**: Map OpenSpace's spatial element categories (e.g., "Drywall Boarding", "Concrete Slab Poured") directly to BIM element IDs stored in SpaceLean.
* [ ] **Sub-task 4.1.3**: When progress updates are received, automatically toggle matching tasks to "In Progress" or "Complete" on the live scheduling timeline.
* [ ] **Sub-task 4.1.4**: Render a visual status indicator on the 4D BIM view showing elements that are verified on-site vs. planned.
