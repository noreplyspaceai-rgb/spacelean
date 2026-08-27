export interface InputActivity {
  id: string;
  name: string;
  duration: number;
  predecessors: string;
}

export interface CalculatedActivity {
  id: string;
  name: string;
  duration: number;
  predecessors: string[];
  successors: string[];
  es: number;
  ef: number;
  ls: number;
  lf: number;
  float: number;
  status: "CRITICAL" | "NON-CRITICAL";
}

export interface CPMResult {
  activities: CalculatedActivity[];
  projectDuration: number;
  criticalPath: string;
  error: string | null;
}

/**
 * Calculates the Critical Path Method (CPM) parameters for the given list of activities.
 * Runs validation, topological sorting, forward pass, backward pass, and traces critical paths.
 */
export function calculateCPM(inputActivities: InputActivity[]): CPMResult {
  if (inputActivities.length === 0) {
    return {
      activities: [],
      projectDuration: 0,
      criticalPath: "—",
      error: "Activity list is empty. Please add at least one activity."
    };
  }

  // 1. Initial Validation & Duplicate ID Checks
  const rawIds = new Set<string>();
  
  for (const act of inputActivities) {
    const id = act.id.trim();
    if (id === "") {
      return {
        activities: [],
        projectDuration: 0,
        criticalPath: "—",
        error: "Activity ID cannot be empty."
      };
    }
    const upperId = id.toUpperCase();
    if (rawIds.has(upperId)) {
      return {
        activities: [],
        projectDuration: 0,
        criticalPath: "—",
        error: `Duplicate Activity ID: "${id}". Activity IDs must be unique.`
      };
    }
    rawIds.add(upperId);

    if (act.name.trim() === "") {
      return {
        activities: [],
        projectDuration: 0,
        criticalPath: "—",
        error: `Activity name for ID "${id}" cannot be empty.`
      };
    }

    const duration = act.duration;
    if (isNaN(duration) || duration < 0) {
      return {
        activities: [],
        projectDuration: 0,
        criticalPath: "—",
        error: `Invalid duration for Activity "${id}". Duration must be a non-negative number.`
      };
    }
  }

  // 2. Predecessor Graph Building & Validation
  interface GraphNode {
    id: string;
    originalId: string;
    name: string;
    duration: number;
    predecessors: string[];
    successors: string[];
    inDegree: number;
  }

  const nodes = new Map<string, GraphNode>();
  for (const act of inputActivities) {
    const upperId = act.id.trim().toUpperCase();
    nodes.set(upperId, {
      id: upperId,
      originalId: act.id.trim(),
      name: act.name.trim(),
      duration: act.duration,
      predecessors: [],
      successors: [],
      inDegree: 0
    });
  }

  for (const act of inputActivities) {
    const uId = act.id.trim().toUpperCase();
    const uNode = nodes.get(uId)!;
    const rawPred = act.predecessors.trim();
    
    // Parse comma-separated list
    const parsed = (rawPred === "" || rawPred === "-")
      ? []
      : rawPred.split(",").map(p => p.trim().toUpperCase()).filter(p => p.length > 0);
      
    // Ensure unique predecessors for this activity
    const uniquePreds = Array.from(new Set(parsed));

    for (const p of uniquePreds) {
      if (p === uId) {
        return {
          activities: [],
          projectDuration: 0,
          criticalPath: "—",
          error: `Self-reference detected: Activity "${act.id.trim()}" cannot reference itself as a predecessor.`
        };
      }
      
      const pNode = nodes.get(p);
      if (!pNode) {
        return {
          activities: [],
          projectDuration: 0,
          criticalPath: "—",
          error: `Invalid predecessor: Activity "${act.id.trim()}" references activity "${p}", but activity "${p}" does not exist.`
        };
      }

      uNode.predecessors.push(p);
      pNode.successors.push(uId);
      uNode.inDegree++;
    }
  }

  // 3. Topological Sort (Kahn's Algorithm)
  const queue: string[] = [];
  for (const [id, node] of nodes.entries()) {
    if (node.inDegree === 0) {
      queue.push(id);
    }
  }

  // Sort queue alphabetically so that processing is stable and deterministic
  queue.sort();

  const topoOrder: string[] = [];
  while (queue.length > 0) {
    const curr = queue.shift()!;
    topoOrder.push(curr);
    const currNode = nodes.get(curr)!;
    
    // Sort successors alphabetically for stable node ordering
    const sortedSuccessors = [...currNode.successors].sort();
    for (const succ of sortedSuccessors) {
      const succNode = nodes.get(succ)!;
      succNode.inDegree--;
      if (succNode.inDegree === 0) {
        queue.push(succ);
        queue.sort();
      }
    }
  }

  if (topoOrder.length < nodes.size) {
    return {
      activities: [],
      projectDuration: 0,
      criticalPath: "—",
      error: "Cannot calculate CPM because the schedule contains a circular dependency."
    };
  }

  // 4. Forward Pass (Early Start [ES] & Early Finish [EF])
  const esMap = new Map<string, number>();
  const efMap = new Map<string, number>();

  for (const id of topoOrder) {
    const node = nodes.get(id)!;
    let es = 0;
    if (node.predecessors.length > 0) {
      let maxEf = 0;
      for (const p of node.predecessors) {
        maxEf = Math.max(maxEf, efMap.get(p) ?? 0);
      }
      es = maxEf;
    }
    const ef = es + node.duration;
    esMap.set(id, es);
    efMap.set(id, ef);
  }

  // Project Duration is the maximum Early Finish
  let projectDuration = 0;
  for (const ef of efMap.values()) {
    projectDuration = Math.max(projectDuration, ef);
  }

  // 5. Backward Pass (Late Finish [LF] & Late Start [LS])
  const lsMap = new Map<string, number>();
  const lfMap = new Map<string, number>();

  for (let i = topoOrder.length - 1; i >= 0; i--) {
    const id = topoOrder[i];
    const node = nodes.get(id)!;
    let lf = projectDuration;
    if (node.successors.length > 0) {
      let minLs = projectDuration;
      for (const s of node.successors) {
        minLs = Math.min(minLs, lsMap.get(s) ?? projectDuration);
      }
      lf = minLs;
    }
    const ls = lf - node.duration;
    lsMap.set(id, ls);
    lfMap.set(id, lf);
  }

  // 6. Calculate Floats & Identify Critical Activities
  const calculatedMap = new Map<string, CalculatedActivity>();
  const criticalNodes: string[] = [];

  for (const id of topoOrder) {
    const node = nodes.get(id)!;
    const es = esMap.get(id)!;
    const ef = efMap.get(id)!;
    const ls = lsMap.get(id)!;
    const lf = lfMap.get(id)!;
    const float = ls - es;
    const isCritical = Math.abs(float) < 0.0001;

    if (isCritical) {
      criticalNodes.push(id);
    }

    calculatedMap.set(id, {
      id: node.originalId,
      name: node.name,
      duration: node.duration,
      predecessors: node.predecessors.map(p => nodes.get(p)!.originalId),
      successors: node.successors.map(s => nodes.get(s)!.originalId),
      es,
      ef,
      ls,
      lf,
      float,
      status: isCritical ? "CRITICAL" : "NON-CRITICAL"
    });
  }

  // Map results back to the user's original input order to preserve table display stability
  const calculatedActivities: CalculatedActivity[] = [];
  for (const act of inputActivities) {
    const upperId = act.id.trim().toUpperCase();
    if (calculatedMap.has(upperId)) {
      calculatedActivities.push(calculatedMap.get(upperId)!);
    }
  }

  // 7. Trace Critical Path(s)
  const criticalPaths: string[][] = [];

  function dfs(currId: string, currentPath: string[]) {
    const node = nodes.get(currId)!;
    const currEf = efMap.get(currId)!;

    // A critical successor is critical AND its ES matches the current node's EF
    const criticalSuccessors = node.successors.filter(s => {
      const isSuccCritical = criticalNodes.includes(s);
      const isTimeDriving = esMap.get(s) === currEf;
      return isSuccCritical && isTimeDriving;
    }).sort(); // sort alphabetically for stable path generation

    if (criticalSuccessors.length === 0) {
      // Validate that this critical branch actually finishes at the project duration
      if (currEf === projectDuration) {
        criticalPaths.push([...currentPath]);
      }
      return;
    }

    for (const succ of criticalSuccessors) {
      dfs(succ, [...currentPath, succ]);
    }
  }

  // A critical start node is critical AND has no critical predecessors that drive it
  const startNodes = criticalNodes.filter(id => {
    const node = nodes.get(id)!;
    const currEs = esMap.get(id)!;
    const hasDrivingCriticalPred = node.predecessors.some(p => {
      return criticalNodes.includes(p) && efMap.get(p) === currEs;
    });
    return !hasDrivingCriticalPred;
  }).sort();

  for (const start of startNodes) {
    dfs(start, [start]);
  }

  // Format critical paths as "A → B → C"
  let criticalPathStr = "—";
  if (criticalPaths.length > 0) {
    const formattedPaths = criticalPaths.map(path => {
      return path.map(id => nodes.get(id)!.originalId).join(" → ");
    });
    criticalPathStr = formattedPaths.join(" | ");
  }

  return {
    activities: calculatedActivities,
    projectDuration,
    criticalPath: criticalPathStr,
    error: null
  };
}
