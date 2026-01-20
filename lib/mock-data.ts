// Mock data for development - will be replaced with real API calls later
export const mockTrendingCoins = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    image: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png',
    current_price: 43250.50,
    price_change_percentage_24h: 2.45,
    market_cap: 845000000000,
    sparkline_in_7d: { price: [42000, 42500, 41800, 43000, 43500, 43200, 43250] }
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    image: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png',
    current_price: 2280.75,
    price_change_percentage_24h: -1.23,
    market_cap: 274000000000,
    sparkline_in_7d: { price: [2300, 2320, 2250, 2280, 2290, 2270, 2280] }
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    image: 'https://coin-images.coingecko.com/coins/images/4128/large/solana.png',
    current_price: 98.45,
    price_change_percentage_24h: 5.67,
    market_cap: 42000000000,
    sparkline_in_7d: { price: [92, 94, 93, 96, 98, 97, 98] }
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    image: 'https://coin-images.coingecko.com/coins/images/975/large/cardano.png',
    current_price: 0.52,
    price_change_percentage_24h: 3.21,
    market_cap: 18000000000,
    sparkline_in_7d: { price: [0.50, 0.51, 0.49, 0.52, 0.53, 0.52, 0.52] }
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    image: 'https://coin-images.coingecko.com/coins/images/12171/large/polkadot.png',
    current_price: 7.23,
    price_change_percentage_24h: -2.15,
    market_cap: 9500000000,
    sparkline_in_7d: { price: [7.4, 7.3, 7.1, 7.2, 7.3, 7.2, 7.23] }
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    symbol: 'AVAX',
    image: 'https://coin-images.coingecko.com/coins/images/12559/large/avalanche.png',
    current_price: 36.78,
    price_change_percentage_24h: 4.32,
    market_cap: 13500000000,
    sparkline_in_7d: { price: [35, 35.5, 34.8, 36, 37, 36.5, 36.78] }
  }
];

export const mockCategories = [
  { id: 'defi', name: 'DeFi', icon: '🏦', count: 245 },
  { id: 'nft', name: 'NFT', icon: '🎨', count: 189 },
  { id: 'gaming', name: 'Gaming', icon: '🎮', count: 156 },
  { id: 'layer-1', name: 'Layer 1', icon: '⛓️', count: 78 },
  { id: 'meme', name: 'Meme', icon: '🐕', count: 312 },
  { id: 'ai', name: 'AI', icon: '🤖', count: 92 },
];
