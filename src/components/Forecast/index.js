import React from "react";
import { View, Text } from "react-native";
import { stylesWeatherByTime } from "./styles";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function Forecast(props) {
  const styles = stylesWeatherByTime;
  var hour = props.hour.split("").splice(11, 5);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.time}>{hour}</Text>
      </View>
      <View style={styles.weatherIcon}>
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={24}
          color="#F7D716"
        />
      </View>
      <View>
        <Text style={styles.temp} s>
          {props.temp.toFixed(0)}°
        </Text>
      </View>
    </View>
  );
}
