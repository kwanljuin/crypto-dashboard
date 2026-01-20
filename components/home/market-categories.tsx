'use client';

import { GlassCard } from '@/components/ui/glass-card';
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
        <div className="space-y-4">
            <h2 className="text-2xl font-mono font-bold">Market Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {categories.map((category) => (
                    <Link key={category.id} href={`/coins?category=${category.id}`}>
                        <GlassCard className="text-center">
                            <div className="text-4xl mb-2">{category.icon}</div>
                            <h3 className="font-mono font-bold text-sm mb-1">{category.name}</h3>
                            <p className="text-xs text-muted-foreground">{category.count} coins</p>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </div>
    );
};
