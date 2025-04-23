import { useMemo, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coinDetailsStyles as styles } from "./styles";
import { CoinDetailsNavigationProps, TimeRange } from "../types";
import { BackIcon } from "../../assets/icons";
import { CoinIcon, formatPrice } from "../utils";
import { CoinPrice } from "../common/Components";
import { FullScreenIcon } from "../../assets/icons";
import { CandlestickChart, formatDatetime } from "react-native-wagmi-charts";
import { Colors } from "../common/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const data = [
  {
    timestamp: 1625945400000,
    open: 33575.25,
    high: 33600.52,
    low: 33475.12,
    close: 33520.11,
  },
  {
    timestamp: 1625946300000,
    open: 33545.25,
    high: 33560.52,
    low: 33510.12,
    close: 33520.11,
  },
  {
    timestamp: 1625947200000,
    open: 33510.25,
    high: 33515.52,
    low: 33250.12,
    close: 33250.11,
  },
  {
    timestamp: 1625948100000,
    open: 33215.25,
    high: 33430.52,
    low: 33215.12,
    close: 33420.11,
  },
  {
    timestamp: 1625949000000,
    open: 33410.25,
    high: 33510.52,
    low: 33350.12,
    close: 33350.11,
  },
  {
    timestamp: 1625950100000,
    open: 33330.25,
    high: 33460.52,
    low: 33250.12,
    close: 33370.11,
  },
  {
    timestamp: 1625951200000,
    open: 33370.25,
    high: 33500.52,
    low: 33250.12,
    close: 33390.11,
  },
  {
    timestamp: 1625952300000,
    open: 33390.25,
    high: 33550.52,
    low: 33250.12,
    close: 33410.11,
  },
  {
    timestamp: 1625953400000,
    open: 33410.25,
    high: 33510.52,
    low: 33250.12,
    close: 33420.11,
  },
  {
    timestamp: 1625954500000,
    open: 33420.25,
    high: 33500.52,
    low: 33250.12,
    close: 33430.11,
  },
  {
    timestamp: 1625955600000,
    open: 33430.25,
    high: 33480.52,
    low: 33250.12,
    close: 33450.11,
  },
];

const CoinDetails = ({
  navigation,
}: {
  navigation: CoinDetailsNavigationProps;
}) => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1D");

  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <BackIcon />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <CoinIcon symbol={""} />
            <Text style={styles.headerTitle}>Bitcoin (BTC)</Text>
          </View>
        </View>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatPrice(148385.52)}</Text>
            <CoinPrice price={14.52} />
          </View>

          <View style={styles.candlestick}>
            <GestureHandlerRootView>
              <CandlestickChart.Provider data={data}>
                <CandlestickChart width={150}>
                  <CandlestickChart.Candles
                    positiveColor={Colors.electricLime}
                    negativeColor={Colors.accentRed}
                  />
                </CandlestickChart>
              </CandlestickChart.Provider>
            </GestureHandlerRootView>
          </View>

          {/* Time Range Selector */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.timeRangeContainer}
          >
            {(["1H", "1D", "1W", "1M", "1Y", "ALL"] as TimeRange[]).map(
              (range) => (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={range}
                  style={[
                    styles.timeRangeButton,
                    timeRange === range && styles.activeTimeRangeButton,
                  ]}
                  onPress={() => setTimeRange(range)}
                >
                  <Text
                    style={[
                      styles.timeRangeText,
                      timeRange === range && styles.activeTimeRangeText,
                    ]}
                  >
                    {range}
                  </Text>
                </TouchableOpacity>
              )
            )}
            <TouchableOpacity activeOpacity={0.7}>
              <FullScreenIcon />
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CoinDetails;
