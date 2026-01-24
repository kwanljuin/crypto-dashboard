'use client';

import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface MiniSparklineProps {
    data: number[];
    color?: string;
    isPositive?: boolean;
}

export const MiniSparkline = ({
    data,
    color,
    isPositive = true
}: MiniSparklineProps) => {
    const chartData = data.map((value, index) => ({ value, index }));
    const lineColor = color || (isPositive ? '#10B981' : '#EF4444');

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
                <Area
                    type="monotone"
                    dataKey="value"
                    stroke={lineColor}
                    fill={lineColor}
                    fillOpacity={0.1}
                    strokeWidth={3}
                    dot={false}
                    isAnimationActive={false}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};
