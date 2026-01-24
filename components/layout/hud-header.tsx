"use client";

import React from 'react';
import { Activity, Zap, Droplets, TrendingUp, Menu } from 'lucide-react';

const stats = [
    { label: 'MARKET CAP', value: '$2.84T', change: '+1.2%', icon: TrendingUp },
    { label: '24H VOLUME', value: '$84.2B', change: '-5.4%', icon: Activity },
    { label: 'BTC DOMINANCE', value: '52.4%', change: '+0.1%', icon: Zap },
    { label: 'ETH GAS', value: '12 GWEI', change: 'LOW', icon: Droplets },
];

export function HUDHeader() {
    return (
        <header className="fixed top-0 left-0 md:left-20 right-0 h-14 z-40 border-b border-white/5 bg-card/60 backdrop-blur-md flex items-center px-4 md:px-8">
            <button className="md:hidden mr-4 p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Menu size={20} className="text-white/70" />
            </button>

            <div className="flex items-center gap-6 md:gap-12 overflow-x-auto no-scrollbar py-2 flex-1">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col min-w-max">
                        <span className="terminal-text mb-0.5 text-[8px] md:text-[10px]" style={{ color: 'var(--color-text-tertiary)' }}>
                            {stat.label}
                        </span>
                        <div className="flex items-center gap-2 md:gap-3">
                            <span className="data-text text-xs md:text-sm" style={{ color: 'var(--color-text-header)' }}>
                                {stat.value}
                            </span>
                            <span
                                className="text-[8px] md:text-[9px] font-bold px-1 md:px-1.5 py-0.5 rounded"
                                style={{
                                    backgroundColor: stat.change.startsWith('+') ? 'var(--color-success-primary)' :
                                        stat.change.startsWith('-') ? 'var(--color-destructive)' : 'var(--color-muted)',
                                    color: stat.change.startsWith('+') || stat.change.startsWith('-') ? 'var(--color-card)' : 'var(--color-text-tertiary)',
                                    opacity: stat.change.startsWith('+') || stat.change.startsWith('-') ? 0.9 : 0.7
                                }}
                            >
                                {stat.change}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="ml-auto hidden sm:flex items-center gap-3 md:gap-6">
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-card border border-white/10 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-success-primary)' }} />
                    <span className="terminal-text text-[9px]" style={{ color: 'var(--color-text-metadata)' }}>
                        NODE: MAINNET-SEC-04
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="terminal-text text-[9px]" style={{ color: 'var(--color-text-tertiary)' }}>
                        UTC: 02:54:12
                    </span>
                </div>
            </div>
        </header>
    );
}
