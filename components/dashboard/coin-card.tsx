"use client";

import React from 'react';
import { MiniCandleChart } from './mini-candle-chart';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CoinCardProps {
    coin: {
        symbol: string;
        name: string;
        current_price: number;
        price_change_percentage_24h: number;
        sparkline_in_7d: { price: number[] };
    };
}

export function CoinCard({ coin }: CoinCardProps) {
    const isPositive = coin.price_change_percentage_24h >= 0;

    return (
        <motion.div
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="glass-card group p-5 h-[220px] flex flex-col justify-between"
        >
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="terminal-text text-white/60">{coin.symbol} / USD</span>
                        {isPositive ? <TrendingUp size={12} className="text-success" /> : <TrendingDown size={12} className="text-destructive" />}
                    </div>
                    <h3 className="text-2xl font-bold font-sans tracking-tight">${coin.current_price.toLocaleString()}</h3>
                </div>
                <div className={`flex items-center gap-1 text-xs font-mono font-bold ${isPositive ? 'text-success' : 'text-destructive'}`}>
                    {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
            </div>

            <div className="flex-1 my-4 relative h-20">
                <MiniCandleChart prices={coin.sparkline_in_7d.price} />
                {/* Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-${isPositive ? 'success' : 'destructive'}/5 to-transparent blur-xl pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500`} />
            </div>

            <div className="space-y-2">
                <div className="flex justify-between terminal-text text-[8px]">
                    <span>ORDER BOOK DEPTH</span>
                    <span className="text-white/40">78% BUY / 22% SELL</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div className="h-full bg-success/60 w-[78%]" />
                    <div className="h-full bg-destructive/60 w-[22%]" />
                </div>
            </div>
        </motion.div>
    );
}
