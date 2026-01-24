"use client";

import React from 'react';
import { mockTrendingCoins } from '@/lib/mock-data';
import { motion } from 'motion/react';

export function FooterTicker() {
    const tickerItems = [...mockTrendingCoins, ...mockTrendingCoins, ...mockTrendingCoins];

    return (
        <footer className="fixed bottom-0 left-20 right-0 h-10 z-40 border-t border-white/5 bg-black/40 backdrop-blur-md flex items-center overflow-hidden">
            <motion.div
                className="flex items-center gap-12 whitespace-nowrap px-4"
                animate={{ x: [0, -1000] }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {tickerItems.map((coin, i) => (
                    <div key={`${coin.id}-${i}`} className="flex items-center gap-2">
                        <span className="terminal-text">{coin.symbol}</span>
                        <span className="data-text text-[11px] leading-none">${coin.current_price.toLocaleString()}</span>
                        <span className={`data-text text-[10px] ${coin.price_change_percentage_24h >= 0 ? 'text-success' : 'text-destructive'}`}>
                            {coin.price_change_percentage_24h >= 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    </div>
                ))}
            </motion.div>
        </footer>
    );
}
