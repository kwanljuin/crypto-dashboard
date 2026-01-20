'use client';

import { LineChart, Line, ResponsiveContainer } from 'recharts';

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
            <LineChart data={chartData}>
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke={lineColor}
                    strokeWidth={1.5}
                    dot={false}
                    isAnimationActive={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
