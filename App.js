import Routes from "./src/Routes";
import {
  Roboto_100Thin,
  Roboto_400Regular,
  Roboto_300Light,
} from "@expo-google-fonts/roboto";
import { useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { AuthProvider } from "./src/providers/AuthContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [serverOnline, setServerOnline] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  const serverIsOn = async () => {
    try {
      await fetch("http://192.168.0.102:8080/", {
        method: "get",
      }).then((response) => {
        if (response.status === 200) {
          console.log("Server back-and is online");
          setServerOnline(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  serverIsOn();

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_100Thin,
          Roboto_400Regular,
          Roboto_300Light,
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, [appIsReady]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
      }}
    >
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </View>
  );
}
