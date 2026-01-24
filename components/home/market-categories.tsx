'use client';

import { GlassPanel } from '@/components/ui/glass-panel';
import Link from 'next/link';

interface Category {
    id: string;
    name: string;
    icon: string;
    count: number;
}

interface MarketCategoriesProps {
    categories: Category[];
}

export const MarketCategories = ({ categories }: MarketCategoriesProps) => {
    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <h2 className="text-4xl font-sans font-black uppercase tracking-tighter">Market Sectors</h2>
                <div className="h-1 flex-1 bg-white/20" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category) => (
                    <Link key={category.id} href={`/coins?category=${category.id}`}>
                        <GlassPanel className="text-center group p-6 hover:bg-white/5 border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                            <div className="relative z-10">
                                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,107,53,0.5)] transition-all duration-300 filter grayscale group-hover:grayscale-0">
                                    {category.icon}
                                </div>
                                <h3 className="font-sans font-bold text-sm uppercase tracking-wider mb-2 text-white/90 group-hover:text-primary transition-colors">{category.name}</h3>
                                <div className="h-0.5 w-8 bg-white/20 mx-auto mb-3 rounded-full group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                                <p className="text-xs text-white/40 font-medium group-hover:text-white/70 transition-colors uppercase tracking-tight">{category.count} Assets</p>
                            </div>
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </GlassPanel>
                    </Link>
                ))}
            </div>
        </div>
    );
};
