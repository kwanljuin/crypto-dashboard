'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useState } from 'react';

interface PriceChartProps {
    data: { timestamp: number; price: number }[];
    coinName?: string;
}

const periods = [
    { label: '1D', value: '1' },
    { label: '1W', value: '7' },
    { label: '1M', value: '30' },
    { label: '1Y', value: '365' },
];

export const PriceChart = ({ data, coinName = 'Coin' }: PriceChartProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState('7');

    const formatXAxis = (timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const formatYAxis = (value: number) => {
        return `$${value.toLocaleString()}`;
    };

    return (
        <GlassPanel className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-mono font-bold">Price Chart</h3>

                <div className="flex gap-2">
                    {periods.map((period) => (
                        <button
                            key={period.value}
                            onClick={() => setSelectedPeriod(period.value)}
                            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${selectedPeriod === period.value
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted/20 hover:bg-muted/40'
                                }`}
                        >
                            {period.label}
                        </button>
                    ))}
                </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="oklch(0.79 0.15 76.22)" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="oklch(0.79 0.15 76.22)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.1)" />
                    <XAxis
                        dataKey="timestamp"
                        tickFormatter={formatXAxis}
                        stroke="oklch(0.71 0.03 255.59)"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        tickFormatter={formatYAxis}
                        stroke="oklch(0.71 0.03 255.59)"
                        style={{ fontSize: '12px' }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'oklch(0.27 0.04 259.6)',
                            border: '1px solid oklch(1 0 0 / 0.1)',
                            borderRadius: '8px',
                            backdropFilter: 'blur(12px)',
                        }}
                        labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
                        formatter={(value: any) => [`$${Number(value).toLocaleString()}`, 'Price']}
                    />
                    <Area
                        type="monotone"
                        dataKey="price"
                        stroke="oklch(0.79 0.15 76.22)"
                        strokeWidth={2}
                        fill="url(#colorPrice)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </GlassPanel>
    );
};
