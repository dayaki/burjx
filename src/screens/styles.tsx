import { StyleSheet } from "react-native";
import { Colors } from "../common/Colors";

export const loginStyles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: Colors.codGray,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.codGray,
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 42,
    fontFamily: "Lufga-Regular",
    color: Colors.white,
    width: "70%",
  },
  biometricWrapper: { alignSelf: "center" },
  outerCircle: {
    width: 266,
    height: 266,
    borderRadius: 266 / 2,
    borderWidth: 1,
    borderColor: "rgba(0, 162, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  middleCircle: {
    width: 238,
    height: 238,
    borderRadius: 238 / 2,
    borderWidth: 1,
    borderColor: "rgba(196, 255, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCircle: {
    width: 210,
    height: 210,
    borderRadius: 210 / 2,
    borderWidth: 1,
    borderColor: "rgba(0, 162, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 84,
    height: 84,
    alignSelf: "center",
  },
  button: {
    backgroundColor: Colors.electricLime,
    height: 56,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lufga-Medium",
    color: Colors.black,
  },
});

export const marketsStyles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: Colors.codGray,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    // justifyContent: "space-between",
    backgroundColor: Colors.codGray,
    paddingBottom: 10,
    // paddingTop: 60,
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
  featuredContainer: {
    padding: 20,
  },
  content: {
    // flex: 1,
    // justifyContent: "space-between",
    // paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    flex: 1,
  },
  headerText: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Lufga-Regular",
    color: Colors.white,
    borderBottomColor: Colors.electricLime,
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingHorizontal: 20,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    height: 48,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    paddingVertical: 10,
    paddingRight: 20,
  },
  searchInput: {
    height: 48,
    borderRadius: 100,
    color: Colors.white,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Lufga-Regular",
    width: "88%",
    paddingLeft: 16,
  },
  coinListContainer: {
    // paddingBottom: 20,
    // paddingHorizontal: 20,
  },
  footerLoader: {
    paddingVertical: 20,
    alignItems: "center",
  },
  endListText: {
    color: "#888",
    textAlign: "center",
    padding: 20,
  },
});

export const coinDetailsStyles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#1b1b1b",
    // backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.codGray,
    paddingBottom: 10,
    paddingTop: 60,
    height: "103%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 50,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Lufga-Medium",
    color: Colors.white,
  },
  scroll: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#ff4d4d",
    marginBottom: 16,
  },
  retryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#333",
    borderRadius: 20,
  },
  retryButtonText: {
    color: "#fff",
  },
  priceContainer: {
    paddingLeft: 20,
    marginBottom: 50,
  },
  price: {
    fontSize: 32,
    lineHeight: 42,
    fontFamily: "Lufga-Regular",
    color: Colors.white,
  },
  candlestick: {
    width: "100%",
    height: 330,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    // backgroundColor: "pink",
  },
  chartAmountContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "space-between",
    // marginBottom: 20,
  },
  chartRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  chartDash: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    width: "80%",
    marginRight: 20,
  },
  chartAmount: {
    color: "rgba(255, 255, 255, 0.5)",
    fontFamily: "Lufga-Light",
    fontSize: 12,
  },
  tooltipWrapper: {
    backgroundColor: Colors.electricLime,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  tooltip: {
    fontSize: 12,
    fontFamily: "Lufga-Regular",
    color: Colors.black,
  },
  //   time selector
  timeRangeContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingVertical: 16,
    justifyContent: "space-between",
  },
  timeRangeButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginRight: 20,
  },
  activeTimeRangeButton: {
    backgroundColor: Colors.electricLime,
  },
  timeRangeText: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Lufga-Regular",
    color: "rgba(255, 255, 255, 0.5)",
  },
  activeTimeRangeText: {
    color: Colors.black,
  },
  chartTypeContainer: {
    flexDirection: "row",
    padding: 16,
    paddingTop: 0,
    marginTop: 26,
  },
  chartTypeButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: "#222",
  },
  activeChartTypeButton: {
    backgroundColor: Colors.electricLime,
  },
  chartTypeText: {
    color: Colors.electricLime,
    fontFamily: "Lufga-Regular",
    opacity: 0.5,
  },
  activeChartTypeText: {
    color: Colors.codGray,
    opacity: 1,
    fontFamily: "Lufga-Medium",
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
    borderRadius: 12,
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: "Lufga-Regular",
    color: "#888",
  },
  statValue: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: "Lufga-Medium",
  },
});
