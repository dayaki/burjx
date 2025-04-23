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
