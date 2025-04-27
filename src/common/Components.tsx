import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Colors } from "./Colors";

export const ChartLine = ({
  trending,
  height = 60,
}: {
  trending: "up" | "down";
  height?: number;
}) => {
  const upTrendPath =
    "M0 45C5 40 10 50 15 40C20 30 25 35 30 30C35 25 40 35 45 25C50 15 55 20 60 15C65 10 70 20 75 15C80 10 85 5 90 15C95 25 100 20 105 25C110 30 115 25 120 30C125 35 130 30 135 35C140 40 145 35 150 30";

  const downTrendPath =
    "M0 15C5 20 10 10 15 20C20 30 25 25 30 30C35 35 40 25 45 35C50 45 55 40 60 45C65 50 70 40 75 45C80 50 85 55 90 45C95 35 100 40 105 35C110 30 115 35 120 30C125 25 130 30 135 25C140 20 145 25 150 30";

  return (
    <View style={{ height }}>
      <Svg width="100%" height="100%" viewBox="0 0 150 60">
        <Path
          d={trending === "up" ? upTrendPath : downTrendPath}
          stroke={trending === "up" ? "#c4ff00" : "#ff4d4d"}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};

export const CoinPrice = ({
  price,
  placement,
}: {
  price: number;
  placement?: "start" | "end";
}) => (
  <View
    style={[
      styles.priceChangeContainer,
      placement === "end" && { alignSelf: "flex-end" },
    ]}
  >
    <Text
      style={[
        styles.priceChange,
        price >= 0 ? styles.priceUp : styles.priceDown,
      ]}
    >
      {price >= 0 ? "+ " : ""}
      {price.toFixed(2)} %
    </Text>
  </View>
);

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
  priceChangeContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    padding: 3,
    alignSelf: "flex-start",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
  priceChange: {
    fontSize: 10,
    lineHeight: 15,
    fontFamily: "Lufga-Regular",
  },
  priceUp: {
    color: Colors.electricLime,
  },
  priceDown: {
    color: Colors.accentRed,
  },
});
