"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ConstructorPointsChart({ data }: { data: any[] }) {
  // Extract constructor keys (ignoring 'round' and 'name')
  const constructors = data.length > 0 
    ? Object.keys(data[0]).filter(k => k !== 'round' && k !== 'name')
    : [];

  const colors = [
    "#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6",
    "#ec4899", "#06b6d4", "#f97316", "#14b8a6", "#6366f1"
  ];

  return (
    <Card className="bg-zinc-950 border-zinc-800 text-white w-full">
      <CardHeader>
        <CardTitle>Constructor Championship</CardTitle>
        <CardDescription className="text-zinc-400">Points accumulation over the season</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          {data.length === 0 ? (
            <div className="w-full h-full flex items-center justify-center text-zinc-500 border border-dashed border-zinc-800 rounded-md">
              No chart data available (Wait for races to conclude)
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => value.replace(' Grand Prix', '')}
                />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                {constructors.map((constructor, idx) => (
                  <Line
                    key={constructor}
                    type="monotone"
                    dataKey={constructor}
                    stroke={colors[idx % colors.length]}
                    strokeWidth={2}
                    dot={{ r: 4, fill: '#09090b', strokeWidth: 2 }}
                    activeDot={{ r: 6 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
