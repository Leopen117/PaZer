import type {RunningUnit} from "../types/units.ts";
import {getRuns} from "../api/run.ts";

export function Button() {


    async function buttonOnClickEvent() {
        try {
            const data: RunningUnit[] = await getRuns();
            console.log("Runs:", data);
        } catch (e) {
            console.error("Fehler beim Laden:", e);
        }
    }

    return (
        <div className="button">
            <button onClick={buttonOnClickEvent}>Update</button>
        </div>
    );
}
