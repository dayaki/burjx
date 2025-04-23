import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { marketsStyles as styles } from "./styles";
import FeaturedCoin from "./utils/FeaturedCoin";
import { SearchIcon } from "../../assets/icons";
import CoinListItem from "./utils/CoinListItem";
import { Coin, MarketScreenNavigationProps } from "../types";

// Tab navigation component
const TabNavigation = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs = [
    { slug: "featured", name: "⭐ Featured" },
    { slug: "gainers", name: "🚀 Top Gainers" },
    { slug: "losers", name: "🚩 Top Losers" },
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabContainer}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.slug}
          style={[styles.tab, activeTab === tab.slug && styles.activeTab]}
          onPress={() => setActiveTab(tab.slug)}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === tab.slug && styles.activeTabText,
            ]}
          >
            {tab.name}
          </Text>
          {/* {activeTab === tab.slug && <View style={styles.activeTabIndicator} />} */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const Markets = ({
  navigation,
}: {
  navigation: MarketScreenNavigationProps;
}) => {
  const [activeTab, setActiveTab] = useState("featured");
  const coin: Coin = {
    id: "1",
    symbol: "btc",
    name: "Bitcoin",
    priceChangePercentage24h: 10,
    currentPrice: 159234.23,
    marketCap: 1000000000000,
    tradingVolume: 1000000000000,
    image: "https://example.com/btc.png",
    productId: 1,
  };
  return (
    <SafeAreaView style={styles.safeview}>
      <View style={styles.container}>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}
        >
          <FeaturedCoin coin={coin} onPress={() => {}} />
          <FeaturedCoin coin={coin} onPress={() => {}} />
        </ScrollView>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>All Coins</Text>
            <View style={styles.search}>
              <TextInput
                placeholder="Search..."
                style={styles.searchInput}
                placeholderTextColor="rgba(255, 255, 255, 0.5)"
              />
              <SearchIcon />
            </View>
          </View>
          <CoinListItem
            coin={coin}
            onPress={() =>
              navigation.navigate("coin_details", {
                coinId: coin.id,
                coinName: coin.name,
                coinSymbol: coin.symbol,
              })
            }
          />
          <CoinListItem coin={coin} onPress={() => {}} />
          <CoinListItem coin={coin} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Markets;
