import { Image, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { loginStyles as styles } from "./styles";

const Login = () => {
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

        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Set Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
