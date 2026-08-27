import { calculateCPM, InputActivity } from "./cpm-engine";

function assert(cond: boolean, msg: string) {
  if (!cond) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

console.log("Running CPM Calculation Engine Tests...");

// Test 1 — Simple sequential schedule
// A -> B -> C
try {
  const t1Activities: InputActivity[] = [
    { id: "A", name: "Site Preparation", duration: 2, predecessors: "-" },
    { id: "B", name: "Excavation", duration: 4, predecessors: "A" },
    { id: "C", name: "Foundation", duration: 5, predecessors: "B" }
  ];
  const res1 = calculateCPM(t1Activities);
  assert(res1.error === null, "Test 1 should not return error");
  assert(res1.projectDuration === 11, `Test 1 duration should be 11, got ${res1.projectDuration}`);
  assert(res1.criticalPath === "A → B → C", `Test 1 critical path should be A → B → C, got ${res1.criticalPath}`);
  assert(res1.activities[0].es === 0 && res1.activities[0].ef === 2, "A dates incorrect");
  assert(res1.activities[1].es === 2 && res1.activities[1].ef === 6, "B dates incorrect");
  assert(res1.activities[2].es === 6 && res1.activities[2].ef === 11, "C dates incorrect");
  assert(res1.activities.every(a => a.float === 0 && a.status === "CRITICAL"), "All should be critical");
  console.log("✓ Test 1 Passed: Simple sequential schedule");
} catch (e: any) {
  console.error("✗ Test 1 Failed:", e.message);
  process.exit(1);
}

// Test 2 — Parallel activities
// A (2) -> B (4) -> D (3)
// A (2) -> C (1) -> D (3)
// B is longer (4 days) than C (1 day). B should determine project duration and critical path.
try {
  const t2Activities: InputActivity[] = [
    { id: "A", name: "Start", duration: 2, predecessors: "-" },
    { id: "B", name: "Long path", duration: 4, predecessors: "A" },
    { id: "C", name: "Short path", duration: 1, predecessors: "A" },
    { id: "D", name: "End", duration: 3, predecessors: "B, C" }
  ];
  const res2 = calculateCPM(t2Activities);
  assert(res2.error === null, "Test 2 should not return error");
  assert(res2.projectDuration === 9, `Test 2 duration should be 9, got ${res2.projectDuration}`);
  assert(res2.criticalPath === "A → B → D", `Test 2 critical path should be A → B → D, got ${res2.criticalPath}`);
  console.log("✓ Test 2 Passed: Parallel activities (longest determines path)");
} catch (e: any) {
  console.error("✗ Test 2 Failed:", e.message);
  process.exit(1);
}

// Test 3 — Non-critical activity
// Verify floats: A, B, D critical (float 0). C non-critical (float 3)
try {
  const t3Activities: InputActivity[] = [
    { id: "A", name: "Start", duration: 2, predecessors: "-" },
    { id: "B", name: "Long path", duration: 4, predecessors: "A" },
    { id: "C", name: "Short path", duration: 1, predecessors: "A" },
    { id: "D", name: "End", duration: 3, predecessors: "B, C" }
  ];
  const res3 = calculateCPM(t3Activities);
  const a = res3.activities.find(act => act.id === "A")!;
  const b = res3.activities.find(act => act.id === "B")!;
  const c = res3.activities.find(act => act.id === "C")!;
  const d = res3.activities.find(act => act.id === "D")!;
  
  assert(a.float === 0 && a.status === "CRITICAL", "A float should be 0");
  assert(b.float === 0 && b.status === "CRITICAL", "B float should be 0");
  assert(d.float === 0 && d.status === "CRITICAL", "D float should be 0");
  assert(c.float === 3 && c.status === "NON-CRITICAL", `C float should be 3, got ${c.float}`);
  console.log("✓ Test 3 Passed: Non-critical activity float & status");
} catch (e: any) {
  console.error("✗ Test 3 Failed:", e.message);
  process.exit(1);
}

// Test 4 — Multiple predecessors
// D dependent on B and C. ES(D) = max(EF(B), EF(C))
try {
  const t4Activities: InputActivity[] = [
    { id: "A", name: "Start", duration: 1, predecessors: "-" },
    { id: "B", name: "Pre 1", duration: 5, predecessors: "A" },
    { id: "C", name: "Pre 2", duration: 3, predecessors: "A" },
    { id: "D", name: "Multiple", duration: 2, predecessors: "B, C" }
  ];
  const res4 = calculateCPM(t4Activities);
  const d = res4.activities.find(act => act.id === "D")!;
  assert(d.es === 6, `D Early Start should be 6, got ${d.es}`);
  assert(d.ef === 8, `D Early Finish should be 8, got ${d.ef}`);
  console.log("✓ Test 4 Passed: Multiple predecessors ES = max(EF)");
} catch (e: any) {
  console.error("✗ Test 4 Failed:", e.message);
  process.exit(1);
}

// Test 5 — Circular dependency
// A -> B -> C -> A
try {
  const t5Activities: InputActivity[] = [
    { id: "A", name: "A", duration: 2, predecessors: "C" },
    { id: "B", name: "B", duration: 3, predecessors: "A" },
    { id: "C", name: "C", duration: 1, predecessors: "B" }
  ];
  const res5 = calculateCPM(t5Activities);
  assert(res5.error !== null, "Test 5 should return an error for circular dependency");
  assert(res5.error!.includes("circular dependency"), `Error should mention circular dependency, got: ${res5.error}`);
  console.log("✓ Test 5 Passed: Circular dependency cycle detection");
} catch (e: any) {
  console.error("✗ Test 5 Failed:", e.message);
  process.exit(1);
}

// Test 6 — Invalid predecessor
// A -> B where B references non-existent X
try {
  const t6Activities: InputActivity[] = [
    { id: "A", name: "A", duration: 2, predecessors: "-" },
    { id: "B", name: "B", duration: 3, predecessors: "X" }
  ];
  const res6 = calculateCPM(t6Activities);
  assert(res6.error !== null, "Test 6 should return an error for invalid predecessor");
  assert(res6.error!.includes("references activity \"X\""), `Error should mention references activity X, got: ${res6.error}`);
  console.log("✓ Test 6 Passed: Invalid predecessor reference check");
} catch (e: any) {
  console.error("✗ Test 6 Failed:", e.message);
  process.exit(1);
}

// Test 7 — XER Parser
// Test parsing standard tab-delimited XER text format
import { parseXER } from "./xer-parser";
try {
  const xerData = `%T\tTASK
%F\ttask_id\ttask_code\ttask_name\ttarget_drtn_hr_cnt
%R\t101\tA\tSite Prep\t16
%R\t102\tB\tExcavation\t32
%R\t103\tC\tFoundation\t40
%T\tTASKPRED
%F\ttask_id\ttred_task_id\tpred_task_id
%R\t102\t\t101
%R\t103\t\t102
`;
  const parsedActivities = parseXER(xerData);
  assert(parsedActivities.length === 3, `XER should parse 3 tasks, got ${parsedActivities.length}`);
  assert(parsedActivities[0].id === "A" && parsedActivities[0].duration === 2 && parsedActivities[0].predecessors === "-", "Task A parse failed");
  assert(parsedActivities[1].id === "B" && parsedActivities[1].duration === 4 && parsedActivities[1].predecessors === "A", "Task B parse failed");
  assert(parsedActivities[2].id === "C" && parsedActivities[2].duration === 5 && parsedActivities[2].predecessors === "B", "Task C parse failed");
  
  // Calculate CPM on parsed activities to ensure compatibility
  const res7 = calculateCPM(parsedActivities);
  assert(res7.error === null, "CPM on parsed activities failed");
  assert(res7.projectDuration === 11, `CPM duration should be 11, got ${res7.projectDuration}`);
  assert(res7.criticalPath === "A → B → C", `CPM critical path should be A → B → C, got ${res7.criticalPath}`);

  console.log("✓ Test 7 Passed: XER Parser integration");
} catch (e: any) {
  console.error("✗ Test 7 Failed:", e.message);
  process.exit(1);
}

console.log("All tests passed successfully!");
