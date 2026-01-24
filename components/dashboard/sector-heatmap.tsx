"use client";

import React from 'react';
import { mockCategories } from '@/lib/mock-data';

export function SectorHeatmap() {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="terminal-text text-[10px]" style={{ color: 'var(--color-text-metadata)' }}>
                    SECTOR PERFORMANCE HEATMAP
                </h3>
                <span className="terminal-text text-[8px]" style={{ color: 'var(--color-success-primary)' }}>
                    AVERAGE: +2.1%
                </span>
            </div>
            <div className="flex w-full h-10 gap-1">
                {mockCategories.map((category, i) => {
                    // Mock performance for heatmap visual
                    const perf = [4.2, -1.5, 2.8, 6.1, -0.8, 3.5][i % 6];
                    const isPositive = perf >= 0;
                    const intensity = Math.abs(perf) / 10 + 0.15; // Min 15% opacity

                    return (
                        <div
                            key={category.id}
                            className="group relative flex-1 h-full rounded-sm overflow-hidden cursor-pointer transition-all hover:scale-105"
                            style={{
                                backgroundColor: isPositive
                                    ? `oklch(${0.2 + 0.1 * intensity} ${0.15 * intensity} 180)`
                                    : `oklch(${0.25 + 0.1 * intensity} ${0.20 * intensity} 25)`
                            }}
                        >
                            {/* Numeric Label Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span
                                    className="data-text text-[9px] font-bold pointer-events-none"
                                    style={{
                                        color: isPositive ? 'var(--color-success-primary)' : 'var(--color-destructive)',
                                        textShadow: '0 0 4px rgba(0,0,0,0.8)'
                                    }}
                                >
                                    {isPositive ? '+' : ''}{perf}%
                                </span>
                            </div>

                            {/* Performance Indicator Bar */}
                            <div
                                className="absolute bottom-0 left-0 right-0 transition-all"
                                style={{
                                    height: '3px',
                                    backgroundColor: isPositive ? 'var(--color-success-primary)' : 'var(--color-destructive)',
                                    opacity: intensity
                                }}
                            />

                            {/* Enhanced Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-card/95 backdrop-blur-sm border border-white/10 rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-50 min-w-[120px] shadow-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[11px] font-bold" style={{ color: 'var(--color-text-header)' }}>
                                        {category.name}
                                    </span>
                                    <span className="text-xs">{category.icon}</span>
                                </div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="terminal-text text-[9px]" style={{ color: 'var(--color-text-metadata)' }}>
                                        24H CHANGE
                                    </span>
                                    <span
                                        className="data-text text-[11px] font-bold"
                                        style={{ color: isPositive ? 'var(--color-success-primary)' : 'var(--color-destructive)' }}
                                    >
                                        {isPositive ? '+' : ''}{perf}%
                                    </span>
                                </div>
                                <div className="terminal-text text-[8px]" style={{ color: 'var(--color-text-tertiary)' }}>
                                    {category.count} ASSETS
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Minimal Legend */}
            <div className="flex items-center justify-end gap-4 pt-2">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'var(--color-success-primary)' }} />
                    <span className="terminal-text text-[8px]" style={{ color: 'var(--color-text-tertiary)' }}>GAINS</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'var(--color-destructive)' }} />
                    <span className="terminal-text text-[8px]" style={{ color: 'var(--color-text-tertiary)' }}>LOSSES</span>
                </div>
            </div>
        </div>
    );
}
