import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  login: undefined;
  markets: undefined;
  coin_details: {
    coin: Coin;
  };
};

export type MarketScreenProps = StackScreenProps<RootStackParamList, "markets">;

export type LoginScreenProps = StackScreenProps<RootStackParamList, "login">;

export type CoinDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "coin_details"
>;

// Types
export type Coin = {
  id: string;
  name: string;
  symbol: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  marketCap: number;
  tradingVolume: number;
  image: string;
  sparkline: number[];
  productId: number;
};

export type CandlestickChartData = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

export type TimeRange = "1D" | "1W" | "1M" | "1Y" | "ALL";

export const queryKeys = {
  coins: ["coins"],
  coinOHLC: (coinId: number, timeRange: string) => [
    "coin",
    coinId,
    "ohlc",
    timeRange,
  ],
};

export type ChartData = {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
};

export type OHLCApiResponse = {
  date: number;
  usd: {
    open: number;
    high: number;
    low: number;
    close: number;
  };
  aed: {
    open: number;
    high: number;
    low: number;
    close: number;
  };
};
