import React, { useMemo } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../../common/Colors";
import { Coin } from "../../types";
import { CoinPrice } from "../../common/Components";
import { CoinIcon, formatPrice } from "../../utils";
import { MiniLineChart } from "./Charts";
import { ChartLine } from "../../common/Components";

const CoinListItem = React.memo(
  ({ coin, onPress }: { coin: Coin; onPress: () => void }) => {
    const chartData = useMemo(() => {
      if (
        !coin.sparkline ||
        !Array.isArray(coin.sparkline) ||
        coin.sparkline.length === 0
      )
        return [];
      const sliced = coin.sparkline.slice(-10);
      return sliced.map((price, idx) => ({
        timestamp: idx,
        open: price,
        high: price,
        low: price,
        close: price,
      }));
    }, [coin.sparkline]);

    return (
      <TouchableOpacity
        style={styles.coinListItem}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.box}>
          <View style={styles.coinListLeft}>
            <CoinIcon symbol={coin.image} />
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
          <CoinPrice price={coin.priceChangePercentage24h} placement="end" />
          <GestureHandlerRootView>
            {chartData.length > 0 ? (
              <MiniLineChart data={chartData} />
            ) : (
              <ChartLine
                trending={coin.priceChangePercentage24h >= 0 ? "up" : "down"}
                height={60}
              />
            )}
          </GestureHandlerRootView>
        </View>
      </TouchableOpacity>
    );
  }
);

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
