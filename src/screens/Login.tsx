import { useEffect, useState } from "react";
import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as LocalAuthentication from "expo-local-authentication";
import { StatusBar } from "expo-status-bar";
import { loginStyles as styles } from "./styles";
import { LoginScreenProps } from "../types";

const Login = ({ navigation }: LoginScreenProps) => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isBiometricEnrolled, setIsBiometricEnrolled] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);

      if (compatible) {
        const enrolled = await LocalAuthentication.isEnrolledAsync();
        setIsBiometricEnrolled(enrolled);
      }
    })();
  }, []);

  const authenticateUser = async () => {
    try {
      const supportedTypes =
        await LocalAuthentication.supportedAuthenticationTypesAsync();

      const biometricType = supportedTypes.includes(
        LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
      )
        ? "Face ID"
        : "Touch ID";

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: `Authenticate using ${biometricType}`,
        fallbackLabel: "Use passcode",
        disableDeviceFallback: false,
        cancelLabel: "Cancel",
      });

      if (result.success) {
        navigation.navigate("markets");
      } else {
        Alert.alert("Authentication Failed", "Please try again.");
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during authentication.");
    }
  };

  const handleSetUp = () => {
    if (!isBiometricSupported) {
      Alert.alert(
        "Biometric Authentication Not Supported",
        "Your device does not support biometric authentication.",
        [{ text: "OK", onPress: () => navigation.navigate("markets") }]
      );
      return;
    }

    if (!isBiometricEnrolled) {
      Alert.alert(
        "Biometric Not Set Up",
        "Please set up biometric authentication in your device settings.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Continue Anyway",
            onPress: () => navigation.navigate("markets"),
          },
        ]
      );
      return;
    }
    authenticateUser();
  };

  return (
    <SafeAreaView style={styles.safeview}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={styles.title}>Use Biometric to log in?</Text>

        <View style={styles.biometricWrapper}>
          <View style={styles.outerCircle}>
            <View style={styles.middleCircle}>
              <View style={styles.innerCircle}>
                <Image
                  source={require("../../assets/images/biometric.png")}
                  style={styles.image}
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={handleSetUp}
        >
          <Text style={styles.buttonText}>
            {isBiometricEnrolled ? "Continue" : "Set Up"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
