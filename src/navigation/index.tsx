import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Login from "../screens/Login";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [loaded, error] = useFonts({
    "Lufga-Medium": require("../../assets/fonts/LufgaMedium.ttf"),
    "Lufga-Regular": require("../../assets/fonts/LufgaRegular.ttf"),
    "Lufga-SemiBold": require("../../assets/fonts/LufgaSemiBold.ttf"),
    "Lufga-Bold": require("../../assets/fonts/LufgaBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Router;
