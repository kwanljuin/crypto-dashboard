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
        <div className="relative overflow-hidden py-12 border-y-4 border-white bg-black/50">
            {/* Hard edges instead of soft gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-black z-10 border-r-2 border-white/10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-black z-10 border-l-2 border-white/10" />

            <motion.div
                className="flex gap-4"
                animate={{
                    x: [0, -coins.length * 300], // Adjust based on box width
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    },
                }}
            >
                {duplicatedCoins.map((coin, index) => (
                    <div
                        key={`${coin.id}-${index}`}
                        className="flex items-center gap-4 px-6 py-4 bg-black border-2 border-white/20 hover:border-primary transition-colors min-w-[280px] shrink-0"
                    >
                        <div className="relative w-12 h-12 bg-white p-2 border-2 border-black">
                            <Image
                                src={coin.image}
                                alt={coin.name}
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <div className="flex-1">
                            <p className="font-sans font-black text-xs uppercase tracking-widest text-white/40 mb-1">{coin.name}</p>
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
