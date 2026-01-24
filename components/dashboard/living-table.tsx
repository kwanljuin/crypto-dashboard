"use client";

import React from 'react';
import {
    LineChart,
    Line,
    ResponsiveContainer,
    YAxis
} from 'recharts';
import { motion } from 'motion/react';

interface LivingTableProps {
    coins: {
        id: string;
        name: string;
        symbol: string;
        image: string;
        current_price: number;
        price_change_percentage_24h: number;
        market_cap: number;
        sparkline_in_7d: { price: number[] };
    }[];
}

export function LivingTable({ coins }: LivingTableProps) {
    return (
        <div className="w-full space-y-2">
            {/* Table Header */}
            <div className="grid grid-cols-12 px-6 py-3 border-b border-white/5 terminal-text mb-4" style={{ color: 'var(--color-text-metadata)' }}>
                <div className="col-span-1">#</div>
                <div className="col-span-3">ASSET</div>
                <div className="col-span-2 text-right">PRICE</div>
                <div className="col-span-1 text-right">1H</div>
                <div className="col-span-1 text-right">24H</div>
                <div className="col-span-2 text-center">7D TREND</div>
                <div className="col-span-2 text-right">MARKET CAP</div>
            </div>

            {/* Rows */}
            {coins.map((coin, i) => {
                const isPositive = coin.price_change_percentage_24h >= 0;
                const sparklineData = coin.sparkline_in_7d.price.map((p: number) => ({ value: p }));

                return (
                    <motion.div
                        key={coin.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="grid grid-cols-12 items-center px-6 py-4 glass-card border-white/5 hover:border-white/10 hover:bg-white/[0.04] cursor-pointer rounded-lg transition-all duration-300 group"
                    >
                        <div className="col-span-1 data-text" style={{ color: 'var(--color-text-tertiary)' }}>{i + 1}</div>
                        <div className="col-span-3 flex items-center gap-3">
                            <img src={coin.image} alt={coin.name} className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0 transition-all" />
                            <div className="flex flex-col">
                                <span className="font-bold text-sm tracking-tight" style={{ color: 'var(--color-text-header)' }}>{coin.name}</span>
                                <span className="terminal-text text-[9px]" style={{ color: 'var(--color-text-tertiary)' }}>{coin.symbol}</span>
                            </div>
                        </div>
                        <div className="col-span-2 text-right data-text text-sm" style={{ color: 'var(--color-text-header)' }}>${coin.current_price.toLocaleString()}</div>
                        <div className="col-span-1 text-right data-text text-xs" style={{ color: 'var(--color-success-primary)' }}>+0.42%</div>
                        <div
                            className="col-span-1 text-right data-text text-xs"
                            style={{
                                color: isPositive ? 'var(--color-success-primary)' : 'var(--color-destructive)',
                                textShadow: isPositive ? 'none' : '0 0 8px var(--color-destructive)'
                            }}
                        >
                            {isPositive ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="col-span-2 px-4 h-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={sparklineData}>
                                    <YAxis domain={['dataMin', 'dataMax']} hide />
                                    <Line
                                        type="monotone"
                                        dataKey="value"
                                        stroke={isPositive ? 'var(--color-success-secondary)' : 'var(--color-destructive)'}
                                        strokeWidth={2}
                                        dot={false}
                                        className="drop-shadow-[0_0_6px_rgba(0,240,255,0.3)]"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="col-span-2 text-right data-text text-xs" style={{ color: 'var(--color-text-metadata)' }}>
                            ${(coin.market_cap / 1e9).toFixed(1)}B
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
