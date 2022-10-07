import react, { useEffect, useState } from "react";
import { WeatherContext } from "../../providers/auth";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Text, View } from "react-native";
import { stylesHome } from "./styles";
import {
  DropNightIcon,
  DropDayIcon,
  WindNightIcon,
  WindDayIcon,
} from "../Icons/index";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import CalendarWeather from "../CalendarWeather";
import Sunrise from "../Sunrise";
import SunAndMoon from "../SunAndMoon";
import ConditionBar from "../ConditionBar";

export default function Home({}) {
  const styles = stylesHome;
  const {
    description,
    cityName,
    max,
    min,
    humidity,
    temp,
    windSpeed,
    dateNow,
    sunRise,
  } = react.useContext(WeatherContext);
  console.log(
    description,
    dateNow,
    cityName,
    max,
    min,
    temp,
    humidity,
    windSpeed,
    sunRise
  );

  return (
    <LinearGradient
      colors={dateNow <= 17 ? ["#00A4FF", "#14FFC7"] : ["#000", "#4d4d4d"]}
    >
      <View style={styles.weatherIconContainer}>
        <SunAndMoon />
      </View>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.cityName}>{cityName}</Text>
          <Text style={styles.temperature}>{temp}°</Text>
          <Text style={styles.weather}>{description}</Text>
        </View>
        <ConditionBar
          humidity={humidity}
          windSpeed={windSpeed}
          min={min}
          max={max}
        />
        <Sunrise />
        <CalendarWeather />
      </View>
    </LinearGradient>
  );
}
