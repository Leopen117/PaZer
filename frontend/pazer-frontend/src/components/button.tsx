import { createRun } from "../api/run"
import type { NewRunningUnit } from "../types/units"

type ButtonProps = {
    label: string;
};

export function Button({ label }: ButtonProps) {
    return (
        <div className="button">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                {label}
            </button>
        </div>
    );
}