"use client";

import React from 'react';

interface CandleData {
    o: number;
    h: number;
    l: number;
    c: number;
}

export function MiniCandleChart({ prices }: { prices: number[] }) {
    // Generate mock OHLC from price points
    const candles: CandleData[] = React.useMemo(() => prices.map((p, i) => {
        const prev = i > 0 ? prices[i - 1] : p;
        const volatility = p * 0.01;
        // Use a deterministic "pseudo-random" based on p and i to satisfy purity checks
        const pseudoRand = ((p * 1000) % 100) / 100;
        return {
            o: prev,
            c: p,
            h: Math.max(prev, p) + pseudoRand * volatility,
            l: Math.min(prev, p) - (1 - pseudoRand) * volatility
        };
    }), [prices]);

    const max = Math.max(...candles.map(c => c.h));
    const min = Math.min(...candles.map(c => c.l));
    const range = max - min;

    const getY = (price: number) => {
        return 100 - ((price - min) / range) * 100;
    };

    return (
        <div className="w-full h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                {candles.map((candle, i) => (
                    <g key={i}>
                        {/* Wick */}
                        <line
                            x1={i * (100 / candles.length) + (50 / candles.length)}
                            y1={getY(candle.h)}
                            x2={i * (100 / candles.length) + (50 / candles.length)}
                            y2={getY(candle.l)}
                            stroke={candle.c >= candle.o ? 'var(--color-success)' : 'var(--color-destructive)'}
                            strokeWidth="0.5"
                            className="opacity-50"
                        />
                        {/* Body */}
                        <rect
                            x={i * (100 / candles.length) + (10 / candles.length)}
                            y={Math.min(getY(candle.o), getY(candle.c))}
                            width={80 / candles.length}
                            height={Math.max(Math.abs(getY(candle.o) - getY(candle.c)), 1)}
                            fill={candle.c >= candle.o ? 'var(--color-success)' : 'var(--color-destructive)'}
                            className="rx-1"
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}
