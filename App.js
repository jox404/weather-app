import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import AppLoading from "expo-app-loading";
import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_300Light,
  useFonts,
} from "@expo-google-fonts/roboto";
import { WeatherProvider } from "./src/providers/auth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_400Regular,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <WeatherProvider>
        <Routes />
      </WeatherProvider>
    </>
  );
}
