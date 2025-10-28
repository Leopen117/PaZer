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
    <>
      <div>
        <h3>Make history:</h3>
      </div>
      <div>
        <table className="history-table">
          <tr>
            <th>Datum</th>
            <th>Kilometer</th>
            <th>Zeit</th>
            <th>Strecke</th>
            <th>Pace</th>
          </tr>
          <tbody>
            {runs.map((run) => (
              <tr key={run.id}>
                <td>{run.date}</td>
                <td>{run.kilometers}</td>
                <td>{run.time}</td>
                <td>{run.route_name}</td>
                <td>{run.pace}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
