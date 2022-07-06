import React from "react";
import { View } from "react-native";
import Home from "../components/Home";
import Favorites from "../components/Favorites";
import Localization from "../components/Localization";

import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialIcons } from "react-native-vector-icons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          color = "#000";
          size = 20;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Favorites":
              iconName = "heart";
              break;
            case "Localization":
              return (
                <MaterialIcons
                  name={"location-history"}
                  size={25}
                  color={color}
                />
              );
            default:
              iconName = "image";
              break;
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Localization" component={Localization} />
    </Tab.Navigator>
  );
}
