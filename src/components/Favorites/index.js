import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function Favorites({ route, navigation }) {
  /* const { cityName, temp } = route.params; */
  return (
    <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
      <View style={styles.container}>
        <Text>FAVORITES</Text>
        <Button
          title="Go Back Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
