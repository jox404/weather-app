import React from "react";
import Home from "../../components/Home";
import Profile from "../../components/Profile";
import SearchCity from "../../components/SearchCity";
import { Feather, MaterialIcons, FontAwesome } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        options={{
          title: false,
        }}
        screenOptions={({ route }) => ({
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: "#606060",
            borderTopWidth: 0,
            position: "absolute",
            borderRadius: 10,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName;
            color = "#fff";
            size = 20;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Favorites":
                iconName = "heart";
                break;
              case "Profile":
                return (
                  <MaterialIcons
                    name={"location-history"}
                    size={25}
                    color={color}
                  />
                );
              case "Search City":
                return <FontAwesome name={"globe"} size={25} color={color} />;
              default:
                iconName = "image";
                break;
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Search City" component={SearchCity} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
