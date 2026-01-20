'use client';

import { motion } from 'motion/react';
import { PriceDisplay } from '@/components/price-display';
import Image from 'next/image';

interface CoinData {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

interface CoinMarqueeProps {
    coins: CoinData[];
}

export const CoinMarquee = ({ coins }: CoinMarqueeProps) => {
    // Duplicate coins for seamless loop
    const duplicatedCoins = [...coins, ...coins];

    return (
        <div className="relative overflow-hidden py-8">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
                className="flex gap-6"
                animate={{
                    x: [0, -50 * coins.length * 16], // Approximate width calculation
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedCoins.map((coin, index) => (
                    <div
                        key={`${coin.id}-${index}`}
                        className="flex items-center gap-3 px-6 py-4 glass-panel rounded-xl min-w-[280px] shrink-0"
                    >
                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-muted/20 p-1">
                            <Image
                                src={coin.image}
                                alt={coin.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="font-mono font-bold text-sm">{coin.symbol.toUpperCase()}</p>
                            <PriceDisplay
                                price={coin.current_price}
                                change24h={coin.price_change_percentage_24h}
                                size="sm"
                                animate={false}
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
