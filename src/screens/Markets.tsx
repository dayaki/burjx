import { useState, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
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
import { useFetchCoins } from "../hooks/useFetchCoins";
import { Colors } from "../common/Colors";
import {
  sortByMarketCap,
  sortByPriceChangeAsc,
  sortByPriceChangeDesc,
} from "../utils";

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
    <View style={{ width: "100%", height: 60 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        style={{ flex: 1, flexDirection: "row" }}
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const Markets = ({
  navigation,
}: {
  navigation: MarketScreenNavigationProps;
}) => {
  const [activeTab, setActiveTab] = useState("featured");
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isRefetching,
    refetch,
    isLoading,
    error,
  } = useFetchCoins();
  const coins = data?.pages.flatMap((page) => page.data) || [];
  //   console.log("coins", coins[0]);

  const getActiveCoins = () => {
    if (!coins.length) return [];

    switch (activeTab) {
      case "gainers":
        return sortByPriceChangeDesc(coins).slice(0, 20);
      case "losers":
        return sortByPriceChangeAsc(coins).slice(0, 20);
      case "featured":
      default:
        return sortByMarketCap(coins).slice(0, 20);
    }
  };

  const filteredCoins = useMemo(() => {
    if (!searchTerm) return coins;

    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [coins, searchTerm]);

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (isFetchingNextPage) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator size="small" color="#c4ff00" />
        </View>
      );
    }

    if (!hasNextPage) {
      return <Text style={styles.endListText}>No more coins to load</Text>;
    }

    return null;
  };

  return (
    <View style={styles.safeview}>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <ScrollView style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredContainer}
        >
          {getActiveCoins().map((coin) => (
            <FeaturedCoin
              key={coin.id}
              coin={coin}
              onPress={() =>
                navigation.navigate("coin_details", {
                  coin: coin,
                })
              }
            />
          ))}
        </ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>All Coins</Text>
          <View style={styles.search}>
            <TextInput
              placeholder="Search..."
              style={styles.searchInput}
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={searchTerm}
              onChangeText={setSearchTerm}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="done"
            />
            <SearchIcon />
          </View>
        </View>
        <FlatList
          data={filteredCoins}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.coinListContainer}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: 20 }}>
              <CoinListItem
                coin={item}
                onPress={() =>
                  navigation.navigate("coin_details", {
                    coin: item,
                  })
                }
              />
            </View>
          )}
          ListFooterComponent={renderFooter}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={isRefetching}
              onRefresh={() => refetch()}
              tintColor={Colors.electricLime}
              colors={[Colors.electricLime]}
            />
          }
        />
      </ScrollView>
    </View>
  );
};

export default Markets;
