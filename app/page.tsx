import { CoinCard } from '@/components/dashboard/coin-card';
import { SectorHeatmap } from '@/components/dashboard/sector-heatmap';
import { LivingTable } from '@/components/dashboard/living-table';
import { mockTrendingCoins } from '@/lib/mock-data';

export default function HomePage() {
  const topAssets = mockTrendingCoins.slice(0, 3);
  const tableAssets = mockTrendingCoins;

  return (
    <div className="space-y-12 pb-20">
      {/* 1. Market Leaders Grid (Glass Cards) */}
      <section>
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-lg font-sans font-bold tracking-tight" style={{ color: 'var(--color-text-header)' }}>
            MARKET LEADERS
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topAssets.map(coin => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      </section>

      {/* 2. Sector Heatmap */}
      <section className="glass-panel p-6 rounded-xl border-white/5">
        <SectorHeatmap />
      </section>

      {/* 3. Living Data Table */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-lg font-sans font-bold tracking-tight" style={{ color: 'var(--color-text-header)' }}>
              TERMINAL ASSET INDEX
            </h2>
            <div
              className="px-2 py-0.5 border rounded text-[9px] font-mono font-bold"
              style={{
                backgroundColor: 'color-mix(in oklch, var(--color-success-primary) 15%, transparent)',
                borderColor: 'color-mix(in oklch, var(--color-success-primary) 30%, transparent)',
                color: 'var(--color-success-primary)'
              }}
            >
              LIVE BROADCAST: 124ms
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="terminal-text transition-colors" style={{ color: 'var(--color-text-metadata)' }}>7D View</button>
            <button className="terminal-text" style={{ color: 'var(--color-success-primary)' }}>24H View</button>
            <button className="terminal-text transition-colors" style={{ color: 'var(--color-text-metadata)' }}>1H View</button>
          </div>
        </div>
        <LivingTable coins={tableAssets} />
      </section>
    </div>
  );
}