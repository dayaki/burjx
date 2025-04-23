import { View, StyleSheet, Image } from "react-native";

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
    <Image
      source={require("../assets/images/btc.png")}
      style={styles.coinIconImage}
    />
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
