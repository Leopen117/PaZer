import type {NewRunningUnit, RunningUnit} from "../types/units.ts";
import {API_BASE} from "./config.ts";

export async function getRuns(): Promise<RunningUnit[]> {
    const res = await fetch(`${API_BASE}/runs/`);
    if (!res.ok) throw new Error(`GET /runs failed: ${res.status}`);
    return res.json();
}

export async function createRun(data: NewRunningUnit): Promise<RunningUnit> {
    const res = await fetch(`${API_BASE}/runs/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`POST /runs failed: ${res.status} - ${text}`);
    }
    return res.json();
}

export async function deleteRun(id: number): Promise<void> {
    const res = await fetch(`${API_BASE}/runs/${id}/`, { method: "DELETE" });
    if (!res.ok) throw new Error(`DELETE /runs/${id} failed: ${res.status}`);
}
