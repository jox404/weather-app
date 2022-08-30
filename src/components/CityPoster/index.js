import React from "react";
import { Text, View } from "react-native";
import { handleIconWeather } from "../IconWeather";
import ConditionBar from "../ConditionBar";
import BtnAddCity from "../BtnAddCity";
import { stylesCityPoster } from "./styles";

export default function CityPoster(props) {
  const styles = stylesCityPoster;
  if (props.render != true) {
    return <View></View>;
  } else {
    return (
      <View>
        <View>
          <Text style={styles.country}>{props.country}</Text>
          <Text style={styles.city}>{props.city}</Text>
          <Text style={styles.region}>{props.region}</Text>
        </View>
        <View style={styles.sunAndMoon}>
          {handleIconWeather(props.conditionCode, 217, 217)}
        </View>
        <View>
          <Text style={styles.temp}>{props.temp}°</Text>
        </View>
        <View style={styles.conditionBar}>
          <ConditionBar
            humidity={props.humidity}
            windSpeed={props.wind}
            min={false}
            max={false}
          />
        </View>
        <View style={styles.btnContainer}>
          <BtnAddCity
            id={props.id}
            country={props.country}
            name={props.city}
            temp={props.temp}
            weather={"clear_mocado"}
          />
        </View>
      </View>
    );
  }
}
