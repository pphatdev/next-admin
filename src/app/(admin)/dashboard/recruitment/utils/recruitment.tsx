"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis as Xax, YAxis as Yax } from "recharts"

const data = [
    {
        name: "Announcement",
        total: Math.floor(Math.random() * 1200) + 1000,
    },
    {
        name: "Candidate",
        total: Math.floor(Math.random() * 1200) + 1000,
    },
    {
        name: "Short list",
        total: Math.floor(Math.random() * 1200) + 1000,
    },
    {
        name: "Quiz Test",
        total: Math.floor(Math.random() * 1200) + 1000,
    },
    {
        name: "Interview",
        total: Math.floor(Math.random() * 1200) + 1000,
    }
]


export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
                <Xax
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <Yax
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}`}
                />
                <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                />
            </BarChart>
        </ResponsiveContainer>
    )
}