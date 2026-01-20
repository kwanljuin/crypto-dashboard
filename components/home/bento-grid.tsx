'use client';

import { GlassCard } from '@/components/ui/glass-card';
import { PriceDisplay } from '@/components/price-display';
import { MiniSparkline } from '@/components/charts/mini-sparkline';
import Image from 'next/image';
import Link from 'next/link';

interface CoinData {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    market_cap: number;
    sparkline_in_7d: { price: number[] };
}

interface BentoGridProps {
    coins: CoinData[];
}

export const BentoGrid = ({ coins }: BentoGridProps) => {
    const [featured, ...rest] = coins;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
            {/* Featured Large Card */}
            <Link href={`/coins/${featured.id}`} className="md:col-span-2 md:row-span-2">
                <GlassCard className="h-full flex flex-col justify-between p-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-muted/20 p-2">
                                <Image
                                    src={featured.image}
                                    alt={featured.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-mono font-bold">{featured.name}</h2>
                                <p className="text-muted-foreground font-mono">{featured.symbol.toUpperCase()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center my-6">
                        <div className="w-full h-32">
                            <MiniSparkline
                                data={featured.sparkline_in_7d.price}
                                isPositive={featured.price_change_percentage_24h >= 0}
                            />
                        </div>
                    </div>

                    <div>
                        <PriceDisplay
                            price={featured.current_price}
                            change24h={featured.price_change_percentage_24h}
                            size="lg"
                        />
                        <p className="text-sm text-muted-foreground mt-2">
                            Market Cap: ${(featured.market_cap / 1e9).toFixed(2)}B
                        </p>
                    </div>
                </GlassCard>
            </Link>

            {/* Smaller Cards */}
            {rest.map((coin) => (
                <Link key={coin.id} href={`/coins/${coin.id}`}>
                    <GlassCard className="h-full flex flex-col justify-between">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted/20 p-1.5">
                                <Image
                                    src={coin.image}
                                    alt={coin.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-mono font-bold truncate">{coin.name}</h3>
                                <p className="text-xs text-muted-foreground font-mono">{coin.symbol.toUpperCase()}</p>
                            </div>
                        </div>

                        <div className="h-16 mb-4">
                            <MiniSparkline
                                data={coin.sparkline_in_7d.price}
                                isPositive={coin.price_change_percentage_24h >= 0}
                            />
                        </div>

                        <PriceDisplay
                            price={coin.current_price}
                            change24h={coin.price_change_percentage_24h}
                            size="sm"
                        />
                    </GlassCard>
                </Link>
            ))}
        </div>
    );
};
