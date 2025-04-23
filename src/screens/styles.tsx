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
  },
  container: {
    justifyContent: "space-between",
    backgroundColor: Colors.codGray,
    paddingBottom: 10,
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
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
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
    padding: 10,
    paddingHorizontal: 20,
  },
  searchInput: {
    height: 48,
    borderRadius: 100,
    color: Colors.white,
    fontSize: 20,
    lineHeight: 30,
    fontFamily: "Lufga-Regular",
  },
});

export const coinDetailsStyles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: Colors.codGray,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.codGray,
    paddingBottom: 10,
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
    // backgroundColor: "red",
  },
  //   time selector
  timeRangeContainer: {
    paddingHorizontal: 16,
    flexDirection: "row",
    paddingVertical: 16,
    justifyContent: "center",
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
});
