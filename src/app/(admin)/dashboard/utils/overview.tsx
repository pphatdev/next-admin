"use client"

import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis as Xax, YAxis as Yax } from "recharts"

const data = [
    {
        "name": "Mon",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Tue",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Wen",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Page B",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Thu",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Fri",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Sat",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
    {
        "name": "Sun",
        "uv": Math.floor(Math.random() * 1200) + 1000,
        "pv": Math.floor(Math.random() * 1200) + 1000,
        "amt": Math.floor(Math.random() * 1200) + 1000
    },
]


export function Overview() {
    return (
        <ResponsiveContainer width="100%" height={350}>

            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <Xax dataKey="name" />
                <Yax />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}