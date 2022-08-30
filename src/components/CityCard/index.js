import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Button, Text, View } from "react-native";
import { stylesCityCard } from "./styles";
import react from "react";
import { WeatherContext } from "../../providers/auth";
import {
  CaudyDayIcon,
  CaudyNightIcon,
  DropDayIcon,
  DropNightIcon,
  MoonIcon,
  SunIcon,
  WindDayIcon,
  WindNightIcon,
} from "../Icons";
import { handleIconWeather } from "../IconWeather";
import { removeFavorite } from "../../services/removeFavorite";

export default function CityCard(props) {
  const styles = stylesCityCard;
  const { dateNow, getData } = react.useContext(WeatherContext);

  return (
    <View>
      <LinearGradient
        colors={dateNow <= 17 ? ["#00A4FF", "#fff"] : ["#303030", "#202020"]}
        style={styles.container}
        end={{ x: 1, y: 1.5 }}
      >
        <Button
          title="remove"
          onPress={() => {
            removeFavorite(props.index).then((res) => {
              getData();
            });
          }}
        />
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.temp}>{props.temp}°</Text>
            <Text style={styles.city}>{props.city}</Text>
            <Text style={styles.country}>{props.country}</Text>
          </View>
          <View style={styles.iconWeather}>
            {handleIconWeather(props.weather, 40, 40)}
          </View>
        </View>
        <View style={styles.infoBottomContainer}>
          <Text style={styles.windy}>
            {dateNow <= 17 ? (
              <DropDayIcon width={15} height={15} />
            ) : (
              <DropNightIcon width={15} height={15} />
            )}
            78
          </Text>
          <Text style={styles.windy}>
            {dateNow <= 17 ? (
              <WindDayIcon width={15} height={15} />
            ) : (
              <WindNightIcon width={15} height={15} />
            )}
            11km/h
          </Text>
        </View>
        <View></View>
      </LinearGradient>
    </View>
  );
}
