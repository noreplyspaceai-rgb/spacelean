export interface Activity {
  id: string;
  name: string;
  duration: number;
  predecessors: string;
}

/**
 * Parses a Primavera P6 XER file content (tab-delimited text format)
 * and extracts the activities (TASK) and relationships (TASKPRED).
 * 
 * @param xerText The raw text content of the XER file
 * @returns An array of Activity objects matching the Manual Entry structure
 */
export function parseXER(xerText: string): Activity[] {
  if (!xerText.trim()) {
    throw new Error("The XER file is empty.");
  }

  const lines = xerText.split(/\r?\n/);
  
  let currentTable = "";
  let currentFields: string[] = [];
  
  const tasksRaw: Record<string, string>[] = [];
  const predsRaw: Record<string, string>[] = [];

  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine) continue;

    if (line.startsWith("%T")) {
      const parts = line.split("\t");
      currentTable = parts[1] || "";
      currentFields = [];
    } else if (line.startsWith("%F")) {
      const parts = line.split("\t");
      currentFields = parts.slice(1);
    } else if (line.startsWith("%R")) {
      const parts = line.split("\t");
      const values = parts.slice(1);
      
      if (currentTable && currentFields.length > 0) {
        const record: Record<string, string> = {};
        for (let i = 0; i < currentFields.length; i++) {
          record[currentFields[i]] = values[i] || "";
        }
        
        if (currentTable === "TASK") {
          tasksRaw.push(record);
        } else if (currentTable === "TASKPRED") {
          predsRaw.push(record);
        }
      }
    }
  }

  if (tasksRaw.length === 0) {
    throw new Error("Unable to parse tasks from XER file. Make sure it contains a valid %T TASK section.");
  }

  // Map internal task_id to human-readable task_code (Activity ID)
  const taskIdToCode = new Map<string, string>();
  const taskCodeToData = new Map<string, { name: string; duration: number }>();

  for (const task of tasksRaw) {
    const taskId = task["task_id"];
    const taskCode = task["task_code"];
    const taskName = task["task_name"] || "";
    
    // Duration hours: read target duration first, then remaining, default to 8
    const targetDrtn = Number(task["target_drtn_hr_cnt"] || task["remain_drtn_hr_cnt"] || "8");
    const durationDays = Math.max(0, Math.round(targetDrtn / 8));

    if (taskId && taskCode) {
      const cleanedCode = taskCode.trim();
      taskIdToCode.set(taskId, cleanedCode);
      taskCodeToData.set(cleanedCode, {
        name: taskName.trim(),
        duration: durationDays
      });
    }
  }

  // Map relationships (successors and predecessors)
  // TASKPRED holds successor task_id and predecessor pred_task_id
  const succToPreds = new Map<string, string[]>();

  for (const pred of predsRaw) {
    const succTaskId = pred["task_id"];
    const predTaskId = pred["pred_task_id"];
    
    if (succTaskId && predTaskId) {
      const succCode = taskIdToCode.get(succTaskId);
      const predCode = taskIdToCode.get(predTaskId);
      
      if (succCode && predCode) {
        if (!succToPreds.has(succCode)) {
          succToPreds.set(succCode, []);
        }
        succToPreds.get(succCode)!.push(predCode);
      }
    }
  }

  // Transform to the unified Activity structure
  const activities: Activity[] = [];
  for (const [taskCode, data] of taskCodeToData.entries()) {
    const preds = succToPreds.get(taskCode) || [];
    const predecessorsStr = preds.length > 0 ? preds.join(", ") : "-";
    
    activities.push({
      id: taskCode,
      name: data.name,
      duration: data.duration,
      predecessors: predecessorsStr
    });
  }

  // Sort activities alphabetically by ID for clean and stable visual display
  activities.sort((a, b) => a.id.localeCompare(b.id));

  return activities;
}
