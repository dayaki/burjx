import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  login: undefined;
  markets: undefined;
  coin_details: {
    coinId: string;
    coinName: string;
    coinSymbol: string;
  };
};

export type MarketScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "markets"
>;

// export type MarketScreenProps = {
//   navigation: MarketScreenNavigationProps;
// };

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
  productId: number;
};

export type TimeRange = "1H" | "1D" | "1W" | "1M" | "1Y" | "ALL";
