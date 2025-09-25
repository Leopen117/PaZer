import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getRuns } from "../api/run";
import type { RunningUnit } from "../types/units";

export function HistoryChart() {
    const [runs, setRuns] = useState<RunningUnit[]>([]);

    useEffect(() => {
        getRuns()
        .then((data) => {
            const sorted = data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            setRuns(sorted);
        })
        .catch((err) => console.error(err))
    },[]);

    return(
        <div style={{width: "100%", height: 300}}>
            <ResponsiveContainer>
                <LineChart data={runs} margin={{top: 20, right: 30, left: 0, bottom: 20}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="date"/>
                    <YAxis />
                    <Tooltip/>
                    <Line type="monotone" dataKey="pace" stroke="#8884d8" activeDot={{ r: 8}}/> 
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}