'use client';

import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PriceDisplayProps {
    price: number;
    change24h?: number;
    size?: 'sm' | 'md' | 'lg';
    showChange?: boolean;
    animate?: boolean;
}

export const PriceDisplay = ({
    price,
    change24h = 0,
    size = 'md',
    showChange = true,
    animate = true
}: PriceDisplayProps) => {
    const [flash, setFlash] = useState<'up' | 'down' | null>(null);
    const [prevPrice, setPrevPrice] = useState(price);

    useEffect(() => {
        if (animate && price !== prevPrice) {
            setFlash(price > prevPrice ? 'up' : 'down');
            setPrevPrice(price);

            const timer = setTimeout(() => setFlash(null), 400);
            return () => clearTimeout(timer);
        }
    }, [price, prevPrice, animate]);

    const isPositive = change24h >= 0;

    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-3xl',
        lg: 'text-6xl'
    };

    const changeSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-lg'
    };

    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-3">
                <motion.div
                    className={`data-text font-black ${sizeClasses[size]} relative inline-block px-1`}
                    animate={flash ? {
                        backgroundColor: flash === 'up' ? '#10B981' : '#EF4444',
                        color: '#000000',
                    } : {
                        backgroundColor: 'rgba(0,0,0,0)',
                        color: '#FFFFFF',
                    }}
                    transition={{ duration: 0.1 }}
                >
                    ${price.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: price < 1 ? 6 : 2
                    })}
                </motion.div>

                {showChange && (
                    <div className={`flex items-center gap-1 ${changeSizeClasses[size]} font-black uppercase tracking-tighter ${isPositive ? 'text-green-400' : 'text-red-400'
                        }`}>
                        {isPositive ? '+' : ''}{change24h.toFixed(2)}%
                    </div>
                )}
            </div>
            {size === 'lg' && (
                <div className="h-1 w-full bg-white/20 mt-2" />
            )}
        </div>
    );
};
