import { BentoGrid } from '@/components/home/bento-grid';
import { CoinMarquee } from '@/components/home/coin-marquee';
import { MarketCategories } from '@/components/home/market-categories';
import { mockTrendingCoins, mockCategories } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-5xl md:text-6xl font-mono font-bold tracking-tight">
          Track <span className="text-primary">Crypto</span> Markets
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real-time cryptocurrency prices, charts, and market data with a premium Liquid Glass interface.
        </p>
      </section>

      {/* Marquee */}
      <section>
        <CoinMarquee coins={mockTrendingCoins} />
      </section>

      {/* Trending Coins Bento Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-mono font-bold">Trending Coins</h2>
          <a
            href="/coins"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All →
          </a>
        </div>
        <BentoGrid coins={mockTrendingCoins} />
      </section>

      {/* Market Categories */}
      <section>
        <MarketCategories categories={mockCategories} />
      </section>
    </div>
  );
}