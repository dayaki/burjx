import { View, StyleSheet, Image } from "react-native";
import { ChartData, Coin, TimeRange } from "./types";

const getIconBackground = (symbol: string) => {
  switch (symbol.toUpperCase()) {
    case "BTC":
      return "#F7931A";
    case "ETH":
      return "#627EEA";
    case "BNB":
      return "#F3BA2F";
    case "SOL":
      return "#00FFA3";
    case "XRP":
      return "#23292F";
    case "ADA":
      return "#0033AD";
    case "DOGE":
      return "#C3A634";
    case "AVAX":
      return "#E84142";
    case "USDT":
      return "#26A17B";
    case "USDC":
      return "#2775CA";
    default:
      return "#888";
  }
};

export const CoinIcon = ({ symbol }: { symbol: string }) => (
  <View style={styles.coinIcon}>
    <Image source={{ uri: symbol }} style={styles.coinIconImage} />
  </View>
);

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const sortByMarketCap = (coins: Coin[]): Coin[] => {
  return [...coins].sort((a, b) => b.marketCap - a.marketCap).slice(0, 5);
};

export const sortByPriceChangeDesc = (coins: Coin[]): Coin[] => {
  return [...coins].sort(
    (a, b) => b.priceChangePercentage24h - a.priceChangePercentage24h
  );
};

export const sortByPriceChangeAsc = (coins: Coin[]): Coin[] => {
  return [...coins].sort(
    (a, b) => a.priceChangePercentage24h - b.priceChangePercentage24h
  );
};

export const getApiTimeRange = (timeRange: TimeRange) => {
  switch (timeRange) {
    case "1D":
      return "1";
    case "1W":
      return "7";
    case "1M":
      return "30";
    case "1Y":
      return "365";
    case "ALL":
      return "max";
    default:
      return "1";
  }
};

export const formatToK = (amount: number) => {
  if (amount >= 1000) {
    return `$ ${(amount / 1000).toFixed(1)}k`;
  }
  return `$ ${amount.toFixed(1)}`;
};

export const coinLevels = (coins: ChartData[]) => {
  const highs = coins.map((d) => d.high);
  const lows = coins.map((d) => d.low);
  const allPrices = highs.concat(lows);
  const min = Math.min(...allPrices);
  const max = Math.max(...allPrices);
  const step = (max - min) / 3;
  return [max, max - step, max - step * 2, min];
};
const styles = StyleSheet.create({
  coinIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  coinIconImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
