# SpaceLean AI — Agent & Developer API Integration Specifications

> Machine-readable technical specifications detailing SpaceLean AI data import formats, 3D BIM (IFC/Revit) parsing architecture, Primavera P6 XML schemas, Webhook event payloads, and REST API endpoints for autonomous agents and enterprise integration teams.

## 1. BIM Model Parsing Architecture (IFC / Revit)

SpaceLean parses Industry Foundation Classes (IFC) and Autodesk Revit files to generate spatial knowledge networks for 4D scheduling.

### Supported File Standards
- **IFC Formats**: `IFC2x3`, `IFC4`, `IFC4x3` (.ifc, .ifczip)
- **Autodesk Formats**: Revit (.rvt), Navisworks (.nwd via IFC export)
- **Geometry Processing Engine**: Open-source IFC2X3/IFC4 geometry parser with automated spatial BRep bounds extraction.

### Extracted BIM Data Schema
- **IfcBuildingElement**: Walls, slabs, columns, beams, ductwork, piping, windows, doors.
- **IfcSpatialStructure**: Building, Storey, Space, Zone delineations.
- **IfcRelContainedInSpatialStructure**: Spatial mapping linking elements to floor levels and work zones.
- **IfcRelConnectsElements**: Adjacency and penetration topological relationships for automated dependency detection.

---

## 2. Primavera P6 & Industry File Compatibility

### Import / Export Formats
- **Primavera P6 XML**: Full schema support for P6 v8.0 to v24.x XML data exchange.
- **Primavera XER**: Bi-directional parsing of native Primavera XER schedule files.
- **Microsoft Project**: XML (.xml) and CSV import with automatic field mapping.
- **SpaceLean JSON Schema**: Native open JSON schedule representation.

### Field Mapping Standard

| SpaceLean Entity | Primavera P6 XML Equivalent | MS Project Field | Description |
| :--- | :--- | :--- | :--- |
| `taskId` | `ActivityObjectID` | `ID` / `GUID` | Unique activity identifier |
| `taskName` | `ActivityName` | `Name` | Human-readable activity title |
| `plannedDuration` | `PlannedDuration` | `Duration` | Estimated duration in hours/days |
| `earlyStart` | `EarlyStartDate` | `EarlyStart` | Calculated early start timestamp |
| `criticalPath` | `IsCritical` | `Critical` | Boolean indicator for critical path |
| `freeFloat` | `FreeFloat` | `FreeFloat` | Available float before successor impact |
| `totalFloat` | `TotalFloat` | `TotalFloat` | Total available schedule float |

---

## 3. Webhook Events & Automated Notifications

SpaceLean emits real-time HTTP POST Webhook payloads when schedule events occur.

### Configurable Event Hooks
- `schedule.delay_detected`: Triggered when Monte Carlo simulations detect >70% delay risk on a critical path task.
- `schedule.resequenced`: Emitted when the AI self-healing engine re-solves downstream dependencies.
- `trade.conflict_flagged`: Emitted when trade-stacking congestion exceeds zone capacity thresholds.
- `bim.model_parsed`: Triggered upon completion of 3D model parsing into a 4D schedule.

### Webhook Event Payload Example (`schedule.delay_detected`)

```json
{
  "event": "schedule.delay_detected",
  "timestamp": "2026-07-21T14:30:00Z",
  "project_id": "proj_chi_tower_092",
  "data": {
    "task_id": "TSK-MEP-302",
    "task_name": "HVAC Ductwork Installation Zone 4B",
    "criticality_index": 0.89,
    "delay_risk_days": 4.5,
    "primary_cause": "Trade Stacking Conflict with Drywall Framing (Zone 4B)",
    "suggested_mitigation": "Resequence Drywall Framing to Zone 4C start (+2 days float preserved)"
  }
}
```

---

## 4. REST API Endpoint Overview

All API requests require Bearer token authentication via HTTP headers (`Authorization: Bearer <API_KEY>`).

- **`POST /api/v1/bim/parse`**: Upload IFC/Revit file to generate 4D schedule sequence.
- **`GET /api/v1/projects/{id}/critical-path`**: Fetch real-time Monte Carlo critical path volatility scores.
- **`POST /api/v1/schedule/replan`**: Execute sub-second self-healing schedule solver upon site progress updates.
- **`GET /api/v1/projects/{id}/export/p6`**: Export current SpaceLean schedule as Primavera P6 XML.
