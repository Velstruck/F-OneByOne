"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function LapPositionChart({ laps }: { laps: any[] }) {
  if (!laps || laps.length === 0) return <div className="text-zinc-500 p-4">No lap data available.</div>;

  const data = laps.map(lap => {
    const dataPoint: any = { lap: parseInt(lap.number, 10) || lap.number };
    if (lap.Timings && Array.isArray(lap.Timings)) {
      lap.Timings.forEach((t: any) => {
        const pos = parseInt(t.position, 10);
        if (!isNaN(pos)) {
          dataPoint[t.driverId] = pos;
        }
      });
    }
    return dataPoint;
  });

  const drivers = new Set<string>();
  laps.forEach(lap => {
    if (lap.Timings && Array.isArray(lap.Timings)) {
      lap.Timings.forEach((t: any) => {
        if (t.driverId) drivers.add(t.driverId);
      });
    }
  });

  const colors = [
    '#ef4444', '#f97316', '#f59e0b', '#84cc16', '#22c55e', 
    '#10b981', '#14b8a6', '#06b6d4', '#0ea5e9', '#3b82f6', 
    '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899', 
    '#f43f5e', '#ffffff', '#a1a1aa', '#cbd5e1', '#fde047'
  ];

  return (
    <div className="h-[500px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
          <XAxis dataKey="lap" stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis reversed stroke="#a1a1aa" fontSize={12} tickLine={false} axisLine={false} domain={[1, 'dataMax']} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          {Array.from(drivers).map((driverId, index) => (
            <Line 
              key={driverId} 
              type="monotone" 
              dataKey={driverId} 
              stroke={colors[index % colors.length]} 
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
