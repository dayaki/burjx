import { useState, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { marketsStyles as styles } from "./styles";
import FeaturedCoin from "./utils/FeaturedCoin";
import { SearchIcon } from "../../assets/icons";
import CoinListItem from "./utils/CoinListItem";
import { Coin, MarketScreenProps } from "../types";
import { useFetchCoins } from "../hooks/useFetchCoins";
import { Colors } from "../common/Colors";
import {
  sortByMarketCap,
  sortByPriceChangeAsc,
  sortByPriceChangeDesc,
} from "../utils";
import TabNavigation from "./utils/TabNav";

const Markets = ({ navigation }: MarketScreenProps) => {
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
    if (hasNextPage && !isFetchingNextPage && searchTerm === "") {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (isFetchingNextPage) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator size="small" color={Colors.electricLime} />
        </View>
      );
    }
    return null;
  };

  const openCoin = (coin: Coin) => {
    navigation.navigate("coin_details", {
      coin,
    });
  };

  return (
    <View style={styles.safeview}>
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={Colors.electricLime}
          style={styles.activityIndicator}
        />
      ) : (
        <>
          <View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.featuredContainer}
            >
              {getActiveCoins().map((coin) => (
                <FeaturedCoin
                  key={coin.id}
                  coin={coin}
                  onPress={() => openCoin(coin)}
                />
              ))}
            </ScrollView>
          </View>
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
            style={styles.scroll}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 20 }}>
                <CoinListItem coin={item} onPress={() => openCoin(item)} />
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
            windowSize={7}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            removeClippedSubviews={true}
            getItemLayout={(data, index) => ({
              length: 124,
              offset: 124 * index,
              index,
            })}
          />
        </>
      )}
    </View>
  );
};

export default Markets;
