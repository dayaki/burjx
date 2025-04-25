import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { coinDetailsStyles as styles } from "./styles";
import { CoinDetailsScreenProps, TimeRange } from "../types";
import { BackIcon } from "../../assets/icons";
import { CoinIcon, coinLevels, formatCoinNumbers, formatPrice } from "../utils";
import { CoinPrice } from "../common/Components";
import { FullScreenIcon } from "../../assets/icons";
import { Colors } from "../common/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFetchCoin } from "../hooks/useFetchCoin";
import { CandlestickCharts, LineCharts } from "./utils/Charts";

const CoinDetails = ({ navigation, route }: CoinDetailsScreenProps) => {
  const [timeRange, setTimeRange] = useState<TimeRange>("1D");
  const [chartType, setChartType] = useState<"line" | "candlestick">("line");
  const { coin } = route.params;

  const { data, isLoading, error, refetch, isError } = useFetchCoin(
    coin.productId,
    timeRange
  );

  const refinedData = data?.data.slice(0, 20).map((item) => ({
    timestamp: item.date,
    open: item.usd.open,
    high: item.usd.high,
    low: item.usd.low,
    close: item.usd.close,
  }));

  const levels = coinLevels(refinedData ?? []);

  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <BackIcon />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <CoinIcon symbol={coin.image} />
          <Text style={styles.headerTitle}>
            {coin.name} ({coin.symbol.toUpperCase()})
          </Text>
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color={Colors.electricLime}
          style={{ flex: 1 }}
        />
      ) : isError ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            {error instanceof Error
              ? error.message
              : "Failed to fetch coin data"}
          </Text>
          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => refetch()}
          >
            <Text style={styles.retryButtonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{formatPrice(coin.currentPrice)}</Text>
            <CoinPrice price={coin.priceChangePercentage24h} />
          </View>

          <View style={styles.candlestick}>
            <GestureHandlerRootView style={{ position: "absolute" }}>
              {chartType === "line" ? (
                <LineCharts data={refinedData ?? []} />
              ) : (
                <CandlestickCharts data={refinedData || []} />
              )}
            </GestureHandlerRootView>
            <View style={styles.chartAmountContainer}>
              {levels.map((level, idx) => (
                <View style={styles.chartRow} key={idx}>
                  <View style={styles.chartDash} />
                  <Text style={styles.chartAmount}>
                    {formatCoinNumbers(level)}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Chart Type Toggle */}
          <View style={styles.chartTypeContainer}>
            <TouchableOpacity
              style={[
                styles.chartTypeButton,
                chartType === "line" && styles.activeChartTypeButton,
              ]}
              onPress={() => setChartType("line")}
            >
              <Text
                style={[
                  styles.chartTypeText,
                  chartType === "line" && styles.activeChartTypeText,
                ]}
              >
                Line Chart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chartTypeButton,
                chartType === "candlestick" && styles.activeChartTypeButton,
              ]}
              onPress={() => setChartType("candlestick")}
            >
              <Text
                style={[
                  styles.chartTypeText,
                  chartType === "candlestick" && styles.activeChartTypeText,
                ]}
              >
                Candlestick
              </Text>
            </TouchableOpacity>
          </View>

          {/* Time Range Selector */}
          <View style={styles.timeRangeContainer}>
            <View style={{ flexDirection: "row" }}>
              {(["1D", "1W", "1M", "1Y", "ALL"] as TimeRange[]).map((range) => (
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
              ))}
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <FullScreenIcon />
            </TouchableOpacity>
          </View>

          {/*  Addtional coin data */}
          {refinedData && refinedData.length > 0 && (
            <View style={styles.statsContainer}>
              <View style={styles.statRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>24h Low</Text>
                  <Text style={styles.statValue}>
                    {formatCoinNumbers(
                      Math.min(...refinedData.map((d) => d.low))
                    )}
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>24h Volume</Text>
                  <Text style={styles.statValue}>
                    {formatCoinNumbers(coin.tradingVolume)}
                  </Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>Market Cap</Text>
                  <Text style={styles.statValue}>
                    {formatCoinNumbers(coin.marketCap)}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      )}
    </ImageBackground>
  );
};

export default CoinDetails;
