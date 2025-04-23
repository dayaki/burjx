import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { Colors } from "../../common/Colors";
import { Coin } from "../../types";
import { ChartLine, CoinPrice } from "../../common/Components";
import { CoinIcon, formatPrice } from "../../utils";

const CoinListItem = ({
  coin,
  onPress,
}: {
  coin: Coin;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      style={styles.coinListItem}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.box}>
        <View style={styles.coinListLeft}>
          <CoinIcon symbol={coin.symbol} />
          <View>
            <Text style={styles.coinName}>{coin.symbol.toUpperCase()}</Text>
            <Text style={styles.coinFullName}>{coin.name}</Text>
          </View>
        </View>
        <Text style={styles.coinListPrice}>
          {formatPrice(coin.currentPrice)}
        </Text>
      </View>

      <View style={styles.box}>
        <CoinPrice price={coin.priceChangePercentage24h} />
        <View>
          <ChartLine
            trending={coin.priceChangePercentage24h >= 0 ? "up" : "down"}
            height={60}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoinListItem;

const styles = StyleSheet.create({
  coinListItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(26, 26, 26, 0.5)",
    borderRadius: 12,
    padding: 15,
    marginBottom: 4,
    height: 124,
  },
  coinListLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinInfo: {
    flex: 1,
  },
  coinName: {
    color: Colors.white,
    fontSize: 15,
    lineHeight: 24,
    fontFamily: "Lufga-Regular",
  },
  coinFullName: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Lufga-Thin",
  },
  coinListPrice: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 5,
  },
  box: {
    justifyContent: "space-between",
  },
});
