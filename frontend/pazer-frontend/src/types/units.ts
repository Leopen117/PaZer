export type RunningUnit = {
    id: number;
    date: string;        // auto_now_add (YYYY-MM-DD)
    route_name: string;
    kilometers: number;
    time: string;        // auto_now_add ISO (DateTime)
    pace: number;        // Minuten pro km (z.B. 5.35)
};

export type NewRunningUnit = {
    route_name: string;
    kilometers: number;
    pace: number;
};