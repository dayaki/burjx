import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../common/Colors";
import { CoinIcon, formatPrice } from "../../utils";
import { ChartLine, CoinPrice } from "../../common/Components";

const FeaturedCoin = ({
  coin,
  onPress,
}: {
  coin: any;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.featuredCard} onPress={onPress}>
    <View style={styles.coinHeader}>
      <CoinIcon symbol={"coin.symbol"} />
      <View style={styles.coinInfo}>
        <Text style={styles.coinName}>{coin.symbol.toUpperCase()}</Text>
        <Text style={styles.coinFullName}>{coin.name}</Text>
      </View>
    </View>

    <ChartLine trending={coin.priceChangePercentage24h >= 0 ? "up" : "down"} />

    <View style={styles.priceContainer}>
      <Text style={styles.price}>{formatPrice(coin.currentPrice)}</Text>
      <CoinPrice price={coin.priceChangePercentage24h} />
    </View>
  </TouchableOpacity>
);

export default FeaturedCoin;

const styles = StyleSheet.create({
  featuredCard: {
    width: 180,
    height: 191,
    backgroundColor: "rgba(43, 43, 43, 0.3)",
    borderWidth: 0.5,
    borderRadius: 24,
    padding: 20,
    borderColor: "rgba(255, 255, 255, 0.6)",
    marginRight: 6,
  },
  coinHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  coinIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  coinIconText: {
    color: "#fff",
    fontWeight: "bold",
  },
  coinInfo: {
    flex: 1,
  },
  coinName: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lufga-Regular",
  },
  coinFullName: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Lufga-Thin",
  },
  priceContainer: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    color: Colors.white,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lufga-Regular",
  },
});
