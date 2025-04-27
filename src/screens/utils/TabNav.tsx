import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { Colors } from "../../common/Colors";

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
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContainer}
        style={styles.scroll}
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

export default TabNavigation;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
  },
  scroll: {
    flex: 1,
    flexDirection: "row",
  },
  tabContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  tab: {
    paddingRight: 25,
    paddingLeft: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.1)",
  },
  activeTab: {
    position: "relative",
    borderBottomColor: Colors.electricLime,
    paddingRight: 25,
  },
  tabText: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Lufga-Regular",
  },
  activeTabText: {
    color: Colors.white,
  },
  activeTabIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.electricLime,
  },
});
