export type RunningUnit = {
    date: string;        // auto_now_add (YYYY-MM-DD)
    route_name: string;
    kilometers: string;
    time: string;        // auto_now_add ISO (DateTime)
    pace: string;        // Minuten pro km (z.B. 5.35)
};

export type NewRunningUnit = {
    route_name: string;
    kilometers: string;
    pace: string;
    date: string;
    time: string
};