'use client';

import { GlassPanel } from '@/components/ui/glass-panel';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* Featured Large Card */}
            <Link href={`/coins/${featured.id}`} className="md:col-span-2 md:row-span-2 group">
                <GlassPanel className="h-full flex flex-col justify-between p-8 bg-gradient-to-b from-white/5 to-transparent geometric-reveal border-white/10 hover:border-primary/50 transition-all">
                    <div className="z-0 absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

                    <div className="relative z-10 flex items-start justify-between mb-8">
                        <div className="flex items-center gap-6">
                            <div className="relative w-24 h-24 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={featured.image}
                                    alt={featured.name}
                                    fill
                                    className="object-contain p-2 drop-shadow-lg"
                                />
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">Featured Asset</span>
                                <h2 className="text-5xl md:text-6xl font-sans font-bold tracking-tight text-white mb-1 group-hover:text-primary transition-colors">{featured.name}</h2>
                                <p className="text-xl text-white/40 font-medium">{featured.symbol.toUpperCase()}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Rank #1</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex-1 flex items-center justify-center my-6">
                        <div className="w-full h-56 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                            <MiniSparkline
                                data={featured.sparkline_in_7d.price}
                                isPositive={featured.price_change_percentage_24h >= 0}
                            />
                        </div>
                    </div>

                    <div className="relative z-10 flex items-end justify-between p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md">
                        <PriceDisplay
                            price={featured.current_price}
                            change24h={featured.price_change_percentage_24h}
                            size="lg"
                        />
                        <div className="text-right">
                            <p className="text-xs font-medium uppercase tracking-wider text-white/40 mb-1">Market Cap</p>
                            <p className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">${(featured.market_cap / 1e9).toFixed(2)}B</p>
                        </div>
                    </div>
                </GlassPanel>
            </Link>

            {/* Smaller Cards */}
            {rest.map((coin, index) => (
                <Link key={coin.id} href={`/coins/${coin.id}`} className="group">
                    <GlassPanel className="h-full flex flex-col justify-between p-6 bg-white/5 hover:bg-white/10 geometric-reveal border-white/10" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-14 h-14 bg-white/5 border border-white/10 rounded-xl p-2 group-hover:scale-110 transition-transform duration-300">
                                <Image
                                    src={coin.image}
                                    alt={coin.name}
                                    fill
                                    className="object-contain p-2"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-sans font-bold text-lg text-white group-hover:text-primary transition-colors truncate">{coin.name}</h3>
                                <p className="text-sm text-white/40 font-medium">{coin.symbol.toUpperCase()}</p>
                            </div>
                        </div>

                        <div className="h-24 mb-6 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                            <MiniSparkline
                                data={coin.sparkline_in_7d.price}
                                isPositive={coin.price_change_percentage_24h >= 0}
                            />
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5">
                            <PriceDisplay
                                price={coin.current_price}
                                change24h={coin.price_change_percentage_24h}
                                size="md"
                            />
                        </div>
                    </GlassPanel>
                </Link>
            ))}
        </div>
    );
};
