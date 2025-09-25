import { useEffect, useState } from "react";
import { getRuns } from "../api/run";
import type { RunningUnit } from "../types/units";

type HistoryTableProps = {
    reloadFlag: number; // von App übergeben
};

export function HistoryTable({ reloadFlag }: HistoryTableProps) {
    const [runs, setRuns] = useState<RunningUnit[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getRuns()
            .then((data) => {
                setRuns(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fehler beim Laden der Daten:", err);
                setLoading(false);
            });
    }, [reloadFlag]); // 🔄 neu laden, wenn reloadFlag sich ändert

    if (loading) {
        return <p>Lade Daten...</p>;
    }

    return (
        <div className="overflow-x-auto shadow rounded-lg">
            <table className="min-w-full border border-gray-300">
                <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 border">Datum</th>
                    <th className="px-4 py-2 border">Kilometer</th>
                    <th className="px-4 py-2 border">Zeit</th>
                    <th className="px-4 py-2 border">Strecke</th>
                    <th className="px-4 py-2 border">Pace</th>
                </tr>
                </thead>
                <tbody>
                {runs.map((run) => (
                    <tr key={run.id} className="odd:bg-white even:bg-gray-50">
                        <td className="px-4 py-2 border">{run.date}</td>
                        <td className="px-4 py-2 border">{run.kilometers}</td>
                        <td className="px-4 py-2 border">{run.time}</td>
                        <td className="px-4 py-2 border">{run.route_name}</td>
                        <td className="px-4 py-2 border">{run.pace}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
