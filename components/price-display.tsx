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

            const timer = setTimeout(() => setFlash(null), 600);
            return () => clearTimeout(timer);
        }
    }, [price, prevPrice, animate]);

    const isPositive = change24h >= 0;

    const sizeClasses = {
        sm: 'text-lg',
        md: 'text-2xl',
        lg: 'text-4xl'
    };

    const changeSizeClasses = {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
    };

    return (
        <div className="flex items-baseline gap-3">
            <motion.div
                className={`font-mono font-bold ${sizeClasses[size]} relative`}
                animate={flash ? {
                    color: flash === 'up' ? '#10B981' : '#EF4444',
                } : {}}
                transition={{ duration: 0.3 }}
            >
                ${price.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: price < 1 ? 6 : 2
                })}

                {/* Flash overlay */}
                <AnimatePresence>
                    {flash && (
                        <motion.div
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className={`absolute inset-0 rounded-lg blur-sm ${flash === 'up' ? 'bg-green-500/30' : 'bg-red-500/30'
                                }`}
                        />
                    )}
                </AnimatePresence>
            </motion.div>

            {showChange && (
                <div className={`flex items-center gap-1 ${changeSizeClasses[size]} font-medium ${isPositive ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {isPositive ? (
                        <TrendingUp className="w-4 h-4" />
                    ) : (
                        <TrendingDown className="w-4 h-4" />
                    )}
                    <span>
                        {isPositive ? '+' : ''}{change24h.toFixed(2)}%
                    </span>
                </div>
            )}
        </div>
    );
};
